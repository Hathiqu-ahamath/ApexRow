export async function fetchCSV<T>(
  url: string
): Promise<T[]> {
  const res = await fetch(url)
  const text = await res.text()
  const lines = text.trim().split('\n')

  if (lines.length < 2) return []

  const headers = parseCSVLine(lines[0]).map(normalizeHeader)
  const rows: T[] = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    if (values.length === 0 || values.every((v) => !v.trim())) continue

    const obj: Record<string, string> = {}
    headers.forEach((h, idx) => {
      obj[h.trim()] = (values[idx] || '').trim()
    })
    rows.push(obj as T)
  }

  return rows
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
}

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/\(.*?\)/g, '').trim().replace(/,/g, '')
}
