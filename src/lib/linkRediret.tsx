import Link from 'next/link';
import { LinkRedirectProps } from './interface';

export const LinkRedirect = ({ children, href,onClick }: LinkRedirectProps) => {
  return (
    <li className="group inline-block relative">
      <Link href={href} className="relative z-10" onClick={onClick}>
        {children}
      </Link>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-8 rounded-md "></span>
    </li>
  );
};
