import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { CommitHashPlugin } from 'vite-plugin-commit-hash';

export default defineConfig({
  plugins: [sveltekit(), CommitHashPlugin({ noPrefix: false, noVirtual: false })]
});
