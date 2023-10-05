import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: "src/App.jsx",
        delivery2: "delivery-2/App.jsx",
        delivery3: "delivery-3/App.jsx",
        delivery4: "delivery-4/App.jsx",
        delivery5: "delivery-5/App.jsx",
      },
    },
  },
});
