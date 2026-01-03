import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="flex items-center justify-center flex-col pt-12">
                <h2 className="text-[#E3E4E6]/70 font-light text-[40px]">Me acompanhe nas <span className="text-gray-50">redes</span></h2>
                <div className="flex gap-4 items-center mt-12">
                    <Link
                        href="https://www.linkedin.com/in/l%C3%A1zaro-alves-r/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="/icon/linkedinIcon.svg"
                            alt="Icone do linkedin"
                            width={48}
                            height={48}
                        />
                    </Link>
                    <Link
                        href="https://www.instagram.com/lazaro_alves_r/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image
                            src="/icon/instagramIcon.svg"
                            alt="Icone do Instagram"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <p className="text-[#E3E4E6]/70 my-12">Desenvolvido por <span className="font-bold">Lázaro Alves R</span></p>
            </div>
        </footer>
    )
}