import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@css": fileURLToPath(new URL("./src/css", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@sections": fileURLToPath(
        new URL("./src/components/sections", import.meta.url),
      ),
      "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      "@contexts": fileURLToPath(
        new URL("./src/ctx/contexts", import.meta.url),
      ),
      "@providers": fileURLToPath(
        new URL("./src/ctx/providers", import.meta.url),
      ),
      "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
      "@UI": fileURLToPath(new URL("./src/components/UI", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
    },
  },
});
