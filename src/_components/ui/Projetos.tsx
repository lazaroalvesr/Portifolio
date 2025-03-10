'use client'

import Image from "next/image"
import { CardProjetos } from "./CardProjetos"

export const Projetos = () => {
    return (
        <section id="home" className="lg:mt-60 mt-40 md:mt-72 w-full lg:p-0 p-5 max-w-7xl m-auto ">
            <div className="flex flex-col" id="projetos">
                <div className="flex flex-col">
                    <h1 className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Alguns projetos que já desenvolvi</h1>
                </div>
                <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:ml-10 mt-12 m-auto lg:m-0 lg:grid-cols-3 lg:w-96 gap-x-8 lg:gap-x-96 gap-y-8 lg:mt-12 ">
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/Arruda_Bombas"
                        href="https://land-page-gym.vercel.app/"
                        src="/img/LandPage_GYM.png"
                        titulo="BestGym"
                        sobre="BestGym foi desenvolvido para apresentar os produtos e serviços que oferecemos, assim como as características exclusivas que tornam a nossa academia especial"
                        tec={["Typescript", "NextJS", "Styled-Components","ReactJS"]}
                    />
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/Arruda_Bombas"
                        href="https://arrudabombas.com.br/"
                        src="/img/arruda-bombas.png"
                        titulo="Arruda Bombas Hidráulicas"
                        sobre="O site da Arruda Bombas Hidráulicas exibe produtos e serviços da empresa, como bombas de concreto, e facilita o contato com os clientes. O design é otimizado para navegação intuitiva e acessível."
                        tec={["Typescript", "NextJS", "Tailwind CSS", "ReactJS"]}
                    />
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/raffleflow-frontend"
                        href="https://github.com/lazaroalvesr/raffleflow-frontend"
                        src="/img/RifaFlow.png"
                        titulo="RifaFlow"
                        sobre="Desenvolvido com Next.js e Tailwind CSS no front-end e NestJS com Prisma e Docker no back-end, o Rifaflow é uma plataforma para criação e gerenciamento de rifas online, com foco em funcionalidade e segurança."
                        tec={["Typescript", "NextJS", "Tailwind CSS", "NodeJs", "PostgreSQL", "ReactJS"]}
                    />
                    <CardProjetos
                        hrefGit="https://github.com/lazaroalvesr/meuadvogadoonline-"
                        href="https://meuadvogadoonline.vercel.app/"
                        src="/img/meu_advogado_online.png"
                        titulo="Dr Karolina"
                        sobre="Uma plataforma moderna para advogados oferecerem suporte jurídico de forma prática e acessível. Com um sistema intuitivo e integração com WhatsApp, facilita a comunicação entre profissionais e clientes."
                        tec={["Typescript", "NextJS", "Tailwind CSS", "ReactJS"]}
                    />
                </div>
            </div>
        </section>
    )
}