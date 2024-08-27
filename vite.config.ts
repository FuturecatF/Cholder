import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), viteStaticCopy({
    targets: [
      {
        src: 'tonconnect-manifest.json',
        dest: '.',

      }
    ]
  }), nodePolyfills()],
  server: {
    port: 5173,
    cors: true,
    open: true,
  },
});
