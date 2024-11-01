import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
import OpenIde from "vite-inspector";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/spa-app/",
  plugins: [
    OpenIde({
      framework: "react",
    }),
    react(),
    Inspect(),
  ],
});
