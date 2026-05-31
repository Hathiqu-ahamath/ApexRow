import { useState, useEffect } from 'react'
import { fetchCSV } from '../lib/google-sheets'
import { type PortfolioItem, parseSheetRow, fallbackItems } from '../data/portfolio'

export function usePortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>(fallbackItems)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const url = import.meta.env.VITE_SHEET_CSV as string | undefined
    if (!url) return

    let cancelled = false
    setLoading(true)

    fetchCSV<Record<string, string>>(url)
      .then((rows) => {
        if (cancelled) return
        const parsed = rows.map(parseSheetRow).filter(Boolean) as PortfolioItem[]
        if (parsed.length > 0) setItems(parsed)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load portfolio')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [])

  return { items, loading, error }
}
