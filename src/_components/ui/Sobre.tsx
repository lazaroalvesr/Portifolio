'use client'

import Image from "next/image"
import { ItensListaTec } from "./ItensListaTec"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

export const Sobre = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <section
            ref={ref}
            className="lg:mt-32 mt-[80px] lg:max-w-7xl pl-4 m-auto">
            <div className="flex lg:flex-row flex-col md:flex-row" id="sobre">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col">
                    <h1 className="lg:text-3xl text-2xl flex gap-4 font-bold">
                        <Image
                            src="/icon/send.svg"
                            alt="Icone de envio"
                            width={25}
                            height={25}
                            className="transform rotate-45"
                        />
                        Sobre Mim</h1>
                    <div className="lg:w-[700px] pr-8 lg:pr-0 md:w-[400px] flex flex-col mt-12  ml-10 text-[#979797]">
                        <p className="pb-4">
                            Desenvolvedor Front-End ReactJS com 3 anos de experiência. Especializado em TypeScript, ReactJS,
                            Next.js, Tailwind CSS e Styled-Components. Também possuo experiência com desenvolvimento back-end
                            utilizando Node.js, NestJS, SQL, PostgreSQL, Prisma e Docker.
                        </p>
                        <p>
                            Foco na criação de interfaces intuitivas e performáticas, sempre explorando novas tecnologias para entregar
                            soluções modernas e impactantes.
                        </p>
                    </div>
                    <div className="pt-4 ml-10">
                        <p className="pr-4 lg:pr-0">Algumas tecnologias que tenho trabalhado <span className="font-bold">recentemente</span>:</p>
                        <div className="grid grid-cols-2 gap-x-4 lg:w-[450px] lg:gap-x-0">
                            <ItensListaTec text="Javascript (ES6++)" />
                            <ItensListaTec text="React" />
                            <ItensListaTec text="Next.js" />
                            <ItensListaTec text="Typescript" />
                            <ItensListaTec text="Node.js" />
                            <ItensListaTec text="PostgreSQL " />
                            <ItensListaTec text="Docker " />
                            <ItensListaTec text="NestJS " />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="border border-blue-500 rounded-full m-auto p-2 lg:ml-32 w-72 mt-[20px] md:mt-32 lg:mt-20 md:mr-4">
                    <Image
                        src="/img/foto.jpg"
                        alt="Foto"
                        width={300}
                        height={90}
                        className="w-72 rounded-full"
                    />
                </motion.div>
            </div>
        </section >
    )
}