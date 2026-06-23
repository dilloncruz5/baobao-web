import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import baoVideo2 from "@/assets/bao-animation2.webm";

const beats = [
  {
    eyebrow: "01 — Origin",
    title: "Born on Chennai's streets.",
    body: "Bao Bao started with a simple question — why should a fine-dining dish stay locked behind fine-dining prices? So we took it to the street.",
  },
  {
    eyebrow: "02 — Fusion",
    title: "Indian soul, Asian skin.",
    body: "Tandoori, sambal oelek, dynamite, soy onions — every filling is a love letter between two food cultures, tucked inside a pillow-soft bao.",
  },
  {
    eyebrow: "03 — Access",
    title: "Delicious, for everyone.",
    body: "We believe great food shouldn't break a budget. From a single Chennai outlet to ten stores across seven cities — the mission has never changed.",
  },
];

export function Storytelling() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 0], [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0, 1], [1, 1, 1]);

  return (
    <section id="story" ref={ref} className="relative bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              style={{ rotate, scale }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-card"
            >
              <video
                src={baoVideo2}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/70 to-transparent text-background">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">The Bao Bao Story</div>
                <div className="font-display text-2xl mt-1">A street-food revolution</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-16 md:gap-24 lg:pt-12">
            {beats.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{b.eyebrow}</div>
                <h3 className="font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] text-ink">{b.title}</h3>
                <p className="mt-5 text-lg text-foreground/70 max-w-md leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
