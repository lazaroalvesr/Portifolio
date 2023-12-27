'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [ativo, setAtivo] = useState(false);

  function ativarMenu() {
    setAtivo((ativo) => !ativo);
  }

  return (
    <div className={` max-w-full } `}>
      <header className='bg-gray-300 dark:bg-gray-900 w-fulll text-gray-900 fixed -bottom-[80px] lg:bottom-[680px] md:top-[1100px] lg:-top-1 left-0 right-0 z-50 flex 
      justify-between max-w-5xl m-auto h-44 lg:h-32 items-center pt-2 '>
        <h1 className="text-2xl italic pl-4 text-gray-900 -mt-20 lg:-mt-0  lg:pt-12 dark:text-gray-50">Alves R</h1>
        <nav className='flex lg:pt-12'>
          <button
            className={` lg:hidden absolute  ${ativo ? 'right-0' : 'right-2'
              } top-12 z-50 animate-pulse`}
            onClick={(e) => {
              e.stopPropagation();
              ativarMenu();
            }}
          >
            <span className={`hamburguer   ? 'ativo' : ''} z-50 right-6 text-black`}></span>
          </button>
          <ul
            className={`text-gray-900 bg-gray-300 flex gap-4 absolute transition-all lg:static lg:h-auto 
              right-0 m-auto items-center justify-center 
              left-0 -top-[158px]  ${ativo ?
                'w-[370px] border-t-2 border-gray-700 md:w-full h-44 z-50 rounded-xl grid grid-cols-3 pt-4' : 'h-0 overflow-hidden'
              }   dark:text-gray-50 dark:bg-gray-900  lg:flex-row text-center lg:text-left lg-top-0 text-gray-900 `}
          >
            <li className='lg:text-xl text-base lg:font-normal font-semibold '>
              <Link href="/">
                <div className='lg:hidden w-7 ml-12 md:ml-28'>
                </div>
                Home
              </Link>
            </li>
            <li className='lg:text-xl text-base lg:font-normal font-semibold'>
              <Link href="#Sobre">
                <div className='lg:hidden w-7 ml-12 md:ml-28'>
                </div>
                Sobre
              </Link>
            </li>
            <li className='lg:text-xl text-base -ml-9 lg:-m-0 lg:font-normal font-semibold'>
              <Link href="#portifolio" className=''>
                <div className='lg:hidden w-7 ml-16 md:ml-28'>
                </div>
                Portifolio
              </Link>
            </li>
            <li className='lg:text-xl text-base lg:font-normal font-semibold'>
              <Link href="#Skills" className='ml-2'>
                <div className='lg:hidden w-7 ml-12 md:ml-28'>
                </div>
                Skills
              </Link>
            </li>
            <li className='lg:text-xl text-base lg:font-normal font-semibold'>
              <Link href="#Contato">
                <div className='lg:hidden w-7 pt-5 md:pt-0 ml-12 md:ml-28'>
                </div>
                Contato
              </Link>
            </li>
            <li>
            </li>
          </ul>
          <div>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </div>
  );
};

