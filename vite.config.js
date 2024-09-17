import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
