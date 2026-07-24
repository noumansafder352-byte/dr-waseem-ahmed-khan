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
    desc: "Comprehensive surgical care across a wide range of abdominal, gastrointestinal, and soft-tissue conditions — with careful diagnosis and modern operative technique.",
  },
  {
    icon: Activity,
    title: "Thyroid Surgery",
    desc: "Precise thyroidectomy and thyroid nodule management for benign and malignant disease, with attention to voice preservation and cosmetic outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Breast Surgery",
    desc: "Diagnostic and therapeutic breast surgical procedures, including lump excision, biopsy, and oncological surgery — delivered with sensitivity and care.",
  },
  {
    icon: Shield,
    title: "Gallbladder Surgery",
    desc: "Laparoscopic cholecystectomy for gallstone disease — a minimally invasive procedure with small incisions, less pain, and rapid recovery.",
  },
  {
    icon: Scissors,
    title: "Hernia Repair",
    desc: "Open and laparoscopic repair of inguinal, umbilical, incisional, and hiatal hernias — using modern mesh techniques for durable, long-term results.",
  },
  {
    icon: Sparkles,
    title: "Appendix Surgery",
    desc: "Minimally invasive laparoscopic appendectomy for acute appendicitis, offering faster healing, minimal scarring, and quicker return to daily life.",
  },
  {
    icon: Waves,
    title: "Varicose Vein Treatment",
    desc: "Advanced treatment options for varicose and venous conditions — from lifestyle counselling to surgical intervention when clinically indicated.",
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
      <section className="bg-[oklch(0.98_0.01_240)] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 50}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eaf1fa] text-primary">
                      <s.icon size={26} />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-primary">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
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
