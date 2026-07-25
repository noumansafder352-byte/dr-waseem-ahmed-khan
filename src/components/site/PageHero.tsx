import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}) {
  const heightClass = "min-h-[80vh] md:min-h-[90vh]";
  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#182F58]/92 via-[#182F58]/78 to-[#1F72B9]/60" />
      <div className={`relative mx-auto flex ${heightClass} max-w-7xl flex-col justify-center px-6 pb-16 pt-52 sm:pt-56 md:px-8 md:pt-40`}>

        {eyebrow && (
          <span className="mb-4 inline-block w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
