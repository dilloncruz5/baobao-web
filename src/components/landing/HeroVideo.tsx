import { motion, type Variants } from "motion/react";
import { Link } from "@tanstack/react-router";
import { FloatingShapes } from "./FloatingShapes";
import baoVideo1 from "@/assets/bao-animation1.webm";

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 + i * 0.08 },
  }),
};

export function HeroVideo() {
  const line1 = ["Indian", "flavour,", "bao"];
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-soft">
      <FloatingShapes />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute top-28 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="glass-cream rounded-full px-2 md:px-4 py-1 text-[10px] md:text-xs tracking-wide md:tracking-wider uppercase text-primary flex items-center gap-1 md:gap-2 w-full md:w-auto justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Now serving across 6 cities in India
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-40 pb-20 md:pt-44 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h1 className="font-display text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.97] text-ink">
              {line1.map((w, i) => (
                <span key={i} className="inline-block mr-[0.25em] align-bottom">
                  <motion.span
                    custom={i}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    className="inline-block"
                  >
                    {i === 2 ? <em className="italic text-gradient-warm">{w}</em> : w}
                  </motion.span>
                </span>
              ))}
              <span className="inline-block align-bottom">
                <motion.span custom={3} variants={word} initial="hidden" animate="show" className="inline-block">
                  <em className="italic text-gradient-warm">reimagined.</em>
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-7 max-w-md text-lg text-foreground/70 leading-relaxed"
            >
              Bao Bao is a Chennai-born street-food brand revolutionising the way India eats the
              traditional Chinese bao — fine-dining flavour, street-food soul, everyday prices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/locations"
                className="group inline-flex items-center gap-3 rounded-full bg-ink text-background px-7 py-4 text-sm font-medium shadow-card hover:scale-[1.02] transition-transform"
              >
                Find a store
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link to="/franchise" className="text-sm text-foreground/70 hover:text-primary transition-colors underline-offset-4 hover:underline">
                Become a franchise partner →
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square w-full max-w-[640px] mx-auto">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-70 bg-gradient-ember scale-90" />
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] glass-cream shadow-card">
                <video
                  src={baoVideo1}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream/60 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 shadow-soft"
              >
                <div className="text-[10px] uppercase tracking-widest text-foreground/60">Stores</div>
                <div className="font-display text-lg md:text-2xl text-ink">
                  11 & growing
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-12 glass-cream rounded-2xl px-4 py-3 shadow-soft"
              >
                <div className="text-[10px] uppercase tracking-widest text-primary/80">
                  Born in
                </div>
                <div className="font-display text-lg md:text-2xl text-ink">
                  Chennai
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/50 flex flex-col items-center gap-2"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}
