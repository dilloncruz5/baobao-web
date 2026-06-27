import { motion } from "motion/react";
import type { ReactNode } from "react";
import g3 from "@/assets/bao-image-cropped.png";
import storyHero from "@/assets/ChatGPT_Image_Jun_23__2026_at_10_24_44_PM-removebg-preview.png";

function Panel({
  eyebrow,
  title,
  body,
  image,
  reverse = false,
  tone,
}: {
  eyebrow: string;
  title: ReactNode;
  body: string;
  image: string;
  reverse?: boolean;
  tone: "cream" | "ink";
}) {
  const dark = tone === "ink";

  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-24 md:py-32 px-6 mx-auto max-w-[1400px] ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-6"
      >
        <div
          className={`text-xs uppercase tracking-[0.3em] mb-5 ${
            dark ? "text-amber" : "text-primary"
          }`}
        >
          {eyebrow}
        </div>

        <h2
          className={`font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] ${
            dark ? "text-background" : "text-ink"
          }`}
        >
          {title}
        </h2>

        <p
          className={`mt-7 text-lg leading-relaxed max-w-lg ${
            dark ? "text-background/75" : "text-foreground/75"
          }`}
        >
          {body}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-6"
      >
        <div className="relative aspect-[3/2] w-full rounded-[2rem] overflow-hidden bg-[#f0e8d8]">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function VisionMission() {
  return (
    <>
      {/* VISION */}
      <section className="relative bg-cream overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-ember opacity-25 blur-3xl animate-float-slow"
        />

        <Panel
          eyebrow="Our Vision"
          title={
            <>
              Indian-flavoured baos,{" "}
              <em className="italic text-gradient-warm">
                for the world.
              </em>
            </>
          }
          body="To become a global brand of Indian-flavoured baos while keeping bao more street-food than fine-dining dish. We aim to expand rapidly and make our unique fusion of Indian flavours with Asian baos accessible to people around the world."
          image={g3}
          tone="cream"
        />
      </section>

      {/* MISSION */}
      <section className="relative bg-ink overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 animate-drift"
          style={{
            background:
              "radial-gradient(40% 40% at 80% 20%, #E96724 0%, transparent 60%), radial-gradient(50% 50% at 20% 80%, #FFB347 0%, transparent 60%)",
          }}
        />

        <div className="relative flex flex-col lg:flex-row items-center overflow-hidden w-full">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-1/2 flex justify-start items-center h-full"
          >
            <div
              aria-hidden
              className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #FFB347 0%, #E96724 40%, transparent 70%)",
                opacity: 0.18,
                filter: "blur(64px)",
              }}
            />

            <img
              src={storyHero}
              alt="Bao Bao"
              className="relative block w-full h-[400px] sm:h-[500px] lg:h-[80vh] lg:max-h-[1000px] object-contain object-left"
              loading="lazy"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="py-24 md:py-32 px-8 lg:px-16 xl:px-24 lg:w-1/2 max-w-2xl"
          >
            <div className="text-xs uppercase tracking-[0.3em] mb-5 text-amber">
              Our Mission
            </div>

            <h2 className="font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] text-background">
              Memorable, every{" "}
              <em className="italic text-gradient-warm">
                single basket.
              </em>
            </h2>

            <p className="mt-7 text-lg leading-relaxed max-w-lg text-background/75">
              To provide a unique and memorable dining experience by offering
              delicious, flavourful baos. We are committed to using only
              high-quality ingredients and providing excellent customer service
              — and to keeping prices affordable so that great food stays
              accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
