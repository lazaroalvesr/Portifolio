'use client'

import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Skills() {


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#hab', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#hab",
        start: 'top 400px',
        end: 'bottom 600px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf("#hab")
    }
  }, [])

  return (
    <section id="Skills">
      <div
        id="hab"
        className="max-w-5xl m-auto dark:text-gray-50">
        <div className="text-center items-center">
          <h1 className="text-3xl dark:text-gray-50 text-gray-900">Skills</h1>
          <p className="dark:text-gray-50 text-gray-900">Minhas Habilidades</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center m-auto lg:gap-16 gap-8 mt-12 items-center">
          <div className="w-80 border-2 dark:border-gray-600 border-gray-900 rounded-md mb-4 lg:mb-0">
            <div className="flex pt-3 items-center justify-center">
              <h2>Frontend Developer</h2>
            </div>
            <div className="flex gap-2 pt-6 ml-6 w-64">
              <ul className="flex-1 text-lg">
                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>HTML</p>
                    <span className="text-xs ">Avançado</span>
                  </div>
                </li>

                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>JavaScript</p>
                    <span className="text-xs">Básico</span>
                  </div>
                </li>
                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>TypeScript</p>
                    <span className="text-xs">Intermediário</span>
                  </div>
                </li>
              </ul>

              <ul className="flex-1 text-lg">
                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p>ReactJS</p>
                    <span className="text-xs ml-6">Básico</span>
                  </div>
                </li>

                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p>TailwindCSS</p>
                    <span className="text-xs ml-10">Avançado</span>
                  </div>
                </li>
                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p className="pl-9">CSS</p>
                    <span className="text-xs ml-4">Avançado</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-80 border-2 dark:border-gray-600 border-gray-900 rounded-md mb-4 lg:mb-0">
            <div className="flex pt-3 items-center justify-center">
              <h2>Back-End Developer</h2>
            </div>
            <div className="flex gap-2 pt-6 ml-6 w-64">
              <ul className="flex-1 text-lg">
                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>SQL</p>
                    <span className="text-xs ">Básico</span>
                  </div>
                </li>

                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>PostgreeSQL</p>
                    <span className="text-xs">Intermediário</span>
                  </div>
                </li>
                <li className="pb-4 flex">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pl-2">
                    <p>MongoDB</p>
                    <span className="text-xs">Básico</span>
                  </div>
                </li>
              </ul>

              {/* <ul className="flex-1 text-lg">
                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p>ReactJS</p>
                    <span className="text-xs ml-6">Básico</span>
                  </div>
                </li>

                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p>TailwindCSS</p>
                    <span className="text-xs ml-10">Avançado</span>
                  </div>
                </li>
                <li className="pb-4 flex flex-row-reverse">
                  <div className="pt-2">
                    <Image
                      src="/img/verifi.png"
                      alt="o"
                      width={15}
                      height={20}
                      className=" bg-gray-900 rounded-lg"
                    />
                  </div>
                  <div className="pr-2">
                    <p className="pl-9">CSS</p>
                    <span className="text-xs ml-4">Avançado</span>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}