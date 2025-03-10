import { CardProjetosProps } from "@/lib/interface"
import Image from "next/image"
import Link from "next/link"
import { IconCard } from "./IconsCardProjeto"

export const CardProjetos = ({ href, sobre, src, tec, titulo , hrefGit}: CardProjetosProps) => {
    return (
        <Link href={href} target="_blank" className="cursor-pointer hover:scale-105 transition-transform duration-300" rel="noopener noreferrer">
            <div className="w-80 h-[480px] rounded-md -z-20 relative  cursor-pointer bg-gray-900 border border-gray-600">
                <div className="w-72 m-auto mt-4">
                    <div className="bg-gray-500 cursor-pointer  rounded-md h-[162px]">
                        <Image
                            src={src}
                            alt="Foto"
                            width={288}
                            height={162}
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col h-[250px]">
                        <p className="font-bold text-1xl pt-4">{titulo}</p>
                        <p className="text-[#7E7E7E] text-sm  w-72 h-30 pt-3">{sobre}</p>
                        <div className="text-blue-500 text-sm flex gap-x-8 gap-y-2 w-72 pt-4 flex-wrap">
                            {tec.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex m-auto justify-end gap-8">
                        <IconCard
                            href={hrefGit}
                            src="/icon/github.svg"
                        />
                        <IconCard
                            href={href}
                            src="/icon/web.svg"
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}