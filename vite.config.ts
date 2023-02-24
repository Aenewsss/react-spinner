import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/Spinner.tsx',
      name: 'Spinner',
      fileName: 'Spinner'
    }
  }
})
