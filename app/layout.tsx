import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://www.lazaroalvesr.com";
const title = "Alves R — Presença digital à altura do seu trabalho";
const description =
  "Sem sumiço, sem terceirizado. Desenvolvimento de sites e sistemas sob demanda com projeto individual, prazo de três semanas e acompanhamento direto com o desenvolvedor.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alves R",
  },
  description,
  keywords: [
    "desenvolvedor web",
    "criação de sites",
    "desenvolvimento web freelancer",
    "sistemas sob demanda",
    "design UI/UX",
    "site institucional",
    "desenvolvedor freelance Brasil",
    "Alves R",
  ],
  authors: [{ name: "Lázaro Alves" }],
  creator: "Lázaro Alves",
  publisher: "Lázaro Alves",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Alves R",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Alves R",
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Lázaro Alves",
      alternateName: "Alves R",
      jobTitle: "Desenvolvedor Web",
      description,
      url: siteUrl,
      image: `${siteUrl}/images/alves-r.jpg`,
      sameAs: [
        "https://www.instagram.com/alvesrsites/",
        "https://www.linkedin.com/in/l%C3%A1zaro-alves-r/",
      ],
      knowsAbout: ["Desenvolvimento Web", "Design UI/UX", "Sistemas sob Demanda"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
