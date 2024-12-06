import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { reactRouter } from "@react-router/dev/vite";
import { VitePWA } from "vite-plugin-pwa";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

// Full configuration with PWA support
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer], // Enables Tailwind CSS and autoprefixer
    },
  },
  plugins: [
    reactRouter(), // For React Router v7 support
    tsconfigPaths(), // Resolves path aliases from tsconfig.json
    VitePWA({
      registerType: "autoUpdate", // Automatically updates the service worker when new content is available
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"], // Include additional assets in the PWA
      manifest: {
        name: "Shopy", // The full name of your PWA
        short_name: "Shopy", // Short name for homescreen
        description: "An e-commerce app for business owners to manage and grow their stores.",
        theme_color: "#ffffff", // Theme color for the app
        background_color: "#ffffff", // Background color
        display: "standalone", // Makes the app look more like a native app
        start_url: "/", // Starting point of the app
        icons: [
          {
            src: "icons/icon-192x192.png", // Path to a 192x192 icon
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png", // Path to a 512x512 icon
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  build: {
    sourcemap: false, // Disable source maps for production to reduce build size
    minify: "esbuild", // Use esbuild for faster builds
  },
});
