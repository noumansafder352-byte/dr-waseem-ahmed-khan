import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-primary text-white">
      {/* Ambient brand glows to match the header's premium navy identity */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-[0.18] blur-3xl"
        style={{ backgroundColor: "#1F72B9" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full opacity-[0.16] blur-3xl"
        style={{ backgroundColor: "#19979C" }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 78%)",
        }}
      />
      {/* Accent hairline top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(25,151,156,0.7), rgba(82,149,66,0.7), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-10 pt-20 md:px-10 md:pt-24 lg:px-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <img
              src={logo.url}
              alt="Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon"
              className="h-24 w-auto md:h-28"
              draggable={false}
            />
            <p className="mt-6 max-w-md text-[14px] leading-[1.85] text-white/70">
              Expert general and laparoscopic surgical care by
              Maj Gen (Rtd) Waseem Ahmad Khan — decades of clinical excellence,
              delivered with precision and compassion.
            </p>
            <div className="mt-7 flex items-center gap-3">
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
                  className="group/social grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-white/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#19979C]/70 hover:bg-[#19979C]/15 hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Explore</FooterHeading>
            <ul className="mt-6 space-y-3.5 text-[14px]">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group/link inline-flex items-center gap-2 text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-4 bg-white/25 transition-all duration-300 group-hover/link:w-6 group-hover/link:bg-[#19979C]"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-6 space-y-3.5 text-[14px] text-white/70">
              {[
                "General Surgery",
                "Thyroid Surgery",
                "Breast Surgery",
                "Gallbladder Surgery",
                "Hernia Repair",
                "Appendix Surgery",
                "Varicose Vein Treatment",
              ].map((s) => (
                <li key={s} className="transition-colors duration-300 hover:text-white">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="mt-6 space-y-4 text-[14px] text-white/70">
              <ContactItem icon={<MapPin size={15} strokeWidth={1.75} />}>
                Rawalpindi, Pakistan
              </ContactItem>
              <ContactItem icon={<Phone size={15} strokeWidth={1.75} />}>
                <a href="tel:+923000000000" className="transition-colors hover:text-white">
                  +92 300 000 0000
                </a>
              </ContactItem>
              <ContactItem icon={<Mail size={15} strokeWidth={1.75} />}>
                <a
                  href="mailto:info@drwaseemkhan.com"
                  className="transition-colors hover:text-white"
                >
                  info@drwaseemkhan.com
                </a>
              </ContactItem>
              <ContactItem icon={<Clock size={15} strokeWidth={1.75} />}>
                Mon – Sat: 10:00 AM – 6:00 PM
              </ContactItem>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[12px] text-white/55 md:flex-row">
          <p>© {year} Maj Gen (Rtd) Waseem Ahmad Khan. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#529542]" />
            Premium surgical care · Rawalpindi
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-6 bg-[#19979C]" />
      <h4 className="font-serif text-[13px] font-semibold uppercase tracking-[0.22em] text-white">
        {children}
      </h4>
    </div>
  );
}

function ContactItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[#19979C]">
        {icon}
      </span>
      <span className="leading-[1.7]">{children}</span>
    </li>
  );
}
