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

export function SiteHeader(_: { transparentOnTop?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-primary transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]" : "shadow-none"
      }`}
    >
      {/* Top information bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-12">
          <a
            href="https://maps.google.com/?q=Rawalpindi,Pakistan"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium tracking-wide text-white/85 transition-colors hover:text-white"
          >
            <MapPin size={15} strokeWidth={1.75} />
            <span>Rawalpindi, Pakistan</span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white transition-colors duration-200 hover:text-medical"
            >
              <Facebook size={16} strokeWidth={1.75} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white transition-colors duration-200 hover:text-medical"
            >
              <Instagram size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto grid h-[88px] max-w-[1280px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 md:px-10 lg:px-12">
        <Link
          to="/"
          className="flex items-center shrink-0"
          aria-label="Dr. Waseem Ahmad Khan — Home"
        >
          <img
            src="/image/dr-waseem-logo-icon.png"
            alt="Dr. Waseem Ahmad Khan — General & Laparoscopic Surgeon"
            className="h-[86px] w-auto md:h-[96px]"
            draggable={false}
          />
        </Link>

        <nav className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-12">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="relative py-2 text-[17px] font-semibold text-white transition-colors hover:text-teal"
                  activeProps={{
                    className:
                      "after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-medical after:content-['']",
                  }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            to="/contact"
            hash="appointment"
            className="hidden md:inline-flex items-center rounded-full bg-medical px-[34px] py-[14px] text-[14px] font-semibold text-medical-foreground shadow-[0_10px_24px_-10px_rgba(82,149,66,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal hover:shadow-[0_14px_30px_-12px_rgba(25,151,156,0.55)]"
          >
            Book Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" />
      </div>
      <aside
        className={`lg:hidden fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-sm bg-primary shadow-premium-lg transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <img src={logo.url} alt="" className="h-16 w-auto" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
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
              className="rounded-xl px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
              activeProps={{ className: "!text-medical" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            hash="appointment"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-medical px-6 py-3.5 text-sm font-semibold text-medical-foreground shadow-premium transition-colors hover:bg-teal"
          >
            Book Appointment
          </Link>
        </nav>
        <div className="mt-4 flex items-center justify-center gap-6 border-t border-white/10 px-6 py-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-white transition-colors hover:text-medical"
          >
            <Facebook size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-white transition-colors hover:text-medical"
          >
            <Instagram size={18} strokeWidth={1.75} />
          </a>
        </div>
      </aside>
    </header>
  );
}
