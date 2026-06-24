import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 11, suffix: "", label: "Stores across South India" },
  { value: 6, suffix: "", label: "Cities and counting" },
  { value: 7, suffix: "", label: "Signature bao flavours" },
  { value: 100, suffix: "%", label: "Indian-flavoured filling, every basket" },
];

export function Stats() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-ink text-background">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 animate-drift"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 30%, #E96724 0%, transparent 60%), radial-gradient(50% 50% at 80% 70%, #FFB347 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-amber mb-4">By the numbers</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.1]">
            A small kitchen, <em className="italic text-gradient-warm">growing fast.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-display text-6xl md:text-7xl text-gradient-warm leading-none">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-4 text-sm text-background/70 max-w-[14rem]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}