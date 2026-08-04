import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FadeUp } from "@/components/site/FadeUp";

import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Dr. Waseem Ahmad Khan" },
      {
        name: "description",
        content:
          "Book an appointment or reach the clinic of Dr. Waseem Ahmad Khan in Rawalpindi. Consultation hours, contact information, and appointment form.",
      },
      { property: "og:title", content: "Contact Dr. Waseem Ahmad Khan" },
      {
        property: "og:description",
        content:
          "Book an appointment, find consultation hours, and reach the clinic of Dr. Waseem Ahmad Khan.",
      },
    ],
  }),
  component: Contact,
});

const HERO =
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=2000&q=80";

const services = [
  "General Surgery",
  "Thyroid Surgery",
  "Breast Surgery",
  "Gallbladder Surgery",
  "Hernia Repair",
  "Appendix Surgery",
  "Varicose Vein Treatment",
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Appointment request received", {
        description: "The clinic will confirm your appointment shortly.",
      });
    }, 800);
  }

  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Contact & Appointments"
        title="Book a consultation with Dr. Waseem"
        subtitle="Reach the clinic directly or request an appointment online. Every enquiry receives a personal response."
        image={HERO}
      />

      {/* Appointment form + map */}
      <section
        id="appointment"
        className="scroll-mt-24 bg-[oklch(0.98_0.01_240)] px-6 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          <FadeUp className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-premium-lg md:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Appointment Request
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
                Request an appointment
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Fill in the form below and the clinic will get back to you to confirm your
                consultation.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  className="sm:col-span-2"
                />
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-primary/70">
                    Select Service
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                  >
                    <option value="" disabled>
                      Choose a service…
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Preferred Date" name="date" type="date" required />
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-primary/70">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Briefly describe your concern or reason for consultation…"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-secondary focus:ring-4 focus:ring-secondary/10"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-medical px-8 py-4 text-sm font-semibold text-medical-foreground shadow-premium transition-all hover:-translate-y-0.5 hover:bg-medical-hover disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? "Sending…" : "Request Appointment"}
                  </button>
                </div>
              </form>
            </div>
          </FadeUp>

          <FadeUp delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {/* Merged Clinic & Consultation Hours — compact premium panel */}
              <div className="group relative overflow-hidden rounded-[20px] border border-border/70 bg-white p-6 shadow-premium transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:shadow-premium-lg">
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1F72B9]/40 to-transparent" />
                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,#19979C_0%,transparent_70%)] opacity-[0.05]" />
                <span className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,#1F72B9_0%,transparent_70%)] opacity-[0.04]" />

                {/* Clinic Details */}
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-[#529542]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#529542]">
                      Visit Us
                    </span>
                  </div>
                  <h3 className="relative mt-2 text-xl font-semibold tracking-tight text-primary">
                    Clinic Details
                  </h3>

                  <ul className="relative mt-4 space-y-3 text-sm">
                    {[
                      { label: "Ibadat International Hospital, Near Liaquat Bagh Garden, College Road, Rawalpindi, Pakistan.", icon: <MapPin size={16} strokeWidth={2} /> },
                      { label: "+92 314 1555125", icon: <Phone size={16} strokeWidth={2} /> },
                      { label: "info@drwaseemahmedkhan.com", icon: <Mail size={16} strokeWidth={2} /> },
                    ].map(({ icon, label }) => (
                      <li
                        key={label}
                        className="group/row flex cursor-default items-center gap-3.5 rounded-lg px-1 py-1 transition-colors duration-[350ms]"
                      >
                        <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#1F72B9]/18 bg-[#1F72B9]/[0.09] text-[#1F72B9] backdrop-blur-sm transition-all duration-[350ms] group-hover/row:-translate-y-0.5 group-hover/row:border-[#1F72B9]/70 group-hover/row:text-primary">
                          <span
                            aria-hidden
                            className="absolute inset-0 scale-0 rounded-full bg-[#1F72B9]/25 opacity-0 transition-all duration-[350ms] group-hover/row:scale-100 group-hover/row:opacity-100"
                          />
                          <span className="relative z-10">{icon}</span>
                        </span>
                        <span className="font-medium text-primary/85 transition-colors duration-[350ms] group-hover/row:text-primary">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Elegant divider */}
                <div className="relative my-5 h-px w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1F72B9]/30 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,var(--border)_50%,transparent_100%)]" />
                </div>

                {/* Consultation Hours */}
                <div className="relative">
                  <h3 className="relative text-xl font-semibold tracking-tight text-primary">
                    Consultation Hours
                  </h3>

                  <ul className="relative mt-4 space-y-2 text-sm">
                    {[
                      ["Monday – Friday", "10:00 AM – 6:00 PM"],
                      ["Saturday", "10:00 AM – 2:00 PM"],
                      ["Sunday", "Closed"],
                    ].map(([d, t]) => (
                      <li
                        key={d}
                        className="flex items-center justify-between border-b border-dashed border-border pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-primary/75">{d}</span>
                        <span className="font-semibold text-primary">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-[20px] border border-border shadow-premium">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Preparing */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Preparing for Your Consultation
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                What to bring
              </h2>
            </div>
          </FadeUp>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "All previous medical records and reports",
              "Recent imaging studies (X-rays, ultrasound, CT, MRI)",
              "A list of current medications and dosages",
              "Details of any allergies or prior surgeries",
              "Your national ID or insurance details",
              "A list of questions for the doctor",
            ].map((item, i) => (
              <FadeUp key={item} delay={i * 50}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 shadow-premium">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-secondary" />
                  <span className="text-sm text-primary/85">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs font-medium uppercase tracking-wider text-primary/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-12 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-secondary focus:ring-4 focus:ring-secondary/10"
      />
    </div>
  );
}
