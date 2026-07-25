import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  GraduationCap,
  Shield,
  HeartPulse,
  Gem,
  Microscope,
  UserRound,
  Crosshair,
  Stethoscope,
  BriefcaseMedical,
  BadgeCheck,
  ScrollText,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maj Gen (Rtd) Waseem Ahmad Khan" },
      {
        name: "description",
        content:
          "Meet Maj Gen (Rtd) Waseem Ahmad Khan — a distinguished General & Laparoscopic Surgeon with a distinguished career in military healthcare and surgical education.",
      },
      { property: "og:title", content: "About — Maj Gen (Rtd) Waseem Ahmad Khan" },
      {
        property: "og:description",
        content:
          "Distinguished General & Laparoscopic Surgeon — decades of clinical excellence, leadership, and compassionate patient care.",
      },
    ],
  }),
  component: About,
});

const HERO =
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=2000&q=80";
const PORTRAIT =
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80";

const timeline = [
  { title: "Head of Surgery — CMH", detail: "Led the Department of Surgery at Combined Military Hospital." },
  { title: "Head of Surgery — PEMH", detail: "Led the Department of Surgery at Pakistan Emirates Military Hospital." },
  { title: "Professor of Surgery", detail: "Army Medical College, Rawalpindi — training the next generation of surgeons." },
  { title: "Councillor — CPSP", detail: "College of Physicians & Surgeons Pakistan." },
  { title: "Regional Director — CPSP Rawalpindi", detail: "Overseeing regional surgical education and standards." },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "Honest advice and transparent guidance at every step of your care." },
  { icon: HeartPulse, title: "Compassion", desc: "Every patient treated with dignity, warmth, and unwavering empathy." },
  { icon: Gem, title: "Excellence", desc: "A commitment to the highest surgical and clinical standards worldwide." },
  { icon: Microscope, title: "Evidence-Based", desc: "Modern, research-driven treatment decisions grounded in science." },
  { icon: UserRound, title: "Patient-Centered", desc: "Personalized plans built around your individual needs and goals." },
  { icon: Crosshair, title: "Precision", desc: "Meticulous surgical technique and uncompromising attention to detail." },
];

const valueAccents = ["#182F58", "#529542", "#1F72B9", "#19979C", "#182F58", "#529542"];

function About() {
  return (
    <SiteLayout transparentHeader>
      <PageHero
        eyebrow="About the Surgeon"
        title="A career defined by excellence in surgical care"
        subtitle="Meet Maj Gen (Rtd) Waseem Ahmad Khan — a distinguished General & Laparoscopic Surgeon whose life's work bridges military healthcare, surgical education, and compassionate patient care."
        image={HERO}
      />

      {/* Meet the Surgeon */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-5">
          <FadeUp className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl shadow-premium-lg">
              <img src={PORTRAIT} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </FadeUp>
          <FadeUp delay={120} className="lg:col-span-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Meet the Surgeon
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                Experience. Precision. <em className="italic text-secondary">Compassion.</em>
              </h2>
              <div className="mt-6 space-y-5 text-base leading-[1.9] text-muted-foreground md:text-lg">
                <p>
                  Maj Gen (Rtd) Waseem Ahmad Khan, HI (M), is a distinguished
                  General & Laparoscopic Surgeon with an accomplished career in
                  military healthcare, surgical education, and advanced patient
                  care.
                </p>
                <p>
                  His approach combines decades of clinical expertise with genuine
                  compassion, ensuring every patient receives safe, personalized,
                  and evidence-based treatment. He has trained generations of
                  surgeons and continues to serve as a leader in the surgical
                  community of Pakistan.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Professional Credentials — Editorial Split */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fbfd] to-white" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 20%, rgba(25,151,156,0.09), transparent 45%), radial-gradient(circle at 10% 90%, rgba(31,114,185,0.07), transparent 50%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-stretch gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Editorial list */}
          <div className="order-2 flex flex-col lg:order-1">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 shadow-premium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#529542]" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                  Professional Credentials
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-primary md:text-5xl lg:text-[3.2rem]">
                Academic Excellence &{" "}
                <em className="italic font-normal text-[#19979C]">Surgical Expertise</em>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.85] text-muted-foreground">
                Advanced training, internationally recognized qualifications, and
                decades of leadership in General and Laparoscopic Surgery.
              </p>
            </FadeUp>

            <ul className="mt-10 flex-1 divide-y divide-border/60">
              {[
                {
                  code: "MBBS",
                  desc: "Bachelor of Medicine & Surgery — foundational medical training.",
                  accent: "#182F58",
                  icon: Stethoscope,
                },
                {
                  code: "FCPS",
                  desc: "Fellow of the College of Physicians & Surgeons — General Surgery.",
                  accent: "#1F72B9",
                  icon: BriefcaseMedical,
                },
                {
                  code: "FACS",
                  desc: "Fellow of the American College of Surgeons — international recognition.",
                  accent: "#19979C",
                  icon: BadgeCheck,
                },
                {
                  code: "CHPE",
                  desc: "Certificate in Health Professions Education — academic leadership.",
                  accent: "#529542",
                  icon: GraduationCap,
                },
                {
                  code: "Diploma in Surgery",
                  desc: "Postgraduate Diploma — AFPGMI advanced surgical training.",
                  accent: "#1F72B9",
                  icon: ScrollText,
                },
              ].map((q, i) => (
                <FadeUp key={q.code} delay={140 + i * 70}>
                  <li className="group flex items-start gap-5 py-6">
                    <div
                      className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full transition-all duration-[350ms] ease-out group-hover:scale-110"
                      style={{
                        backgroundColor: `${q.accent}0F`,
                        color: q.accent,
                      }}
                    >
                      <q.icon size={20} strokeWidth={1.7} />
                    </div>
                    <div className="flex-1">
                      <h3 className="inline-block font-serif text-[1.15rem] font-semibold leading-tight text-primary transition-all duration-[350ms] ease-out group-hover:text-[1.28rem]">
                        {q.code}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {q.desc}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>

          {/* Right — Clean image */}
          <FadeUp delay={80} className="order-1 lg:order-2">
            <div className="relative h-full min-h-[520px]">
              <div
                className="relative h-full overflow-hidden rounded-[24px] border border-white/60"
                style={{
                  boxShadow:
                    "0 2px 6px rgba(24,47,88,0.06), 0 30px 70px -24px rgba(24,47,88,0.30)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80"
                  alt="Consultant surgeon in clinical setting"
                  className="h-full min-h-[520px] w-full object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Leadership & Experience — Executive Journey */}
      <section className="relative overflow-hidden px-6 pt-16 pb-32 md:px-8 md:pt-20 md:pb-44">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fafd] to-white" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 40% at 10% 20%, rgba(31,114,185,0.08), transparent 60%), radial-gradient(ellipse 45% 35% at 90% 80%, rgba(25,151,156,0.08), transparent 60%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 400"
        >
          <path d="M0,200 Q300,80 600,200 T1200,200" stroke="#182F58" strokeWidth="1" fill="none" />
          <path d="M0,240 Q300,120 600,240 T1200,240" stroke="#19979C" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 shadow-premium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1F72B9]" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                  Leadership & Experience
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-primary md:text-6xl">
                A distinguished{" "}
                <em className="italic font-normal text-[#1F72B9]">journey</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Decades of service defining surgical leadership, education, and
                institutional excellence across Pakistan's most respected medical
                institutions.
              </p>
            </div>
          </FadeUp>

          {/* Desktop: Horizontal executive pathway */}
          <div className="relative mt-20 hidden lg:block">
            <svg
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[92px] mx-auto"
              width="100%"
              height="60"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="journey-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#182F58" stopOpacity="0.15" />
                  <stop offset="25%" stopColor="#1F72B9" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#19979C" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#529542" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#182F58" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              <path
                d="M40,30 Q260,-10 480,30 T920,30 T1160,30"
                stroke="url(#journey-line)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 6"
              />
            </svg>

            <ol className="relative grid grid-cols-5 gap-4">
              {timeline.map((t, i) => {
                const accents = ["#182F58", "#1F72B9", "#19979C", "#529542", "#182F58"];
                const accent = accents[i];
                const offset = i % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-16";
                return (
                  <FadeUp key={t.title} delay={i * 120}>
                    <li className={`group relative flex flex-col items-center ${offset}`}>
                      <div
                        className="mb-3 rounded-full border border-border bg-white/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] backdrop-blur transition-all duration-[400ms] group-hover:border-transparent"
                        style={{ color: accent }}
                      >
                        Milestone 0{i + 1}
                      </div>
                      <div className="relative">
                        <div
                          aria-hidden
                          className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-[450ms] group-hover:opacity-60"
                          style={{ backgroundColor: accent }}
                        />
                        <div
                          className="relative grid h-16 w-16 place-items-center rounded-full border border-border bg-white shadow-premium transition-all duration-[400ms] group-hover:shadow-premium-lg"
                          style={{ boxShadow: "0 0 0 6px rgba(255,255,255,0.95)" }}
                        >
                          <div
                            className="grid h-11 w-11 place-items-center rounded-full text-white"
                            style={{
                              background: `linear-gradient(140deg, ${accent} 0%, ${accent}cc 100%)`,
                            }}
                          >
                            <Award size={18} strokeWidth={1.8} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative mt-6 w-full rounded-2xl border border-border/70 bg-white/90 p-5 text-center backdrop-blur transition-all duration-[400ms] group-hover:-translate-y-1 group-hover:border-transparent"
                        style={{
                          boxShadow:
                            "0 1px 2px rgba(24,47,88,0.04), 0 10px 30px -14px rgba(24,47,88,0.12)",
                        }}
                      >
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-6 top-0 h-px origin-center scale-x-0 transition-transform duration-[450ms] group-hover:scale-x-100"
                          style={{ backgroundColor: accent }}
                        />
                        <h3 className="font-serif text-[1.05rem] font-semibold leading-snug text-primary">
                          {t.title}
                        </h3>
                        <div
                          className="mx-auto mt-2 h-px w-6 transition-all duration-[400ms] group-hover:w-10"
                          style={{ backgroundColor: accent }}
                        />
                        <p className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">
                          {t.detail}
                        </p>
                      </div>
                    </li>
                  </FadeUp>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet fallback */}
          <ol className="relative mt-16 space-y-8 lg:hidden">
            <div
              aria-hidden
              className="absolute bottom-4 left-7 top-4 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(31,114,185,0.35), rgba(25,151,156,0.35), transparent)",
              }}
            />
            {timeline.map((t, i) => {
              const accents = ["#182F58", "#1F72B9", "#19979C", "#529542", "#182F58"];
              const accent = accents[i];
              return (
                <FadeUp key={t.title} delay={i * 100}>
                  <li className="group relative flex gap-5">
                    <div className="relative shrink-0">
                      <div
                        className="relative grid h-14 w-14 place-items-center rounded-full border border-border bg-white shadow-premium"
                        style={{ boxShadow: "0 0 0 5px rgba(255,255,255,0.95)" }}
                      >
                        <div
                          className="grid h-10 w-10 place-items-center rounded-full text-white"
                          style={{
                            background: `linear-gradient(140deg, ${accent} 0%, ${accent}cc 100%)`,
                          }}
                        >
                          <Award size={16} strokeWidth={1.8} />
                        </div>
                      </div>
                    </div>
                    <div
                      className="relative flex-1 rounded-2xl border border-border/70 bg-white/90 p-5 transition-all duration-[400ms] group-hover:-translate-y-0.5 group-hover:border-transparent"
                      style={{
                        boxShadow:
                          "0 1px 2px rgba(24,47,88,0.04), 0 10px 26px -14px rgba(24,47,88,0.12)",
                      }}
                    >
                      <div
                        className="text-[0.62rem] font-semibold uppercase tracking-[0.22em]"
                        style={{ color: accent }}
                      >
                        Milestone 0{i + 1}
                      </div>
                      <h3 className="mt-1.5 font-serif text-lg font-semibold text-primary">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t.detail}
                      </p>
                    </div>
                  </li>
                </FadeUp>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-primary px-6 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              Patient Care Philosophy
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
              "Every patient deserves care that is safe, precise, and delivered
              with genuine compassion — from first consultation through complete recovery."
            </h2>
            <p className="mt-8 text-base text-white/75 md:text-lg">
              Dr. Waseem's practice is built on the belief that great surgery
              begins with great listening. Every treatment plan is tailored to
              the individual, grounded in evidence, and delivered with the
              highest standards of ethical care.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Core Values — bespoke editorial roster */}
      <section className="relative overflow-hidden bg-white px-6 pt-24 pb-14 md:px-8 md:pt-32 md:pb-20">
        {/* Subtle ambient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 50% 40% at 15% 20%, rgba(31,114,185,0.05), transparent 60%), radial-gradient(ellipse 45% 40% at 90% 85%, rgba(25,151,156,0.05), transparent 60%)",
          }}
        />
        {/* Oversized serif watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-16 hidden select-none font-serif text-[16rem] font-semibold leading-none text-primary/[0.03] lg:block"
        >
          Values
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Left — sticky editorial header */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <FadeUp>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-[#19979C]" />
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-primary">
                      Core Values
                    </span>
                  </div>
                  <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] text-primary md:text-5xl lg:text-[3.5rem]">
                    The principles that guide{" "}
                    <em className="italic font-normal text-[#19979C]">our practice</em>
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-[1.8] text-muted-foreground">
                    Six commitments that shape every consultation, every clinical
                    decision, and every surgical outcome — the quiet standards
                    behind three decades of trusted care.
                  </p>
                  <div className="mt-10 flex items-center gap-4">
                    <span className="font-serif text-5xl font-semibold text-primary">06</span>
                    <span className="max-w-[10rem] text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Guiding<br />Principles
                    </span>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Right — hairline-divided roster */}
            <div className="lg:col-span-8">
              <ul className="border-t border-border/70">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  const accent = valueAccents[i];
                  const num = String(i + 1).padStart(2, "0");
                  return (
                    <FadeUp key={v.title} delay={80 + i * 90}>
                      <li
                        className="group relative border-b border-border/70"
                        style={{ ["--accent" as never]: accent }}
                      >
                        {/* Left accent bar that grows in on hover */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute left-0 top-1/2 h-0 w-[2px] -translate-y-1/2 bg-[var(--accent)] transition-all duration-[400ms] ease-out group-hover:h-[70%]"
                        />
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 pl-6 pr-2 transition-colors duration-[400ms] md:gap-10 md:py-9 md:pl-8">
                          {/* Numeric index */}
                          <span className="font-serif text-2xl font-medium italic text-muted-foreground/70 transition-colors duration-[400ms] group-hover:text-[var(--accent)] md:text-3xl">
                            {num}
                          </span>

                          {/* Title + description */}
                          <div className="min-w-0">
                            <h3 className="font-serif text-xl font-semibold tracking-tight text-primary transition-colors duration-[400ms] group-hover:text-[var(--accent)] md:text-2xl">
                              {v.title}
                            </h3>
                            <p className="mt-2 max-w-xl text-sm leading-[1.75] text-muted-foreground md:text-[0.95rem]">
                              {v.desc}
                            </p>
                          </div>

                          {/* Icon medallion */}
                          <div className="relative shrink-0">
                            <div
                              className="grid h-14 w-14 place-items-center rounded-full border border-border/80 bg-white text-[var(--accent)] transition-all duration-[400ms] ease-out group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-white group-hover:shadow-[0_10px_30px_-10px_var(--accent)] md:h-16 md:w-16"
                            >
                              <Icon size={22} strokeWidth={1.5} />
                            </div>
                          </div>
                        </div>
                      </li>
                    </FadeUp>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>


      <CtaBand />
    </SiteLayout>
  );
}
