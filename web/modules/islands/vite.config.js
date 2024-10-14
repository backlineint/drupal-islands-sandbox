import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: resolve(__dirname, "js/dist"),
    lib: {
      entry: resolve(__dirname, "js/lib/drupal-island.js"),
      name: "DrupalIsland",
      fileName: "drupal-island",
    },
  },
});
