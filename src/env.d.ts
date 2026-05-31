/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEET_CSV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
