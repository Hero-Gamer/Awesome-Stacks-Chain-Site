// Removed reference to vite/client to fix type error
declare var process: {
  env: {
    API_KEY: string;
    [key: string]: any;
  }
};

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}