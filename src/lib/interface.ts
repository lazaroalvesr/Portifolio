export interface IconeProps{
    width: number
    height: number
}

export interface LinkRedirectProps{
    href: string
    src: string
    alt: string
}

export interface CardProjectsProps{
    src: string
    alt: string
    name: string
    subName:string
    hoverText:string
    href: string
    skillsText: string[]
}

export interface SkillsProps{
    src: string
    alt: string
    text: string
}

export const skillsData = [
    { src: '/img/Icons/Icone_HTML.png', alt: 'Icone Html', text: 'HTML' },
    { src: '/img/Icons/Icone_Css.png', alt: 'Icone Css', text: 'CSS' },
    { src: '/img/Icons/Icone_JavaScript.png', alt: 'Icone JavaScript', text: 'JavaScript' },
    { src: '/img/Icons/Icone_Typescript.png', alt: 'Icone Typescript', text: 'TypeScript' },
    { src: '/img/Icons/Icone_Tailwind_CSS.png', alt: 'Icone Tailwind CSS', text: 'Tailwind CSS' },
    { src: '/img/Icons/Icone_Styled_Components.png', alt: 'Icone Styled Components', text: 'Styled Components' },
    { src: '/img/Icons/Icone_ReactJS.png', alt: 'Icone ReactJS', text: 'ReactJS' },
    { src: '/img/Icons/Icone_Node.png', alt: 'Icone Node', text: 'Node.js' },
    { src: '/img/Icons/Icone_Fastify.png', alt: 'Icone Fastify', text: 'Fastify' },
    { src: '/img/Icons/Icone_PostgresQL.png', alt: 'Icone PostgresQL', text: 'PostgreSQL' },
    { src: '/img/Icons/Icone_Prisma_ORM.png', alt: 'Icone Prisma ORM', text: 'Prisma ORM' },
];


export interface HeaderMobile {
    ativo?: boolean
}