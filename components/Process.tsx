"use client";

import { useState, type CSSProperties } from "react";
import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";
import { wrap, section, headRow, pillNote, pillNoteDot, heading } from "@/lib/ui";

const COLLAPSED_PERCENT = 9;

export default function Process() {
  const [active, setActive] = useState(0);
  const activePercent = 100 - COLLAPSED_PERCENT * (processSteps.length - 1);

  return (
    <section className={section} id="process">
      <div className={wrap}>
        <Reveal>
          <div className={headRow}>
            <div>
              <span className={`${pillNote} mb-3.5`}>
                <i className={pillNoteDot} /> Como Trabalho
              </span>
              <h2 className={heading}>
                <span className="text-accent" aria-hidden="true">›</span> Do Primeira Conversa
                <br />
                Ao Site No Ar
              </h2>
            </div>

            <p className="max-w-100 self-center pt-4 text-[13.5px] leading-[1.7] text-dim lg:pt-0">
              Um processo simples e direto, sem burocracia — só passos claros do primeiro contato até o site no ar.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-11 flex flex-col gap-3 sm:h-105 sm:flex-row">
            {processSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <button
                  key={step.num}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  style={{ "--flex-basis": `${isActive ? activePercent : COLLAPSED_PERCENT}%` } as CSSProperties}
                  className={`flex shrink-0 grow-0 basis-auto cursor-pointer flex-row items-center gap-3.5 overflow-hidden rounded-md px-5 py-4 text-left transition-[max-height,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,0.8,0.3,1)] sm:max-h-none sm:basis-(--flex-basis) sm:flex-col sm:gap-0 sm:px-0 sm:py-6 sm:transition-[flex-basis,background-color,border-color] ${
                    isActive
                      ? "max-h-52 border border-accent/40 bg-surface shadow-[0_20px_40px_rgba(46,107,255,0.14)] sm:items-start sm:justify-end sm:px-6"
                      : "max-h-14 border border-line bg-ink hover:bg-[#16213a] sm:items-center sm:justify-between"
                  }`}
                >
                  {isActive ? (
                    <>
                      <span className="grid h-9.5 w-9.5 flex-none place-items-center rounded-full bg-accent text-xs font-bold text-white">
                        {step.num}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[16px] font-bold sm:mt-4 sm:text-[19px]">{step.title}</h3>
                        <p className="mt-1 text-[13px] leading-[1.6] font-medium text-ink/70 sm:mt-1.5 sm:max-w-90 sm:text-[14px] sm:leading-[1.7]">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="flex-none text-xs font-bold text-white/70">{step.num}</span>
                      <span className="text-[13px] font-semibold whitespace-nowrap text-white sm:[writing-mode:vertical-rl] sm:rotate-180">
                        {step.title}
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
