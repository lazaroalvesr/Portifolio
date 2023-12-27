'use client'

import React, { useState } from 'react';
import { CiCalendar } from "react-icons/ci";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Formacao() {
  const [mostrarEducacao, setMostrarEducacao] = useState(true);

  const toggleMostrarEducacao = () => {
    setMostrarEducacao(!mostrarEducacao);
  };


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#form', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#form",
        start: 'top 400px',
        end: 'bottom 600px',
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf("#form")
    }
  }, [])


  return (
    <section
      id='Formacao'>
      <div
        id='form'
        className=" dark:text-gray-200 text-black lg:pt-12 pt-8 ">
        <div id="Skills" className="max-w-5xl m-auto pt-14 lg:h-[560px] h-[610px]">
          <div className="text-center items-center">
            <h1 className="text-3xl dark:text-gray-50 text-gray-900">Qualificação</h1>
            <p className="dark:text-gray-50 text-gray-900">Minha Jornada Pessoal</p>
          </div>
          <div className='flex items-center justify-center gap-14 mt-12'>
            <div className='flex items-center'>
              <div className='w-10'>
                <CiCalendar />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>
                  <button onClick={toggleMostrarEducacao}>Educação</button>
                </h3>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-10'>
                <PiSuitcaseSimpleFill />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>
                  <button onClick={toggleMostrarEducacao}>Experiência</button>
                </h3>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center relative'>
            <div className='flex lg:-ml-52 -mt-32 md:-ml-52 -ml-36'>
              {mostrarEducacao ? (
                <ul className='block '>
                  <li className='font-semibold'>
                    Ciência Da Computação
                    <span className='block font-light text-gray-500 pb-3 dark:text-gray-300'>Bacharelado - Estácio</span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5 mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 2023/2027</span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className='font-semibold absolute w-32 lg:w-44 lg:right-[310px] md:right-48 right-2 lg:top-32 top-40'>
                    Desenvolvimento WEB
                    <span className='block font-light text-gray-500 pb-3 dark:text-gray-300'>Curso Livre - Rocketseat</span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5  mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 2022</span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className='font-semibold absolute lg:left-74 ml-2 -mt-2 lg:top-56 top-[280px]'>
                    Ux Design
                    <span className='block font-light text-gray-500 pb-3 w-44 dark:text-gray-300'> Curso Livre -  Digital House Brasil</span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5  mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 2023</span>
                        </div>
                      </div>
                    </span>
                  </li>
                </ul>
              ) : (
                <ul className='block ml-32 lg:ml-16 '>
                  <li className='font-semibold absolute lg:relative md:relative right-3 md:right-0 md:top-0 top-12 lg:top-0 lg:right-0'>
                    Nenhuma
                    <span className='block font-light text-gray-500 dark:text-gray-300 pb-3'>Nenhuma - Nenhuma </span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5  mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 0</span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className='font-semibold absolute lg:right-[320px] md:right-[190px] lg:top-32 top-40 right-[190px] '>
                    Nenhuma
                    <span className='block font-light text-gray-500 dark:text-gray-300 pb-3 w-32 lg:w-full'>Nenhuma - Nenhuma </span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5  mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 0</span>
                        </div>
                      </div>
                    </span>
                  </li>
                  <li className='font-semibold absolute lg:left-[350px] md:left-[260px] lg:top-56 top-[267px] lg:right-0 right-4'>
                    Nenhuma
                    <span className='block font-light text-gray-500 dark:text-gray-300 pb-3 w-39 lg:w-full'>Nenhuma - Nenhuma </span>
                    <span>
                      <div className=' flex'>
                        <div className='w-5  mt-1'>
                          <CiCalendar />
                        </div>
                        <div className='pl-2 font-light text-gray-500 dark:text-gray-300'>
                          <span> - 0</span>
                        </div>
                      </div>
                    </span>
                  </li>
                </ul>
              )}
            </div>
            <div>
              <div className='mt-12 lg:ml-9 ml-3 h-64 rounded-md w-1 block  bg-gray-400'>
                <div className='rounded-full -ml-1.5 w-4 h-4 bg-gray-600'></div>
                <div className='rounded-full -ml-1.5 w-4 h-4 lg:mt-16 mt-24 bg-gray-600'></div>
                <div className='rounded-full -ml-1.5 w-4 h-4 lg:mt-20 mt-24 bg-gray-600'></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
