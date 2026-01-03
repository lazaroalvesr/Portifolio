import { CardProjetos } from "./CardProjetos"

const meusProjetos = [
    {
        title: "Arruda Bombas Hidráulicas",
        src: "/img/arruda_bombas.png",
        alt: "Foto E-commerce arruda Bombas hidraúlicas",
        href: "https://arrudabombas.com.br/",
        subTitle: "Loja Virtual",
        description: (
            <>
                Plataforma de vendas de <span className="text-white font-bold">alta performance</span> que resultou no aumento de <span className="text-white font-bold">40% nos pedidos de orçamento</span>. O projeto uniu um catálogo completo com uma navegação simples, garantindo que a empresa apareça <span className="text-white font-bold">nas primeiras buscas do Google</span>.
            </>
        )
    },
    {
        title: "BestGym",
        src: "/img/BestGym.png",
        alt: "Foto site academia BestGym",
        href: "https://land-page-gym.vercel.app/",
        subTitle: "Site de Vendas & Matrículas",
        description: (
            <>
                Site desenvolvido estrategicamente para <span className="text-white font-bold">atrair e converter novos alunos</span> todos os dias. O projeto foca em um visual moderno e um sistema de <span className="text-white font-bold">agendamento rápido</span>, eliminando barreiras e facilitando a matrícula imediata na unidade.
            </>
        )
    },
    {
        title: "Minas Online Telecom",
        src: "/img/MinasOnlineTelecom.png",
        alt: "Foto site Minas Online Telecom",
        href: "https://www.minasonlinetelecom.com.br/",
        subTitle: "Site Institucional & Vendas",
        description: (
            <>
                Site completo para <span className="text-white font-bold">provedor de internet fibra óptica</span>, focado em facilitar a vida do cliente. A página organiza os planos de forma clara para <span className="text-white font-bold">vender mais rápido</span> e oferece uma central onde o assinante resolve tudo sozinho.
            </>
        )
    }
]

export const Projetos = () => {
    return (
        <section className="max-w-6xl m-auto flex items-center mt-14.25" id="projetos">
            <div className="mt-18.5 w-full">
                <h2 className="text-[#E3E4E6]/70 font-light text-[40px]">Projetos <span className="text-gray-50">Realizados</span></h2>
                <div className="flex flex-col lg:gap-22 mt-12 gap-16 lg:px-0 px-4 md:px-0 md:items-center justify-center">
                    {meusProjetos.map((projeto, index) => (
                        <CardProjetos
                            key={index}
                            index={index}
                            src={projeto.src}
                            href={projeto.href}
                            alt={projeto.alt}
                            subTitle={projeto.subTitle}
                            title={projeto.title}
                            description={projeto.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}