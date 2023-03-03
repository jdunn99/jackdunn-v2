import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(async () => {

  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    build: {
      rollupOptions: {
        external(source, _importer, _isResolved): boolean | void {
          if (['fs/promises', 'path'].indexOf(source) != -1) return true
          if (['fs', 'path'].indexOf(source) != -1) return true
        },
      }
    }
  };
});
