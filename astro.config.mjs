import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  "devToolbar.enabled": "true",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    "/blog/1": "/blog/es-1",
  },
});
