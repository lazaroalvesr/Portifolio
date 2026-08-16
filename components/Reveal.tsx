"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
};

export default function Reveal({ children, className = "", delay = 0, blur = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        visible
          ? `translate-y-0 rotate-0 scale-100 opacity-100 ${blur ? "blur-none" : ""}`
          : `translate-y-14 -rotate-3 scale-85 opacity-0 ${blur ? "blur-md" : ""}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
