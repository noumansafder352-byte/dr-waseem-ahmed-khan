import { useEffect, useRef, useState, type ComponentType } from "react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const ACCENTS = ["#182F58", "#1F72B9", "#19979C", "#529542", "#1F72B9", "#19979C"];

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [progress, setProgress] = useState(0);
  const [activeHover, setActiveHover] = useState<number | null>(null);

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

  const scrolledCount = visible.filter(Boolean).length;
  const activeIndex =
    activeHover ?? Math.max(0, Math.min(steps.length - 1, scrolledCount - 1));

  return (
    <div ref={containerRef} className="relative">
      {/* ============ DESKTOP / TABLET: horizontal timeline ============ */}
      <div className="hidden md:block">
        <ol className="relative grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
          {/* Rail base */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 h-[2px] rounded-full bg-border"
            style={{ top: "44px" }}
          />
          {/* Rail progress */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 h-[2px] rounded-full"
            style={{
              top: "44px",
              width: `${progress * 100}%`,
              background:
                "linear-gradient(to right, #182F58 0%, #1F72B9 40%, #19979C 75%, #529542 100%)",
              transition: "width 500ms ease-out",
              boxShadow: "0 0 12px rgba(31,114,185,0.35)",
            }}
          />

          {steps.map((s, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const isVisible = visible[i];
            const isActive = i === activeIndex;
            return (
              <li
                key={s.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-idx={i}
                onMouseEnter={() => setActiveHover(i)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative flex flex-col items-center px-3 text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 500ms ease-out, transform 500ms ease-out",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {/* Node */}
                <span
                  aria-hidden
                  className="relative z-10 grid h-[88px] w-[88px] place-items-center rounded-full bg-white ring-1 ring-border transition-[box-shadow,transform] duration-[400ms] ease-out"
                  style={{
                    boxShadow: isActive
                      ? `0 0 0 6px ${accent}1f, 0 14px 30px -10px ${accent}66`
                      : "0 6px 16px -8px rgba(24,47,88,0.18)",
                    transform: isActive ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  <span
                    className="grid h-16 w-16 place-items-center rounded-full transition-transform duration-[400ms] ease-out"
                    style={{
                      backgroundColor: `${accent}14`,
                      color: accent,
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                    }}
                  >
                    <s.icon size={28} />
                  </span>
                </span>

                {/* Step label */}
                <span
                  className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: accent }}
                >
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-primary lg:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      {/* ============ MOBILE: swipeable horizontal timeline ============ */}
      <div className="md:hidden">
        <div className="relative">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-1 pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((s, i) => {
              const accent = ACCENTS[i % ACCENTS.length];
              const isVisible = visible[i];
              return (
                <div
                  key={s.title}
                  ref={(el) => {
                    stepRefs.current[i] = el as unknown as HTMLLIElement | null;
                  }}
                  data-idx={i}
                  className="relative w-[78%] shrink-0 snap-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 500ms ease-out, transform 500ms ease-out",
                  }}
                >
                  <div className="rounded-2xl border border-border bg-white p-5 shadow-premium">
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-full"
                        style={{ backgroundColor: `${accent}14`, color: accent }}
                      >
                        <s.icon size={22} />
                      </span>
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                        style={{ color: accent }}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-primary">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Mobile progress dots */}
          <div className="mt-2 flex items-center justify-center gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 20 : 6,
                  backgroundColor:
                    i === activeIndex ? ACCENTS[i % ACCENTS.length] : "#E2E8F0",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
