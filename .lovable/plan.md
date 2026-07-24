
# Dr. Waseem Ahmad Khan — Premium Surgical Practice Website

A four-page marketing site (Home, About, Services, Contact) styled to match international private-hospital standards, using the provided logo and brand colors (#032E59 primary, #01969C secondary, white background).

## Design system

- Typography: Plus Jakarta Sans (body) + a refined serif accent for hero/section headings to add a premium editorial feel; loaded via `<link>` in `__root.tsx`.
- Color tokens in `src/styles.css` (oklch equivalents of #032E59 and #01969C), with a subtle primary→secondary gradient utility for accents.
- Rounded corners 16–20px, generous whitespace, soft premium shadows, fade-up on scroll, smooth hover states.
- Real medical photography sourced via Unsplash medical/surgical imagery (hero, about, service cards, CTA bands). No AI doctor illustrations.
- Lucide icons for services, credentials, process steps, contact info.

## Assets

- Import the uploaded logo and favicon via `lovable-assets` from `/mnt/user-uploads/`:
  - `DR._Waseem_Final_Logo.png` → header/footer logo (with proper padding).
  - `Dr._Waseem_Favicon.png` → `public/favicon.png`, referenced in `__root.tsx` links; remove default `favicon.ico`.

## Routing (TanStack Start)

- `src/routes/index.tsx` — Home (replaces placeholder)
- `src/routes/about.tsx` — About
- `src/routes/services.tsx` — Services
- `src/routes/contact.tsx` — Contact

Each route defines its own `head()` with unique title, description, og:title, og:description, og:type=website, twitter:card.

## Shared components (`src/components/site/`)

- `SiteHeader.tsx` — sticky header, transparent over hero, becomes white with soft shadow on scroll (scroll listener + `useState`). Logo left, nav center/right (Home, About, Services, Contact), Book Appointment button (primary gradient).
- `SiteFooter.tsx` — logo, intro, quick links, services, contact info, working hours, social icons, copyright.
- `MobileNav.tsx` — shadcn Sheet-based mobile menu.
- `SectionHeading.tsx`, `FadeUp.tsx` (IntersectionObserver-driven fade/translate), `GradientButton.tsx`, `ServiceCard.tsx`, `CredentialCard.tsx`, `ProcessStep.tsx`, `FaqAccordion.tsx` (shadcn Accordion), `CtaBand.tsx`.

## Home page sections

1. **Hero** — full-width photo background with dark gradient overlay, transparent header over it; heading "Expert Surgical Care You Can Trust", doctor name, qualifications line, description, two buttons (Book Appointment, Contact Us).
2. **About Doctor** — split layout: portrait/surgery photo + heading "Experience. Precision. Compassion." + copy.
3. **Areas of Expertise** — grid of 7 service cards (icon + title + short blurb) with hover lift.
4. **Why Patients Trust** — 8 feature cards on a subtle gradient section.
5. **Professional Credentials** — two-column: Qualifications list + Leadership list, each as icon-anchored premium cards.
6. **Patient-Centered Care Process** — horizontal 6-step timeline (Consultation → Follow-Up) with connecting line, numbered nodes.
7. **FAQ** — shadcn Accordion with the 4 provided Q&As.
8. **Book Appointment CTA** — gradient band with heading, copy, two buttons.

## About page

Hero banner, Meet the Surgeon (long bio built from provided copy), Professional Qualifications (icon cards), Leadership & Experience timeline (vertical), Patient Care Philosophy, Core Values (icon grid: Integrity, Compassion, Excellence, Precision, etc.), CTA.

## Services page

Hero banner, intro paragraph, 7 detailed service cards with concise professional descriptions, treatment process timeline (reuse component), CTA.

## Contact page

Hero banner, contact info cards (phone/email/address placeholders — using sensible defaults like "Rawalpindi, Pakistan" that user can edit later), appointment form (Full Name, Phone, Email, Service select, Preferred Date, Message) as a pure UI form with toast on submit (no backend), embedded Google Map iframe (Rawalpindi centered), "Preparing for Your Consultation" checklist, consultation hours table, CTA.

## Technical details

- Scroll-shadow header: `useEffect` scroll listener sets `scrolled` state; classes toggle between transparent/white+shadow. Hero pages get transparent-start; non-hero pages get white header always (prop on `SiteHeader`).
- Fade-up: single `FadeUp` component using IntersectionObserver adding `opacity-100 translate-y-0` class.
- Book Appointment button links to `/contact#appointment` (in-page anchor, allowed for form scroll).
- All colors via semantic tokens (`bg-primary`, `text-secondary`, `bg-gradient-brand` custom utility). No hardcoded hex in components.
- Head metadata per route with unique title/description/og tags. Root gets sitewide defaults + favicon.

## Out of scope

- No backend / real appointment persistence (form is UI-only with toast confirmation).
- No CMS.
- No auth.

If you want the appointment form to actually deliver submissions (email or database), say so and I'll add Lovable Cloud + a server function in a follow-up.
