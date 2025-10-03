import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Correct base for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: "/project.synara/", 
});
