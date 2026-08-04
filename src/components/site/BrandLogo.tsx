import { Link } from "@tanstack/react-router";

export function BrandLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 sm:gap-3 shrink-0"
      aria-label="Dr. Waseem Ahmad Khan — Home"
    >
      {/* Icon */}
      <img
        src="/image/dr-waseem-header-icon.png"
        alt="Dr. Waseem Ahmad Khan"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
        draggable={false}
      />

      {/* Text */}
      <div className="leading-tight">
        <h1 className="font-serif font-semibold text-white text-base sm:text-lg md:text-xl lg:text-2xl">
          Dr. Waseem
        </h1>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="w-3 sm:w-4 md:w-5 h-px bg-white/70"></span>

          <p className="uppercase tracking-[0.25em] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-white whitespace-nowrap">
            Ahmad Khan
          </p>

          <span className="w-3 sm:w-4 md:w-5 h-px bg-white/70"></span>
        </div>

        <p className="uppercase tracking-[0.12em] text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] text-gray-300 whitespace-nowrap">
          General &amp; Laparoscopic Surgeon
        </p>
      </div>
    </Link>
  );
}
