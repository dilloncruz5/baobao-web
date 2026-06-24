import { motion } from "motion/react";

export function WhyWeExist() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 animate-drift"
        style={{
          background:
            "radial-gradient(50% 50% at 20% 20%, #FFD166 0%, transparent 60%), radial-gradient(50% 50% at 80% 80%, #FF8C42 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Why Bao Bao exists</div>
          <h2 className="font-display text-[clamp(2.8rem,9vw,8rem)] leading-[1.1] text-ink">
            Because great food <em className="italic text-gradient-warm">belongs to everyone</em> — not just
            the table with the white tablecloth.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
