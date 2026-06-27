import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const schema = z.object({
  from_name: z.string().trim().min(2, "Please enter your full name").max(100),
  from_email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  city: z.string().trim().min(2, "City required").max(80),
  state: z.string().trim().min(2, "State required").max(80),
  country: z.string().trim().min(2, "Country required").max(80),
  message: z.string().trim().max(1000).optional(),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  from_name: "",
  from_email: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  message: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please check the form and try again.");
      return;
    }
    
    setSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_s1lbqyz",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_h7tlzub",
        {
          from_name: parsed.data.from_name,
          from_email: parsed.data.from_email,
          phone: parsed.data.phone,
          location: `${parsed.data.city}, ${parsed.data.state}, ${parsed.data.country}`,
          city: parsed.data.city,
          state: parsed.data.state,
          country: parsed.data.country,
          message: parsed.data.message || "No message",
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "tctI1qTALHul1_9RP"
        }
      );
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      if (error?.text) {
        toast.error(`EmailJS Error: ${error.text}`, {
          description: "If this issue persists, please kindly contact boabooopertions@gmail.com directly.",
          duration: 8000,
        });
      } else {
        toast.error("Something went wrong.", {
          description: "Please kindly contact boabooopertions@gmail.com directly from the contact section below.",
          duration: 8000,
        });
      }
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    setDone(true);
    setValues(initial);
    toast.success("Enquiry sent — we'll be in touch within 48 hours.");
  }

  return (
    <section id="enquire" className="relative bg-cream py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-ember opacity-25 blur-3xl animate-float-slow"
      />
      <div className="relative mx-auto max-w-[1100px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Enquire</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-ink">
            Start your <em className="italic text-gradient-warm">Bao Bao</em> journey.
          </h2>
          <p className="mt-6 text-lg text-foreground/70 max-w-md leading-relaxed">
            Tell us a little about yourself and where you'd like to open. Our franchise team will
            be in touch within 48 hours.
          </p>
          <div className="mt-10 space-y-4 text-sm text-foreground/70">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" /> Low-CapEx street-food format
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" /> Full operations and marketing support
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary" /> Proven concept across 6 cities
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-card rounded-3xl p-7 md:p-10 shadow-card border border-border/60"
        >
          {done ? (
            <div className="py-12 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground text-2xl">
                ✓
              </div>
              <h3 className="font-display text-3xl text-ink mt-6">Enquiry received.</h3>
              <p className="mt-3 text-foreground/70">
                Our franchise team will reach out within 48 hours.
              </p>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="mt-6 text-sm text-primary hover:underline"
              >
                Submit another →
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name" error={errors.from_name}>
                <input
                  name="from_name"
                  value={values.from_name}
                  onChange={(e) => update("from_name", e.target.value)}
                  className="input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email" error={errors.from_email}>
                <input
                  name="from_email"
                  type="email"
                  value={values.from_email}
                  onChange={(e) => update("from_email", e.target.value)}
                  className="input"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="input"
                  placeholder="+91 ..."
                />
              </Field>
              <Field label="City" error={errors.city}>
                <input
                  name="city"
                  value={values.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="input"
                  placeholder="City"
                />
              </Field>
              <Field label="State" error={errors.state}>
                <input
                  name="state"
                  value={values.state}
                  onChange={(e) => update("state", e.target.value)}
                  className="input"
                  placeholder="State"
                />
              </Field>
              <Field label="Country" error={errors.country}>
                <input
                  name="country"
                  value={values.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="input"
                  placeholder="Country"
                />
              </Field>
              <Field label="Message" error={errors.message} className="md:col-span-2">
                <textarea
                  name="message"
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell us about your background and goals (optional)"
                />
              </Field>

              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group relative w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-5 text-sm font-medium shadow-glow overflow-hidden disabled:opacity-60"
                >
                  <span className="relative z-10">
                    {submitting ? "Sending..." : "Become a Franchise Partner"}
                  </span>
                  <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-background transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  <span className="absolute inset-0 shimmer-mask animate-shimmer opacity-60" />
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.875rem;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color .2s, box-shadow .2s;
          outline: none;
          font-family: inherit;
        }
        .input::placeholder { color: color-mix(in oklab, var(--foreground) 45%, transparent); }
        .input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">{label}</div>
      {children}
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </label>
  );
}
