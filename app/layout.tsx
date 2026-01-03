import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lázaro Alves R | Criação de Sites Profissionais",
  description: "Precisa criar ou fazer um site profissional para sua empresa? Sou desenvolvedor web especializado em sites modernos, responsivos e otimizados que atraem clientes e geram resultados. Orçamento grátis!",
  keywords: [
    "criação de sites",
    "criar site profissional",
    "fazer site",
    "desenvolvedor web",
    "desenvolvedor web freelancer",
    "desenvolvimento de sites",
    "site para empresa",
    "site profissional",
    "fazer site barato",
    "criar site empresa",
    "desenvolvedor freelance",
    "sites responsivos",
    "web developer Brasil",
    "Lázaro Alves desenvolvedor"
  ],

  authors: [{ name: "Lázaro Alves R" }],

  alternates: {
    canonical: "https://www.lazaroalvesr.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Lázaro Alves R | Criação de Sites Profissionais",
    description: "Transformo ideias em sites profissionais que vendem. Desenvolvimento com React, Next.js e tecnologias modernas. Orçamento sem compromisso!",
    url: "https://seu-dominio.com",
    siteName: "Lázaro Alves R - Desenvolvedor Web",
    images: [
      {
        url: "https://seu-dominio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lázaro Alves R - Especialista em Criação de Sites Profissionais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais - Desenvolvedor Web Freelancer",
    description: "Sites modernos e otimizados que geram resultados para sua empresa.",
    images: ["/icon/FaviIcon.png"],
  },

  verification: {
    google: "seu-codigo-do-search-console",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/icon/FaviIcon.png" type="image/png" />
      </head>
      <body className={`${workSans.variable} antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}