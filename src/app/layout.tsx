import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/_components/ui/Header";
import { Footer } from "@/_components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";

const PoppinsFont = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--type-poppins',
});

export const metadata: Metadata = {
  title: "Lázaro Alves R | Portfólio de Desenvolvedor Front-End",
  description: "Desenvolvedor Front-End especializado em ReactJS, Next.js e interfaces modernas. Veja meus projetos!",
  keywords: "desenvolvedor front-end, reactjs, nextjs, portfólio, web development",
  openGraph: {
    title: "Lázaro Alves R | Portfólio",
    description: "Conheça meus projetos como desenvolvedor Front-End com ReactJS e Next.js.",
    url: "https://lazaroalvesr.com",
    images: [
      {
        url: "/icon/FaviIcon.png",
        width: 1200,
        height: 630,
        alt: "Portfólio Lázaro Alves R",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lázaro Alves R | Portfólio",
    description: "Desenvolvedor Front-End com projetos em ReactJS e Next.js.",
    images: ["/icon/FaviIcon.png"],
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon/FaviIcon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" type="image/png" href="/icon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/icon/favicon-16x16.png" sizes="16x16" />
        <meta name="google-site-verification" content="ILw8WVRQpG9MIcHiT3eHmZMGBOAusp7XugT-sbWrFw8" />
      </head>
      <body className={PoppinsFont.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}