import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface CardProjetosProps {
    index: number
    src: string
    href: string
    alt: string
    subTitle: string
    title: string
    description: ReactNode
}

export const CardProjetos = ({ index, src, href, alt, subTitle, title, description }: CardProjetosProps) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex items-center flex-col lg:gap-20 gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className="bg-gray-200 lg:w-132 lg:h-73 rounded-2xl">
                <div className="flex -mt-2">
                    <Image
                        src={src}
                        alt={alt}
                        width={550}
                        height={550}
                        className="rounded-2xl"
                    />
                </div>
            </div>
            <div className="lg:w-147.75 lg:pb-0 pb-8 md:w-96 ">
                <h2 className="text-gray-50 font-semibold text-[16px] pb-4 uppercase">{title}</h2>
                <p className="text-[#E3E4E6]/70  font-medium lg:text-[16px] text-[15px] leading-relaxed">
                    {description}
                </p>
                <h3 className="text-[#E3E4E6]/70 font-light pt-4 text-[16px] pb-6 uppercase">{subTitle}</h3>
                <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-4 py-2 border-gray-500 rounded-full">
                    Ver Projeto
                </Link>
            </div>
        </div>
    )
}