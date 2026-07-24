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

      {/* Qualifications */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6f9fd] to-white" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 15%, rgba(31,114,185,0.08), transparent 45%), radial-gradient(circle at 80% 85%, rgba(25,151,156,0.08), transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(24,47,88,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(24,47,88,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 shadow-premium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#529542]" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary">
                  Credentials
                </span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-primary md:text-6xl">
                Professional{" "}
                <em className="italic font-normal text-[#19979C]">Qualifications</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                A distinguished record of academic achievement and internationally
                recognized surgical certifications.
              </p>
            </div>
          </FadeUp>

          {/* Credential showcase */}
          <div className="relative mt-20">
            {/* Connecting line */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[42px] hidden lg:block"
            >
              <div className="mx-auto h-px w-[85%] bg-gradient-to-r from-transparent via-[#1F72B9]/30 to-transparent" />
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {[
                { code: "MBBS", sub: "Medical Degree", accent: "#182F58" },
                { code: "FCPS", sub: "Surgical Fellowship", accent: "#1F72B9" },
                { code: "FACS", sub: "American College of Surgeons", accent: "#19979C" },
                { code: "CHPE", sub: "Health Professions Education", accent: "#529542" },
                { code: "AFPGMI", sub: "Diploma in Surgery", accent: "#182F58" },
              ].map((q, i) => (
                <FadeUp key={q.code} delay={i * 80}>
                  <li className="group relative flex h-full flex-col items-center">
                    {/* Node marker */}
                    <div className="relative z-10">
                      <div
                        className="grid h-[84px] w-[84px] place-items-center rounded-full border border-border bg-white shadow-premium transition-all duration-[350ms] group-hover:-translate-y-1 group-hover:shadow-premium-lg"
                        style={{ boxShadow: `0 0 0 6px rgba(255,255,255,0.9)` }}
                      >
                        <div
                          className="grid h-14 w-14 place-items-center rounded-full text-white transition-transform duration-[400ms] group-hover:rotate-[8deg]"
                          style={{
                            background: `linear-gradient(140deg, ${q.accent} 0%, ${q.accent}cc 100%)`,
                          }}
                        >
                          <GraduationCap size={24} strokeWidth={1.6} />
                        </div>
                      </div>
                      {/* Tiny dot beneath node on line */}
                      <div
                        aria-hidden
                        className="absolute -bottom-[3px] left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full lg:block"
                        style={{ backgroundColor: q.accent }}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className="mt-6 flex w-full flex-1 flex-col items-center rounded-[20px] border border-border/80 bg-white/90 px-5 py-6 text-center backdrop-blur transition-all duration-[350ms] group-hover:-translate-y-1 group-hover:border-transparent group-hover:shadow-premium-lg"
                      style={{
                        boxShadow:
                          "0 1px 2px rgba(24,47,88,0.04), 0 8px 24px -12px rgba(24,47,88,0.10)",
                      }}
                    >
                      <div
                        className="h-[2px] w-8 rounded-full transition-all duration-[350ms] group-hover:w-14"
                        style={{ backgroundColor: q.accent }}
                      />
                      <div className="mt-4 font-serif text-2xl font-semibold tracking-tight text-primary transition-colors duration-300">
                        {q.code}
                      </div>
                      <div className="mt-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {q.sub}
                      </div>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Leadership Timeline */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Leadership & Experience
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                A distinguished career
              </h2>
            </div>
          </FadeUp>
          <div className="relative mt-16 space-y-8">
            <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            {timeline.map((t, i) => (
              <FadeUp key={t.title} delay={i * 80}>
                <div className="relative flex gap-6 pl-2">
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eaf1fa] text-primary shadow-premium">
                    <Award size={20} />
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-premium">
                    <h3 className="text-lg font-semibold text-primary">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
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
                          isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"
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
