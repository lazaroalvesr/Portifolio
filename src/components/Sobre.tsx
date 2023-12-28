'use client'

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";


export function Sobre() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#items', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#items",
        start: 'top 400px',
        end: 'bottom 400px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf("#items")
    }
  }, [])

  return (
    <section
      id="Sobre">
      <div
        id="items"
        className="max-w-5xl lg:mt-32 md:mt-44 mt-80 m-auto">
        <div>
          <div className="text-center items-center">
            <h1 className="text-3xl dark:text-gray-50 text-gray-900">Sobre</h1>
            <p className="dark:text-gray-50 text-gray-900">Minha Introdução</p>
          </div>
          <div className="flex lg:flex-row flex-col md:flex-row mt-12 mb-32">
            <div className="ml-16 w-64 lg:w-[300px] lg:ml-0 mb-6 lg:mr-20 mr-0 lg:mb-0">
              <Image
                src="/img/code.svg"
                alt="Pessoa sentada em uma cadeira mexendo em um Computador"
                width={330}
                height={12}
              />
            </div>
            <div className="lg:ml-20 md:ml-16 ml-4 flex flex-col">
              <div className="flex gap-2">
                <div className="lg:w-28 w-[112px] border-gray-500 flex  items-center justify-center border-2 h-24 rounded-md">
                  <RiReactjsLine className="text-blue-500" size="42px" />

                </div>
                <div className="lg:w-28 w-[112px] border-gray-500 flex items-center justify-center border-2 h-24 rounded-md">
                  <SiTailwindcss className="text-blue-500" size="42px" />
                </div>
                <div className="lg:w-28 w-[112px] border-gray-500 flex items-center justify-center border-2 h-24 rounded-md">
                  <SiTypescript className="text-blue-500" size="42" />
                </div>
              </div>
              <div className="lg:w-[440px] mt-12">
                <p className="mb-7 w-[320px] lg:w-[400px] pr-3 dark:text-gray-50 text-gray-900">Com experiência em HTML, CSS,
                  Tailwind, JavaScript, TypeScript
                  e ReactJS e sólido conhecimento em SQL,
                  PostgreSQL. Comprometido com o desenvolvimento
                  profissional e soluções de qualidade. Habilidades
                  interpessoais destacadas e entusiasmo por novos
                  desafios. Pronto para contribuir com projetos e
                  equipes de forma eficaz, grande disposição para
                  aprender cada vez mais

                </p>
                <Link href=""
                  className="border-2 text-lg border-gray-500 dark:text-gray-50 text-gray-900 px-5 py-3 rounded-md ">
                  Dowload CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}