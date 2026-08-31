import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://www.lazaroalvesr.com";

const title = "Desenvolvimento de Sites e Sistemas Sob Demanda | Alves R";

const description =
  "Sem sumiço, sem terceirizado. Sites e sistemas sob demanda, projeto individual, entrega em três semanas e contato direto com o desenvolvedor.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alves R",
  },
  description,
  authors: [{ name: "Lázaro Alves" }],
  creator: "Lázaro Alves",
  publisher: "Lázaro Alves",
  category: "technology",
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
        alt: "Alves R — Desenvolvimento de sites e sistemas sob demanda",
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

const jsonLd = {
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
      knowsAbout: [
        "Desenvolvimento Web",
        "Design UI/UX",
        "Sistemas sob Demanda",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Alves R — Desenvolvimento Web",
      description,
      url: siteUrl,
      image: `${siteUrl}/og-image.png`,
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: { "@type": "Country", name: "Brasil" },
      availableLanguage: { "@type": "Language", name: "Portuguese" },
      serviceType: [
        "Desenvolvimento de sites",
        "Sistemas sob demanda",
        "Design UI/UX",
      ],
      sameAs: [
        "https://www.instagram.com/alvesrsites/",
        "https://www.linkedin.com/in/l%C3%A1zaro-alves-r/",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <meta name="google-site-verification" content="ILw8WVRQpG9MIcHiT3eHmZMGBOAusp7XugT-sbWrFw8" />
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}