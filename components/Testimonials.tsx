"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";
import { wrap, section } from "@/lib/ui";

const AVATAR_ICON = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%2310192b' opacity='.75'%3E%3Ccircle cx='50' cy='36' r='16'/%3E%3Cpath d='M50 57c-16 0-29 11-31 27h62c-2-16-15-27-31-27z'/%3E%3C/g%3E%3C/svg%3E\")",
  backgroundSize: "cover",
};

const navBtnClass =
  "grid h-10 w-10 place-items-center rounded-full border border-line bg-surface-2 text-white transition-[background,color,opacity] duration-250 hover:border-accent hover:bg-accent hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 [&_svg]:block [&_svg]:h-4 [&_svg]:w-4";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth <= 980 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((current) => (current + direction + maxIndex + 1) % (maxIndex + 1));
    },
    [maxIndex]
  );

  const highlighted = perView > 1 ? index + 1 : index;

  return (
    <section className={section}>
      <div className={wrap}>
        <Reveal>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.22,0.8,0.3,1)]"
              style={{ transform: `translateX(calc(-${index} * (100% / ${perView})))` }}
            >
              {testimonials.map((item, i) => (
                <article
                  key={item.name}
                  className={`grow-0 shrink-0 rounded-md border border-line p-6 transition-[background,border-color] duration-350 ${
                    i === highlighted ? "border-[#3a3a3a] bg-surface-2" : "bg-surface"
                  }`}
                  style={{ flexBasis: `calc(${100 / perView}% - ${(16 * (perView - 1)) / perView}px)` }}
                  aria-hidden={i < index || i >= index + perView}
                >
                  <div className="mb-3.5 flex items-center gap-2.75">
                    <div className="h-9.5 w-9.5 flex-none rounded-full bg-accent" style={AVATAR_ICON} aria-hidden="true" />
                    <div>
                      <h3 className="text-[13.5px] font-bold">{item.name}</h3>
                      <div className="text-[11px] text-dim-2">{item.role}</div>
                    </div>
                  </div>
                  <div className="mb-3 text-xs tracking-[2px] text-accent" aria-label="Avaliação 5 de 5">★★★★★</div>
                  <p className="text-[12.5px] leading-[1.7] text-dim">{item.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-7 flex justify-center gap-2.5">
          <button type="button" onClick={() => go(-1)} aria-label="Depoimento anterior" className={navBtnClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Próximo depoimento" className={navBtnClass}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
