"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

const leftLinks = navLinks.slice(0, 2);
const rightLinks = navLinks.slice(2);

const linkClass =
  "shrink-0 whitespace-nowrap rounded-full px-4 py-2.25 text-[13.5px] font-medium text-[#d2d2d2] transition-colors duration-250 hover:bg-[#2c2c2c] hover:text-white max-[980px]:px-2.75 max-[980px]:py-2 max-[980px]:text-[12.5px] max-[560px]:px-2.5 max-[560px]:py-1.75";
const linkActiveClass = "bg-[#2c2c2c] text-accent";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

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
        className="pointer-events-auto flex max-w-[calc(100vw-20px)] items-center gap-1.5 overflow-x-auto rounded-full border border-line bg-[rgba(28,28,28,0.86)] px-2.5 py-1.75 backdrop-blur-[14px] scrollbar-none max-[560px]:gap-0.5 max-[560px]:p-1.5"
      >
        {leftLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`${linkClass} ${activeHref === link.href ? linkActiveClass : ""}`}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#top"
          className="flex shrink-0 items-center gap-1.75 whitespace-nowrap rounded-full bg-black px-4.5 py-2.25 text-[14.5px] font-extrabold tracking-[-0.2px] max-[980px]:px-3.25 max-[980px]:py-2 max-[560px]:px-3 max-[560px]:py-1.75"
        >
          Alves R
        </a>

        {rightLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`${linkClass} ${activeHref === link.href ? linkActiveClass : ""}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
