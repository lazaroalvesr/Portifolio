import Image from "next/image"

export const Customers = () => {
    return (
        <section className="max-w-6xl m-auto flex items-center mt-14.25">
            <div className="flex flex-col px-4 lg:px-0 mt-18.5">
                <h2 className="font-light text-[32px] lg:text-[40px] text-[#e3e4e656]"><span className="text-white">Empresas</span> que confiam em mim</h2>
                <div className="flex gap-12 mt-16 lg:flex-row md:flex-row flex-col items-center justify-center">
                    <div>
                        <Image
                            src="/img/logo_Arruda_Bombas.png"
                            alt="Logo da Empresa Arruda Bombas Hidráulicas"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div>
                        <Image
                            src="/img/logo_UAI+.png"
                            alt="Logo da Empresa UAI+"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-medium">Minas Online Telecom</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}