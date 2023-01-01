import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, "src", "components"),
      '@styles': path.resolve(__dirname, "src", "styles"),
      '@pages': path.resolve(__dirname, "src", "pages"),
      '@context': path.resolve(__dirname, "src", "context"),
      '@api': path.resolve(__dirname, "src", "API"),
      '@utils': path.resolve(__dirname, "src", "utilites"),
      '@assets': path.resolve(__dirname, "src", "assets"),

    }
  }
});