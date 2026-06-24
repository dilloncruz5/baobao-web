import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-gradient-warm" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 animate-drift"
        style={{
          background:
            "radial-gradient(40% 40% at 20% 30%, #FFD166 0%, transparent 60%), radial-gradient(50% 50% at 80% 70%, #FF8C42 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs uppercase tracking-[0.3em] opacity-80 mb-6">Come hungry</div>
          <h2 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[1.1]">
            Find your nearest <br />
            <em className="italic">Bao Bao.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-lg opacity-90">
            Nine stores across Chennai, Pondicherry, Tirupati, Madurai, Bengaluru and Thanjavur —
            and growing fast. Walk in, take away, taste the difference.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/locations"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ink text-background px-8 py-5 text-sm font-medium shadow-card overflow-hidden hover:scale-[1.03] transition-transform"
            >
              <span className="relative z-10">See all locations</span>
              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 shimmer-mask animate-shimmer opacity-50" />
            </Link>
            <Link to="/franchise" className="text-sm opacity-90 hover:opacity-100 underline-offset-4 hover:underline">
              Or partner with us →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
