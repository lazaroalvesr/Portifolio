'use client'

import Image from "next/image"
import { CardProjetos } from "./CardProjetos"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const projects = [
    {
        hrefGit: "https://github.com/lazaroalvesr/Arruda_Bombas",
        href: "https://land-page-gym.vercel.app/",
        src: "/img/LandPage_GYM.png",
        titulo: "BestGym",
        sobre: "BestGym was developed to present the products and services we offer, as well as the unique features that make our gym special.",
        tec: ["Typescript", "NextJS", "Styled-Components", "ReactJS"]
    },
    {
        hrefGit: "https://github.com/lazaroalvesr/Arruda_Bombas",
        href: "https://arrudabombas.com.br/",
        src: "/img/arruda-bombas.png",
        titulo: "Arruda Bombas Hidráulicas",
        sobre: "The Arruda Bombas Hidráulicas website showcases the company's products and services, such as concrete pumps, and facilitates customer contact. The design is optimized for intuitive and accessible navigation.",
        tec: ["Typescript", "NextJS", "Tailwind CSS", "ReactJS"]
    },
    {
        hrefGit: "https://github.com/lazaroalvesr/raffleflow-frontend",
        href: "https://github.com/lazaroalvesr/raffleflow-frontend",
        src: "/img/RifaFlow.png",
        titulo: "RifaFlow",
        sobre: "Developed with Next.js and Tailwind CSS on the front-end and NestJS with Prisma and Docker on the back-end, RifaFlow is a platform for creating and managing online raffles, focusing on functionality and security.",
        tec: ["Typescript", "NextJS", "Tailwind CSS", "NodeJs", "PostgreSQL", "ReactJS"]
    },
    {
        hrefGit: "https://github.com/lazaroalvesr/meuadvogadoonline-",
        href: "https://meuadvogadoonline.vercel.app/",
        src: "/img/meu_advogado_online.png",
        titulo: "Dr Adriano D. Signer",
        sobre: "A modern platform for lawyers to offer legal support in a practical and accessible way. With an intuitive system and WhatsApp integration, it facilitates communication between professionals and clients.",
        tec: ["Typescript", "NextJS", "Tailwind CSS", "ReactJS"]
    }
];

export const Projetos = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })


    return (
        <section
            ref={ref}
            id="home" className="lg:mt-32 mt-[80px] w-full lg:p-0 p-5 max-w-7xl m-auto ">
            <div className="flex flex-col" id="projetos">
                <div className="flex flex-col">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Alguns projetos que já desenvolvi
                    </motion.h1>
                </div>
                <div className="grid z-40 grid-cols-1 md:grid-cols-2 lg:ml-10 mt-12 m-auto lg:m-0 lg:grid-cols-3 lg:w-96 gap-x-8 lg:gap-x-96 gap-y-8 lg:mt-12 ">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item.hrefGit}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}>
                            <CardProjetos items={[item]} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
