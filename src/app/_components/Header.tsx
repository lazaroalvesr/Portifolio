'use client'

import { useEffect, useState } from "react"
import IconeTagHtml from "../../lib/IconeHtmlTag"
import { ButtonMenuMobile, HeaderContainer, HeaderLi, HeaderTitle, HeaderUl } from "./_styles/Header.style"
import { CiMenuFries } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { BgGlobal, Container } from "./_styles/Container.styles"

export const Header = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }

    const handleResize = () => {
        if (window.innerWidth < 768 && !ativo) {
            setAtivo(true)
        }

        if (window.innerWidth < 426 && ativo) {
            setAtivo(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [ativo])

    return (
        <BgGlobal>
         <Container>
            <HeaderContainer>
                <HeaderTitle><IconeTagHtml width={32} height={32} />Alves R</HeaderTitle>
                <ButtonMenuMobile onClick={toggle} aria-label="Menu Mobile">
                    {ativo ? < IoMdClose size={30} color="white" /> : <CiMenuFries size={30} color="white" />}
                </ButtonMenuMobile>
                    {ativo || (typeof window !== 'undefined' && window.innerWidth >= 768) ? (
                        <HeaderUl>
                            <HeaderLi>Sobre</HeaderLi>
                            <HeaderLi>Habilidades</HeaderLi>
                            <HeaderLi>Projetos</HeaderLi>
                            <HeaderLi>Contato</HeaderLi>
                        </HeaderUl>
                    ) : null}
            </HeaderContainer >
        </Container>

        </BgGlobal>
    )
}