import { motion } from "motion/react";
import g2 from "@/assets/gallery-2.jpg";

export function About() {
  return (
    <section id="about" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card">
            <img src={g2} alt="A Bao Bao plate" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/70 to-transparent text-background">
              <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">About us</div>
              <div className="font-display text-2xl mt-1">Bao Bao, briefly.</div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Our Brand</div>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.2rem)] leading-[1.5] text-ink">
              A Chennai original, <em className="italic text-gradient-warm">reimagining</em> the bao.
            </h2>
            <div className="mt-8 space-y-5 text-lg text-foreground/75 leading-relaxed max-w-xl">
              <p>
                Bao Bao is a Chennai-based street-food outlet revolutionising the way people
                experience the traditional Chinese bao. We specialise in baos with Indian-flavoured
                fillings — making a fine-dining dish more street, more accessible, more <em>ours</em>.
              </p>
              <p>
                What sets us apart is a commitment to high-quality food at affordable prices. We
                believe everyone should have access to delicious food, regardless of budget. With a
                street-food vibe and honest pricing, Bao Bao is the destination for foodies who want
                a fine-dining moment without breaking the bank.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
