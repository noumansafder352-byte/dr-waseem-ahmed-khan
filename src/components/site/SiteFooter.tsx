import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.98_0.01_240)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="space-y-4">
          <img src={logo.url} alt="Dr. Waseem Ahmad Khan" className="h-20 w-auto" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Expert general and laparoscopic surgical care by
            Maj Gen (Rtd) Waseem Ahmad Khan — decades of clinical excellence,
            delivered with precision and compassion.
          </p>
          <div className="flex gap-3 pt-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-primary/70 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-primary">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-secondary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-primary">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              "General Surgery",
              "Thyroid Surgery",
              "Breast Surgery",
              "Gallbladder Surgery",
              "Hernia Repair",
              "Appendix Surgery",
              "Varicose Vein Treatment",
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base font-semibold text-primary">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>Rawalpindi, Pakistan</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>+92 300 000 0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>info@drwaseemkhan.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-secondary" />
              <span>Mon – Sat: 10:00 AM – 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground md:px-8">
          © {new Date().getFullYear()} Maj Gen (Rtd) Waseem Ahmad Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
