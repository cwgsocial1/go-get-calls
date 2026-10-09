// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The Lovable config wraps nitro's `compiled` hook, which shadows the vercel
// preset's own hook that writes config.json and .vc-config.json. Without those
// files Vercel serves 404 for every route, so forward to the preset hook here.
const vercelNitro = {
  preset: "vercel",
  hooks: {
    async compiled(nitro: { options: { compatibilityDate?: unknown } }) {
      const nitroDist = dirname(createRequire(import.meta.url).resolve("nitro/vite"));
      const { resolvePreset } = await import(pathToFileURL(join(nitroDist, "_presets.mjs")).href);
      const preset = await resolvePreset("vercel", {
        compatibilityDate: nitro.options.compatibilityDate,
      });
      await preset.hooks.compiled(nitro);
    },
  },
};

export default defineConfig({
  // Vercel sets VERCEL=1 during builds; emit .vercel/output there instead of the
  // Cloudflare default. Lovable's sandbox overrides the preset on its own.
  ...(process.env["VERCEL"] ? { nitro: vercelNitro } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
    // Explicitly include the root and ensure pages array exists for discovery
    pages: [
      { path: "/" },
      { path: "/blog" },
    ],
  },
});
