import { motion } from "motion/react";

const values = [
  {
    tag: "01",
    title: "Quality",
    body: "Only the highest-quality ingredients, with the highest standards of hygiene and cleanliness in every kitchen we run.",
    accent: "bg-gradient-warm text-primary-foreground",
  },
  {
    tag: "02",
    title: "Sustainability",
    body: "We're committed to reducing our environmental impact — eco-friendly packaging, reduced food waste, smarter sourcing.",
    accent: "bg-amber/20 text-ink",
  },
  {
    tag: "03",
    title: "Accessibility",
    body: "Great food shouldn't break a budget. We work hard to keep our prices honest and our doors open to everyone.",
    accent: "bg-foreground/10 text-ink",
  },
  {
    tag: "04",
    title: "Flavour Innovation",
    body: "We blend Indian boldness with Asian technique — and we never stop experimenting with what a bao can be.",
    accent: "bg-ink text-background",
  },
];

export function Values() {
  return (
    <section className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Values</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-ink max-w-2xl">
              Four quiet rules. <em className="italic text-gradient-warm">No compromises.</em>
            </h2>
          </div>
          <p className="max-w-sm text-foreground/70 text-lg">
            The principles that guide every bun we steam and every kitchen we open.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 auto-rows-[16rem] md:auto-rows-[18rem]">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative ${v.accent} rounded-3xl p-7 overflow-hidden shadow-soft border border-border/40`}
            >
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{v.tag}</div>
              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="font-display text-3xl md:text-4xl leading-tight">{v.title}</h3>
                <p className="mt-2 text-sm opacity-80 max-w-sm">{v.body}</p>
              </div>
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-current opacity-[0.06] transition-transform duration-700 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}