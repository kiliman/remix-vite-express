import {
  expressDevServer,
  expressPreset,
} from "remix-express-vite-plugin/vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    expressDevServer(),

    remix({
      presets: [expressPreset()],
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {},
});
