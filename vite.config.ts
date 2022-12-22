import path from "node:path";
import { defineConfig } from "vite";
import svgSprite from "./src/vite-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2020",
    outDir: "dist",
    lib: {
      entry: "vite-svg-sprite.ts",
      formats: ["cjs"],
    },
    emptyOutDir: true,
    rollupOptions: {
      input: [
        path.resolve(__dirname, "src/Icon.ts"),
        path.resolve(__dirname, "src/vite-svg-sprite.ts"),
      ],
      output: {
        assetFileNames: `[name].[ext]`,
        entryFileNames: () => "[name].[format].js",
      },
      external: ["fs", "fast-glob", "svg-sprite"],
    },
  },
  // plugins: [svgSprite({ dir: "assets/icons/*.svg" })],
});