# Accredian Enterprise - Landing Page Clone

Live Demo: https://accredian-enterprise-orpin.vercel.app

Repository: https://github.com/Bhavyaveer44/accredian-enterprise

## Approach & Architecture
- **App Router Architecture:** Modular component structure divided into atomic layout elements, section wrappers, and reusable UI primitives.
- **State Management & Form Handling:** Form handling powered by `react-hook-form` and `zod` schema validation for real-time validation feedback, with shared modal state via `LeadModalProvider`.
- **Data Isolation:** Clean separation of presentation and content using structured data mocks in `lib/mockData.ts`.
- **Section-Driven Layout:** Completed domain solution cards, delivery process steps, testimonial cards, FAQ accordion, and footer content using consistent mobile-first Tailwind patterns.

## ?? Setup
```bash
npm install
npm run dev
```

## AI Usage & Workflow

### Design System Pass (Button, Navbar, Section styling)
- **Where AI helped:** Claude scaffolded the initial Button variants, Navbar structure, and section layout containers. It also suggested the initial page flow and component hierarchy for the hero, domain solutions, process, testimonials, and FAQ sections.
- **What I modified manually:**
  - Corrected Button colors from AI's default blue to the project's blue theme, added shadow + active-press states for tactile feedback
  - Replaced static nav link hover with an animated underline (border transition) for clearer visual feedback
  - Refined the hero and section palette to use cooler blue accents, slate neutrals, and soft white surfaces for a more polished enterprise feel
  - Replaced flat placeholder backgrounds with consistent heading typography, max-width containers, and elevated cards for the content sections
  - Moved Navbar/Footer into the root layout instead of importing per-page, so page structure is enforced globally
  - Added shared modal state with `LeadModalProvider` so both navbar and hero CTA buttons open the same consultation modal
  - Built a reusable `Accordion` component for the FAQ section and a reusable `Modal` wrapper for the lead form
  - AI initially suggested `tailwind.config.ts` for the marquee keyframes, which is the v3 pattern. Caught that the project scaffolded with Tailwind v4 (config lives in CSS via `@theme`), and kept the animation in `globals.css` instead.
  - **Improvement with more time:** Formalize the blue theme into Tailwind custom properties so color updates can be managed centrally.

## Bonus Features Implemented
- [x] Lead Capture Modal with custom trigger buttons across the landing page.
- [x] Full-stack API Route (`/api/lead`) in Next.js App Router with input validation.

## Future Improvements
1. Integration with a live database (Supabase / MongoDB) for lead persistence.
2. Analytics logging (PostHog / Google Analytics) on CTA clicks.
3. Server-side rendering optimization for SEO metadata.
