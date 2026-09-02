"use client"

import { heroGradient, wrap } from "@/lib/ui";
import { whatsappHref } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const socialBtnClass =
  "grid h-9.5 w-9.5 place-items-center rounded-full bg-white/10 text-white transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/25 [&_svg]:h-4 [&_svg]:w-4";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function Footer() {
  return (
    <footer className={`${heroGradient} text-white`}>
      <Reveal>
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-5 py-7`}>
          <div className="flex items-center gap-3.5">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="shrink-0"
            >
              <Image
                src="/icon.svg"
                alt="Ícone"
                width={24}
                height={24}
                className="h-6 w-6 rounded-[6px]"
              />
            </Link>
            <div className="flex flex-col">
              <p>Lázaro Alves R</p>
              <div className="text-xs text-white/50">
                © {new Date().getFullYear()} — Todos os direitos reservados
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={socialBtnClass}
            >
              <Image src="/images/iconWhatsapp.png" alt="" width={16} height={16} className="h-4 w-4 object-contain" />
            </a>
            <a
              href="https://www.instagram.com/alvesrsites/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialBtnClass}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialBtnClass}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
