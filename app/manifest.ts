import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alves R — Desenvolvimento Web",
    short_name: "Alves R",
    description:
      "Desenvolvimento de sites e sistemas sob demanda com projeto individual e acompanhamento direto.",
    start_url: "/",
    display: "standalone",
    background_color: "#1b1e24",
    theme_color: "#2e6bff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
