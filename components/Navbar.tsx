"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import Logo from "./Logo";

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

const linkClass =
  "shrink-0 whitespace-nowrap rounded-full px-4 py-2.25 text-[13.5px] font-medium text-[#c3c8d4] transition-colors duration-250 hover:bg-[#1c2536] hover:text-white max-[980px]:px-2.75 max-[980px]:py-2 max-[980px]:text-[12.5px] max-[560px]:px-2.5 max-[560px]:py-1.75";
const linkActiveClass = "bg-[#1c2536] text-white";

function scrollToHref(href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const top = rect.top + window.scrollY - (window.innerHeight - rect.height) / 2;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  function handleNavClick(e: React.MouseEvent, href: string) {
    e.preventDefault();
    scrollToHref(href);
  }

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-100 flex justify-center px-4 pointer-events-none max-[560px]:px-2.5">
      <nav
        aria-label="Principal"
        className="pointer-events-auto flex max-w-[calc(100vw-20px)] items-center gap-1.5 overflow-x-auto rounded-full border border-line bg-[rgba(16,25,43,0.9)] px-2.5 py-1.75 backdrop-blur-[14px] scrollbar-none max-[560px]:gap-0.5 max-[560px]:p-1.5"
      >
        {leftLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`${linkClass} ${activeHref === link.href ? linkActiveClass : ""}`}
          >
            {link.label}
          </Link>
        ))}

        <Link href="#top" onClick={(e) => handleNavClick(e, "#top")} className="shrink-0">
          <Logo />
        </Link>

        {rightLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`${linkClass} ${activeHref === link.href ? linkActiveClass : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
