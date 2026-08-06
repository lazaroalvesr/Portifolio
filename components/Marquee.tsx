type MarqueeProps = {
  items: string[];
  variant?: "large" | "small";
};

export default function Marquee({ items, variant = "large" }: MarqueeProps) {
  const isSmall = variant === "small";

  const line = (
    <span className="flex items-center">
      {items.map((item) => (
        <span
          key={item}
          className="ml-6.5 flex items-center gap-6.5 whitespace-nowrap pr-6.5 text-[clamp(30px,5vw,54px)] font-extrabold tracking-[-2px]"
        >
          {item}
          <em className="text-accent not-italic" aria-hidden="true">✦</em>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-line py-6.5">
      <div
        className={`flex w-max animate-[marquee-slide_26s_linear_infinite] ${isSmall ? "[animation-duration:32s] [animation-direction:reverse]" : ""}`}
        aria-hidden="true"
      >
        {line}
        {line}
        {line}
        {line}
      </div>
      <span className="sr-only">{items.join(", ")}</span>
    </div>
  );
}
