import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `
          @import "~slick-carousel/slick/slick.css";
          @import "~slick-carousel/slick/slick-theme.css";
        `,
      },
    },
  },
});
