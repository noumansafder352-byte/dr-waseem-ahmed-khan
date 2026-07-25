import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";

type Step = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
};

const ACCENTS = ["#182F58", "#1F72B9", "#19979C", "#529542", "#1F72B9", "#19979C"];

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function usePerRow(): number {
  const get = () => {
    if (typeof window === "undefined") return 3;
    if (window.matchMedia("(min-width: 1024px)").matches) return 3;
    if (window.matchMedia("(min-width: 640px)").matches) return 2;
    return 1;
  };
  const [perRow, setPerRow] = useState<number>(get);
  useEffect(() => {
    const update = () => setPerRow(get());
    update();
    const mqA = window.matchMedia("(min-width: 1024px)");
    const mqB = window.matchMedia("(min-width: 640px)");
    mqA.addEventListener("change", update);
    mqB.addEventListener("change", update);
    return () => {
      mqA.removeEventListener("change", update);
      mqB.removeEventListener("change", update);
    };
  }, []);
  return perRow;
}

export function TreatmentTimeline({ steps }: { steps: Step[] }) {
  const perRow = usePerRow();
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map(() => false));
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  // Re-observe whenever layout (perRow) changes so refs bind to the current DOM.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = [...prev];
          let changed = false;
          entries.forEach((e) => {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            if (e.isIntersecting && !next[idx]) {
              next[idx] = true;
              changed = true;
            }
          });
          return changed ? next : prev;
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    els.forEach((el) => io.observe(el));

    // Initial synchronous check — covers items already in view on first paint.
    requestAnimationFrame(() => {
      const vh = window.innerHeight || 0;
      setVisible((prev) => {
        const next = [...prev];
        let changed = false;
        els.forEach((el) => {
          const idx = Number(el.dataset.idx);
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.9 && r.bottom > 0 && !next[idx]) {
            next[idx] = true;
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    });

    return () => io.disconnect();
  }, [perRow, steps.length]);

  const rows = useMemo(() => chunk(steps, perRow), [steps, perRow]);
  const scrolledCount = visible.filter(Boolean).length;
  const activeIndex = hoverIdx ?? Math.max(0, Math.min(steps.length - 1, scrolledCount - 1));

  const Node = ({ s, globalIdx }: { s: Step; globalIdx: number }) => {
    const accent = ACCENTS[globalIdx % ACCENTS.length];
    const isVisible = visible[globalIdx];
    const isActive = globalIdx === activeIndex;
    return (
      <div
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
          transitionDelay: `${(globalIdx % perRow) * 70}ms`,
        }}
      >
        <span
          aria-hidden
          className="relative z-10 grid h-[76px] w-[76px] place-items-center rounded-full bg-white ring-1 ring-border transition-[box-shadow,transform] duration-[400ms] ease-out sm:h-[84px] sm:w-[84px]"
          style={{
            boxShadow: isActive
              ? `0 0 0 6px ${accent}1f, 0 14px 30px -10px ${accent}66`
              : "0 6px 16px -8px rgba(24,47,88,0.18)",
            transform: isActive ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          <span
            className="grid h-[54px] w-[54px] place-items-center rounded-full transition-transform duration-[400ms] ease-out sm:h-[60px] sm:w-[60px]"
            style={{
              backgroundColor: `${accent}14`,
              color: accent,
              transform: isActive ? "scale(1.08)" : "scale(1)",
            }}
          >
            <s.icon size={24} />
          </span>
        </span>
        <span
          className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px]"
          style={{ color: accent }}
        >
          Step {String(globalIdx + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-tight text-primary sm:text-base lg:text-lg">
          {s.title}
        </h3>
        <p className="mt-1.5 max-w-[240px] text-[12.5px] leading-relaxed text-muted-foreground sm:text-[13px]">
          {s.desc}
        </p>
      </div>
    );
  };

  const HConnector = ({ reverse, aIdx }: { reverse: boolean; aIdx: number }) => {
    const isFilled = visible[aIdx] && visible[aIdx + 1];
    const accentA = ACCENTS[aIdx % ACCENTS.length];
    const accentB = ACCENTS[(aIdx + 1) % ACCENTS.length];
    return (
      <div className="relative flex w-6 items-start pt-[38px] sm:w-10 sm:pt-[41px] lg:w-14">
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-border">
          <div
            className="absolute top-0 h-[2px] rounded-full"
            style={{
              left: reverse ? "auto" : 0,
              right: reverse ? 0 : "auto",
              width: isFilled ? "100%" : "0%",
              background: `linear-gradient(to ${reverse ? "left" : "right"}, ${accentA}, ${accentB})`,
              transition: "width 500ms ease-out",
              boxShadow: "0 0 10px rgba(31,114,185,0.35)",
            }}
          />
        </div>
      </div>
    );
  };

  const VDrop = ({ side, aIdx }: { side: "left" | "right"; aIdx: number }) => {
    const isFilled = visible[aIdx] && visible[aIdx + 1];
    const accentA = ACCENTS[aIdx % ACCENTS.length];
    const accentB = ACCENTS[(aIdx + 1) % ACCENTS.length];
    // Position the drop so it lines up with the outer node's center column
    return (
      <div className={`flex h-10 w-full ${side === "right" ? "justify-end" : "justify-start"}`}>
        <div
          className="relative h-full w-[2px] overflow-hidden rounded-full bg-border"
          style={
            side === "right"
              ? { marginRight: "calc((100% / var(--per-row) - 8px) / 2)" }
              : { marginLeft: "calc((100% / var(--per-row) - 8px) / 2)" }
          }
        >
          <div
            className="absolute left-0 top-0 w-[2px] rounded-full"
            style={{
              height: isFilled ? "100%" : "0%",
              background: `linear-gradient(to bottom, ${accentA}, ${accentB})`,
              transition: "height 500ms ease-out",
              boxShadow: "0 0 10px rgba(31,114,185,0.35)",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative" style={{ ["--per-row" as string]: String(perRow) }}>
      {rows.map((row, rowIdx) => {
        const isReversed = perRow > 1 && rowIdx % 2 === 1;
        const displayRow = isReversed ? [...row].reverse() : row;
        const lastRow = rowIdx === rows.length - 1;
        const rowEndGlobal = rowIdx * perRow + row.length - 1;
        const dropSide: "left" | "right" = isReversed ? "left" : "right";

        return (
          <div key={rowIdx}>
            <div className={perRow === 1 ? "flex flex-col items-center gap-10" : "flex items-start justify-between"}>
              {displayRow.map((s, i) => {
                const globalIdx = isReversed
                  ? rowIdx * perRow + (row.length - 1 - i)
                  : rowIdx * perRow + i;
                const isLastInRow = i === displayRow.length - 1;
                const connectorAIdx = isReversed ? globalIdx - 1 : globalIdx;
                return (
                  <div
                    key={s.title}
                    className={perRow === 1 ? "flex w-full flex-col items-center" : "flex flex-1 items-start"}
                  >
                    <Node s={s} globalIdx={globalIdx} />
                    {perRow > 1 && !isLastInRow && (
                      <HConnector reverse={isReversed} aIdx={connectorAIdx} />
                    )}
                    {perRow === 1 && globalIdx < steps.length - 1 && (
                      <div className="relative my-4 h-10 w-[2px] overflow-hidden rounded-full bg-border">
                        <div
                          className="absolute left-0 top-0 w-[2px] rounded-full"
                          style={{
                            height: visible[globalIdx] && visible[globalIdx + 1] ? "100%" : "0%",
                            background: `linear-gradient(to bottom, ${ACCENTS[globalIdx % ACCENTS.length]}, ${ACCENTS[(globalIdx + 1) % ACCENTS.length]})`,
                            transition: "height 500ms ease-out",
                            boxShadow: "0 0 10px rgba(31,114,185,0.35)",
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {perRow > 1 && !lastRow && <VDrop side={dropSide} aIdx={rowEndGlobal} />}
          </div>
        );
      })}
    </div>
  );
}
