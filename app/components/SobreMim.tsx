import Image from "next/image"

export const SobreMim = () => {
    return (
        <section className="max-w-6xl m-auto flex items-center mt-14.25" id="sobre">
            <div className="flex items-center w-full lg:flex-row flex-col md:flex-row justify-between mt-18.5 px-4 lg:px-0">
                <div className="lg:w-147.75 lg:pb-0 pb-8 md:w-96">
                    <h4 className="text-gray-50 font-semibold text-[20px] pb-4">Um pouco sobre mim</h4>
                    <p className="text-[#E3E4E6]/70 font-light lg:text-[22px] text-[20px]">
                        Me chamo Lázaro e sou desenvolvedor web especializado em <span className="text-gray-50">tirar projetos</span> do papel e
                        transformá-los em <span className="text-gray-50">sites profissionais</span> que geram <span className="text-gray-50">resultados</span>. Acredito que todo negócio
                        merece uma presença digital de qualidade. Além da programação, sou apaixonado por games
                        e tecnologia.
                    </p>
                </div>
                <div>
                    <Image
                        src="/img/foto.png"
                        alt="Minha Foto"
                        width={400}
                        height={120}
                    />
                </div>
            </div>
        </section>
    )
}