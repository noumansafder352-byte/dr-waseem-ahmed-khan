import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Shield,
  Scissors,
  Sparkles,
  Waves,
  UserRound,
  ScanSearch,
  FileText,
  Syringe,
  CalendarCheck,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";
import { TreatmentTimeline } from "@/components/site/TreatmentTimeline";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dr. Waseem Ahmad Khan" },
      {
        name: "description",
        content:
          "General surgery, thyroid, breast, gallbladder, hernia, appendix, and varicose vein surgery — delivered with precision and evidence-based care.",
      },
      { property: "og:title", content: "Surgical Services — Dr. Waseem Ahmad Khan" },
      {
        property: "og:description",
        content:
          "A comprehensive range of general and laparoscopic surgical procedures, tailored to each patient.",
      },
    ],
  }),
  component: Services,
});

const HERO =
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80";

const services = [
  {
    icon: Stethoscope,
    title: "General Surgery",
    tag: "Comprehensive Care",
    desc: "Comprehensive surgical care across a wide range of abdominal, gastrointestinal, and soft-tissue conditions — with careful diagnosis and modern operative technique.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Activity,
    title: "Thyroid Surgery",
    tag: "Endocrine Precision",
    desc: "Precise thyroidectomy and thyroid nodule management for benign and malignant disease, with attention to voice preservation and cosmetic outcomes.",
    image:
      "https://images.unsplash.com/photo-1666214277657-e668a2183a34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    title: "Breast Surgery",
    tag: "Sensitive & Precise",
    desc: "Diagnostic and therapeutic breast surgical procedures, including lump excision, biopsy, and oncological surgery — delivered with sensitivity and care.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Shield,
    title: "Gallbladder Surgery",
    tag: "Laparoscopic",
    desc: "Laparoscopic cholecystectomy for gallstone disease — a minimally invasive procedure with small incisions, less pain, and rapid recovery.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Scissors,
    title: "Hernia Repair",
    tag: "Durable Results",
    desc: "Open and laparoscopic repair of inguinal, umbilical, incisional, and hiatal hernias — using modern mesh techniques for durable, long-term results.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "Appendix Surgery",
    tag: "Minimally Invasive",
    desc: "Minimally invasive laparoscopic appendectomy for acute appendicitis, offering faster healing, minimal scarring, and quicker return to daily life.",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Waves,
    title: "Varicose Vein Treatment",
    tag: "Venous Care",
    desc: "Advanced treatment options for varicose and venous conditions — from lifestyle counselling to surgical intervention when clinically indicated.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
  },
];

const process = [
  { icon: UserRound, title: "Consultation", desc: "Detailed discussion of your symptoms, history, and concerns." },
  { icon: ScanSearch, title: "Diagnosis", desc: "Thorough evaluation with the appropriate investigations." },
  { icon: FileText, title: "Treatment Plan", desc: "A personalized, evidence-based plan reviewed with you." },
  { icon: Syringe, title: "Surgery", desc: "Safe, precise, modern surgical technique." },
  { icon: HeartPulse, title: "Recovery", desc: "Guided post-operative recovery and support." },
  { icon: CalendarCheck, title: "Follow-Up", desc: "Ongoing follow-up to ensure the best outcome." },
];

function Services() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="Surgical Services"
        title="Comprehensive general & laparoscopic surgery"
        subtitle="A full range of surgical procedures delivered with precision, modern technique, and a personalised approach for every patient."
        image={HERO}
      />

      {/* Intro */}
      <section className="px-6 py-20 md:px-8 md:py-28">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              Our Approach
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
              Trusted surgical care, tailored to you
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every procedure is planned around your specific condition, health
              history, and goals. Dr. Waseem combines decades of surgical
              experience with modern, minimally invasive techniques to deliver
              the safest and most effective outcome possible.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Service cards */}
      <section className="relative overflow-hidden bg-[oklch(0.985_0.008_240)] px-6 py-24 md:px-8 md:py-32">
        {/* Decorative background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1F72B9]/5 blur-3xl" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#19979C]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Section header */}
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#19979C]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#19979C]">
                  Surgical Expertise
                </span>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#19979C]" />
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.5rem]">
                Our Surgical Services
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A comprehensive range of general and laparoscopic surgical procedures,
                delivered with advanced techniques and evidence-based, patient-centered care.
              </p>
              <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#182F58] via-[#1F72B9] to-[#19979C]" />
            </div>
          </FadeUp>

          {/* Editorial service panels */}
          <div className="mt-20 grid gap-7 md:grid-cols-2">
            {services.map((s, i) => {
              const accents = ["#182F58", "#1F72B9", "#19979C", "#529542", "#1F72B9", "#19979C", "#182F58"];
              const accent = accents[i % accents.length];
              const num = String(i + 1).padStart(2, "0");
              return (
                <FadeUp key={s.title} delay={i * 60}>
                  <article
                    className="group relative flex h-full overflow-hidden rounded-[28px] bg-white shadow-premium ring-1 ring-border/60 transition-[transform,box-shadow] duration-[400ms] ease-out hover:-translate-y-1 hover:shadow-premium-lg"
                  >
                    {/* Left accent bar */}
                    <span
                      className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-[0.25] transition-transform duration-[500ms] ease-out group-hover:scale-y-100"
                      style={{ backgroundColor: accent }}
                    />

                    {/* Content column */}
                    <div className="relative flex flex-1 flex-col p-8 md:p-9">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className="text-xs font-semibold uppercase tracking-[0.24em]"
                          style={{ color: accent }}
                        >
                          {s.tag}
                        </span>
                        <span className="font-display text-2xl leading-none text-primary/15 transition-colors duration-[400ms] group-hover:text-primary/30">
                          {num}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mt-6">
                        <div
                          className="grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-[400ms] ease-out group-hover:-rotate-6 group-hover:scale-110"
                          style={{ backgroundColor: `${accent}12` }}
                        >
                          <s.icon size={26} style={{ color: accent }} />
                        </div>
                      </div>

                      <h3 className="mt-6 font-display text-2xl font-semibold leading-tight tracking-tight text-primary">
                        {s.title}
                      </h3>

                      <div
                        className="mt-3 h-[2px] w-10 rounded-full transition-[width] duration-[400ms] ease-out group-hover:w-24"
                        style={{ backgroundColor: accent }}
                      />

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>

                    {/* Image column */}
                    <div className="relative hidden w-[38%] shrink-0 overflow-hidden md:block">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${s.image})` }}
                      />
                      <div
                        className="absolute inset-0 opacity-80"
                        style={{
                          background: `linear-gradient(150deg, ${accent} 0%, ${accent}CC 40%, transparent 100%)`,
                        }}
                      />
                      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Treatment Process
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                From consultation to complete recovery
              </h2>
            </div>
          </FadeUp>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <FadeUp key={p.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-white p-7 shadow-premium">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#eaf1fa] text-primary">
                      <p.icon size={22} />
                    </div>
                    <span className="font-serif text-2xl text-primary/25">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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
