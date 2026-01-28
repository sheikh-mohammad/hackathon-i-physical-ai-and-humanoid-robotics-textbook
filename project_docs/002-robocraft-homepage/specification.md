# RoboCraft Homepage Redesign
**Branch:** robocraft-homepage

Redesign the **RoboCraft (Physical AI & Humanoid Robotics Textbook)** homepage using an **Industrial-Kinetic Futurism** aesthetic. The redesign establishes a serious, builder-grade identity aligned with cutting-edge robotics education.

Implementation MUST use the **frontend-design skill**, be organized under `@src/`, and generate all visual assets locally under `@static/` and `@static/img/`.

Homepage entry point:  
`@src/pages/index.js`

Content MUST be sourced from:
- `@COURSE_DETAILS.md`
- `@Hackathon_I_Physical_AI_&_Humanoid_Robotics_Textbook.md`

---

## Success Evals (Defined First)

### Platform-Focused Metrics
- **Eval-001**: Lighthouse Performance score >= 90
- **Eval-002**: Lighthouse Accessibility score >= 95
- **Eval-003**: Design review confirms Industrial-Kinetic Futurism aesthetic implemented  
  (5/5 motifs present: dark bg, orange accents, grid animation, JetBrains Mono, blueprint styling)
- **Eval-004**: All 25 Functional Requirements (FR-001 through FR-025) pass acceptance tests
- **Eval-005**: Responsive tests pass at 375px, 768px, 1440px

---

## Overview

The RoboCraft landing page communicates a **Physical AI & Humanoid Robotics learning platform** through a cohesive **Industrial Confidence** visual system.

The design intentionally avoids generic templates in favor of:
- Mechanical precision
- Blueprint-inspired layouts
- Kinetic motion cues
- Builder-centric messaging

---

## Design Direction (Final: Industrial Confidence — Orange Edition)

### Theme
- **Deep space dark (#08090d)** – premium, serious, enterprise-grade foundation

### Primary Color (Accent)
- **Industrial Orange (#f97316)** – interactive elements, CTAs, highlights  
  Confident, decisive, execution-focused (not neon, not playful)

### Secondary Accent (Glow / Hover)
- **Warm amber (#fb923c)** – soft glows, hover states, gradient edges

### Success / Active Color
- **Green (#22c55e)** – active states, pulsing indicators, system-healthy signals  
  (unchanged for UX clarity)

---

### Typography
- **Headlines**: Space Grotesk – engineered, modern, confident
- **Technical / Code**: JetBrains Mono – precise, industrial
- **Body**: IBM Plex Sans – readable, neutral, professional

---

### Motion & Interaction
- Staggered fade-in animations for sections
- Pulsing orange indicators for active systems
- Mouse-tracking gradient orb  
  Gradient: `#f97316 → #fb923c → transparent`  
  Low opacity, slow easing
- All motion respects `prefers-reduced-motion`

---

### Visual Motifs
- **Robot Assembly SVG**
  - Orange highlights on joints, sensors, and labels
  - Animated tech stack labels (ROS 2, Isaac, Gazebo, VLA)
- **Grid Pattern Background**
  - Subtle dark gray lines
  - Orange intersection pulses
- **Floating System Labels**
  - Dark cards with orange top or left accent
  - Blueprint-style annotation layout

---

### Messaging & Tone
- Solution-first, builder-focused copy
- Personal journey framing: “Built from real problems, not theory.”
- Confident positioning: **Free forever. No lock-in. No gimmicks.**

---

## User Scenarios & Testing (Mandatory)

### User Story 1 – First-Time Visitor Landing (Priority: P1)

A new visitor immediately understands what RoboCraft offers, feels the Physical AI theme, and is motivated to start learning.

**Acceptance Scenarios**
1. Hero loads within 2 seconds with animated grid, robot assembly, and CTAs
2. Value proposition clearly communicates Physical AI & Robotics
3. “Begin Building” navigates to `/docs/`

---

### User Story 2 – Curriculum Discovery (Priority: P1)

Visitors understand the full learning journey from fundamentals to humanoid autonomy.

**Acceptance Scenarios**
1. All 4 modules display with correct hierarchy
2. Hover interaction provides visual feedback
3. Modules 3 and 4 are marked with badges (“AI-Powered”, “Capstone”)

---

### User Story 3 – Hardware Requirements Assessment (Priority: P2)

Users can assess participation feasibility without friction.

**Acceptance Scenarios**
1. Three hardware tiers are visible with cost estimates
2. Cloud + Edge tier is marked “RECOMMENDED”
3. Simulation-only option is clearly viable

---

### User Story 4 – Mobile Responsive Experience (Priority: P2)

Users have a fully functional experience on mobile devices.

**Acceptance Scenarios**
1. No horizontal scrolling at 375px width
2. Modules stack vertically
3. Touch targets are at least 44px

---

### User Story 5 – Dark / Light Mode Compatibility (Priority: P3)

The page respects system color preferences while maintaining brand identity.

---

## Functional Requirements

### Hero Section
- **FR-001**: Display Robot Assembly SVG with animated tech stack labels
- **FR-002**: Display brand mark “ROBOCRAFT PLATFORM” and headline
- **FR-003**: Display tech stack pills with pulsing indicators
- **FR-004**: Primary CTA “Begin Building” links to `/docs/`
- **FR-005**: Secondary CTA scrolls to hardware section
- **FR-006**: Animated grid background with mouse-tracking gradient orb

### Modules Section
- **FR-007**: Display all 4 course modules
- **FR-008**: Show icon, number, title, description, topics, week range
- **FR-009**: Modules 3 and 4 use distinctive badge styling
- **FR-010**: Hover interaction provides visual feedback

### Features Section
- **FR-011**: Display 6 platform features
- **FR-012**: Use custom industrial-style icons
- **FR-013**: Two features marked as “Core”

### Hardware Section
- **FR-014**: Display 3 hardware tiers
- **FR-015**: Show name, description, and cost estimate
- **FR-016**: Cloud + Edge tier marked “RECOMMENDED”

### CTA Section
- **FR-017**: End page with a strong CTA block
- **FR-018**: Include “Begin Learning” button

### Visual & Motion
- **FR-019**: Use CSS variables for dark industrial theme
- **FR-020**: Use Space Grotesk, JetBrains Mono, IBM Plex Sans
- **FR-021**: Implement staggered load animations
- **FR-022**: Scroll-triggered reveals
- **FR-023**: Respect reduced motion preferences

### Responsive
- **FR-024**: Responsive from 320px to 2560px
- **FR-025**: Touch targets >= 44px on mobile

---

## Non-Functional Requirements
- Lighthouse Performance >= 90
- Lighthouse Accessibility >= 95
- Core content loads within 2 seconds on 3G
- WCAG 2.1 AA contrast compliance

---

## Non-Goals
- Backend or authentication changes
- Navigation or footer redesign
- New sections or IA changes
- Internationalization
- Advanced interactivity beyond motion and hover

---

## Dependencies
- `/img/book-cover-page.png`
- Google Fonts: Space Grotesk, JetBrains Mono, IBM Plex Sans
- Docusaurus layout and routing
- Local dev: `http://localhost:3000/`

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|-----|--------|------------|
| Font loading delays | Visual flash | Use `font-display: swap` |
| Animation performance | Jank | GPU-friendly properties |
| Dark theme contrast | Readability | WCAG contrast testing |
| CSS complexity | Technical debt | Consistent CSS variables |
