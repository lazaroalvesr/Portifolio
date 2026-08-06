import Photo from "./Photo";
import Reveal from "./Reveal";
import { services, projects } from "@/lib/data";
import { wrap, sectionTight, heading, tag } from "@/lib/ui";

const featured = projects.find((p) => p.name === "Dra. Geanne Lopes") ?? projects[0];

export default function Services() {
  return (
    <section className={sectionTight} id="services">
      <div className={wrap}>
        <Reveal>
          <div className="rounded-xl bg-surface px-10 py-14 max-[980px]:px-5.5 max-[980px]:py-10">
            <h2 className={heading}>
              Meus <span className={tag}>Serviços</span>
            </h2>

            <div className="mt-8.5 grid grid-cols-2 items-center gap-8.5 max-[980px]:grid-cols-1">
              <ul className="flex flex-col gap-3">
                {services.map((service, i) => (
                  <li key={service.num}>
                    <Reveal delay={i * 90}>
                      <button
                        type="button"
                        className="group flex w-full cursor-pointer items-center gap-4 rounded-full border border-line bg-surface-2 px-5.5 py-3.75 text-left text-inherit transition-[background,transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] hover:translate-x-2 hover:bg-[#2e2e2e] hover:shadow-[0_14px_28px_rgba(0,0,0,0.3)] active:translate-x-1 active:scale-[0.985] active:duration-100"
                      >
                        <span className="min-w-5.5 text-xs font-bold text-accent">{service.num}</span>
                        <span className="flex-1 text-[15px] font-semibold">{service.name}</span>
                        <span
                          className="text-base text-dim-2 transition-[color,transform] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] group-hover:translate-x-1 group-hover:text-accent"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </button>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Photo
                  src="/images/customers/Dra_geanne_lopes.png"
                  alt="Site desenvolvido para Dra. Geanne Lopes"
                  className="aspect-[2.2/1] w-full rounded-md"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-4 px-0.5">
                  <p className="text-[12.5px] text-dim">
                    <strong className="font-bold text-white">Dra. Geanne Lopes</strong> — Advocacia · Site
                    institucional
                  </p>

                  {featured.url && (
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-none whitespace-nowrap text-[12.5px] font-bold text-accent transition-opacity duration-200 hover:opacity-75"
                    >
                      Ver site ao vivo <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
