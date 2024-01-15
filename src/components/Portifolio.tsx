'use client'

import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

export default function Portifolio() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#Porti', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#Porti",
        start: 'top 700px',
        end: 'bottom 400px',
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf("#Porti")
    }
  }, [])
  return (
    <section
      id="portifolio"
    >
      <div
        id="Porti" className=" pb-16 dark:text-gray-200 mt-20 text-black flex justify-center">
        <div className="max-w-5xl m-auto ">
          <div className="text-center items-center ">
            <h1 className="text-3xl dark:text-gray-50 text-gray-900">Portifólio</h1>
            <p className="dark:text-gray-50 text-gray-900">Trabalhos mais recentes</p>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 grid-cols-1  md:ml-16 gap-7 mt-12">
            <div className="w-80 h-80  rounded-xl bg-gray-200 dark:bg-gray-300 md:mb-0 lg:mb-0 mb-4 ">
              <div className="w-72 h-44 rounded-xl m-auto mt-3">
                <Image
                  src={"/img/Finvue.png"}
                  alt="pao"
                  width={320}
                  height={12}
                  className="rounded-md"
                />
              </div>
              <div className="ml-6 mt-2 text-black">
                <p>Finvue Gerenciador Finaceiro</p>
                <p className="text-gray-400 pt-1">ReactJS, TypeScript, Tailwind CSS, Axios, VercelPostgress, Prisma, NodeJs, Fastify</p>
              </div>
              <div className="mt-2 ml-6 ">
                <Link href="https://finvue-layout.vercel.app/" target="_blank">
                  <button className="flex">
                    <p className="text-gray-500">Ver</p>
                    <div className="w-5 ml-2 pt-1">
                      <Image
                        src="/img/arrow-right.png"
                        alt="seta"
                        width={23}
                        height={12}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-80 h-80 rounded-xl bg-gray-200 dark:bg-gray-300">
              <div className="w-72 h-44 bg-gray-200 rounded-xl  m-auto mt-3">
                <Image
                  src={"/img/landAdvogado.png"}
                  alt="pao"
                  width={320}
                  height={12}
                  className="rounded-md"
                />
              </div>
              <div className="ml-6 mt-6 text-black">
                <p>LandPage Advocacia</p>
                <p className="text-gray-400 pt-1">HTML5, CSS, JS</p>
              </div>
              <div className="mt-2 ml-6">
                <Link href="https://advogado-2.netlify.app/" target="_blank">
                  <button className="flex">
                    <p className="text-gray-500">Ver</p>
                    <div className="w-5 ml-2 pt-1">
                      <Image
                        src="/img/arrow-right.png"
                        alt="seta"
                        width={23}
                        height={12}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
  )
}