import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { FloatingShapes } from "@/components/landing/FloatingShapes";
import { EnquiryForm } from "@/components/franchise/EnquiryForm";
import showcase from "@/assets/franchise-hero.png";
import opportunityImg from "@/assets/franchise-opportunity.jpg";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise with Bao Bao — Partner with India's fastest-growing bao brand" },
      {
        name: "description",
        content:
          "Own a piece of Bao Bao. Low-CapEx street-food franchise, full operational and marketing support, proven concept across 6 cities in South India.",
      },
      { property: "og:title", content: "Franchise with Bao Bao" },
      {
        property: "og:description",
        content: "Become a Bao Bao franchise partner — proven concept, full support, rapid expansion.",
      },
    ],
  }),
  component: FranchisePage,
});

function FranchisePage() {
  return (
    <>
      <FranchiseHero />
      <Opportunity />
      <WhyPartner />
      <Support />
      <Process />
      <EnquiryForm />
    </>
  );
}

function FranchiseHero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden bg-gradient-soft pt-36 pb-24">
      <FloatingShapes />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex glass-cream rounded-full px-4 py-1.5 text-xs tracking-wider uppercase text-primary items-center gap-2 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Franchise enquiries open · South India & beyond
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] text-ink"
          >
            Own a piece of the <em className="italic text-gradient-warm">Bao Bao</em> story.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-7 max-w-xl text-lg text-foreground/70 leading-relaxed"
          >
            We're building a global brand of Indian-flavoured baos. If you share our obsession with
            great food at honest prices, we'd love to partner with you to bring Bao Bao to your city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#enquire"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-glow hover:scale-[1.03] transition-transform"
            >
              Become a Franchise Partner
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-background transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#opportunity" className="text-sm text-foreground/70 hover:text-primary underline-offset-4 hover:underline">
              See the opportunity →
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 rounded-full blur-3xl opacity-70 bg-gradient-ember scale-90" />
          <div className="relative w-full max-w-[480px] mx-auto rounded-[2.5rem] overflow-hidden shadow-card">
            <img
              src={showcase}
              alt="Bao Bao Store"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 top-10 glass rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-[10px] uppercase tracking-widest text-foreground/60">Cities</div>
            <div className="font-display text-2xl text-ink">6 & growing</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 bottom-10 glass-cream rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="text-[10px] uppercase tracking-widest text-primary/80">Stores</div>
            <div className="font-display text-2xl text-ink">9 open</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Opportunity() {
  return (
    <section id="opportunity" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">The opportunity</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-ink"
          >
            A breakout brand, <em className="italic text-gradient-warm">at the start of its journey.</em>
          </motion.h2>
          <p className="mt-7 text-lg text-foreground/70 max-w-xl leading-relaxed">
            India's quick-service food category is exploding, and the fusion bao is one of its
            fastest-rising stars. Bao Bao is already proven in nine stores across six cities — and
            we're only just getting started. Partner with us early and grow with a brand built for
            scale.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative w-full max-w-[850px] rounded-[2rem] overflow-hidden">
            <img
              src={opportunityImg}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const reasons = [
  { tag: "01", title: "Proven concept", body: "Nine successful stores across six South Indian cities and counting." },
  { tag: "02", title: "Street-food economics", body: "Low CapEx, compact footprint, fast payback compared to a full QSR." },
  { tag: "03", title: "Distinctive menu", body: "Indian-flavoured baos no one else is doing — a built-in flavour moat." },
  { tag: "04", title: "Brand momentum", body: "Premium identity, loyal regulars, and a steady drumbeat of new openings." },
];

function WhyPartner() {
  return (
    <section className="relative bg-cream py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Why partner with us</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-ink">
            Four reasons it <em className="italic text-gradient-warm">works.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-card rounded-3xl p-8 shadow-soft border border-border/60 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-ember opacity-10 transition-all duration-700 group-hover:opacity-25 group-hover:scale-125"
              />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{r.tag}</div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-ink leading-tight">{r.title}</h3>
                <p className="mt-3 text-foreground/70 max-w-md leading-relaxed">{r.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const supports = [
  {
    title: "Operations",
    body: "Site selection, fit-out, supply chain, recipes, hygiene SOPs and ongoing audits.",
  },
  {
    title: "Training",
    body: "Hands-on training for owners and staff at our flagship Chennai kitchen.",
  },
  {
    title: "Marketing",
    body: "Launch campaigns, social media playbooks, performance marketing and brand assets.",
  },
];

function Support() {
  return (
    <section className="relative bg-ink text-background py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 animate-drift"
        style={{
          background:
            "radial-gradient(50% 50% at 20% 30%, #E96724 0%, transparent 60%), radial-gradient(50% 50% at 80% 70%, #FFB347 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-amber mb-4">Support & training</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1]">
            You bring the energy. <em className="italic text-gradient-warm">We bring the playbook.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supports.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl p-8 border border-background/15 bg-background/5 backdrop-blur-sm"
            >
              <div className="font-display text-3xl text-gradient-warm">{s.title}</div>
              <div className="mt-3 h-px w-10 bg-gold" />
              <p className="mt-5 text-background/75 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Enquiry", body: "Submit the form below and tell us about yourself." },
  { n: "02", title: "Discussion", body: "An intro call to align on city, location, and investment." },
  { n: "03", title: "Approval", body: "Site visit, financials, and franchise agreement." },
  { n: "04", title: "Launch", body: "Fit-out, training, soft launch and grand opening — together." },
];

function Process() {
  return (
    <section className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">The process</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-ink">
            Four steps to <em className="italic text-gradient-warm">opening day.</em>
          </h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          <div aria-hidden className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative h-24 w-24 mx-auto md:mx-0 rounded-full bg-gradient-warm text-primary-foreground flex items-center justify-center shadow-glow">
                <div className="font-display text-3xl">{s.n}</div>
              </div>
              <h3 className="mt-6 font-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-2 text-foreground/70 leading-relaxed max-w-xs">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
