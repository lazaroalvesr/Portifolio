import Photo from "./Photo";
import Reveal from "./Reveal";
import { wrap, section, headRow, pillNote, pillNoteDot, heading } from "@/lib/ui";

const items = [
  {
    title: "Design profissional",
    description:
      "Layouts limpos e objetivos, pensados para o visitante entender sua oferta e entrar em contato com facilidade.",
    src: "/images/customers/Dra_geanne_lopes.png",
  },
  {
    title: "Sites institucionais",
    description: "Sites rápidos, responsivos e fáceis de atualizar, feitos sob medida para o seu negócio.",
    src: "/images/customers/arruda-bombas.png",
  },
  {
    title: "Sistemas personalizados",
    description:
      "Quando um site comum não é suficiente. Criação de fluxos, cadastros, painéis e funcionalidades sob medida.",
    src: "/images/customers/uai-mais.png",
  },
];

export default function PracticeGrid() {
  return (
    <section className={section} id="practice">
      <div className={wrap}>
        <Reveal>
          <div className={headRow}>
            <div>
              <span className={`${pillNote} mb-3.5`}>
                <i className={pillNoteDot} /> Serviços
              </span>
              <h2 className={heading}>
                <span className="text-accent" aria-hidden="true">›</span> O Que Eu Entrego
              </h2>
            </div>

            <p className="max-w-95 self-center pt-4 text-[13.5px] leading-[1.7] text-dim lg:pt-0">
              Três frentes que cobrem o essencial pra tirar um negócio do papel e colocar no ar.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 grid grid-cols-1 gap-8 overflow-hidden sm:grid-cols-3">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-70 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.14)_0%,rgba(46,107,255,0)_70%)] blur-2xl"
          />

          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 110} className="relative z-1">
              <div className="group relative flex h-full flex-col gap-5">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-1 text-[70px] leading-none font-extrabold text-ink/5 select-none transition-colors duration-400 group-hover:text-accent/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative overflow-hidden rounded-md border border-line bg-surface transition-[border-color,box-shadow,transform] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] group-hover:-translate-y-1.5 group-hover:border-accent group-hover:shadow-[0_28px_50px_rgba(16,25,43,0.16)]">
                  <div className="flex gap-1.5 border-b border-line px-3 py-1.75" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="relative aspect-[2.1/1] overflow-hidden">
                    <Photo
                      alt={item.title}
                      src={item.src}
                      variant="site"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <div className="relative">
                  <span className="inline-block h-0.75 w-8 rounded-full bg-accent transition-[width] duration-400 group-hover:w-12" />
                  <h3 className="mt-3 text-[19px] font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.7] text-dim">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
