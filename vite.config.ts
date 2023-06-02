import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import prpc from '@prpc/vite';

export default defineConfig({
  plugins: [prpc(), solid()],
});
