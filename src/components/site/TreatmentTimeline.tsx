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

const accentStyle = (accent: string) => ({ "--step-accent": accent }) as CSSProperties;

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [drawn, setDrawn] = useState(false);

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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    const fallback = window.setTimeout(() => setDrawn(true), 900);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  const topRow = steps.slice(0, 3);
  const bottomRow = steps.slice(3, 6).reverse();

  const StepNode = ({ s, globalIdx }: { s: Step; globalIdx: number }) => {
    const accent = ACCENTS[globalIdx % ACCENTS.length];
    return (
      <div
        className="group/step flex min-w-0 flex-col items-center px-2 text-center"
        style={accentStyle(accent)}
      >
        <span
          aria-hidden
          className="relative grid h-[74px] w-[74px] place-items-center rounded-full transition-transform duration-500 ease-out group-hover/step:-translate-y-1 md:h-[84px] md:w-[84px]"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border transition-colors duration-500"
            style={{
              borderColor: "color-mix(in oklab, var(--step-accent) 28%, transparent)",
            }}
          />
          <span
            aria-hidden
            className="absolute inset-[6px] rounded-full transition-all duration-500 group-hover/step:inset-[3px]"
            style={{
              background: "color-mix(in oklab, var(--step-accent) 6%, transparent)",
            }}
          />
          <s.icon
            size={30}
            className="relative transition-transform duration-500 group-hover/step:scale-110"
            {...({ style: { color: "var(--step-accent)" } } as { style: CSSProperties })}
          />
        </span>
        <span
          className="mt-5 text-[10px] font-semibold uppercase tracking-[0.32em] md:text-[11px]"
          style={{ color: "var(--step-accent)" }}
        >
          Step {String(globalIdx + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 font-display text-base font-semibold leading-tight text-primary md:text-[17px]">
          {s.title}
        </h3>
        <p className="mt-2 max-w-[220px] text-[12.5px] leading-relaxed text-muted-foreground md:text-[13px]">
          {s.desc}
        </p>
      </div>
    );
  };

  const Arrow = ({ direction }: { direction: "right" | "left" | "down" }) => {
    const rotate =
      direction === "right"
        ? "rotate(0deg)"
        : direction === "left"
          ? "rotate(180deg)"
          : "rotate(90deg)";
    return (
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className="h-2.5 w-2.5"
        style={{ transform: rotate, color: "currentColor" }}
      >
        <path
          d="M2 2 L8 6 L2 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const HorizontalRail = ({ fromIdx, reverse = false }: { fromIdx: number; reverse?: boolean }) => {
    const accentA = ACCENTS[fromIdx % ACCENTS.length];
    const accentB = ACCENTS[(fromIdx + 1) % ACCENTS.length];
    // Rail aligns with the vertical center of the icon (icon height ~84px → center ~42px)
    return (
      <div className="relative flex items-center" style={{ marginTop: "37px", height: "10px" }}>
        <div className="relative h-[1.5px] w-full overflow-hidden bg-border/70">
          <span
            className="absolute top-0 h-[1.5px] transition-[width] duration-[900ms] ease-out"
            style={{
              left: reverse ? "auto" : 0,
              right: reverse ? 0 : "auto",
              width: drawn ? "100%" : "0%",
              background: `linear-gradient(to ${reverse ? "left" : "right"}, ${accentA}, ${accentB})`,
            }}
          />
        </div>
        <span
          className="absolute top-1/2 -translate-y-1/2 transition-opacity duration-500"
          style={{
            [reverse ? "left" : "right"]: "-2px",
            opacity: drawn ? 1 : 0,
            color: accentB,
          }}
        >
          <Arrow direction={reverse ? "left" : "right"} />
        </span>
      </div>
    );
  };

  return (
    <div ref={timelineRef} className="relative">
      <div className="-mx-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
        <div className="min-w-[760px] sm:min-w-0">
          {/* Top row: left → right */}
          <div className="grid grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] items-start md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)_5rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)_7rem_minmax(0,1fr)]">
            {topRow.map((s, index) => (
              <div key={s.title} className="contents">
                <StepNode s={s} globalIdx={index} />
                {index < topRow.length - 1 && <HorizontalRail fromIdx={index} />}
              </div>
            ))}
          </div>

          {/* Vertical connector: from step 3 (top-right) down to step 4 (bottom-right) */}
          <div className="grid grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)_5rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)_7rem_minmax(0,1fr)]">
            <div className="col-start-5 flex flex-col items-center" style={{ height: "72px" }}>
              <span className="relative h-full w-[1.5px] overflow-hidden bg-border/70">
                <span
                  className="absolute left-0 top-0 w-[1.5px] transition-[height] duration-[900ms] ease-out"
                  style={{
                    height: drawn ? "100%" : "0%",
                    background: `linear-gradient(to bottom, ${ACCENTS[2]}, ${ACCENTS[3]})`,
                  }}
                />
              </span>
              <span
                className="-mt-1 transition-opacity duration-500"
                style={{ opacity: drawn ? 1 : 0, color: ACCENTS[3] }}
              >
                <Arrow direction="down" />
              </span>
            </div>
          </div>

          {/* Bottom row: right → left (displayed as [step6, step5, step4]) */}
          <div className="grid grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)] items-start md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)_5rem_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)_7rem_minmax(0,1fr)]">
            {bottomRow.map((s, displayIndex) => {
              const globalIdx = steps.findIndex((step) => step.title === s.title);
              const railFrom = globalIdx - 1;
              return (
                <div key={s.title} className="contents">
                  <StepNode s={s} globalIdx={globalIdx} />
                  {displayIndex < bottomRow.length - 1 && (
                    <HorizontalRail fromIdx={railFrom} reverse />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
