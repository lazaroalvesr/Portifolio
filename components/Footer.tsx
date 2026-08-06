import { wrap } from "@/lib/ui";

const columns = [
  { title: "Empresa", links: ["Sobre", "Projetos", "Contato"] },
  { title: "Serviços", links: ["Design UI/UX", "Desenvolvimento Web", "Sistemas sob Demanda"] },
];

const socialBtnClass =
  "grid h-7.5 w-7.5 place-items-center rounded-full bg-ink text-white transition-transform duration-200 hover:-translate-y-0.5 [&_svg]:h-3.75 [&_svg]:w-3.75";

export default function Footer() {
  return (
    <footer className={wrap}>
      <div className="my-5.5 rounded-xl bg-accent px-11 pt-11 pb-6.5 text-white max-[980px]:px-6 max-[980px]:pt-8.5 max-[980px]:pb-5.5">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-8 max-[980px]:gap-5 max-[640px]:gap-4 max-[480px]:grid-cols-1 max-[480px]:gap-6">
          <div>
            <div className="flex items-center gap-2 text-2xl font-extrabold tracking-[-1px]">Alves R</div>
            <p className="mt-3.5 max-w-62.5 text-[12.5px] leading-[1.7] text-white">
              Eu crio sites e sistemas sob demanda que ajudam marcas a crescer.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3.5 text-xs font-bold tracking-[0.6px] uppercase">{column.title}</h3>
              <ul className="flex flex-col gap-2.25">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-[12.5px] text-white hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8.5 flex flex-wrap items-center justify-between gap-3.5 border-t border-[rgba(20,20,20,0.18)] pt-4.5 text-xs text-white">
          <span>© {new Date().getFullYear()} Alves R. Todos os direitos reservados.</span>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/alvesrsites/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={socialBtnClass}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialBtnClass}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
