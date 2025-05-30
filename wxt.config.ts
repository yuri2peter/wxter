import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  imports: false,
  manifest: {
    permissions: ["storage"],
  },
  vite: () => {
    return {
      plugins: [tailwindcss()],
    };
  },
});
