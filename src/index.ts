import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/data.json": new Response(Bun.file("./src/public/data.json"), {
      headers: { "Content-Type": "application/json" },
    }),
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
