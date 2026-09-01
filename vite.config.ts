import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GH_PAGES_BASE is set by the deploy workflow to "/<repo-name>/" so built
// asset paths resolve correctly when served from a GitHub Pages subpath.
export default defineConfig({
  base: process.env.GH_PAGES_BASE ?? "/",
  plugins: [react()],
});
