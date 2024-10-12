import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import sentry from "@sentry/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://tarheeldevstudio.com",

  integrations: [
    tailwind(),
    compress(),
    sitemap(),
    robotsTxt(),
    sentry({
      dsn: "https://4c946e779e36091f13bce228b014cf7e@o4508106246848512.ingest.us.sentry.io/4508107128569856",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.PUBLIC_SENTRY_AUTH_TOKEN,
      },
    }),
  ],

  output: "server",
  adapter: netlify(),
});