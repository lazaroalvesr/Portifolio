import Photo from "./Photo";
import Reveal from "./Reveal";
import { wrap, section, heading } from "@/lib/ui";

const WHATSAPP_NUMBER = "5533999267947";
const WHATSAPP_MESSAGE = "Oi! Vim pelo site e quero conversar sobre um projeto.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Contact() {
  return (
    <section className={section} id="contact">
      <div className={wrap}>
        <Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-7.5 overflow-hidden rounded-xl bg-surface px-11 pt-13.5 max-[560px]:grid-cols-1 max-[980px]:px-5.5 max-[980px]:pt-10">
            <div className="max-w-110 self-center pb-7.5">
              <h2 className={heading}>Fale Comigo Hoje!</h2>
              <p className="mt-3.5 text-[13.5px] leading-[1.7] text-dim">
                Me conta o que você quer construir e eu retorno em até um dia útil com um plano,
                prazo e valor.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6.5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-3.75 text-[13.5px] font-bold text-ink transition-transform duration-250 hover:-translate-y-0.5"
              >
                Chamar no WhatsApp <span aria-hidden="true">↗</span>
              </a>
            </div>

            <Photo
              src="/images/alves-r.jpg"
              alt="Alves R"
              className="w-[min(330px,34vw)] rounded-t-lg aspect-[1/1.15] max-[980px]:w-[min(240px,40vw)] max-[560px]:mx-auto max-[560px]:w-[min(300px,72vw)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
