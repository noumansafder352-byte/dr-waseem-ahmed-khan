import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-gradient px-8 py-16 text-center shadow-premium-lg md:px-16 md:py-20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Take the First Step Toward Better Health
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg">
            Whether you need a consultation, second opinion, or surgical treatment,
            we're here to provide trusted care every step of the way.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              hash="appointment"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-premium transition-transform hover:-translate-y-0.5"
            >
              Book Appointment <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
