import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.juniorhub.ca",
  // Emit about.html (served by Netlify at /about) so existing URLs keep working.
  build: { format: "file" },
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !/\/thanks(\.html)?$/.test(page),
      // build.format "file" lists about.html; publish the clean URLs instead.
      serialize(item) {
        item.url = item.url.replace(/\.html$/, "").replace(/\/index$/, "/");
        return item;
      },
    }),
  ],
});
