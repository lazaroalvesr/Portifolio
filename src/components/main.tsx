import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Main() {


  return (
    <div className=" max-w-5xl m-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-44 relative">
        <div className="flex ">
          <div className="lg:mt-14">
            <ul className="lg:flex-col lg:right-0 lg:top-0 flex flex-row gap-4 absolute lg:relative right-32 top-[560px]">
              <li className="mb-4">
                <Link href="/">
                  <FaGithub className=" dark:text-gray-50" size="42px" />
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/">
                  <FaLinkedin className="text-blue-500" size="42px" />

                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaXTwitter className="dark:text-gray-50" size="42px" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:ml-24 ml-8 relative">
            <h1 className="text-4xl dark:text-gray-50 lg:ml-0 ml-7 text-gray-900">Lázaro Alves R</h1>
            <span className="bg-gray-500 w-14 h-0.5 mt-3 absolute top-14"></span>
            <p className="lg:ml-16 ml-16 mt-4 dark:text-gray-50 text-gray-900">Desenvolvedor Front-End</p>
            <div className="absolute top-[360px] lg:relative lg:top-0">
              <p className="mt-4 mb-6 text-xl w-80  dark:text-gray-50 text-gray-900">Sou um Desenvolvedor Front-End em busca de
                desafios e soluções criativas para enriquecer
                a experiência do usuário.</p>
              <span className="text-gray-600">PCD: CID: (M41.4),(G82.0)</span>
              <div className=" mt-20 lg:flex hidden items-center gap-4">
                <div>
                  <Image
                    src="/img/mouse.svg"
                    alt="Icone mouse"
                    width={40}
                    height={12}
                  />
                </div>
                <p className="dark:text-gray-50 text-gray-900">Scroll Down</p>
                <div>
                  <Image
                    src="/img/arrowDown.svg"
                    alt="Icone Seta para baixo"
                    width={24}
                    height={12}
                    className="animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-40 ml-12 w-64 lg:w-[300px] mt-4">
          <Image
            src="/img/code.svg"
            alt="Pessoa sentada em uma cadeira mexendo em um Computador"
            width={330}
            height={12}
          />
        </div>
      </div>
    </div>
  )
}