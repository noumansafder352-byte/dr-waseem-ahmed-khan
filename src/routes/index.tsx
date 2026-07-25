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
  X,

  Microscope,
  Ribbon,
  Droplet,
  Star,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp } from "@/components/site/FadeUp";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqItem } from "@/components/site/FaqItem";

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
      "https://plus.unsplash.com/premium_photo-1702598505388-e2ac9b3812e9?auto=format&fit=crop&w=1200&q=80",
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
];

const trust = [
  {
    icon: Award,
    title: "Decades of Surgical Experience",
    desc: "Thousands of successful procedures performed with an unwavering commitment to patient safety.",
    accent: "#182F58",
  },
  {
    icon: Shield,
    title: "Former Head of Surgery — CMH & PEMH",
    desc: "Leadership honed through years managing complex surgical cases at renowned institutions.",
    accent: "#1F72B9",
  },
  {
    icon: GraduationCap,
    title: "Professor of Surgery",
    desc: "Advancing surgical education while mentoring the next generation of healthcare professionals.",
    accent: "#19979C",
  },
  {
    icon: Users,
    title: "Councillor & Regional Director — CPSP",
    desc: "Shaping national standards of surgical training and professional excellence.",
    accent: "#529542",
  },
  {
    icon: BookOpenCheck,
    title: "Evidence-Based Treatment",
    desc: "Every decision grounded in current medical research and proven clinical outcomes.",
    accent: "#1F72B9",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Patient Care",
    desc: "A tailored plan for every patient, delivered with empathy and clear communication.",
    accent: "#19979C",
  },
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
      <section className="px-6 py-20 md:px-8 md:py-24">
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
      <section className="relative isolate overflow-hidden px-6 py-24 md:px-8 md:py-28">
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
                <div
                  className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[20px] border border-border/70 bg-white p-7 shadow-[0_2px_10px_-4px_rgba(24,47,88,0.06),0_18px_44px_-28px_rgba(24,47,88,0.15)] transition-all duration-[380ms] ease-out hover:-translate-y-1 hover:shadow-[0_10px_20px_-8px_rgba(24,47,88,0.12),0_36px_70px_-28px_rgba(24,47,88,0.32)]"
                  style={{ '--accent': s.accent, '--tint': s.tint } as any}
                >
                  {/* Background image (default visible) */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-[380ms] ease-out group-hover:opacity-0"
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

                  {/* Top gradient accent bar (default expanded) */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-100 transition-transform duration-[380ms] ease-out group-hover:scale-x-0"
                    style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent}00)` }}
                  />
                  <span
                    className="absolute left-0 top-0 h-[3px] w-14 opacity-0 transition-opacity duration-[380ms] group-hover:opacity-100"
                    style={{ backgroundColor: s.accent }}
                  />

                  <div className="relative flex h-full flex-col">
                    {/* Icon */}
                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/15 text-white backdrop-blur transition-all duration-[380ms] ease-out group-hover:bg-[var(--tint)] group-hover:text-[var(--accent)]">
                        <s.icon size={26} strokeWidth={1.6} />
                      </div>
                    </div>

                    <h3 className="mt-6 text-[1.15rem] font-semibold leading-tight text-white transition-colors duration-[380ms] group-hover:text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[1.7] text-white/90 transition-colors duration-[380ms] group-hover:text-muted-foreground">
                      {s.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6">
                      <Link
                        to="/services"
                        className="relative inline-flex items-center gap-1.5 text-[13px] font-semibold text-white transition-colors duration-[380ms] group-hover:text-[var(--accent)]"
                      >
                        <span className="relative">
                          Learn more
                          <span className="absolute -bottom-0.5 left-0 h-px w-full bg-current transition-all duration-[380ms] group-hover:w-0" />
                        </span>
                        <ArrowRight
                          size={14}
                          className="translate-x-1 transition-transform duration-[380ms] group-hover:translate-x-0"
                        />
                      </Link>
                      <span className="font-serif text-xs italic text-white/60 transition-colors duration-[380ms] group-hover:text-muted-foreground/50">
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

      {/* Why patients trust — editorial split */}
      <section className="relative overflow-hidden px-6 py-20 md:px-8 md:py-24">
        {/* Background atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6f9fc] to-white" />
        <div
          aria-hidden
          className="absolute -left-32 top-24 h-80 w-80 rounded-full opacity-[0.07] blur-3xl"
          style={{ backgroundColor: "#182F58" }}
        />
        <div
          aria-hidden
          className="absolute -right-32 bottom-24 h-80 w-80 rounded-full opacity-[0.08] blur-3xl"
          style={{ backgroundColor: "#19979C" }}
        />
        <svg
          aria-hidden
          className="absolute inset-x-0 top-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="trust-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="#182F58" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trust-grid)" />
        </svg>

        <div className="relative mx-auto max-w-7xl">
          <FadeUp>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#19979C]">
                <span className="h-px w-8 bg-[#19979C]" />
                Why Patients Trust Us
              </span>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-5xl lg:text-[3.5rem]">
                A standard of care built on{" "}
                <span className="italic text-[#1F72B9]">distinction</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
                Three decades of surgical leadership, teaching, and patient-centred practice —
                distilled into the principles that guide every consultation and procedure.
              </p>
            </div>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Left — portrait */}
            <FadeUp className="h-full lg:col-span-5">
              <div className="relative h-full">
                {/* Decorative frame */}
                <span
                  aria-hidden
                  className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[24px] border-l-2 border-t-2 border-[#19979C]/40"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-[24px] border-b-2 border-r-2 border-[#529542]/40"
                />

                <div className="relative h-full min-h-[560px] overflow-hidden rounded-[24px] shadow-premium-lg">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80"
                    alt="Surgeon in the operating theatre"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182F58]/60 via-transparent to-transparent" />
                </div>

                {/* Floating experience badge */}
                <div className="absolute bottom-8 left-8 rounded-2xl bg-white p-5 shadow-premium-lg ring-1 ring-black/[0.04]">
                  <div className="flex items-center gap-4">
                    <div
                      className="grid h-12 w-12 place-items-center rounded-xl text-white"
                      style={{ backgroundColor: "#182F58" }}
                    >
                      <Award size={22} />
                    </div>
                    <div>
                      <div className="font-serif text-2xl font-semibold leading-none text-primary">
                        30+ Years
                      </div>
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Of Surgical Excellence
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute right-8 top-8 hidden rounded-2xl bg-white p-4 shadow-premium ring-1 ring-black/[0.04] md:block">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    Institutions Led
                  </div>
                  <div className="mt-1 font-serif text-xl font-semibold text-[#1F72B9]">
                    CMH · PEMH · AMC
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — trust timeline */}
            <div className="lg:col-span-7">
              <ol className="relative space-y-8 border-l border-dashed border-[#182F58]/15 pl-8 md:space-y-9 md:pl-10">
                {trust.map((t, i) => (
                  <FadeUp key={t.title} delay={i * 70}>
                    <li className="group relative">
                      {/* Timeline node */}
                      <span
                        aria-hidden
                        className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full bg-white shadow-[0_0_0_4px_white] ring-1 ring-black/[0.06] md:-left-[50px]"
                      >
                        <span
                          className="h-2 w-2 rounded-full transition-transform duration-[380ms] group-hover:scale-150"
                          style={{ backgroundColor: t.accent }}
                        />
                      </span>

                      <div className="flex gap-5 transition-transform duration-[380ms] ease-out group-hover:-translate-y-0.5">
                        <div
                          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-[380ms] ease-out group-hover:scale-105"
                          style={{ backgroundColor: `${t.accent}14`, color: t.accent }}
                        >
                          <t.icon size={22} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-3">
                            <span
                              className="font-serif text-xs italic"
                              style={{ color: t.accent }}
                            >
                              0{i + 1}
                            </span>
                            <span
                              className="h-px w-6 origin-left transition-all duration-[380ms] ease-out group-hover:w-14"
                              style={{ backgroundColor: t.accent }}
                            />
                          </div>
                          <h3 className="mt-2 font-serif text-xl font-semibold leading-tight text-primary md:text-[1.4rem]">
                            {t.title}
                          </h3>
                          <p className="mt-2 text-[14.5px] leading-[1.7] text-muted-foreground">
                            {t.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  </FadeUp>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="bg-primary px-6 py-20 text-white md:px-8 md:py-24">
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section className="relative px-6 py-20 md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,#1F72B9_0%,transparent_70%)] opacity-[0.05]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/70 shadow-sm backdrop-blur">
                <span className="text-primary/50">010</span>
                <span className="h-1 w-1 rounded-full bg-[#529542]" />
                FAQs
              </span>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                Frequently asked questions
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                Answers to the questions patients most often ask before their consultation.
              </p>
            </div>
          </FadeUp>
          <div className="mt-12 space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <FaqItem key={i} index={i + 1} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>


      <CtaBand />
    </SiteLayout>
  );
}



const testimonials = [
  {
    name: "Ayesha R.",
    initials: "AR",
    treatment: "Laparoscopic Cholecystectomy",
    date: "March 2026",
    rating: 5,
    quote:
      "From the very first consultation, Dr. Waseem's calm and thorough approach put me at ease. The surgery was flawless and my recovery far quicker than I expected. Truly world-class care.",
    accent: "#182F58",
  },
  {
    name: "Muhammad K.",
    initials: "MK",
    treatment: "Hernia Repair",
    date: "January 2026",
    rating: 5,
    quote:
      "A surgeon whose experience shows in every detail. He answered every question with patience, explained each step clearly, and delivered a truly exceptional outcome.",
    accent: "#19979C",
  },
  {
    name: "Sana F.",
    initials: "SF",
    treatment: "Thyroid Surgery",
    date: "November 2025",
    rating: 5,
    quote:
      "The professionalism, precision, and warmth I experienced under Dr. Waseem's care was extraordinary. I felt genuinely looked after — not just as a patient, but as a person.",
    accent: "#1F72B9",
  },
  {
    name: "Imran H.",
    initials: "IH",
    treatment: "General Surgery Consultation",
    date: "September 2025",
    rating: 5,
    quote:
      "Decades of expertise combined with genuine compassion. Dr. Waseem gave me clarity, confidence, and a treatment plan tailored precisely to my needs.",
    accent: "#529542",
  },
  {
    name: "Fatima Z.",
    initials: "FZ",
    treatment: "Breast Lump Excision",
    date: "July 2025",
    rating: 5,
    quote:
      "I felt heard and respected at every stage. The results have been excellent and the follow-up care was thoughtful, attentive, and deeply reassuring.",
    accent: "#1F72B9",
  },
  {
    name: "Bilal A.",
    initials: "BA",
    treatment: "Appendectomy",
    date: "May 2025",
    rating: 5,
    quote:
      "Professional, precise, and remarkably kind. My procedure went smoothly and I was back on my feet far sooner than I imagined possible.",
    accent: "#19979C",
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 720) setCount(1);
      else if (w < 1080) setCount(2);
      else setCount(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return count;
}

function Testimonials() {
  const visible = useVisibleCount();
  const total = testimonials.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ startX: number; moved: number; active: boolean }>({
    startX: 0,
    moved: 0,
    active: false,
  });

  // Infinite loop: render items + first `visible` clones at the end
  const items = [...testimonials, ...testimonials.slice(0, visible)];

  const go = useCallback(
    (dir: 1 | -1) => {
      setAnimate(true);
      setIndex((i) => i + dir);
    },
    [],
  );

  // Handle loop snap when reaching cloned tail / negative
  useEffect(() => {
    if (index === total) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 650);
      return () => clearTimeout(t);
    }
    if (index < 0) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(total - 1);
      }, 650);
      return () => clearTimeout(t);
    }
  }, [index, total]);

  // Re-enable animation after snap
  useEffect(() => {
    if (!animate) {
      const r = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(r);
    }
  }, [animate]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  // Drag / swipe
  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, moved: 0, active: true };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    dragRef.current.moved = e.clientX - dragRef.current.startX;
  };
  const onPointerUp = () => {
    if (!dragRef.current.active) return;
    const moved = dragRef.current.moved;
    dragRef.current.active = false;
    if (Math.abs(moved) > 60) go(moved < 0 ? 1 : -1);
  };

  const cardBasis = 100 / visible;
  const translate = -(index * cardBasis);
  const activeDot = ((index % total) + total) % total;

  return (
    <section
      className="relative isolate overflow-hidden px-6 py-24 md:px-8 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f8fc] to-white" />
      <div
        aria-hidden
        className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full opacity-[0.09] blur-3xl"
        style={{ backgroundColor: "#1F72B9" }}
      />
      <div
        aria-hidden
        className="absolute -right-32 bottom-16 h-[420px] w-[420px] rounded-full opacity-[0.09] blur-3xl"
        style={{ backgroundColor: "#19979C" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24,47,88,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(24,47,88,0.7) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 78%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#19979C]/25 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#19979C]" />
              Patient Testimonials
            </span>
            <h2
              className="mt-6 text-4xl leading-[1.1] tracking-tight text-primary md:text-5xl lg:text-[3.2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Voices of{" "}
              <em className="font-serif italic text-secondary">trust</em> &amp;{" "}
              <em className="font-serif italic text-[#19979C]">recovery</em>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#19979C] to-transparent" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.85] text-muted-foreground md:text-[17px]">
              Reflections from patients who have entrusted their care to
              Dr. Waseem — shared with gratitude, in their own words.
            </p>
          </div>
        </FadeUp>

        {/* Carousel */}
        <FadeUp delay={160}>
          <div className="mt-16 md:mt-20">
            <div
              className="px-1 py-2"
              style={{ overflowX: "clip", overflowY: "visible" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div
                ref={trackRef}
                className="flex touch-pan-y select-none"
                style={{
                  transform: `translate3d(${translate}%,0,0)`,
                  transition: animate
                    ? "transform 650ms cubic-bezier(0.22,0.61,0.36,1)"
                    : "none",
                }}
              >
                {items.map((it, i) => (
                  <div
                    key={`${it.name}-${i}`}
                    className="shrink-0 px-3 pb-4 pt-14 md:px-4 lg:px-5"
                    style={{ flexBasis: `${cardBasis}%`, maxWidth: `${cardBasis}%` }}
                  >
                    <TestimonialCard t={it} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary shadow-[0_2px_10px_-4px_rgba(24,47,88,0.08),0_16px_40px_-24px_rgba(24,47,88,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#19979C]/40 hover:text-[#19979C]"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => {
                  const isActive = i === activeDot;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setAnimate(true);
                        setIndex(i);
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="group relative h-2 rounded-full transition-all duration-500"
                      style={{
                        width: isActive ? 28 : 8,
                        backgroundColor: isActive ? "#19979C" : "rgba(24,47,88,0.18)",
                      }}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary shadow-[0_2px_10px_-4px_rgba(24,47,88,0.08),0_16px_40px_-24px_rgba(24,47,88,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#19979C]/40 hover:text-[#19979C]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article
      className="group relative flex h-full min-h-[380px] flex-col items-center rounded-[20px] border border-border/70 bg-white px-7 pb-7 pt-14 text-center shadow-[0_1px_2px_rgba(24,47,88,0.04),0_18px_40px_-28px_rgba(24,47,88,0.22)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_2px_6px_rgba(24,47,88,0.05),0_30px_60px_-30px_rgba(24,47,88,0.35)]"
    >
      {/* Accent top line */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
        }}
      />

      {/* Overlapping avatar */}
      <div
        className="absolute left-1/2 top-0 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-serif text-[15px] font-semibold text-white ring-4 ring-white shadow-[0_10px_24px_-10px_rgba(24,47,88,0.45)]"
        style={{ backgroundColor: t.accent }}
      >
        {t.initials}
      </div>

      {/* Decorative quote mark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none font-serif text-[140px] leading-none text-primary/[0.05]"
      >
        “
      </span>

      {/* Name */}
      <h3 className="font-serif text-[17px] font-semibold text-primary">
        {t.name}
      </h3>

      {/* Treatment */}
      <div
        className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em]"
        style={{ color: t.accent }}
      >
        {t.treatment}
      </div>

      {/* Stars */}
      <div className="mt-3 flex items-center justify-center gap-0.5">
        {Array.from({ length: t.rating }).map((_, k) => (
          <Star key={k} size={14} className="fill-[#f5b638] text-[#f5b638]" />
        ))}
      </div>

      {/* Quote */}
      <p className="relative mt-4 flex-1 text-[14px] leading-[1.75] text-primary/80">
        “{t.quote}”
      </p>

      {/* Divider */}
      <div className="mt-6 h-px w-12 bg-border" />

      {/* Footer: verified + date */}
      <div className="mt-4 flex items-center justify-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
        <span
          className="inline-flex items-center gap-1 rounded-full px-2 py-1"
          style={{ backgroundColor: "#5295421a", color: "#3d7a30" }}
        >
          <BadgeCheck size={11} />
          Verified Patient
        </span>
        <span className="text-muted-foreground/50">•</span>
        <span className="text-muted-foreground">{t.date}</span>
      </div>
    </article>
  );
}



