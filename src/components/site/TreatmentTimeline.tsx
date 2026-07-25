import { useEffect, useRef, useState, type ComponentType } from "react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const ACCENTS = ["#182F58", "#1F72B9", "#19979C", "#529542", "#1F72B9", "#19979C"];
const PER_ROW = 3;

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

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
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const rows = chunk(steps, PER_ROW);
  const scrolledCount = visible.filter(Boolean).length;
  const activeIndex = hoverIdx ?? Math.max(0, Math.min(steps.length - 1, scrolledCount - 1));

  const renderNode = (s: Step, globalIdx: number) => {
    const accent = ACCENTS[globalIdx % ACCENTS.length];
    const isVisible = visible[globalIdx];
    const isActive = globalIdx === activeIndex;
    return (
      <div
        key={s.title}
        ref={(el) => {
          stepRefs.current[globalIdx] = el;
        }}
        data-idx={globalIdx}
        onMouseEnter={() => setHoverIdx(globalIdx)}
        onMouseLeave={() => setHoverIdx(null)}
        className="flex flex-1 flex-col items-center px-2 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 500ms ease-out, transform 500ms ease-out",
          transitionDelay: `${globalIdx * 70}ms`,
        }}
      >
        <span
          aria-hidden
          className="relative z-10 grid h-[84px] w-[84px] place-items-center rounded-full bg-white ring-1 ring-border transition-[box-shadow,transform] duration-[400ms] ease-out"
          style={{
            boxShadow: isActive
              ? `0 0 0 6px ${accent}1f, 0 14px 30px -10px ${accent}66`
              : "0 6px 16px -8px rgba(24,47,88,0.18)",
            transform: isActive ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          <span
            className="grid h-[60px] w-[60px] place-items-center rounded-full transition-transform duration-[400ms] ease-out"
            style={{
              backgroundColor: `${accent}14`,
              color: accent,
              transform: isActive ? "scale(1.08)" : "scale(1)",
            }}
          >
            <s.icon size={26} />
          </span>
        </span>
        <span
          className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em]"
          style={{ color: accent }}
        >
          Step {String(globalIdx + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-tight text-primary lg:text-lg">
          {s.title}
        </h3>
        <p className="mt-1.5 max-w-[240px] text-[13px] leading-relaxed text-muted-foreground">
          {s.desc}
        </p>
      </div>
    );
  };

  const Connector = ({
    reverse = false,
    globalIdx,
  }: {
    reverse?: boolean;
    globalIdx: number;
  }) => {
    const isFilled = visible[globalIdx] && visible[globalIdx + 1];
    const accentA = ACCENTS[globalIdx % ACCENTS.length];
    const accentB = ACCENTS[(globalIdx + 1) % ACCENTS.length];
    return (
      <div className="relative flex w-8 items-start pt-[41px] lg:w-14">
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div
            className="absolute top-0 h-[2px] rounded-full"
            style={{
              left: reverse ? "auto" : 0,
              right: reverse ? 0 : "auto",
              width: isFilled ? "100%" : "0%",
              background: `linear-gradient(to ${reverse ? "left" : "right"}, ${accentA}, ${accentB})`,
              transition: "width 600ms ease-out",
              boxShadow: "0 0 10px rgba(31,114,185,0.35)",
            }}
          />
        </div>
      </div>
    );
  };

  const VerticalDrop = ({ side, globalIdx }: { side: "left" | "right"; globalIdx: number }) => {
    const isFilled = visible[globalIdx] && visible[globalIdx + 1];
    const accentA = ACCENTS[globalIdx % ACCENTS.length];
    const accentB = ACCENTS[(globalIdx + 1) % ACCENTS.length];
    return (
      <div className={`hidden h-10 w-full md:flex ${side === "right" ? "justify-end" : "justify-start"}`}>
        <div className="relative mr-[42px] ml-[42px] h-full w-[2px] overflow-hidden rounded-full bg-border" style={side === "right" ? { marginLeft: 0 } : { marginRight: 0 }}>
          <div
            className="absolute left-0 top-0 w-[2px] rounded-full"
            style={{
              height: isFilled ? "100%" : "0%",
              background: `linear-gradient(to bottom, ${accentA}, ${accentB})`,
              transition: "height 600ms ease-out",
              boxShadow: "0 0 10px rgba(31,114,185,0.35)",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* ============ DESKTOP / TABLET: zigzag (snake) ============ */}
      <div className="hidden md:block">
        {rows.map((row, rowIdx) => {
          const isReversed = rowIdx % 2 === 1;
          const displayRow = isReversed ? [...row].reverse() : row;
          const lastRow = rowIdx === rows.length - 1;
          // Global index of last node in this visual row's end
          const rowEndGlobal = rowIdx * PER_ROW + row.length - 1;
          // Drop side: after LTR row, drop is on the right; after RTL row, drop is on the left.
          const dropSide: "left" | "right" = isReversed ? "left" : "right";

          return (
            <div key={rowIdx}>
              <div className="flex items-start justify-between">
                {displayRow.map((s, i) => {
                  const globalIdx = isReversed
                    ? rowIdx * PER_ROW + (row.length - 1 - i)
                    : rowIdx * PER_ROW + i;
                  const isLastInRow = i === displayRow.length - 1;
                  // Connector links display i -> i+1; in reversed rows that maps to globalIdx-1
                  const connectorGlobalIdx = isReversed ? globalIdx - 1 : globalIdx;
                  return (
                    <div key={s.title} className="flex flex-1 items-start">
                      {renderNode(s, globalIdx)}
                      {!isLastInRow && (
                        <Connector reverse={isReversed} globalIdx={connectorGlobalIdx} />
                      )}
                    </div>
                  );
                })}
              </div>
              {!lastRow && <VerticalDrop side={dropSide} globalIdx={rowEndGlobal} />}
            </div>
          );
        })}
      </div>

      {/* ============ MOBILE: swipeable stepper ============ */}
      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((s, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const isVisible = visible[i];
            return (
              <div
                key={s.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-idx={i}
                className="w-[78%] shrink-0 snap-center"
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
  );
}
