export type Service = { num: string; name: string };
export type Testimonial = { name: string; role: string; quote: string };
export type Project = { name: string; type: string; src?: string; url?: string };

export const services: Service[] = [
  { num: "01", name: "Design UI/UX" },
  { num: "02", name: "Desenvolvimento Web" },
  { num: "03", name: "Sistemas sob Demanda" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Reed",
    role: "CEO da Northwind",
    quote:
      "Ele reconstruiu nosso site em seis semanas e os pedidos de demonstração dobraram. Fez perguntas melhores do que qualquer agência com quem já trabalhamos.",
  },
  {
    name: "Lena Okafor",
    role: "Head of Product na Flowbase",
    quote:
      "Processo claro, sem surpresas, e um design system que nossos engenheiros conseguiram usar de verdade. Ainda usamos os componentes um ano depois.",
  },
  {
    name: "Tomás Ferreira",
    role: "Fundador da Casa Verde",
    quote:
      "A marca finalmente parece a empresa que queremos ser. O time de vendas disse que foi o melhor material de lançamento que já receberam.",
  },
  {
    name: "Priya Nandi",
    role: "CMO da Lumen Labs",
    quote:
      "O sistema que ele construiu automatizou boa parte do nosso processo. Entregou antes do prazo, dentro do orçamento, e cada arquivo organizado do jeito que pedimos.",
  },
];

export const projects: Project[] = [
  {
    name: "MG Net",
    type: "Provedor de internet",
    src: "/images/customers/mg-net.png",
    url: "https://mgnetsal.com.br/",
  },
  {
    name: "Minas Online",
    type: "Provedor de internet",
    src: "/images/customers/minas-online.png",
    url: "https://www.minasonlinetelecom.com.br/",
  },
  {
    name: "Uai+",
    type: "Operadora de celular",
    src: "/images/customers/uai-mais.png",
    url: "https://www.uaimais.com.br/",
  },
  {
    name: "Arruda Bombas",
    type: "Site institucional",
    src: "/images/customers/arruda-bombas.png",
    url: "https://arrudabombas.com.br/",
  },
  {
    name: "Dra. Geanne Lopes",
    type: "Site para advocacia",
    src: "/images/customers/Dra_geanne_lopes.png",
    url: "https://geannelopes.adv.br/",
  },
];

export const navLinks = [
  { label: "Início", href: "#top" },
  { label: "Projetos", href: "#projects" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];
