import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://tarheeldevstudio.com",
  integrations: [
    tailwind(),
    compress(),
    sitemap(),
    robotsTxt(),
    sentry({
      dsn: "https://1a9321fd2741f1ff30641ac7830cf8c0@o4508106246848512.ingest.us.sentry.io/4508106371104768",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});