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

                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <a href="#" className="text-gray-400 hover:text-[#0088FF] transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-[#0088FF] transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}