import Link from "next/link";
import { LinkRedirectProps } from "./interface";
import { ImgIcons } from "@/app/_components/_styles/About.styles";

export const LinkRedirect = ({ href, src, alt }: LinkRedirectProps) => {
    return (
        <Link href={href}>
            <ImgIcons src={src} alt={alt} />
        </Link>
    )
}