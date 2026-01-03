import { ChevronDown } from 'lucide-react';

export const Main = () => {
    return (
        <main className="max-w-6xl m-auto flex items-center justify-center text-center pt-52 lg:pt-60 px-6">
            <div className='flex flex-col items-center justify-center md:px-4'>
                <h2 className="font-light text-[32px] lg:text-[56px] text-[#e3e4e656] leading-snug">
                    Leve <span className="text-white font-semibold">sua empresa</span> para a internet com um <span className="text-white font-semibold">site profissional e impactante</span>
                </h2>
                <div className='mt-32 lg:mt-44 -z-10'>
                    <ChevronDown className='animate-bounce' size={35} />
                </div>
            </div>
        </main>
    )
}