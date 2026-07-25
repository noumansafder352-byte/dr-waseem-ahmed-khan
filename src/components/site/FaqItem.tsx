import { useState } from "react";
import { Plus, X } from "lucide-react";

export function FaqItem({
  index,
  q,
  a,
  defaultOpen = false,
}: {
  index: number;
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const num = String(index).padStart(2, "0");
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[22px] border bg-white transition-all duration-[350ms] ease-out",
        open
          ? "border-transparent shadow-premium-lg [background:linear-gradient(#ffffff,#ffffff)_padding-box,linear-gradient(135deg,#182F58_0%,#1F72B9_45%,#19979C_100%)_border-box] border-[1.5px]"
          : "border-border/70 shadow-sm hover:-translate-y-0.5 hover:shadow-premium",
      ].join(" ")}
    >
      {open && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(31,114,185,0.05)_0%,rgba(25,151,156,0.035)_45%,transparent_75%)]"
        />
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex w-full items-center gap-4 px-5 py-5 text-left md:gap-6 md:px-7 md:py-6"
        aria-expanded={open}
      >
        <span
          className={[
            "grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold tracking-wide transition-colors duration-[350ms] md:h-9 md:w-9 md:text-xs",
            open
              ? "bg-[#182F58] text-white"
              : "bg-[#1F72B9]/[0.08] text-[#1F72B9] group-hover:bg-[#1F72B9]/[0.14]",
          ].join(" ")}
        >
          {num}
        </span>
        <span
          className={[
            "flex-1 text-[15px] font-semibold tracking-tight transition-colors duration-[350ms] md:text-lg",
            open ? "text-primary" : "text-primary/85 group-hover:text-primary",
          ].join(" ")}
        >
          {q}
        </span>
        <span
          className={[
            "relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-[350ms] md:h-11 md:w-11",
            open
              ? "border-transparent bg-[#182F58] text-white"
              : "border-border/70 bg-white text-primary/70 group-hover:border-[#19979C]/40 group-hover:bg-[#19979C]/[0.06] group-hover:text-[#19979C]",
          ].join(" ")}
        >
          <Plus
            size={18}
            strokeWidth={2}
            className={[
              "absolute transition-all duration-[350ms] ease-out",
              open ? "rotate-45 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            ].join(" ")}
          />
          <X
            size={18}
            strokeWidth={2}
            className={[
              "absolute transition-all duration-[350ms] ease-out",
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-0 opacity-0",
            ].join(" ")}
          />
        </span>
      </button>
      <div
        className={[
          "grid transition-[grid-template-rows,opacity] duration-[400ms] ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div
            className={[
              "px-5 pb-6 pl-[4.25rem] pr-5 text-[14.5px] leading-[1.75] text-muted-foreground transition-transform duration-[400ms] ease-out md:pl-[4.75rem] md:pr-16 md:text-[15.5px]",
              open ? "translate-y-0" : "-translate-y-1",
            ].join(" ")}
          >
            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}
