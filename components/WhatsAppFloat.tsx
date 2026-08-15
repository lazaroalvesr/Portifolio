import Image from "next/image";
import { whatsappHref } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-90 flex h-14 items-center overflow-hidden rounded-full bg-accent shadow-[0_14px_32px_rgba(46,107,255,0.4)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(46,107,255,0.5)] max-[560px]:h-12"
    >
      <span className="max-w-0 overflow-hidden pl-0 text-sm font-bold whitespace-nowrap text-white opacity-0 transition-[max-width,opacity,padding-left] duration-400 ease-[cubic-bezier(0.22,0.8,0.3,1)] group-hover:max-w-40 group-hover:pl-5 group-hover:opacity-100">
        Fazer orçamento
      </span>
      <span className="grid h-14 w-14 flex-none place-items-center max-[560px]:h-12 max-[560px]:w-12">
        <Image src="/images/iconWhatsapp.png" alt="" width={24} height={24} className="h-6 w-6 object-contain" />
      </span>
    </a>
  );
}
