import { MouseEventHandler, ReactNode } from "react"

export interface LinkRedirectProps {
    href: string
    children: ReactNode
    onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export interface CardProps {
    items: CardProjetosProps[]
}

interface CardProjetosProps {
    href: string
    hrefGit: string
    src: string
    titulo: string
    sobre: string
    tec: string[]
}

export interface FormContact {
    name: string
    email: string
    telephone: string
    message: string
}