// Fix: Removed reference to vite/client as the type definition was missing

declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
    [key: string]: any;
  }
}