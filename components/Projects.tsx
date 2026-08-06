"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { wrap, section, headRow, pillNote, pillNoteDot, heading } from "@/lib/ui";

const AUTOPLAY_MS = 4500;
const GAP_PX = 24;

function getSlideWidth() {
  if (window.innerWidth <= 640) return 88;
  if (window.innerWidth <= 980) return 76;
  return 62;
}

const navBtnClass =
  "grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line bg-surface-2 text-white transition-[background,color,border-color,opacity,transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] hover:scale-110 active:scale-95 active:duration-100 [&_svg]:block [&_svg]:h-4.5 [&_svg]:w-4.5 [&_svg]:transition-transform [&_svg]:duration-400 [&_svg]:ease-[cubic-bezier(0.22,0.8,0.3,1)]";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(62);
  const maxIndex = projects.length - 1;
  const centerOffset = (100 - slideWidth) / 2;

  useEffect(() => {
    const onResize = () => setSlideWidth(getSlideWidth());
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const displayItems = [
    { project: projects[maxIndex], realIndex: maxIndex },
    ...projects.map((project, realIndex) => ({ project, realIndex })),
    { project: projects[0], realIndex: 0 },
  ];
  const activePosition = index + 1;

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  }

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, paused, maxIndex]);

  return (
    <section className={section} id="projects">
      <div className={wrap}>
        <Reveal>
          <div className={headRow}>
            <div>
              <span className={`${pillNote} mb-3.5`}>
                <i className={pillNoteDot} /> Portfólio
              </span>
              <h2 className={heading}>
                <span className="text-accent" aria-hidden="true">›</span> Projetos Que
                <br />
                Já Entreguei
              </h2>
              <p>Uma seleção dos sites e sistemas que já coloquei no ar pra clientes reais.</p>
            </div>

            <div className="flex items-center gap-2.5 self-center">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Projeto anterior"
                className={`${navBtnClass} hover:border-accent hover:bg-[#2c2c2c] hover:text-accent hover:shadow-[0_10px_22px_rgba(0,0,0,0.32)] hover:[&_svg]:-translate-x-0.5`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo projeto"
                className={`${navBtnClass} border-accent bg-accent text-ink hover:bg-accent-dark hover:shadow-[0_10px_26px_rgba(46,107,255,0.45)] hover:[&_svg]:translate-x-0.5`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="relative mt-11 overflow-hidden before:pointer-events-none before:absolute before:top-[10%] before:z-0 before:h-[80%] before:left-[calc((100%-var(--slide-width,62%))/2)] before:w-(--slide-width,62%) before:[background:radial-gradient(circle,rgba(46,107,255,0.28)_0%,rgba(46,107,255,0)_70%)] before:blur-2xl before:content-['']"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ "--slide-width": `${slideWidth}%` } as CSSProperties}
          >
            <div
              className="relative z-1 flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.22,0.8,0.3,1)]"
              style={{
                transform: `translateX(calc(${centerOffset}% - ${activePosition} * (${slideWidth}% + ${GAP_PX}px)))`,
              }}
            >
              {displayItems.map(({ project, realIndex }, i) => {
                const isActive = i === activePosition;
                const content = (
                  <>
                    <div className="overflow-hidden rounded-md border border-line bg-surface-2 transition-[border-color,box-shadow] duration-300 group-hover:border-accent group-hover:shadow-[0_24px_44px_rgba(0,0,0,0.35)]">
                      <div className="flex gap-1.5 border-b border-line px-3.5 py-3" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                        <span className="h-2 w-2 rounded-full bg-line" />
                      </div>
                      <div className="relative aspect-[2.1/1] overflow-hidden">
                        <Photo
                          alt={`Site do projeto ${project.name}`}
                          src={project.src}
                          variant="site"
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        {project.url && (
                          <div className="absolute inset-0 flex items-end justify-end bg-[linear-gradient(180deg,rgba(16,25,43,0)_45%,rgba(16,25,43,0.78)_100%)] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-[13px] font-bold text-ink">
                              Visitar site <span aria-hidden="true">↗</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <span className="min-w-5.5 text-[13px] font-bold text-accent">
                        {String(realIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="text-[17px] font-bold max-[640px]:text-[15px]">{project.name}</div>
                        <div className="mt-0.5 text-[12.5px] text-dim">{project.type}</div>
                      </div>
                    </div>
                  </>
                );

                const slideClassName = `group flex flex-[0_0_var(--slide-width,62%)] flex-col gap-4 text-inherit transition-[opacity,transform] duration-400 ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-35"}`;
                const key = `${project.name}-${i}`;

                return project.url ? (
                  <a
                    key={key}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={slideClassName}
                    aria-hidden={!isActive}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={key} className={slideClassName} aria-hidden={!isActive}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
