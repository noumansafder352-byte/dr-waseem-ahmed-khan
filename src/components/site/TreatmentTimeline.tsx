import { useEffect, useRef, useState, type ComponentType } from "react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const ACCENTS = ["#182F58", "#1F72B9", "#19979C", "#529542", "#1F72B9", "#19979C"];

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [progress, setProgress] = useState(0); // 0..1 of the connector line

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          entries.forEach((e) => {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            if (e.isIntersecting) next[idx] = true;
          });
          return next;
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total);
      setProgress(Math.min(1, scrolled / total));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(
    steps.length - 1,
    Math.max(0, visible.lastIndexOf(true)),
  );

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl">
      {/* Rail (base) */}
      <div
        aria-hidden
        className="absolute left-[27px] top-2 bottom-2 w-[2px] rounded-full bg-border md:left-1/2 md:-translate-x-1/2"
      />
      {/* Rail (progress) */}
      <div
        aria-hidden
        className="absolute left-[27px] top-2 w-[2px] rounded-full md:left-1/2 md:-translate-x-1/2"
        style={{
          height: `calc(${progress * 100}% - 4px)`,
          background:
            "linear-gradient(to bottom, #182F58 0%, #1F72B9 40%, #19979C 75%, #529542 100%)",
          transition: "height 400ms ease-out",
          boxShadow: "0 0 12px rgba(31,114,185,0.35)",
        }}
      />

      <ol className="relative space-y-10 md:space-y-16">
        {steps.map((s, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          const isVisible = visible[i];
          const isActive = i === activeIndex;
          const alignRight = i % 2 === 1; // desktop side alternation
          return (
            <li
              key={s.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-idx={i}
              className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-0 ${
                alignRight ? "md:[&>*:first-child]:col-start-2" : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 600ms ease-out, transform 600ms ease-out",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {/* Node (mobile: left, desktop: centered on rail) */}
              <span
                aria-hidden
                className="absolute left-0 top-2 z-10 grid h-14 w-14 place-items-center rounded-full bg-white ring-1 ring-border md:left-1/2 md:-translate-x-1/2"
                style={{
                  boxShadow: isActive
                    ? `0 0 0 4px ${accent}22, 0 10px 24px -8px ${accent}66`
                    : "0 4px 12px -6px rgba(24,47,88,0.15)",
                  transition: "box-shadow 400ms ease-out",
                }}
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-full transition-transform duration-[400ms] ease-out"
                  style={{
                    backgroundColor: `${accent}14`,
                    color: accent,
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <s.icon size={20} />
                </span>
              </span>

              {/* Card */}
              <div
                className={`ml-20 flex-1 md:ml-0 ${
                  alignRight ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right"
                }`}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-premium transition-[transform,box-shadow] duration-[400ms] ease-out hover:-translate-y-0.5 hover:shadow-premium-lg md:p-7"
                >
                  <span
                    aria-hidden
                    className={`absolute top-0 h-[3px] w-16 rounded-full transition-[width] duration-[400ms] ease-out group-hover:w-28 ${
                      alignRight ? "left-0" : "right-0"
                    }`}
                    style={{ backgroundColor: accent }}
                  />
                  <div
                    className={`flex items-center gap-3 ${
                      alignRight ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.24em]"
                      style={{ color: accent }}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-primary md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
