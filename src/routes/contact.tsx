import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";
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

      {/* Contact info */}
      <section className="px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, title: "Clinic", detail: "Rawalpindi, Pakistan" },
              { icon: Phone, title: "Phone", detail: "+92 300 000 0000" },
              { icon: Mail, title: "Email", detail: "info@drwaseemkhan.com" },
              { icon: Clock, title: "Hours", detail: "Mon – Sat • 10 AM – 6 PM" },
            ].map((c, i) => (
              <FadeUp key={c.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 text-center shadow-premium">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[#eaf1fa] text-primary">
                    <c.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment form + map */}
      <section id="appointment" className="scroll-mt-24 bg-[oklch(0.98_0.01_240)] px-6 py-24 md:px-8 md:py-32">
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
                Fill in the form below and the clinic will get back to you to
                confirm your consultation.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required className="sm:col-span-2" />
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
                    <option value="" disabled>Choose a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
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
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-border shadow-premium">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps?q=Rawalpindi,Pakistan&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl border border-border bg-white p-8 shadow-premium">
                <h3 className="text-lg font-semibold text-primary">Consultation Hours</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    ["Monday – Friday", "10:00 AM – 6:00 PM"],
                    ["Saturday", "10:00 AM – 2:00 PM"],
                    ["Sunday", "Closed"],
                  ].map(([d, t]) => (
                    <li key={d} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="text-primary/80">{d}</span>
                      <span className="font-medium text-primary">{t}</span>
                    </li>
                  ))}
                </ul>
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

      <CtaBand />
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
