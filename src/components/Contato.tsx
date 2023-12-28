'use client'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { MdOutlineMail } from "react-icons/md";



export default function Contato() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#cont', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#cont",
        start: 'top 800px',
        end: 'bottom 400px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf("#cont")
    }
  }, [])

  return (
    <section
      id="Contato"
    >
      <div
        id="cont"
        className=" flex justify-center  dark:text-gray-200 text-black">
        <div className="max-w-5xl m-auto pt-12 pb-12">
          <div className="text-center items-center">
            <h1 className="text-3xl dark:text-gray-50 md:ml-12 lg:ml-0  text-gray-900">Contato</h1>
            <p className="dark:text-gray-50 md:ml-12 lg:ml-0  text-gray-900">Entrar em Contato</p>
          </div>
          <div className="text-center py-6">
            <p className="text-xl font-semibold md:ml-12 lg:ml-0 ">Fale Comigo</p>
          </div>
          <div className="w-72 lg:w-96 h-64 dark:text-black md:ml-14
             bg-gray-100  rounded-xl border-gray-300 border-2 lg:mr-12 ">
            <div className="flex text-center items-center justify-center flex-col">
              <div className="w-30 pt-12">
                <MdOutlineMail size="30"/>
              </div>
              <div>
                <p className="font-semibold text-lg py-3">Email</p>
                <p>lazaroalves12355@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div></section >
  )
}