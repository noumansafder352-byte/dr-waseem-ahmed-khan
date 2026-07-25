import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--secondary) 70%, transparent), color-mix(in oklab, var(--teal) 80%, transparent), color-mix(in oklab, var(--medical) 75%, transparent), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 0%, color-mix(in oklab, var(--secondary) 18%, transparent) 0%, transparent 68%), radial-gradient(42% 48% at 0% 100%, color-mix(in oklab, var(--teal) 18%, transparent) 0%, transparent 72%), linear-gradient(180deg, color-mix(in oklab, var(--primary) 92%, black) 0%, var(--primary) 46%, color-mix(in oklab, var(--primary) 86%, black) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--primary-foreground) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--primary-foreground) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
          maskImage: "radial-gradient(ellipse at center, black 18%, transparent 76%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-28 w-[min(86vw,980px)] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "color-mix(in oklab, var(--teal) 18%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-8 pt-20 md:px-10 md:pt-24 lg:px-12">
        <div className="grid gap-12 border-b border-primary-foreground/12 pb-14 lg:grid-cols-[0.95fr_2.5fr] lg:gap-20">
          <div className="max-w-xl">
            <img
              src={logo.url}
              alt="Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon"
              className="h-28 w-auto md:h-32"
              draggable={false}
            />
            <p className="mt-7 max-w-md text-[14px] leading-[1.9] text-primary-foreground/72">
              Distinguished surgical care led by Maj Gen (Rtd) Waseem Ahmad Khan,
              combining decades of operative experience with precise, compassionate
              patient care.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group/social relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-primary-foreground/14 bg-primary-foreground/[0.05] text-primary-foreground/82 backdrop-blur-sm transition-all duration-[350ms] hover:-translate-y-0.5 hover:border-teal/70 hover:text-primary-foreground"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 scale-0 rounded-full bg-teal/25 opacity-0 transition-all duration-[350ms] group-hover/social:scale-100 group-hover/social:opacity-100"
                  />
                  <Icon size={16} strokeWidth={1.8} className="relative z-10" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <FooterColumn title="Quick Links">
              {([
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact Us" },
              ] as const).map((link) => (
                <li key={link.to}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </li>
              ))}
            </FooterColumn>


            <FooterColumn title="Services">
              {[
                "General Surgery",
                "Thyroid Surgery",
                "Breast Surgery",
                "Gallbladder Surgery",
                "Hernia Repair",
                "Appendix Surgery",
              ].map((service) => (
                <li key={service} className="group/item flex items-center gap-3 text-[14px] text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-medical transition-transform duration-300 group-hover/item:scale-125" />
                  <span>{service}</span>
                </li>
              ))}
            </FooterColumn>

            <div className="sm:col-span-2 lg:col-span-1">
              <FooterHeading>Contact</FooterHeading>
              <ul className="mt-7 space-y-4 text-[14px] text-primary-foreground/70">
                <ContactItem icon={<MapPin size={13} strokeWidth={1.75} />}>
                  Rawalpindi, Pakistan
                </ContactItem>
                <ContactItem icon={<Phone size={13} strokeWidth={1.75} />}>
                  <a href="tel:+923000000000" className="transition-colors hover:text-primary-foreground">
                    +92 300 000 0000
                  </a>
                </ContactItem>
                <ContactItem icon={<Mail size={13} strokeWidth={1.75} />}>
                  <a href="mailto:info@drwaseemkhan.com" className="transition-colors hover:text-primary-foreground">
                    info@drwaseemkhan.com
                  </a>
                </ContactItem>
                <ContactItem icon={<Clock size={13} strokeWidth={1.75} />}>
                  Mon – Sat: 10:00 AM – 6:00 PM
                </ContactItem>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-7 flex flex-col justify-between gap-3 text-[12px] text-primary-foreground/58 md:flex-row md:items-center">
          <p>© {year} Maj Gen (Rtd) Waseem Ahmad Khan. All rights reserved.</p>
          <p className="flex items-center gap-2 text-primary-foreground/64">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-medical" />
            General & Laparoscopic Surgeon · Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-7 space-y-3.5">{children}</ul>
    </div>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-serif text-[13px] font-semibold uppercase tracking-[0.22em] text-primary-foreground">
      {children}
    </h4>
  );
}

function FooterLink({ to, children }: { to: "/" | "/about" | "/services" | "/contact"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group/link inline-flex items-center gap-3 text-[14px] text-primary-foreground/70 transition-colors duration-300 hover:text-primary-foreground"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-medical transition-transform duration-300 group-hover/link:scale-125" />
      <span>{children}</span>
    </Link>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="group/row flex cursor-default items-start gap-3 text-primary-foreground/82 transition-colors duration-[350ms] hover:text-primary-foreground">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-primary-foreground/14 bg-primary-foreground/[0.05] backdrop-blur-sm transition-all duration-[350ms] group-hover/row:-translate-y-0.5 group-hover/row:border-teal/70">
        <span
          aria-hidden
          className="absolute inset-0 scale-0 rounded-full bg-teal/25 opacity-0 transition-all duration-[350ms] group-hover/row:scale-100 group-hover/row:opacity-100"
        />
        <span className="relative z-10">{icon}</span>
      </span>
      <span className="mt-1.5 leading-[1.7]">{children}</span>
    </li>
  );
}

