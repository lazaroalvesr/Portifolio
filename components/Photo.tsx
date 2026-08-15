import Image from "next/image";
import type { CSSProperties } from "react";

type PhotoProps = {
  alt: string;
  src?: string;
  className?: string;
  variant?: "person" | "work" | "site" | "idea";
};

const PERSON_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23b9b9b3'%3E%3Ccircle cx='50' cy='34' r='16'/%3E%3Cpath d='M50 55c-17 0-30 12-32 30h64c-2-18-15-30-32-30z'/%3E%3C/g%3E%3C/svg%3E\")";

const WORK_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23b9b9b3' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='38,32 20,50 38,68'/%3E%3Cpolyline points='62,32 80,50 62,68'/%3E%3C/g%3E%3C/svg%3E\")";

const SITE_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%23b9b9b3' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='14' y='22' width='72' height='56' rx='6'/%3E%3Cline x1='14' y1='36' x2='86' y2='36'/%3E%3C/g%3E%3Cg fill='%23b9b9b3'%3E%3Ccircle cx='22.5' cy='29' r='2'/%3E%3Ccircle cx='30.5' cy='29' r='2'/%3E%3Ccircle cx='38.5' cy='29' r='2'/%3E%3C/g%3E%3C/svg%3E\")";

const IDEA_ICON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='none' stroke='%232e6bff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M50 22c-14 0-25 11-25 25 0 9 5 15 9 19 3 3 4 6 4 10h24c0-4 1-7 4-10 4-4 9-10 9-19 0-14-11-25-25-25z'/%3E%3Cline x1='42' y1='84' x2='58' y2='84'/%3E%3Cline x1='44' y1='90' x2='56' y2='90'/%3E%3C/g%3E%3C/svg%3E\")";

const VARIANT_STYLE: Record<NonNullable<PhotoProps["variant"]>, CSSProperties> = {
  person: {
    backgroundImage: PERSON_ICON,
    backgroundPosition: "center 60%",
    backgroundSize: "58% auto",
  },
  work: {
    backgroundImage: WORK_ICON,
    backgroundPosition: "center 60%",
    backgroundSize: "42% auto",
  },
  site: {
    backgroundImage: SITE_ICON,
    backgroundPosition: "center 60%",
    backgroundSize: "62% auto",
  },
  idea: {
    backgroundImage: `${IDEA_ICON}, radial-gradient(circle, rgba(46, 107, 255, 0.32) 0%, rgba(46, 107, 255, 0) 65%)`,
    backgroundPosition: "center 60%, center 55%",
    backgroundSize: "36% auto, 75% 75%",
  },
};

export default function Photo({ alt, src, className = "", variant = "person" }: PhotoProps) {
  if (src) {
    return (
      <Image
        src={src}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
        alt={alt}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`bg-surface-2 bg-no-repeat ${variant === "idea" ? "animate-[idea-pulse_3s_ease-in-out_infinite]" : ""} ${className}`}
      style={VARIANT_STYLE[variant]}
      role="img"
      aria-label={alt}
    />
  );
}
