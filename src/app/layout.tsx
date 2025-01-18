import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/_components/ui/Header";
import { Footer } from "@/_components/ui/Footer";

const PoppinsFont = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--type-poppins-regular'
});

export const metadata: Metadata = {
  title: "Lazaro Alves R",
  description: "Desenvolvedor Front-End ReactJS",
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
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-862173645"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-862173645');
          `}
        </script>
      </head>
      <body className={PoppinsFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
