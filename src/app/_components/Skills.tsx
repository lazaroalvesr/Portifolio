'use client'

import { BgGlobal, Container } from "./_styles/Container.styles"
import { ContainerSkills, DivSkills, SkillImg, SkillSTitle, SkillsName } from "./_styles/Skills.styles"

import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import { useEffect, useState } from "react";

const imgs = [
    { src: "/img/Icons/Icone_HTML.png", alt: "HTML", name: "HTML" },
    { src: "/img/Icons/Icone_Css.png", alt: "de1", name: "CSS" },
    { src: "/img/Icons/Icone_Tailwind_CSS.png", alt: "de1", name: "Tailwind CSS" },
    { src: "/img/Icons/Icone_Styled_Components.png", alt: "de1", name: "Styled Components" },
    { src: "/img/Icons/Icone_JavaScript.png", alt: "de1", name: "JavaScript" },
    { src: "/img/Icons/Icone_Typescript.png", alt: "de1", name: "TypeScript" },
    { src: "/img/Icons/Icone_ReactJS.png", alt: "de1", name: "ReactJS" },
    { src: "/img/Icons/Icone_Node.png", alt: "de1", name: "Node.js" },
    { src: "/img/Icons/Icone_Fastify.png", alt: "de1", name: "Fastify" },
    { src: "/img/Icons/Icone_PostgresQL.png", alt: "de1", name: "PostgreSQL" },
    { src: "/img/Icons/Icone_Prisma_ORM.png", alt: "de1", name: "Prisma ORM" },
];

export const Skills = () => {
    const [slidePreview, setSlidePreview] = useState(7);

    useEffect(() => {
        function handleSize() {
            if (window.innerWidth < 720) {
                setSlidePreview(3);
            } else {
                setSlidePreview(7);
            }
        }

        handleSize();

        window.addEventListener("resize", handleSize);
        return () => {
            window.removeEventListener("resize", handleSize);
        };
    }, []);

    return (
        <BgGlobal>
            <Container>
                <ContainerSkills>
                    <SkillSTitle>Skills</SkillSTitle>
                </ContainerSkills>
                <DivSkills>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={slidePreview}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {imgs.map((img, index) => (
                            <SwiperSlide key={index}>
                                <SkillImg>
                                    <Image src={img.src} alt={img.alt} width={100} height={100} />
                                    <SkillsName>{img.name}</SkillsName>
                                </SkillImg>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </DivSkills>
            </Container>
        </BgGlobal>
    );
};


/**
 * 
 * const imgName = [
    <>
        <p>Html</p>
        <p>Css</p>
        <p>Tailwind Css</p>
        <p>Styled Components</p>
        <p>Java Script</p>
        <p>TypeScript</p>
        <p>ReactJS</p>
        <p>NodeJS</p>
        <p>Fastify</p>
        <p>PostgreSQL</p>
        <p>Prisma ORM</p>
    </>
]
 */