import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.VERCEL === "1" ? "/" : "/ATQHelp/",
  plugins: [react(), tailwindcss()],
  server: { allowedHosts: true }
});
