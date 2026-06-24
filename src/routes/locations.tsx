import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FloatingShapes } from "@/components/landing/FloatingShapes";
import { AnimatedCounter } from "@/components/landing/AnimatedCounter";
import { locations, cities } from "@/components/locations/locations.data";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Find your nearest Bao Bao" },
      {
        name: "description",
        content:
          "Visit Bao Bao locations across Chennai, Singapore, Pondicherry, Tirupati, Madurai, Bengaluru and Thanjavur. Get directions to your nearest store.",
      },
      { property: "og:title", content: "Find your nearest Bao Bao" },
      {
        property: "og:description",
        content: "11 stores across 7 cities and growing — get directions to your nearest Bao Bao.",
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  // Group by city, preserve order of first appearance
  const byCity = cities.map((city) => ({
    city,
    stores: locations.filter((l) => l.city === city),
  }));

  return (
    <>
      <LocationsHero />
      <LocationsStats />
      <section className="relative bg-cream py-20 md:py-24 overflow-hidden">
        {/* Subtle blurred orange/amber background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber/20 blur-[120px]" />
          <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 space-y-12">
          {byCity.map((group, gi) => (
            <div key={group.city}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-end justify-between gap-6 mb-6"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                    {String(gi + 1).padStart(2, "0")} — City
                  </div>
                  <h2 className="font-display text-4xl md:text-6xl text-ink leading-[1.1]">
                    {group.city}
                  </h2>
                </div>
                <div className="text-sm text-foreground/60">
                  {group.stores.length} {group.stores.length === 1 ? "store" : "stores"}
                </div>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {group.stores.map((s, i) => (
                  <LocationCard key={s.url} location={s} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTAStrip />
    </>
  );
}

function LocationsHero() {
  return (
    <section className="relative min-h-[80svh] w-full overflow-hidden bg-gradient-soft pt-36 pb-24">
      <FloatingShapes />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex glass-cream rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-primary items-center gap-2 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          11 stores · 7 cities · growing
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-ink"
        >
          Find your <em className="italic text-gradient-warm">nearest Bao Bao.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-7 max-w-xl mx-auto text-lg text-foreground/70"
        >
          Visit Bao Bao locations across South India and experience our signature Indian-flavoured baos —
          fine-dining flavour, served street-side.
        </motion.p>

        {/* animated pin motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 mx-auto h-40 w-40"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full bg-gradient-ember blur-2xl opacity-60" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full flex items-center justify-center"
          >
            <svg viewBox="0 0 64 64" className="h-32 w-32 drop-shadow-[0_20px_30px_rgba(233,103,36,0.45)]">
              <defs>
                <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFD166" />
                  <stop offset="50%" stopColor="#FF8C42" />
                  <stop offset="100%" stopColor="#E96724" />
                </linearGradient>
              </defs>
              <path
                d="M32 4c-11 0-20 8.6-20 19.4 0 14 20 36.6 20 36.6s20-22.6 20-36.6C52 12.6 43 4 32 4z"
                fill="url(#pinGrad)"
              />
              <circle cx="32" cy="23" r="7" fill="#FFF4E8" />
            </svg>
          </motion.div>
          <motion.span
            initial={{ scale: 0.4, opacity: 0.5 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            className="absolute left-1/2 bottom-2 -translate-x-1/2 h-4 w-12 rounded-full bg-primary/40"
          />
        </motion.div>
      </div>
    </section>
  );
}

function LocationsStats() {
  const stats = [
    { value: 11, suffix: "", label: "Locations" },
    { value: 7, suffix: "", label: "Cities" },
    { value: 100, suffix: "%", label: "Growing franchise network" },
  ];
  return (
    <section className="relative bg-background py-20 border-y border-border/50">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <div className="font-display text-6xl md:text-7xl text-gradient-warm leading-none">
              <AnimatedCounter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-4 h-px w-12 bg-primary mx-auto md:mx-0" />
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LocationCard({
  location,
  index,
}: {
  location: { name: string; city: string; url: string };
  index: number;
}) {
  return (
    <motion.a
      href={location.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative block bg-card rounded-3xl p-6 border border-border/60 shadow-soft hover:shadow-card transition-shadow overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-ember opacity-10 transition-all duration-700 group-hover:opacity-25 group-hover:scale-125"
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{location.city}</div>
            <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">{location.name}</h3>
          </div>
          <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" strokeLinejoin="round" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Get directions
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Open in Maps</span>
        </div>
      </div>
    </motion.a>
  );
}

function CTAStrip() {
  return (
    <section className="relative py-24 bg-background">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-ink leading-tight">
          Don't see a Bao Bao near you yet?
        </h2>
        <p className="mt-5 text-foreground/70 max-w-xl mx-auto">
          We're expanding fast. Bring Bao Bao to your city as a franchise partner.
        </p>
        <a
          href="/franchise"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-glow hover:scale-[1.03] transition-transform"
        >
          Become a franchise partner
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-background">→</span>
        </a>
      </div>
    </section>
  );
}
