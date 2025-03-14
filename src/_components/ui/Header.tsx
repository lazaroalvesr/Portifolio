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
            <div className="lg:max-w-7xl lg:pt-5 p-5 h-auto m-auto items-center md:flex lg:flex lg:justify-between md:justify-between relative z-50">
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
                <button className="lg:hidden absolute md:hidden right-5 top-5 z-50" onClick={toggle} aria-label="Botão de abrir Menu Mobile">
                    {ativo ? (
                        <Image src="/icon/x.svg" alt="Ícone fechar menu" width={40} height={40} />
                    ) : (
                        <Image src="/icon/menu-deep.svg" alt="Ícone abrir menu" width={40} height={40} />
                    )}
                </button>
                <nav>
                    <ul className={`flex gap-12 lg:h-auto md:h-auto items-center ${ativo ? "animeLeftMobile flex-col z-30 text-2xl absolute h-[550px] left-0 -top-4 w-full animateLeft bg-[#101010] items-center justify-center text-center mt-4" : "h-0 overflow-hidden"}`}>
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
                            <Button
                                className="w-32 h-10 text-lg">
                                Curriculo
                            </Button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}