import Photo from "./Photo";
import Reveal from "./Reveal";
import { wrap, section, heading, pillNote, pillNoteDot } from "@/lib/ui";
import { whatsappHref } from "@/lib/data";

const facts = ["Acompanhamento direto, sem terceirizado", "+5 projetos entregues", "Sites pensados para converter"];

export default function Contact() {
  return (
    <section className={section} id="contact">
      <div className={wrap}>
        <Reveal>
          <div className="grid grid-cols-[0.85fr_1.15fr] items-center gap-14 max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div className="relative mx-auto aspect-4/5 w-full max-w-100 overflow-hidden rounded-xl bg-ink shadow-[0_30px_60px_rgba(16,25,43,0.2)]">
              <Photo src="/images/alves-r.jpg" alt="Lázaro Alves" className="h-full w-full" />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(180deg,rgba(16,25,43,0)_0%,rgba(16,25,43,0.85)_100%)]"
              />

              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-[17px] font-bold">Lázaro Alves</div>
                <div className="text-[12.5px] text-white/75">Desenvolvedor Web</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-[2px] text-dim uppercase">Sobre</p>

              <h2 className={`${heading} mt-4`}>Do primeiro contato à entrega, é comigo que você fala.</h2>

              <p className="mt-4 max-w-125 text-[13.5px] leading-[1.7] text-dim">
                Crio sites profissionais pensados para o seu negócio, com estrutura clara e foco em gerar contato e
                confiança.
              </p>
              <p className="mt-3 max-w-125 text-[13.5px] leading-[1.7] text-dim">
                Do alinhamento inicial até a publicação, o projeto é acompanhado diretamente por mim — sem
                intermediários e sem enrolação.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6.5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-3.75 text-[13.5px] font-bold text-white transition-transform duration-250 hover:-translate-y-0.5"
              >
                Chamar no WhatsApp <span aria-hidden="true">↗</span>
              </a>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {facts.map((fact) => (
                  <span key={fact} className={pillNote}>
                    <i className={pillNoteDot} /> {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
