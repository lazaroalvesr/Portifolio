"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export const Header = () => {
    const [active, setActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const [activeSection, setActiveSection] = useState("home")

    const toggle = () => {
        setActive((prev) => !prev)
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projetos", "sobre", "contato"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        handleScroll() // Executa ao montar o componente
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <header className="max-w-7xl m-auto">
            <div className="flex items-center justify-between md:px-4 h-24 px-2 lg:px-0 fixed top-0 w-full lg:w-7xl bg-[#010206]">
                <Link href="#">
                    <div className="flex items-center justify-center gap-4">
                        <Image
                            src="/icon/FaviIcon.png"
                            alt="Icone"
                            width={30}
                            height={30}
                            className="lg:w-7.5 lg:h-7.5 w-7 h-7"
                        />
                        <h3 className="text-[#0088FF] text-[24px] lg:text-[36px] uppercase font-semibold">Alves R</h3>
                    </div>

                </Link>
                <button
                    className="lg:hidden absolute right-5 top-8.5 z-50"
                    onClick={(event) => {
                        event.stopPropagation()
                        toggle()
                    }}
                    aria-label="Botão Menu Mobile"
                >
                    {active ? (
                        ""
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {active && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden"
                        onClick={() => setActive(false)}
                    />
                )}
                <nav
                    ref={menuRef}
                    className={`lg:py-2 lg:px-2 justify-between lg:flex fixed top-0 right-0 h-full w-70 bg-[#010206] shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:transform-none lg:shadow-none lg:static lg:w-auto lg:h-auto
    ${active ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
                >
                    <div className="flex items-center justify-between p-6 border-b border-gray-800 lg:hidden">
                        <h2 className="text-xl font-semibold text-white">Menu</h2>
                        <button
                            onClick={() => setActive(false)}
                            className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>
                    </div>

                    <div className="p-6 lg:p-0 flex flex-col h-full lg:h-auto">
                        <ul className={`flex items-start gap-6 ${active ? "flex-col mt-4" : ""} lg:flex-row lg:gap-8 lg:mt-0 lg:items-center`}>
                            <li className="group w-full lg:w-auto relative">
                                <Link
                                    href="#"
                                    onClick={() => setActive(false)}
                                    className={`flex items-center gap-3 font-semibold text-[16px] lg:text-[14px] transition-colors py-3 lg:py-0 cursor-pointer
            ${activeSection === "home" ? "text-[#0088FF]" : "text-gray-300 hover:text-[#0088FF] lg:text-white lg:hover:text-[#0088FF]"}`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-[#0088FF] rounded-full transition-opacity lg:hidden ${activeSection === "home" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                                    HOME
                                </Link>
                                <span className={`hidden lg:block absolute -bottom-2 left-3.5 right-0 h-1 w-4 bg-[#0088FF] rounded-full transition-all duration-300 ${activeSection === "home" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
                            </li>

                            <li className="group w-full lg:w-auto relative">
                                <Link
                                    href="#projetos"
                                    onClick={() => setActive(false)}
                                    className={`flex items-center gap-3 font-semibold text-[16px] lg:text-[14px] transition-colors py-3 lg:py-0 cursor-pointer
            ${activeSection === "projetos" ? "text-[#0088FF]" : "text-gray-300 hover:text-[#0088FF] lg:text-white lg:hover:text-[#0088FF]"}`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-[#0088FF] rounded-full transition-opacity lg:hidden ${activeSection === "projetos" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                                    PROJETOS
                                </Link>
                                <span className={`hidden lg:block absolute -bottom-2 left-8.5 right-0 h-1 w-4 bg-[#0088FF] rounded-full transition-all duration-300 ${activeSection === "projetos" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
                            </li>

                            <li className="group w-full lg:w-auto relative">
                                <Link
                                    href="#sobre"
                                    onClick={() => setActive(false)}
                                    className={`flex items-center gap-3 font-semibold text-[16px] lg:text-[14px] transition-colors py-3 lg:py-0 cursor-pointer
            ${activeSection === "sobre" ? "text-[#0088FF]" : "text-gray-300 hover:text-[#0088FF] lg:text-white lg:hover:text-[#0088FF]"}`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-[#0088FF] rounded-full transition-opacity lg:hidden ${activeSection === "sobre" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                                    <span className="block">SOBRE MIM</span>
                                </Link>
                                <span className={`hidden lg:block absolute -bottom-2 left-8.5 right-0 h-1 w-4 bg-[#0088FF] rounded-full transition-all duration-300 ${activeSection === "sobre" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
                            </li>
                            <li className="group w-full lg:w-auto relative">
                                <Link
                                    href="#contato"
                                    onClick={() => setActive(false)}
                                    className={`flex items-center gap-3 font-semibold text-[16px] lg:text-[14px] transition-colors py-3 lg:py-0 cursor-pointer
            ${activeSection === "contato" ? "text-[#0088FF]" : "text-gray-300 hover:text-[#0088FF] lg:text-white lg:hover:text-[#0088FF]"}`}
                                >
                                    <span className={`w-1.5 h-1.5 bg-[#0088FF] rounded-full transition-opacity lg:hidden ${activeSection === "contato" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                                    <span className="block">SOLICITAR ORÇAMENTO</span>
                                </Link>
                                <span className={`hidden lg:block absolute -bottom-2 left-18 right-0 h-1 w-4 bg-[#0088FF] rounded-full transition-all duration-300 ${activeSection === "contato" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
                            </li>
                        </ul>

                        <div className="mt-auto mb-8 lg:hidden">
                            <div className="pt-6 border-t border-gray-800">
                                <p className="text-gray-400 text-sm mb-4">Vamos conversar sobre seu projeto?</p>
                                <Link
                                    href="#contato"
                                    onClick={() => setActive(false)}
                                    className="block w-full text-center px-6 py-3 bg-[#0088FF] text-white rounded-lg font-semibold hover:bg-[#0077ee] transition-colors"
                                >
                                    Solicitar Orçamento
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}