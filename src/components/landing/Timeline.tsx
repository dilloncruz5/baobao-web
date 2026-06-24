import { motion } from "motion/react";

const milestones = [
  { year: "Day One", title: "An idea on Chennai's streets", body: "A small kitchen, a big question — could a fine-dining dish belong on the street?" },
  { year: "Outlet One", title: "Our first Bao Bao opens", body: "A neighbourhood favourite is born. Word travels fast. Queues form faster." },
  { year: "Flavour Lab", title: "The fusion menu lands", body: "Tandoori, dynamite, sambal, soy onions. Indian boldness meets Asian softness." },
  { year: "South India + beyond", title: "Ten stores, seven cities", body: "From Chennai to Singapore, Bengaluru, Pondicherry, Tirupati, Madurai and Thanjavur." },
  { year: "What's next", title: "A global bao brand", body: "Our franchise programme opens the door to partners who share our obsession." },
];

const ROW = 240; // px per row

export function Timeline() {
  const count = milestones.length;
  const height = count * ROW;

  // Build smooth S-curve connecting alternating sides.
  // Right side anchor x = 88, Left side anchor x = 12 (in 0..100 viewBox).
  const points = milestones.map((_, i) => {
    const right = i % 2 === 0; // Point 1 (i=0) aligned right
    return { x: right ? 88 : 12, y: (i + 0.5) * ROW };
  });
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }

  return (
    <section className="relative bg-cream pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Journey</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-ink">
            From one kitchen <em className="italic text-gradient-warm">to many.</em>
          </h2>
        </div>

        {/* Desktop zig-zag */}
        <div className="relative hidden md:block" style={{ height }}>
          <svg
            aria-hidden
            viewBox={`0 0 100 ${height}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <defs>
              <linearGradient id="tl-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#FFD166" />
                <stop offset="50%" stopColor="#FF8C42" />
                <stop offset="100%" stopColor="#E96724" />
              </linearGradient>
            </defs>
            <motion.path
              d={d}
              fill="none"
              stroke="url(#tl-grad)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="4 6"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.9 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {milestones.map((m, i) => {
            const right = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-1/2 px-6"
                style={{
                  top: i * ROW,
                  height: ROW,
                  left: right ? "50%" : 0,
                  textAlign: right ? "left" : "right",
                }}
              >
                <div className={`relative h-full flex flex-col justify-center max-w-[460px] ${right ? "" : "ml-auto"}`}>
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-cream ${
                      right ? "-left-6" : "-right-6"
                    }`}
                  />
                  <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{m.year}</div>
                  <h3 className="font-display text-3xl lg:text-4xl text-ink leading-tight">{m.title}</h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">{m.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: simple stacked rail */}
        <div className="md:hidden relative pl-6">
          <div aria-hidden className="absolute left-1.5 top-2 bottom-2 w-px bg-primary/30" />
          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <span className="absolute -left-[1.4rem] top-2 h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-cream" />
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">{m.year}</div>
                <h3 className="font-display text-3xl text-ink leading-tight">{m.title}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
