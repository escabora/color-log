import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'consolelog',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
