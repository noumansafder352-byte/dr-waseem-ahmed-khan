import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Shield,
  ShieldCheck,
  Scissors,
  Sparkles,
  Waves,
  Award,
  GraduationCap,
  Users,
  ClipboardCheck,
  UserRound,
  Handshake,
  BookOpenCheck,
  ScanSearch,
  FileText,
  Syringe,
  HeartHandshake,
  CalendarCheck,
  ArrowRight,
  Plus,
  Minus,
  Microscope,
  Ribbon,
  Droplet,
  GitBranch,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon" },
      {
        name: "description",
        content:
          "Maj Gen (Rtd) Waseem Ahmad Khan — General & Laparoscopic Surgeon delivering expert, evidence-based surgical care with decades of clinical excellence.",
      },
      { property: "og:title", content: "Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon" },
      {
        property: "og:description",
        content:
          "Expert surgical care with decades of clinical excellence, leadership, and a commitment to patient well-being.",
      },
    ],
  }),
  component: Home,
});

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80";

const services: {
  icon: typeof Stethoscope;
  title: string;
  desc: string;
  accent: string;
  tint: string;
  image: string;
}[] = [
  {
    icon: Stethoscope,
    title: "General Surgery",
    desc: "Comprehensive surgical care across a wide range of conditions.",
    accent: "#182F58",
    tint: "#eaf1fa",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Microscope,
    title: "Thyroid Surgery",
    desc: "Precise thyroidectomy and thyroid nodule management.",
    accent: "#19979C",
    tint: "#e6f6f6",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Ribbon,
    title: "Breast Surgery",
    desc: "Diagnostic and therapeutic breast surgical procedures.",
    accent: "#1F72B9",
    tint: "#e8f1fb",
    image:
      "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8537?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Droplet,
    title: "Gallbladder Surgery",
    desc: "Laparoscopic cholecystectomy with rapid recovery.",
    accent: "#529542",
    tint: "#eaf5e6",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: ShieldCheck,
    title: "Hernia Repair",
    desc: "Open and laparoscopic repair with modern mesh techniques.",
    accent: "#182F58",
    tint: "#eaf1fa",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Scissors,
    title: "Appendix Surgery",
    desc: "Minimally invasive appendectomy for faster healing.",
    accent: "#19979C",
    tint: "#e6f6f6",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: GitBranch,
    title: "Varicose Vein Treatment",
    desc: "Advanced treatment options for venous conditions.",
    accent: "#1F72B9",
    tint: "#e8f1fb",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
  },
];

const trust = [
  { icon: Award, title: "Decades of Surgical Experience" },
  { icon: Shield, title: "Former Head of Surgery — CMH & PEMH" },
  { icon: GraduationCap, title: "Professor of Surgery" },
  { icon: Users, title: "Councillor & Regional Director — CPSP" },
  { icon: BookOpenCheck, title: "Evidence-Based Treatment" },
  { icon: HeartHandshake, title: "Personalized Care" },
  { icon: Activity, title: "Modern Surgical Techniques" },
  { icon: Handshake, title: "Ethical Practice" },
];

const process = [
  { icon: UserRound, title: "Consultation", desc: "Detailed discussion of symptoms and history." },
  { icon: ScanSearch, title: "Diagnosis", desc: "Thorough evaluation and precise diagnosis." },
  { icon: FileText, title: "Treatment Plan", desc: "A personalized, evidence-based plan." },
  { icon: Syringe, title: "Surgery", desc: "Safe, precise, modern surgical technique." },
  { icon: HeartPulse, title: "Recovery", desc: "Guided post-operative recovery." },
  { icon: CalendarCheck, title: "Follow-Up", desc: "Ongoing follow-up care and support." },
];

const faqs = [
  {
    q: "Do I need a referral before booking an appointment?",
    a: "No. You can book directly without a referral.",
  },
  {
    q: "How do I know if surgery is necessary?",
    a: "Every patient is carefully evaluated before surgery is recommended.",
  },
  {
    q: "What should I bring to my consultation?",
    a: "Medical records, reports, imaging studies, and current medications.",
  },
  {
    q: "Do you provide follow-up care?",
    a: "Yes. Follow-up care is an essential part of every patient's treatment.",
  },
];

function Home() {
  return (
    <SiteLayout transparentHeader>
      {/* Hero — editorial */}
      <section className="relative isolate w-full overflow-hidden bg-[#0f2246] text-white">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2246] via-[#182F58] to-[#123a6b]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 15%, rgba(25,151,156,0.35), transparent 55%), radial-gradient(ellipse at 85% 80%, rgba(31,114,185,0.35), transparent 55%), radial-gradient(ellipse at 50% 110%, rgba(82,149,66,0.22), transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-16 top-40 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-24 bottom-24 h-[28rem] w-[28rem] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[22rem] w-[22rem] rounded-full border border-white/5" />
        <svg
          aria-hidden
          className="pointer-events-none absolute right-10 top-24 h-24 w-24 text-white/15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,4 92,27 92,73 50,96 8,73 8,27"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <svg
          aria-hidden
          className="pointer-events-none absolute left-10 bottom-32 h-16 w-16 text-white/15"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,4 92,27 92,73 50,96 8,73 8,27"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-2 w-2 -translate-x-1/2 rounded-full bg-[#19979C] shadow-[0_0_40px_10px_rgba(25,151,156,0.6)]" />
        <div className="pointer-events-none absolute right-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_30px_8px_rgba(255,255,255,0.4)]" />
        <div className="pointer-events-none absolute left-1/3 bottom-1/4 h-1.5 w-1.5 rounded-full bg-[#529542]/80 shadow-[0_0_30px_8px_rgba(82,149,66,0.5)]" />

        {/* Additional decorative accents */}
        <div className="pointer-events-none absolute left-1/2 top-24 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-20 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center px-6 pt-40 pb-16 text-center md:px-8 md:pt-44 md:pb-20 lg:pt-52 lg:pb-24">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.08] px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.32em] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#19979C]" />
              General &amp; Laparoscopic Surgeon
            </span>
          </FadeUp>

          <FadeUp delay={140}>
            <h1
              className="mt-10 max-w-5xl text-5xl leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[6rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Expert Surgical Care
              <br />
              <span className="italic text-[#19979C]">You Can Trust</span>
            </h1>
          </FadeUp>

          <FadeUp delay={280}>
            <div className="mt-8">
              <p className="text-xl font-semibold text-white md:text-2xl">
                Maj Gen (Rtd) Waseem Ahmad Khan, HI (M)
              </p>
              <p className="mt-2 text-sm font-light tracking-[0.18em] text-white/75 md:text-base">
                General &amp; Laparoscopic Surgeon
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={400}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.9] text-white/80 md:text-lg">
              Delivering expert surgical care with decades of clinical
              excellence, leadership, and compassionate patient care — every
              treatment personalized using evidence-based techniques to achieve
              the best possible outcomes.
            </p>
          </FadeUp>

          <FadeUp delay={520}>
            <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                to="/contact"
                hash="appointment"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#529542] px-9 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(82,149,66,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#19979C] sm:w-auto"
              >
                Book Appointment
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/50 bg-transparent px-9 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-[#182F58] sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>


      {/* About */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl shadow-premium-lg">
              <img src={ABOUT_IMG} alt="Surgical excellence" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-transparent" />
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                About Dr. Waseem
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                Experience. Precision. <em className="font-serif italic text-secondary">Compassion.</em>
              </h2>
              <p className="mt-6 text-base leading-[1.85] text-muted-foreground md:text-lg">
                Maj Gen (Rtd) Waseem Ahmad Khan is a distinguished General &
                Laparoscopic Surgeon with an accomplished career in military
                healthcare, surgical education, and advanced patient care. His
                approach combines decades of clinical expertise with compassion,
                ensuring every patient receives safe, personalized, and
                evidence-based treatment.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { k: "35+", v: "Years of practice" },
                  { k: "10k+", v: "Successful procedures" },
                  { k: "5", v: "Fellowships & diplomas" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="font-serif text-3xl font-semibold text-primary md:text-4xl">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section className="relative isolate overflow-hidden px-6 py-28 md:px-8 md:py-40">
        {/* Premium background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[oklch(0.985_0.008_220)] to-white" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 12% 8%, rgba(25,151,156,0.10), transparent 55%), radial-gradient(ellipse at 92% 90%, rgba(24,47,88,0.09), transparent 55%), radial-gradient(ellipse at 60% 40%, rgba(82,149,66,0.06), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(24,47,88,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(24,47,88,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 35%, transparent 78%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-24 top-40 h-[28rem] w-[28rem] text-[#19979C]/10"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M -50 200 Q 100 40, 250 200 T 550 200"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M -50 260 Q 100 100, 250 260 T 550 260"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        <div className="pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full border border-[#182F58]/[0.06]" />
        <div className="pointer-events-none absolute -right-24 top-8 h-[24rem] w-[24rem] rounded-full border border-[#182F58]/[0.05]" />

        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#19979C]/25 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#19979C]" />
                Areas of Expertise
              </span>
              <h2
                className="mt-6 text-4xl leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.4rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Advanced surgical care,
                <br />
                <em className="font-serif italic text-secondary">tailored to you</em>
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#19979C] to-transparent" />
              <p className="mx-auto mt-6 max-w-xl text-base leading-[1.85] text-muted-foreground md:text-lg">
                A comprehensive range of general and laparoscopic surgical
                procedures, delivered with the precision of a master surgeon.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[20px] border border-border/70 bg-white p-7 shadow-[0_2px_10px_-4px_rgba(24,47,88,0.06),0_18px_44px_-28px_rgba(24,47,88,0.15)] transition-all duration-[380ms] ease-out hover:-translate-y-1 hover:shadow-[0_10px_20px_-8px_rgba(24,47,88,0.12),0_36px_70px_-28px_rgba(24,47,88,0.32)]">
                  {/* Hover image reveal */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[380ms] ease-out group-hover:opacity-100"
                  >
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(155deg, ${s.accent}f2 0%, ${s.accent}cc 45%, rgba(10,18,34,0.82) 100%)`,
                      }}
                    />
                  </div>

                  {/* Top accent bar */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[380ms] ease-out group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent}00)` }}
                  />
                  <span
                    className="absolute left-0 top-0 h-[3px] w-14"
                    style={{ backgroundColor: s.accent }}
                  />

                  <div className="relative flex h-full flex-col">
                    {/* Icon */}
                    <div className="relative">
                      <div
                        className="grid h-14 w-14 place-items-center rounded-xl transition-all duration-[380ms] ease-out group-hover:bg-white/15 group-hover:text-white group-hover:backdrop-blur"
                        style={{ backgroundColor: s.tint, color: s.accent }}
                      >
                        <s.icon size={26} strokeWidth={1.6} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-[1.15rem] font-semibold leading-tight text-primary transition-colors duration-[380ms] group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.7] text-muted-foreground transition-colors duration-[380ms] group-hover:text-white/90">
                      {s.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <Link
                        to="/services"
                        className="relative inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-[380ms] group-hover:text-white"
                        style={{ color: s.accent }}
                      >
                        <span className="relative">
                          Learn more
                          <span
                            className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-[380ms] group-hover:w-full"
                          />
                        </span>
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-[380ms] group-hover:translate-x-1"
                        />
                      </Link>
                      <span className="font-serif text-xs italic text-muted-foreground/50 transition-colors duration-[380ms] group-hover:text-white/60">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>


          <FadeUp delay={200}>
            <div className="mt-16 text-center">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-secondary hover:text-secondary hover:shadow-premium"
              >
                View all services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why patients trust */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[oklch(0.97_0.02_200)] to-white" />
        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Why Patients Trust Us
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                A standard of care built on distinction
              </h2>
            </div>
          </FadeUp>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <FadeUp key={t.title} delay={i * 50}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white/70 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-premium">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-secondary">
                    <t.icon size={22} />
                  </div>
                  <p className="mt-5 text-sm font-medium leading-snug text-primary">{t.title}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Professional Credentials
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                Qualifications & leadership
              </h2>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FadeUp>
              <div className="h-full rounded-3xl border border-border bg-white p-10 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf1fa] text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Qualifications</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {["MBBS", "FCPS", "FACS", "CHPE", "Diploma in Surgery (AFPGMI)"].map((q) => (
                    <li key={q} className="flex items-center gap-3 text-primary/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="font-medium">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="h-full rounded-3xl border border-border bg-white p-10 shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#eaf1fa] text-primary">
                    <Award size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">Leadership</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "Former HoD Surgery — CMH",
                    "Former HoD Surgery — PEMH",
                    "Professor of Surgery",
                    "Councillor — CPSP",
                    "Regional Director — CPSP Rawalpindi",
                  ].map((q) => (
                    <li key={q} className="flex items-center gap-3 text-primary/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="font-medium">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary px-6 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Patient-Centered Care Process
              </span>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                A clear path from consultation to recovery
              </h2>
            </div>
          </FadeUp>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <FadeUp key={p.title} delay={i * 60}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-secondary/60">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient">
                      <p.icon size={22} />
                    </div>
                    <span className="font-serif text-2xl text-white/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                FAQ
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                Frequently asked questions
              </h2>
            </div>
          </FadeUp>
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-white shadow-premium">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="block w-full text-left"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-6 px-8 py-6">
        <span className="text-base font-medium text-primary md:text-lg">{q}</span>
        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-secondary">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </div>
      {open && (
        <div className="px-8 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
          {a}
        </div>
      )}
    </button>
  );
}
