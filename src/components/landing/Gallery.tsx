import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import g1 from "@/assets/gallery-w1.jpg";
import g2 from "@/assets/gallery-w2.jpg";
import g3 from "@/assets/gallery-w3.jpg";
import g4 from "@/assets/gallery-w4.jpg";
import g5 from "@/assets/burger.png";

function ParallaxImg({
  src,
  alt,
  range = 80,
  className = "",
}: {
  src: string;
  alt: string;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-[1.75rem] ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function Gallery() {
  return (
    <section className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Lookbook
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-ink">
              A morning in <em className="italic text-gradient-warm">pictures.</em>
            </h2>
          </div>

          <p className="max-w-sm text-foreground/70 text-lg">
            Quiet moments from the kitchen, captured between batches.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-6">
          <ParallaxImg
            src={g1}
            alt="Bao 1"
            range={40}
            className="md:col-span-6 aspect-square shadow-soft"
          />

          <ParallaxImg
            src={g2}
            alt="Bao 2"
            range={40}
            className="md:col-span-6 aspect-square shadow-soft"
          />

          <ParallaxImg
            src={g3}
            alt="Bao 3"
            range={40}
            className="md:col-span-4 aspect-square shadow-soft"
          />

          <ParallaxImg
            src={g4}
            alt="Bao 4"
            range={40}
            className="md:col-span-4 aspect-square shadow-soft"
          />

          <ParallaxImg
            src={g5}
            alt="Bao 5"
            range={40}
            className="md:col-span-4 aspect-square shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
