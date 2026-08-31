export type Testimonial = { name: string; role: string; quote: string };
export type Project = {
  name: string;
  type: string;
  result: string;
  src?: string;
  url?: string;
  conceptual?: boolean;
};
export type ProcessStep = { num: string; title: string; description: string };

const WHATSAPP_NUMBER = "5533999267947";
const WHATSAPP_MESSAGE = "Oi! Vim pelo site e quero conversar sobre um projeto.";
export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
    name: "Dra. Geanne Lopes",
    type: "Site para advocacia",
    result:
      "Site institucional + blog para escritório de advocacia, com foco em credibilidade e geração de contatos.",
    src: "/images/customers/Dra_geanne_lopes.png",
    url: "https://geannelopes.adv.br/",
  },
  {
    name: "Dra. Bruna Teixeira Cardoso",
    type: "Site para advocacia",
    result:
      "Site institucional para escritório de advocacia, com foco em credibilidade e geração de contatos.",
    src: "/images/customers/draBrunaTeixeira.png",
    url: "https://brunateixeiraadv.com.br/",
  },
  {
    name: "MG Net",
    type: "Provedor de internet",
    result:
      "Site institucional para provedor de internet, com apresentação clara de planos, cobertura e atendimento.",
    src: "/images/customers/mg-net.png",
    url: "https://mgnetsal.com.br/",
  },
  {
    name: "Minas Online",
    type: "Provedor de internet",
    result:
      "Site institucional para provedor de internet, com foco em planos, credibilidade e conversão de clientes.",
    src: "/images/customers/minas-online.png",
    url: "https://www.minasonlinetelecom.com.br/",
  },
  {
    name: "Uai+",
    type: "Operadora de celular",
    result:
      "Site moderno para operadora de celular, desenvolvido para apresentar planos e facilitar a contratação.",
    src: "/images/customers/uai-mais.png",
    url: "https://www.uaimais.com.br/",
  },
  {
    name: "Arruda Bombas",
    type: "Site institucional",
    result:
      "Site institucional para empresa de equipamentos, com foco em presença digital e apresentação de produtos.",
    src: "/images/customers/arruda-bombas.png",
    url: "https://arrudabombas.com.br/",
  },
  {
    name: "Equilíbrio Nutrição",
    type: "Nutrição comportamental",
    result:
      "Projeto autoral: site institucional criado por conta própria para explorar posicionamento e apresentação de serviços de uma clínica de nutrição comportamental.",
    src: "/images/customers/equipeNutricao.png",
    url: "https://equilibrionutricao.vercel.app/",
    conceptual: true,
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Conversa inicial",
    description: "Entendo seu negócio, seu objetivo com o site e o prazo que você precisa.",
  },
  {
    num: "02",
    title: "Proposta e prazo",
    description: "Você recebe escopo, prazo e valor fechados por escrito. Sem surpresas.",
  },
  {
    num: "03",
    title: "Design e desenvolvimento",
    description: "Construo o site com atualizações constantes. Você acompanha o progresso, não só a entrega final.",
  },
  {
    num: "04",
    title: "Ajustes",
    description: "Revisamos juntos até o resultado ficar exatamente como você imaginou.",
  },
  {
    num: "05",
    title: "Site no ar",
    description: "Publicado, testado e com suporte direto comigo após o lançamento.",
  },
];

export const navLinks = [
  { label: "Início", href: "#top" },
  { label: "Projetos", href: "#projects" },
  { label: "Processo", href: "#process" },
  { label: "Contato", href: "#contact" },
];
