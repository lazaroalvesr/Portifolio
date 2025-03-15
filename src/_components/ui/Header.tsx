'use client'

import { LinkRedirect } from "@/lib/linkRediret"
import Image from "next/image"
import Link from "next/link"
import { MouseEvent, useState } from "react"
import { Button } from "./moving-border"

export function Header() {
    const [ativo, setAtivo] = useState(false)

    function toggle() {
        setAtivo(!ativo)
    }

    function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
        event.preventDefault();
        const element = document.querySelector(id);

        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            setAtivo(false)
        }
    }

    return (
        <header>
            <div className="lg:max-w-7xl lg:pt-5 p-5 h-auto m-auto flex justify-between items-center relative z-50">
                <div className="flex items-center text-nowrap gap-3">
                    <Image
                        src="/icon/code-dots.svg"
                        alt="Icone chave de codigo"
                        width={20}
                        height={20}
                        className="w-8"
                    />
                    <h1 className="text-2xl font-bold w-8">Alves R</h1>
                </div>

                <button className="lg:hidden absolute right-5 top-5 z-50" onClick={toggle} aria-label="Botão de abrir Menu Mobile">
                    {ativo ? (
                        <Image src="/icon/x.svg" alt="Ícone fechar menu" width={40} height={40} />
                    ) : (
                        <Image src="/icon/menu-deep.svg" alt="Ícone abrir menu" width={40} height={40} />
                    )}
                </button>

                <nav className={`flex flex-col lg:flex-row gap-12 items-center lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-[#101010] lg:bg-transparent text-center 
                    transition-all duration-300 ease-in-out 
  ${ativo ? "opacity-100 scale-100 h-[450px] absolute top-12 pt-32" : "opacity-0 h-0 lg:opacity-100 lg:h-auto overflow-hidden"}`}>

                    <LinkRedirect href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')}>
                        Sobre
                    </LinkRedirect>
                    <LinkRedirect href="#projetos" onClick={(e) => scrollToSection(e, '#projetos')}>
                        Projetos
                    </LinkRedirect>
                    <LinkRedirect href="#contato" onClick={(e) => scrollToSection(e, '#contato')}>
                        Contato
                    </LinkRedirect>
                    <Link href="/Curriculo.pdf" download="Curriculo.pdf" target="_blank">
                        <Button className="w-32 h-10 text-lg">
                            Curriculo
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
