import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // We cast process to any to avoid TypeScript errors if the Node types are missing 'cwd'.
  const env = loadEnv(mode, (process as any).cwd(), '');

  // CRITICAL: Check Vercel system env vars (process.env) FIRST, then loaded .env files.
  // We look for VITE_API_KEY or API_KEY.
  const apiKey = process.env.VITE_API_KEY || env.VITE_API_KEY || process.env.API_KEY || env.API_KEY;

  if (apiKey) {
    console.log("✅ [Vite Config] API Key found and configured successfully.");
  } else {
    console.warn("⚠️ [Vite Config] WARNING: API Key not found. AI features will fail.");
  }

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    define: {
      // Replaces 'process.env.API_KEY' in your code with the actual string value.
      // This allows geminiService.ts to use `process.env.API_KEY` safely.
      'process.env.API_KEY': JSON.stringify(apiKey),
    },
  };
});