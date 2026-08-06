import Photo from "./Photo";
import { projects } from "@/lib/data";

const featured = projects.find((p) => p.name === "Dra. Geanne Lopes") ?? projects[0];

const heroInAnim = "animate-[hero-in_0.7s_cubic-bezier(0.22,0.8,0.3,1)_backwards]";

export default function Hero() {
  return (
    <section className="relative bg-bg" id="top">
      <div
        className="relative overflow-hidden px-6 pt-37.5 pb-55 text-center rounded-[0_0_50%_50%/0_0_64px_64px] bg-[linear-gradient(150deg,#0b1220_0%,#16305c_45%,var(--color-accent)_130%)] max-[980px]:px-5.5 max-[980px]:pt-32.5 max-[980px]:pb-40 max-[980px]:rounded-[0_0_50%_50%/0_0_40px_40px]"
      >
        <h1
          className={`mx-auto max-w-245 text-[clamp(28px,4.2vw,48px)] font-extrabold leading-[1.12] tracking-[-1.4px] text-white ${heroInAnim}`}
        >
          <span className="text-accent" aria-hidden="true">›</span> Presença digital à altura do seu trabalho.
          <br />
          Sem sumiço, sem terceirizado.
        </h1>

        <p
          className={`mx-auto mt-5.5 max-w-145 text-[16.5px] font-semibold leading-[1.55] text-white/92 ${heroInAnim} [animation-delay:0.1s]`}
        >
Projeto individual, prazo de três semanas, acompanhamento direto.
        </p>

        <button
          type="button"
          className={`group mt-7.5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7.5 py-3.5 text-sm font-bold text-ink transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] active:translate-y-0 active:duration-100 ${heroInAnim} [animation-delay:0.2s]`}
        >
          Começar um projeto{" "}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </button>
      </div>

      <div
        className={`relative z-1 mx-auto -mt-47.5 w-[min(920px,88vw)] max-[980px]:-mt-32.5 animate-[hero-in_0.8s_cubic-bezier(0.22,0.8,0.3,1)_backwards] [animation-delay:0.3s]`}
      >
        <div className="overflow-hidden rounded-xl border-[6px] border-accent shadow-[0_30px_60px_rgba(0,0,0,0.4)] max-[560px]:border-4">
          <Photo src={featured.src} alt={`Site de ${featured.name}`} className="aspect-[2.2/1] w-full" />
        </div>

        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4 px-1 max-[560px]:flex-col max-[560px]:items-start max-[560px]:gap-2">
          <p className="text-[13.5px] text-white/75">
            <strong className="font-bold text-white">Dra. Geanne Lopes</strong> — Advocacia · Site institucional
          </p>

          {featured.url && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none whitespace-nowrap text-[13px] font-bold text-accent transition-opacity duration-200 hover:opacity-75"
            >
              Ver site ao vivo <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
