import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fix: Use '.' instead of process.cwd() to avoid type errors with global process type
  const env = loadEnv(mode, '.', '');

  // Prioritize Vercel system env vars, then local .env
  const apiKey = process.env.VITE_API_KEY || env.VITE_API_KEY || process.env.API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      // Safely inject the API key
      'process.env.API_KEY': JSON.stringify(apiKey || ''),
    },
  };
});