/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_CONTENTFUL_SPACE_ID: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }