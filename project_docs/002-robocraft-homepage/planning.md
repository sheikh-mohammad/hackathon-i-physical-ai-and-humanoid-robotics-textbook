## Key Locations

- **src/**: All files related to initial home page are in this. Always check the directory before redesigning the homepage. You have create home page related things in this
- **src/pages/index.js**: Initial homepage of RoboCraft. You have to redesign this
- **COURSE_DETAILS.md**: This is the main product details/content (hardware, roadmap, etc)
- **project_docs/course_structure**: : This is main course structure of product robocraft. Adding from here is mandatory.

## Design Direction (Final: Industrial Confidence — Orange)

- **Theme**: Deep space dark `#08090d` — controlled, premium foundation
- **Primary Accent**: Industrial orange `#f97316` — CTAs, focus states, interaction
- **Secondary Accent**: Warm amber `#fb923c` — glows, gradients, hover energy
- **Success Color**: System green `#22c55e` — active states, health indicators
- **Typography**:
  - Headlines: Space Grotesk
  - Technical/UI: JetBrains Mono
  - Body: IBM Plex Sans
- **Motion**:
  - Staggered section reveals
  - Pulsing signal dots
  - Mouse-tracking radial gradient orb (subtle, low opacity)
- **Visual Motifs**:
  - Robot assembly schematic SVG
  - Grid and alignment overlays
  - Floating system labels and callouts
- **Messaging**:
  - Outcome-driven copy
  - Personal builder journey framing
  - Explicit commitment: **“Free forever. No lock-in.”**

## Implementation Notes:

- **The frontend-design skill MUST be invoked at the start of implementation (task 001)** to ensure proper industrial aesthetic design
- All UI components and styling should leverage the frontend-design skill for consistency

## Technical Requirements:

- **Language**: JavaScript with React JS
- **Primary Dependencies**: Docusaurus 3.1.0, @docusaurus/preset-classic, clsx, Google Fonts (JetBrains Mono, Space Grotesk, IBM Plex Sans)
- **Testing**: Playwright (e2e), Lighthouse (performance/accessibility audits), axe DevTools (WCAG validation) 
- **Target Platform**: Web (all modern browsers - Chrome, Firefox, Safari, Edge) Project Type: Web (Docusaurus static site with React components) 
- **Performance Goals**: Lighthouse performance >= 90, accessibility >= 95, FCP < 1.5s, LCP < 2.5s, CLS < 0.1 
- **Constraints**:
  - Must maintain Docusaurus 3.x framework
  - CSS Modules pattern (existing codebase standard)
  - No breaking changes to routing or navigation
  - Respect prefers-reduced-motion for accessibility
  - Touch targets >= 44px on mobile
  - WCAG 2.1 AA contrast requirements (4.5:1 text, 3:1 large text)

> Add All Implementation Phases required for this
