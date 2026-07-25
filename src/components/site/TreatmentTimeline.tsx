import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from "react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const ACCENTS = [
  "var(--primary)",
  "var(--secondary)",
  "var(--teal)",
  "var(--medical)",
  "var(--secondary)",
  "var(--teal)",
];

const accentStyle = (accent: string) => ({
  "--step-accent": accent,
}) as CSSProperties;

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const element = timelineRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setDrawn(true);
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(element);
    const fallback = window.setTimeout(() => setDrawn(true), 900);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const activeIndex = hoverIdx ?? 0;
  const topRow = steps.slice(0, 3);
  const bottomRow = steps.slice(3, 6).reverse();

  const StepNode = ({ s, globalIdx }: { s: Step; globalIdx: number }) => {
    const accent = ACCENTS[globalIdx % ACCENTS.length];
    const isActive = globalIdx === activeIndex;

    return (
      <div
        data-idx={globalIdx}
        onMouseEnter={() => setHoverIdx(globalIdx)}
        onMouseLeave={() => setHoverIdx(null)}
        className="group/journey flex min-h-[188px] min-w-0 flex-col items-center rounded-[26px] border border-border/70 bg-card/90 px-3 py-4 text-center shadow-premium backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-[400ms] ease-out hover:-translate-y-1 hover:border-teal/40 hover:shadow-premium-lg md:min-h-[196px] md:px-5 md:py-5"
        style={accentStyle(accent)}
      >
        <span
          aria-hidden
          className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-background ring-1 ring-border transition-[box-shadow,transform] duration-[400ms] ease-out md:h-[76px] md:w-[76px]"
          style={{
            boxShadow: isActive
              ? "0 0 0 6px color-mix(in oklab, var(--step-accent) 14%, transparent), 0 14px 30px -12px color-mix(in oklab, var(--step-accent) 34%, transparent)"
              : "0 6px 16px -10px color-mix(in oklab, var(--primary) 18%, transparent)",
            transform: isActive ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          <span
            className="grid h-[46px] w-[46px] place-items-center rounded-full transition-transform duration-[400ms] ease-out group-hover/journey:scale-105 md:h-[54px] md:w-[54px]"
            style={{
              backgroundColor: "color-mix(in oklab, var(--step-accent) 8%, transparent)",
              color: "var(--step-accent)",
              transform: isActive ? "scale(1.08)" : "scale(1)",
            }}
          >
            <s.icon size={22} />
          </span>
        </span>
        <span
          className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] md:text-[11px]"
          style={{ color: "var(--step-accent)" }}
        >
          Step {String(globalIdx + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-tight text-primary md:text-lg">
          {s.title}
        </h3>
        <p className="mt-2 max-w-[230px] text-[12.5px] leading-relaxed text-muted-foreground md:text-[13px]">
          {s.desc}
        </p>
      </div>
    );
  };

  const HorizontalRail = ({ fromIdx, reverse = false }: { fromIdx: number; reverse?: boolean }) => {
    const accentA = ACCENTS[fromIdx % ACCENTS.length];
    const accentB = ACCENTS[(fromIdx + 1) % ACCENTS.length];

    return (
      <div className="flex items-start pt-8 md:pt-9">
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border">
          <span
            className="absolute top-0 h-[2px] rounded-full transition-[width] duration-700 ease-out"
            style={{
              left: reverse ? "auto" : 0,
              right: reverse ? 0 : "auto",
              width: drawn ? "100%" : "0%",
              background: `linear-gradient(to ${reverse ? "left" : "right"}, ${accentA}, ${accentB})`,
            }}
          />
        </div>
      </div>
    );
  };

  const VerticalDrop = () => (
    <div className="grid grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)]">
      <div className="col-start-5 flex h-12 justify-center md:h-14">
        <span className="relative h-full w-[2px] overflow-hidden rounded-full bg-border">
          <span
            className="absolute left-0 top-0 w-[2px] rounded-full transition-[height] duration-700 ease-out"
            style={{
              height: drawn ? "100%" : "0%",
              background: `linear-gradient(to bottom, ${ACCENTS[2]}, ${ACCENTS[3]})`,
            }}
          />
        </span>
      </div>
    </div>
  );

  return (
    <div ref={timelineRef} className="relative">
      <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
        <div className="min-w-[720px] sm:min-w-0">
          <div className="grid grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] items-start md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)]">
            {topRow.map((s, index) => (
              <div key={s.title} className="contents">
                <StepNode s={s} globalIdx={index} />
                {index < topRow.length - 1 && <HorizontalRail fromIdx={index} />}
              </div>
            ))}
          </div>

          <VerticalDrop />

          <div className="grid grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)] items-start md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)_4rem_minmax(0,1fr)]">
            {bottomRow.map((s, displayIndex) => {
              const globalIdx = steps.findIndex((step) => step.title === s.title);
              const railFrom = globalIdx - 1;

              return (
                <div key={s.title} className="contents">
                  <StepNode s={s} globalIdx={globalIdx} />
                  {displayIndex < bottomRow.length - 1 && <HorizontalRail fromIdx={railFrom} reverse />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
