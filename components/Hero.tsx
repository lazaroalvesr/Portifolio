import Image from "next/image";
import Photo from "./Photo";
import { whatsappHref } from "@/lib/data";
import { wrap } from "@/lib/ui";

const heroInAnim = "animate-[hero-in_0.7s_cubic-bezier(0.22,0.8,0.3,1)_backwards]";

const BLUE_BG = "bg-[linear-gradient(135deg,var(--color-accent)_0%,var(--color-accent-dark)_100%)]";
const BLACK_BG = "bg-[linear-gradient(135deg,#3a3a3a_0%,#0a0a0a_100%)]";
const WHITE_BG = "bg-bg";

const clientBadges = [
  { initials: "MG", name: "MG Net", src: "/images/logo-customers/logoMgNet.png", bg: BLUE_BG },
  { initials: "MO", name: "Minas Online", src: "/images/logo-customers/logo-minasonline.png", bg: WHITE_BG, pad: "p-0.5" },
  { initials: "U+", name: "Uai+", src: "/images/logo-customers/uai+.png", bg: BLACK_BG },
  { initials: "AB", name: "Arruda Bombas", src: "/images/logo-customers/icon-arruda-bombas-v2.png", bg: WHITE_BG },
  { initials: "GL", name: "Dra. Geanne Lopes", src: "/images/logo-customers/Icon-dra-geanne.png", bg: WHITE_BG },
];

export default function Hero() {
  return (
    <section className="relative bg-bg" id="top">
      <div
        className={`${wrap} grid grid-cols-[1.05fr_0.95fr] items-center gap-14 pt-40 pb-24 max-[980px]:grid-cols-1 max-[980px]:gap-10 max-[980px]:pt-32 max-[980px]:pb-16 max-[980px]:text-center`}
      >
        <div className={heroInAnim}>
          <p className="text-xs font-bold tracking-[2px] text-dim uppercase">
            Lázaro Alves <span className="text-accent">·</span> Desenvolvedor Web
          </p>

          <h1 className="mt-5 text-[clamp(38px,5.4vw,66px)] font-extrabold  leading-[1.06] tracking-[-2px]">
            <span className="text-accent" aria-hidden="true">›</span> Venda mais com uma presença digital à altura do seu trabalho.
          </h1>

          <p className="mt-5 max-w-115 text-[15px] leading-[1.7] text-dim max-[980px]:mx-auto">
            Criamos sites institucionais e sistemas sob demanda pro seu negócio, com prazo combinado logo no início e acompanhamento direto comigo — sem sumiço, sem terceirizado.
          </p>

          <div className="mt-7.5 flex flex-wrap items-center gap-5 max-[980px]:justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7.5 py-3.5 text-sm font-bold text-white transition-transform duration-250 hover:-translate-y-0.5"
            >
              Começar um projeto{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {clientBadges.map((client) => (
                  <span
                    key={client.name}
                    title={client.name}
                    className={`grid h-11 w-11 place-items-center overflow-hidden rounded-full border-2 border-bg ${client.bg} text-[11px] font-bold text-ink`}
                  >
                    {client.src ? (
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={44}
                        height={44}
                        className={`h-full w-full object-contain ${client.pad ?? "p-1.25"}`}
                      />
                    ) : (
                      client.initials
                    )}
                  </span>
                ))}
              </div>
              <span className="text-[13px] font-semibold text-dim">
                +{clientBadges.length} projetos entregues
              </span>
            </div>
          </div>
        </div>

        <div
          className={`relative mx-auto aspect-4/5 w-full max-w-105 overflow-hidden rounded-xl bg-ink shadow-[0_30px_60px_rgba(16,25,43,0.25)] ${heroInAnim} [animation-delay:0.15s]`}
        >
          <Photo src="/images/alves-r.jpg" alt="Lázaro Alves" className="h-full w-full" />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(180deg,rgba(16,25,43,0)_0%,rgba(16,25,43,0.85)_100%)]"
          />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-ink/80 text-white backdrop-blur-[6px] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-accent"
          >
            <span aria-hidden="true" className="text-lg">↗</span>
          </a>

          <div className="absolute bottom-5 left-5 text-start text-white">
            <div className="text-[17px] font-bold">Lázaro Alves</div>
            <div className="text-[12.5px] text-white/75">Desenvolvedor Web</div>
          </div>
        </div>
      </div>
    </section>
  );
}
