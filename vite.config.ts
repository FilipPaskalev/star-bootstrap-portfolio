import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "/starbootstrap-portfolio/",
  plugins: [react()],
  define: {
    "process.env": process.env
  },
  build: {
    outDir: "dist"
  },
  server: {
    open: true
  }
});
