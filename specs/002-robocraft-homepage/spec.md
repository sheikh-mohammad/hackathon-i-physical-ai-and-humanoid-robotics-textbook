# Feature Specification: RoboCraft Industrial Signal Homepage

**Feature Branch**: `002-robocraft-homepage`
**Created**: 2026-01-27
**Status**: Draft
**Input**: User description:  
"Redesign Physical AI Robotic Textbook as RoboCraft’s homepage as a serious Physical AI & Robotics product using an orange-driven industrial confidence aesthetic — dark space foundation, warm industrial highlights, mechanical motion language, and solution-first messaging. The page should feel engineered, not decorative."

---

## Success Evals (Defined First)

- **Eval-001**: Lighthouse Performance ≥ 90
- **Eval-002**: Lighthouse Accessibility ≥ 95
- **Eval-003**: Visual audit confirms all industrial signal motifs present
- **Eval-004**: All functional requirements FR-001 → FR-030 pass
- **Eval-005**: Responsive behavior validated at 375px, 768px, 1440px
- **Eval-006**: System Heartbeat Core visual element successfully implemented with all interaction states
- **Eval-007**: Autonomous Robotic Arm successfully implemented with all interaction states

---

## Overview

The RoboCraft homepage establishes a confident, industrial identity for a Physical AI & Humanoid Robotics product.  
The experience emphasizes *capability, systems thinking, and real-world engineering*, replacing novelty-driven visuals with deliberate structure and motion.

The design communicates:
- This is a **product**, not a tutorial
- This is **built for builders**
- This is **free, open, and serious**

---

Key Locations:
- **src/**: All files related to initial home page are in this. Always check the directory before redesigning the homepage. You have create home page related things in this
- **src/pages/index.js**: Initial homepage of RoboCraft. You have to redesign this
- **COURSE_DETAILS.md**: This is the main product details/content (hardware, roadmap, etc)
- **project_docs/course_structure**: : This is main course structure of product robocraft. Adding from here is mandatory.

Implementation Notes:
- **The frontend-design skill MUST be invoked at the start of implementation (task 001)** to ensure proper industrial aesthetic design
- All UI components and styling should leverage the frontend-design skill for consistency

---

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
  - System Heartbeat Core: rhythmic pulse with interactive states
- **Visual Motifs**:
  - Robot assembly schematic SVG
  - Grid and alignment overlays
  - Floating system labels and callouts
  - Central System Heartbeat Core (circular/hexagonal reactor-style node)
- **Messaging**:
  - Outcome-driven copy
  - Personal builder journey framing
  - Explicit commitment: **“Free forever. No lock-in.”**

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 – First Impression & Trust (Priority: P1)

As a first-time visitor, I want to immediately understand that RoboCraft is a serious Physical AI product so that I trust it and continue exploring.

**Independent Test**: Load homepage and evaluate hero section clarity and credibility.

**Acceptance Scenarios**:
1. **Given** the page loads, **Then** the hero renders within 2 seconds with headline, visual system, and CTA
2. **Given** the hero is visible, **Then** the product’s Physical AI focus is clear without scrolling
3. **Given** I see the CTA, **Then** it feels action-oriented and credible

---

### User Story 2 – product Capabilities Discovery (Priority: P1)

As a visitor, I want to understand what the product enables, not just what it teaches.

**Independent Test**: Scroll to capabilities/modules section.

**Acceptance Scenarios**:
1. **Given** I scroll, **Then** product modules appear in a clear progression
2. **Given** I hover a module, **Then** visual feedback reinforces interactivity
3. **Given** advanced modules, **Then** they are visually distinguished

---

### User Story 3 – Hardware & System Readiness (Priority: P2)

As a learner, I want to quickly assess whether my hardware setup is sufficient.

**Independent Test**: View hardware/system requirements section.

**Acceptance Scenarios**:
1. **Given** I reach hardware section, **Then** I see three clear tiers
2. **Given** a recommended option, **Then** it is clearly marked
3. **Given** no hardware, **Then** simulation-only path is obvious

---

### User Story 4 – Mobile Professionalism (Priority: P2)

As a mobile user, I want the experience to feel intentional and usable.

**Independent Test**: Load site at 375px width.

**Acceptance Scenarios**:
1. **Given** mobile viewport, **Then** no horizontal scrolling occurs
2. **Given** stacked sections, **Then** hierarchy remains clear
3. **Given** CTAs, **Then** touch targets meet 44px minimum

---

### User Story 5 – System Vitality Communication (Priority: P1)

As a visitor, I want to immediately sense that the platform is alive and operational, not static content, so that I understand this is a dynamic Physical AI system.

**Independent Test**: Load homepage and observe the System Heartbeat Core element.

**Acceptance Scenarios**:
1. **Given** the page loads, **Then** the System Heartbeat Core appears in the hero section with rhythmic pulse
2. **Given** I move my cursor, **Then** the core's pulse subtly syncs with cursor movement
3. **Given** I hover over CTAs, **Then** the heartbeat accelerates slightly with increased glow intensity
4. **Given** I scroll down the page, **Then** the core gradually transforms into schematic lines/wireframe rings
5. **Given** the core is visible, **Then** messaging "A live Physical AI system — not a static course" is displayed nearby

---

## Requirements *(mandatory)*

### Functional Requirements

#### Hero & Identity
- **FR-001**: Hero MUST communicate RoboCraft as a Physical AI product
- **FR-002**: Hero MUST include industrial schematic or robot assembly visual
- **FR-003**: Hero MUST include primary CTA using orange accent
- **FR-004**: Hero MUST include secondary exploratory CTA
- **FR-005**: Hero MUST use grid-based animated background

#### product Sections
- **FR-006**: Page MUST present product modules in structured sequence
- **FR-007**: Each module MUST include title, description, and signal indicator
- **FR-008**: Advanced modules MUST have visual differentiation
- **FR-009**: Feature section MUST highlight at least 6 product capabilities
- **FR-010**: At least 2 features MUST be marked as “Core”

#### Hardware & Systems
- **FR-011**: Page MUST display 3 system/hardware tiers
- **FR-012**: Each tier MUST include cost and recommendation context
- **FR-013**: One tier MUST be visually marked as recommended

#### Visual & Motion
- **FR-014**: Design MUST use defined CSS color tokens
- **FR-015**: Orange MUST be reserved for interaction and emphasis
- **FR-016**: Motion MUST be staggered and non-blocking
- **FR-017**: Page MUST respect prefers-reduced-motion

#### Typography & Layout
- **FR-018**: Headlines MUST use Space Grotesk
- **FR-019**: Technical labels MUST use JetBrains Mono
- **FR-020**: Layout MUST favor sharp edges over rounded cards

#### Responsiveness & Accessibility
- **FR-021**: Page MUST be responsive from 320px–2560px
- **FR-022**: Touch targets MUST be ≥ 44px on mobile
- **FR-023**: Color contrast MUST meet WCAG 2.1 AA
- **FR-024**: Focus states MUST be visible for keyboard navigation

#### System Heartbeat Core
- **FR-025**: Page MUST include a central System Heartbeat Core element in the hero section
- **FR-026**: Core MUST have industrial design (circular/hexagonal/reactor-style) with orange accent glow
- **FR-027**: Core MUST exhibit slow, rhythmic pulse animation (idle state)
- **FR-028**: Core pulse MUST subtly sync with cursor movement (mouse movement state)
- **FR-029**: Core MUST accelerate heartbeat when CTA is hovered (CTA hover state)
- **FR-030**: Core MUST transform to schematic lines/wireframe on scroll (scroll interaction state)
- **FR-031**: Core messaging MUST display "A live Physical AI system — not a static course" nearby
- **FR-032**: Core MUST use performance-friendly SVG/CSS/lightweight JS implementation
- **FR-033**: Core MUST respect prefers-reduced-motion setting

---

### Non-Functional Requirements

- **NFR-001**: Lighthouse Performance ≥ 90
- **NFR-002**: Lighthouse Accessibility ≥ 95
- **NFR-003**: Initial content visible < 2s on 3G
- **NFR-004**: Animations sustain 60fps on mid-range devices

---

## Key Entities

- **Hero System**: Primary identity and trust anchor
- **Module Signal Card**: Reusable product capability unit
- **Feature Block**: product capability explanation
- **Hardware Tier Card**: System readiness indicator
- **CTA Block**: Conversion and commitment section
- **System Heartbeat Core**: Central industrial element that visually communicates platform vitality

---

## Success Criteria *(mandatory)*

- **SC-001**: Users identify RoboCraft as a product within first viewport
- **SC-002**: All five major sections render correctly on mobile and desktop
- **SC-003**: Orange accent is used consistently and sparingly
- **SC-004**: Grid and schematic motifs appear in ≥ 2 sections
- **SC-005**: Page passes Lighthouse performance and accessibility targets
- **SC-006**: Motion enhances hierarchy without reducing readability
- **SC-007**: Visual audit confirms industrial (not sci-fi) aesthetic
- **SC-008**: "Free forever" messaging is clearly visible and credible
- **SC-009**: System Heartbeat Core successfully communicates platform vitality to users
- **SC-010**: System Heartbeat Core responds appropriately to user interactions (mouse, hover, scroll)
- **SC-011**: System Heartbeat Core messaging reinforces Physical AI + Robotics identity

---

## Implementation Requirements

- **IR-001**: The frontend-design skill MUST be used to generate all UI components and styling
- **IR-002**: All visual design elements MUST be created using the frontend-design skill during implementation
- **IR-003**: The first implementation task (task 001) MUST invoke the frontend-design skill

## Non-Goals

- Backend, auth, or RAG changes
- Navigation or footer redesign
- Internationalization
- Gamification or playful visuals
- Heavy 3D rendering or WebGL effects

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|-----|-------|------------|
| Orange overuse | Visual fatigue | Restrict to interaction tokens |
| Animation overload | Performance drop | Stagger + reduced-motion support |
| Dark contrast issues | Accessibility | Continuous contrast audits |
| Complex visuals | Maintenance cost | Tokenized CSS + documented motifs |