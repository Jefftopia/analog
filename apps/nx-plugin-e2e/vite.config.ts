/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { offsetFromRoot } from '@nx/devkit';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: 'tests',
    test: {
      globals: true,
      environment: 'node',
      include: ['**/*.spec.ts'],
      cache: {
        dir: `${offsetFromRoot(
          'apps/nx-plugin-e2e'
        )}/node_modules/.vitest/nx-plugin-e2e`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
