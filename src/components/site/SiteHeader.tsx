import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

function TopBar() {
  return (
    <div className="bg-primary text-white">
      <div className="mx-auto flex h-[42px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="https://maps.google.com/?q=Rawalpindi,Pakistan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-white/90 transition-colors hover:text-white"
        >
          <MapPin size={15} strokeWidth={1.75} />
          <span>Rawalpindi, Pakistan</span>
        </a>
        <div className="flex items-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white/85 transition-colors duration-200 hover:text-medical"
          >
            <Facebook size={16} strokeWidth={1.75} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white/85 transition-colors duration-200 hover:text-medical"
          >
            <Instagram size={16} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !transparentOnTop || scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <div
        className={`transition-all duration-300 ${
          solid
            ? "bg-white shadow-[0_1px_20px_rgba(24,47,88,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-[92px] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-5 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Dr. Waseem Ahmad Khan — Home">
            <img
              src={logo.url}
              alt="Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon"
              className="h-16 w-auto md:h-20"
              draggable={false}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-10">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    className={`relative py-2 text-[17px] font-semibold tracking-[0.01em] transition-colors ${
                      solid ? "text-primary hover:text-secondary" : "text-white/95 hover:text-white"
                    }`}
                    activeProps={{
                      className:
                        "after:absolute after:left-1/2 after:-bottom-0.5 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-medical after:content-['']",
                    }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center justify-end gap-3">
            <Link
              to="/contact"
              hash="appointment"
              className="hidden md:inline-flex items-center rounded-full bg-medical px-7 py-3 text-[14px] font-semibold text-medical-foreground shadow-[0_8px_20px_-8px_rgba(82,149,66,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_12px_28px_-10px_rgba(24,47,88,0.45)]"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                solid ? "text-primary hover:bg-accent" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
      </div>
      <aside
        className={`lg:hidden fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-sm bg-white shadow-premium-lg transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <img src={logo.url} alt="" className="h-12 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-primary hover:bg-accent"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-accent"
              activeProps={{ className: "!text-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="appointment"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-medical px-6 py-3.5 text-sm font-semibold text-medical-foreground shadow-premium transition-colors hover:bg-primary"
          >
            Book Appointment
          </Link>
        </nav>
        <div className="mt-4 flex items-center justify-center gap-6 border-t border-border px-6 py-5 text-primary/70">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-medical">
            <Facebook size={18} strokeWidth={1.75} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-medical">
            <Instagram size={18} strokeWidth={1.75} />
          </a>
        </div>
      </aside>
    </header>
  );
}
