import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/Header";
import StyledComponentsRegistry from "@/lib/register";

export const metadata: Metadata = {
  title: "Lázaro Alves R",
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
        <link rel="shortcut icon" href="/img/Icons/FaviIcon.png" type="image/png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
