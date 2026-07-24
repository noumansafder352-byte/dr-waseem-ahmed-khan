import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  GraduationCap,
  Users,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  BookOpenCheck,
  Compass,
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
  { icon: ShieldCheck, title: "Integrity", desc: "Honest advice and transparent guidance at every step." },
  { icon: HeartHandshake, title: "Compassion", desc: "Every patient treated with dignity, warmth, and empathy." },
  { icon: Sparkles, title: "Excellence", desc: "A commitment to the highest surgical and clinical standards." },
  { icon: BookOpenCheck, title: "Evidence-Based", desc: "Modern, research-driven treatment decisions." },
  { icon: Users, title: "Patient-Centered", desc: "Personalized plans built around your needs and goals." },
  { icon: Compass, title: "Precision", desc: "Meticulous surgical technique and attention to detail." },
];

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

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1.5 shadow-premium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#529542]" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                  Professional Credentials
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-primary md:text-5xl lg:text-[3.4rem]">
                Academic Excellence &{" "}
                <em className="italic font-normal text-[#19979C]">Surgical Expertise</em>
              </h2>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="mt-7 space-y-5 text-base leading-[1.9] text-muted-foreground md:text-[1.05rem]">
                <p>
                  Maj Gen (Rtd) Waseem Ahmad Khan, HI (M) has built a distinguished
                  career through decades of advanced surgical education,
                  professional training, and leadership in General and Laparoscopic
                  Surgery. His internationally recognized qualifications, combined
                  with extensive clinical experience, reflect a lifelong commitment
                  to excellence in patient care, surgical innovation, and medical
                  education.
                </p>
                <p>
                  Every qualification represents a milestone in his pursuit of
                  delivering safe, evidence-based, and modern surgical treatment
                  while mentoring future generations of surgeons.
                </p>
              </div>
            </FadeUp>

            <ul className="mt-10 space-y-4">
              {[
                { code: "MBBS", desc: "Bachelor of Medicine & Surgery", accent: "#182F58" },
                { code: "FCPS", desc: "Fellow — General Surgery", accent: "#1F72B9" },
                { code: "FACS", desc: "Fellow, American College of Surgeons", accent: "#19979C" },
                { code: "CHPE", desc: "Certificate in Health Professions Education", accent: "#529542" },
                { code: "Diploma in Surgery", desc: "AFPGMI", accent: "#1F72B9" },
              ].map((q, i) => (
                <FadeUp key={q.code} delay={180 + i * 80}>
                  <li className="group flex items-start gap-4">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-white shadow-premium transition-all duration-[350ms] group-hover:scale-105"
                      style={{ boxShadow: `inset 0 0 0 2px ${q.accent}18` }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={q.accent}
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="flex-1 border-b border-border/70 pb-4 transition-colors duration-300 group-hover:border-[#19979C]/40">
                      <div className="font-serif text-lg font-semibold tracking-tight text-primary">
                        {q.code}
                      </div>
                      <div className="mt-0.5 text-sm text-muted-foreground">
                        {q.desc}
                      </div>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>

            <FadeUp delay={620}>
              <div className="relative mt-12 border-l-2 border-[#529542]/60 pl-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#529542]">
                  Committed to Excellence
                </div>
                <p className="mt-3 text-[0.98rem] leading-[1.85] text-muted-foreground">
                  Delivering patient-centered surgical care through internationally
                  recognized qualifications, decades of clinical experience, and
                  continuous professional development.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right — Image */}
          <FadeUp delay={80} className="order-1 lg:order-2">
            <div className="group relative mx-auto max-w-[560px]">
              {/* Decorative background shape */}
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[36px] opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,114,185,0.10), rgba(25,151,156,0.10))",
                }}
              />
              {/* Floating geometric accents */}
              <div
                aria-hidden
                className="absolute -left-5 -top-5 h-20 w-20 rounded-2xl border border-[#1F72B9]/30 bg-white/60 backdrop-blur"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -right-5 h-24 w-24 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(82,149,66,0.18), transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="absolute -right-3 top-10 h-3 w-3 rounded-full bg-[#19979C]"
              />

              {/* Image frame */}
              <div
                className="relative overflow-hidden rounded-[24px] border border-white/60 transition-all duration-[600ms] ease-out group-hover:-translate-y-1"
                style={{
                  boxShadow:
                    "0 2px 6px rgba(24,47,88,0.06), 0 30px 70px -24px rgba(24,47,88,0.30)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 z-10 rounded-[24px] ring-1 ring-inset ring-[#1F72B9]/20"
                />
                <img
                  src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80"
                  alt="Consultant surgeon in clinical setting"
                  className="h-[560px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#182F58]/40 to-transparent"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Leadership & Experience — Executive Journey */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
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

      {/* Core Values — editorial alternating pillars */}
      <section className="relative overflow-hidden px-6 py-20 md:px-8 md:py-24">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fafd] to-white" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 15% 10%, rgba(31,114,185,0.07), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 90%, rgba(25,151,156,0.07), transparent 60%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-32 hidden -translate-x-1/2 opacity-[0.14] md:block"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="300" stroke="#1F72B9" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="220" stroke="#19979C" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="140" stroke="#182F58" strokeWidth="0.5" />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 shadow-premium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#19979C]" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                  Core Values
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-primary md:text-6xl">
                The principles that guide{" "}
                <em className="italic font-normal text-[#19979C]">our practice</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Six commitments that shape every consultation, every decision,
                and every outcome.
              </p>
            </div>
          </FadeUp>

          {/* Staggered two-column pillars with central spine */}
          <div className="relative mt-14 md:mt-16">
            {/* Central vertical spine (desktop) */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(24,47,88,0.18) 8%, rgba(31,114,185,0.22) 50%, rgba(25,151,156,0.18) 92%, transparent 100%)",
              }}
            />
            {/* Mobile spine */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-6 top-0 w-px md:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(31,114,185,0.25), transparent)",
              }}
            />

            {(() => {
              const accents = ["#182F58", "#19979C", "#529542", "#1F72B9", "#19979C", "#182F58"];
              const renderItem = (v: (typeof values)[number], i: number, isLeft: boolean) => {
                const accent = accents[i % accents.length];
                return (
                  <FadeUp key={v.title} delay={i * 100}>
                    <div className="group relative grid grid-cols-[3rem_1fr] items-center gap-4 md:grid-cols-1 md:gap-0">
                      {/* Content */}
                      <div
                        className={`col-start-2 md:col-start-auto ${
                          isLeft ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
                        }`}
                      >
                        <div
                          className="relative rounded-2xl px-1 py-1 transition-all duration-[400ms] ease-out md:px-4 md:py-3 md:group-hover:-translate-y-1"
                          style={{ transitionProperty: "transform, background-color, box-shadow" }}
                        >
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                            style={{
                              background: `linear-gradient(${isLeft ? "270deg" : "90deg"}, ${accent}0D 0%, transparent 80%)`,
                            }}
                          />
                          <div className="relative">
                            <div
                              className={`flex items-center gap-3 ${
                                isLeft ? "md:justify-end" : "md:justify-start"
                              }`}
                            >
                              <span className="font-serif text-xs font-medium italic tracking-[0.2em] text-muted-foreground">
                                0{i + 1}
                              </span>
                              <span
                                className="h-px w-8 transition-all duration-[400ms] group-hover:w-14"
                                style={{ backgroundColor: accent }}
                              />
                            </div>
                            <h3
                              className="mt-2 font-serif text-3xl font-semibold leading-tight md:text-4xl"
                              style={{ color: "var(--primary)" }}
                            >
                              <span
                                className="transition-colors duration-[400ms] group-hover:text-[var(--hover-color)]"
                                style={{ ["--hover-color" as never]: accent }}
                              >
                                {v.title}
                              </span>
                            </h3>
                            <p
                              className="mt-2 max-w-sm text-[15px] leading-[1.7] text-muted-foreground md:text-base"
                              style={
                                isLeft
                                  ? { marginLeft: "auto", marginRight: 0 }
                                  : { marginLeft: 0, marginRight: "auto" }
                              }
                            >
                              {v.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Icon medallion on spine */}
                      <div
                        className={`pointer-events-none absolute left-6 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 ${
                          isLeft ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                        }`}
                      >
                        <div
                          className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white shadow-premium transition-all duration-[400ms] ease-out group-hover:shadow-premium-lg md:h-16 md:w-16"
                          style={{ boxShadow: "0 0 0 6px rgba(255,255,255,0.95)" }}
                        >
                          <div
                            className="grid h-10 w-10 place-items-center rounded-full text-white transition-transform duration-[400ms] ease-out group-hover:rotate-[6deg] group-hover:scale-105 md:h-11 md:w-11"
                            style={{
                              background: `linear-gradient(140deg, ${accent} 0%, ${accent}cc 100%)`,
                            }}
                          >
                            <v.icon size={20} strokeWidth={1.6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              };

              const leftItems = values.filter((_, i) => i % 2 === 0);
              const rightItems = values.filter((_, i) => i % 2 === 1);

              return (
                <div className="grid gap-6 md:grid-cols-2 md:gap-x-0 md:gap-y-0">
                  <ol className="space-y-6 md:space-y-10">
                    {leftItems.map((v) => {
                      const originalIndex = values.indexOf(v);
                      return (
                        <li key={v.title}>{renderItem(v, originalIndex, true)}</li>
                      );
                    })}
                  </ol>
                  <ol className="space-y-6 md:mt-24 md:space-y-10">
                    {rightItems.map((v) => {
                      const originalIndex = values.indexOf(v);
                      return (
                        <li key={v.title}>{renderItem(v, originalIndex, false)}</li>
                      );
                    })}
                  </ol>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
