import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  Shield,
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

const HERO_IMG =
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80";

const services = [
  { icon: Stethoscope, title: "General Surgery", desc: "Comprehensive surgical care across a wide range of conditions." },
  { icon: Activity, title: "Thyroid Surgery", desc: "Precise thyroidectomy and thyroid nodule management." },
  { icon: HeartPulse, title: "Breast Surgery", desc: "Diagnostic and therapeutic breast surgical procedures." },
  { icon: Shield, title: "Gallbladder Surgery", desc: "Laparoscopic cholecystectomy with rapid recovery." },
  { icon: Scissors, title: "Hernia Repair", desc: "Open and laparoscopic repair with modern mesh techniques." },
  { icon: Sparkles, title: "Appendix Surgery", desc: "Minimally invasive appendectomy for faster healing." },
  { icon: Waves, title: "Varicose Vein Treatment", desc: "Advanced treatment options for venous conditions." },
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
      {/* Hero */}
      <section className="relative min-h-dvh w-full overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#182F58]/92 via-[#182F58]/78 to-[#1F72B9]/55" />
        <div className="relative mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-8 md:pt-36">
          <FadeUp>
            <span className="inline-block w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              General & Laparoscopic Surgeon
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-white md:text-7xl">
              Expert Surgical Care <span className="italic text-[oklch(0.86_0.09_195)]">You Can Trust</span>
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-6 text-lg font-medium text-white">
              Maj Gen (Rtd) Waseem Ahmad Khan, HI (M)
            </p>
            <p className="mt-1 text-sm tracking-wide text-white/80">
              MBBS • FCPS • FACS • CHPE • Diploma in Surgery (AFPGMI)
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Delivering expert surgical care with decades of clinical excellence,
              leadership, and a commitment to patient well-being. Every patient receives
              personalized attention, precise diagnosis, and evidence-based treatment
              for the best possible outcomes.
            </p>
          </FadeUp>
          <FadeUp delay={400}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                hash="appointment"
                className="inline-flex items-center gap-2 rounded-full bg-medical px-7 py-3.5 text-sm font-semibold text-medical-foreground shadow-premium-lg transition-all hover:-translate-y-0.5 hover:bg-medical-hover"
              >
                Book Appointment <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
              >
                Contact Us
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
      <section className="bg-[oklch(0.98_0.01_240)] px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                Areas of Expertise
              </span>
              <h2 className="mt-4 text-4xl font-semibold text-primary md:text-5xl">
                Advanced surgical care, tailored to you
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                A comprehensive range of general and laparoscopic surgical procedures,
                delivered with the precision of a master surgeon.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <div className="group h-full rounded-3xl border border-border bg-white p-8 shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-lg">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eaf1fa] text-primary">
                    <s.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors group-hover:gap-2.5"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
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
