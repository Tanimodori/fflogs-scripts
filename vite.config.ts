/// <reference types="node" />
import { resolve } from 'path';
import glob from 'fast-glob';
import { defineConfig, type UserConfig } from 'vite';
import stripComments from 'vite-plugin-strip-comments';
import removeExport from './build/removeExport';

export default defineConfig(async (): Promise<UserConfig> => {
  const entry = await glob('src/entry/**/*.ts');
  return {
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      lib: {
        entry,
        formats: ['es'],
        fileName: (format, name) => `${name}.js`,
      },
      minify: false,
    },
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },
    plugins: [stripComments({ type: 'none' }), removeExport],
  };
});

