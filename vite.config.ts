import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/react-lab/",
  optimizeDeps: {
    include: ["linked-dep"],
    esbuildOptions: {
      plugins: [
        esbuildCommonjs([
          "react-calendar",
          "react-date-picker",
          "cron-schedule-parser",
        ]),
      ],
    },
  },
});
