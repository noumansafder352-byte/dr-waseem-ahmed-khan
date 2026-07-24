import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader transparentOnTop={transparentHeader} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
