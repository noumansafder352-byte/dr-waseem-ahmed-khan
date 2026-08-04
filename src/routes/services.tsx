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
import thyroidSurgeryImage from "@/assets/thyroid-surgery.png.asset.json";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";
import { TreatmentTimeline } from "@/components/site/TreatmentTimeline";
import { FaqItem } from "@/components/site/FaqItem";

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
    image: "/image/thyroid.png",
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
    image: "/image/gallbladder-surgery.png",
  },
  {
    icon: Scissors,
    title: "Hernia Repair",
    tag: "Durable Results",
    desc: "Open and laparoscopic repair of inguinal, umbilical, incisional, and hiatal hernias — using modern mesh techniques for durable, long-term results.",
    image: "/image/hernia-repair.png",
  },
  {
    icon: Sparkles,
    title: "Appendix Surgery",
    tag: "Minimally Invasive",
    desc: "Minimally invasive laparoscopic appendectomy for acute appendicitis, offering faster healing, minimal scarring, and quicker return to daily life.",
    image: "/image/appendix-surgery.png",
  },
  {
    icon: Waves,
    title: "Varicose Vein Treatment",
    tag: "Venous Care",
    desc: "Advanced treatment options for varicose and venous conditions — from lifestyle counselling to surgical intervention when clinically indicated.",
    image: "/image/varicose-vein-treatment.png",
  },
];

const process = [
  {
    icon: UserRound,
    title: "Consultation",
    desc: "Detailed discussion of your symptoms, history, and concerns.",
  },
  {
    icon: ScanSearch,
    title: "Diagnosis",
    desc: "Thorough evaluation with the appropriate investigations.",
  },
  {
    icon: FileText,
    title: "Treatment Plan",
    desc: "A personalized, evidence-based plan reviewed with you.",
  },
  { icon: Syringe, title: "Surgery", desc: "Safe, precise, modern surgical technique." },
  { icon: HeartPulse, title: "Recovery", desc: "Guided post-operative recovery and support." },
  {
    icon: CalendarCheck,
    title: "Follow-Up",
    desc: "Ongoing follow-up to ensure the best outcome.",
  },
];

const serviceFaqs = [
  {
    q: "What conditions are treated under General Surgery?",
    a: "General Surgery covers a wide range of conditions, including hernias, gallbladder disease, appendix problems, breast conditions, thyroid disorders, and other abdominal surgical conditions.",
  },
  {
    q: "When is thyroid surgery recommended?",
    a: "Thyroid surgery may be recommended for thyroid nodules, goiter, hyperthyroidism, or when thyroid cancer is suspected or confirmed.",
  },
  {
    q: "Do all breast lumps require surgery?",
    a: "No. Many breast lumps are benign. A thorough examination and appropriate investigations help determine whether surgery is necessary.",
  },
  {
    q: "What are the common symptoms of gallbladder disease?",
    a: "Common symptoms include pain in the upper right abdomen, nausea, vomiting, bloating, and discomfort after eating fatty meals.",
  },
  {
    q: "Can a hernia heal without surgery?",
    a: "No. Hernias do not heal on their own and usually require surgical repair to prevent complications.",
  },
  {
    q: "What are the warning signs of appendicitis?",
    a: "Severe pain in the lower right abdomen, fever, nausea, vomiting, and loss of appetite are common signs that require immediate medical attention.",
  },
  {
    q: "When should I seek treatment for varicose veins?",
    a: "You should seek treatment if you experience pain, swelling, heaviness, skin changes, or if the veins interfere with your daily activities.",
  },
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
      <section className="px-6 py-10 md:px-8 md:py-14">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              Our Approach
            </span>
            <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
              Trusted surgical care, tailored to you
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every procedure is planned around your specific condition, health history, and goals.
              Dr. Waseem combines decades of surgical experience with modern, minimally invasive
              techniques to deliver the safest and most effective outcome possible.
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
                A comprehensive range of general and laparoscopic surgical procedures, delivered
                with advanced techniques and evidence-based, patient-centered care.
              </p>
              <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#182F58] via-[#1F72B9] to-[#19979C]" />
            </div>
          </FadeUp>

          {/* Editorial service panels */}
          <div className="mt-20 grid gap-7 md:grid-cols-2">
            {services.map((s, i) => {
              const accents = [
                "#182F58",
                "#1F72B9",
                "#19979C",
                "#529542",
                "#1F72B9",
                "#19979C",
                "#182F58",
              ];
              const accent = accents[i % accents.length];
              const num = String(i + 1).padStart(2, "0");
              return (
                <FadeUp key={s.title} delay={i * 60}>
                  <article className="group relative flex h-full overflow-hidden rounded-[28px] bg-white shadow-premium ring-1 ring-border/60 transition-[transform,box-shadow] duration-[400ms] ease-out hover:-translate-y-1 hover:shadow-premium-lg">
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

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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

      {/* Treatment Process — premium animated timeline */}
      <section className="relative overflow-hidden px-6 pt-14 pb-24 md:px-8 md:pt-20 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 0%, rgba(31,114,185,0.06) 0%, transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(25,151,156,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#19979C]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#19979C]">
                  Patient Journey
                </span>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#19979C]" />
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold text-primary md:text-5xl">
                From consultation to complete recovery
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                A carefully guided pathway — every stage designed around clarity, safety, and your
                comfort.
              </p>
              <div className="mx-auto mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#182F58] via-[#1F72B9] to-[#19979C]" />
            </div>
          </FadeUp>

          <div className="mt-20">
            <TreatmentTimeline steps={process} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-14 md:px-8 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#1F72B9_0%,transparent_70%)] opacity-[0.05]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/70 shadow-sm backdrop-blur">
                <span className="text-primary/50">011</span>
                <span className="h-1 w-1 rounded-full bg-[#529542]" />
                FAQs
              </span>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                Answers to common questions about our surgical services and procedures.
              </p>
            </div>
          </FadeUp>
          <div className="mt-12 space-y-3 md:space-y-4">
            {serviceFaqs.map((f, i) => (
              <FaqItem key={i} index={i + 1} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
