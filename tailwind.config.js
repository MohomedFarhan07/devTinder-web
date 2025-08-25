import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  content: ["./src/**/*.{js,ts, jsx, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
  ],
})