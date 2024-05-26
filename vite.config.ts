import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "/react-bs5-ts-portfolio/",
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
