import Image from "next/image";

type LogoProps = { className?: string };

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/icon.svg"
      alt="Alves R"
      width={36}
      height={36}
      className={`h-9 w-9 shrink-0 rounded-[9px] ${className}`}
    />
  );
}
