# Feature Specification: RoboCraft Industrial Signal Homepage - Book Focused

**Feature Branch**: `002-robocraft-ui`
**Created**: 2026-01-27
**Status**: Draft
**Input**: User description:
"Redesign Physical AI Robotic Textbook as RoboCraft's homepage as a serious Physical AI & Robotics book using an orange-driven industrial confidence aesthetic — dark space foundation, warm industrial highlights, mechanical motion language, and solution-first messaging. The page should feel engineered, not decorative."

---

## Success Evals (Defined First)

- **Eval-001**: Lighthouse Performance ≥ 90
- **Eval-002**: Lighthouse Accessibility ≥ 95
- **Eval-003**: Visual audit confirms all industrial signal motifs present
- **Eval-004**: All functional requirements FR-001 → FR-050 pass
- **Eval-005**: Responsive behavior validated at 375px, 768px, 1440px
- **Eval-006**: Interactive 3D Robot Preview successfully implemented with all interaction states
- **Eval-007**: Hover outline effects implemented on all cards

---

## Overview

The RoboCraft homepage establishes a confident, industrial identity for a Physical AI & Humanoid Robotics textbook.
The experience emphasizes *learning, capability, systems thinking, and real-world engineering*, replacing platform-building visuals with deliberate structure and motion focused on learning.

The design communicates:
- This is a **comprehensive textbook**, not a tutorial
- This is **built for learners**
- This is **free, open, and serious**

**Project Structure Note**: All Docusaurus-related files are organized in the `frontend/` directory at the root level:
- `frontend/.docusaurus/` - Docusaurus build cache
- `frontend/build/` - Production build output
- `frontend/node_modules/` - Node.js dependencies
- `frontend/src/` - Source code (components, pages, CSS)
- `frontend/static/` - Static assets (images, fonts)
- `frontend/docusaurus.config.js` - Main configuration
- `frontend/package.json` - Dependencies and scripts
- `frontend/package-lock.json` - Dependency lock file
- `frontend/sidebars.js` - Sidebar configuration

---

Key Locations:
- **frontend/src/**: All files related to initial home page are in this. Always check the directory before redesigning the homepage. You have create home page related things in this
- **frontend/src/pages/index.js**: Initial homepage of RoboCraft. You have to redesign this
- **frontend/docusaurus.config.js**: Main Docusaurus configuration file
- **frontend/package.json**: Node.js dependencies and scripts
- **frontend/static/**: Static assets (images, fonts, etc.)
- **COURSE_DETAILS.md**: This is the main product details/content (hardware, roadmap, etc)
- **project_docs/course_structure**: This is main course structure of product robocraft. Adding from here is mandatory.

Implementation Notes:
- **The frontend-design skill MUST be invoked at the start of implementation (task 001)** to ensure proper industrial aesthetic design
- All UI components and styling should leverage the frontend-design skill for consistency
- Interactive 3D Robot Preview with drag rotation and hover tooltips
- Content positioned on left, Interactive 3D Robot Preview positioned on right for hierarchical look
- Buttons should redirect to actual content (e.g., /docs, modules section) not trigger alerts

---

## Design Direction (Final: Industrial Confidence — Orange)

- **Theme**: Deep space dark `#08090d` — controlled, premium foundation
- **Primary Accent**: Industrial orange `#f97316` — CTAs, focus states, interaction, navbar items
- **Secondary Accent**: Warm amber `#fb923c` — glows, gradients, hover energy
- **Neon Orange**: `#f97316` with glow effect — hover outline effects on cards
- **Success Color**: System green `#22c55e` — active states, health indicators
- **Typography**:
  - All text: Google Sans Code (monospace font for professional coding aesthetic)
  - Applied to both homepage and docs
- **Motion**:
  - Staggered section reveals
  - Pulsing signal dots
  - Mouse-tracking radial gradient orb (subtle, low opacity)
  - Interactive 3D Robot Preview: cursor-tracking rotation (follows mouse movement), subtle breathing motion, eye glow, joint articulation
- **Visual Motifs**:
  - Interactive 3D Robot Preview (cursor-tracking rotation showing actual robot learners will build/simulate)
  - Grid and alignment overlays
  - Hover tooltips on robot parts ("Servo motors", "AI vision system", "Balance sensors")
  - Neon orange hover outline effects on cards with glow
- **Layout**:
  - Hero section: Content on left (System Heartbeat Core, title, subtitle, description, CTAs), Interactive 3D Robot Preview on right
  - No overlap between content and robot preview
  - Proper spacing and hierarchy
- **Navigation**:
  - Navbar items in orange color for consistency
  - GitHub link in navbar (github.com/sheikh-mohammad)
  - Embedded Docusaurus search bar (same as /docs)
  - Dark/Light mode toggle button with icon (same as /docs)
  - Same logo in navbar for both homepage and docs
  - Unified navbar design across homepage and docs
- **Docs Theme**:
  - /docs should use homepage theme (dark space foundation with orange accents)
  - All Docusaurus theme colors should match homepage industrial aesthetic
  - Font changed to Google Sans Code for consistency
  - Navbar updated to match homepage navbar exactly
  - Footer replaced with homepage footer
  - "Edit this page" link and icon removed from all docs pages
- **Color Modes**:
  - Dark mode: Black (#08090d) primary, Orange (#f97316) secondary, White minimal
  - Light mode: White (#ffffff) primary, Orange (#f97316) secondary, Black minimal
  - Smooth transitions between modes
  - User preference persistence
- **Messaging**:
  - Learning-focused copy (replacing "platform" language with "book" language)
  - Personal learning journey framing
  - Explicit commitment: **"Free forever. No lock-in."**
- **Visual Effects**:
  - Prominency effect applied throughout for professional appearance
  - Depth and hierarchy through subtle shadows and elevation
  - Consistent visual language across all components

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 – First Impression & Trust (Priority: P1)

As a first-time visitor, I want to immediately understand that RoboCraft is a comprehensive Physical AI & Humanoid Robotics textbook so that I trust it and continue exploring the learning materials.

**Independent Test**: Load homepage and evaluate hero section clarity and credibility.

**Acceptance Scenarios**:
1. **Given** the page loads, **Then** the hero renders within 2 seconds with headline, visual system, and CTA
2. **Given** the hero is visible, **Then** the textbook's Physical AI focus is clear without scrolling
3. **Given** I see the CTA, **Then** it feels learning-oriented and credible

---

### User Story 2 – Learning Content Discovery (Priority: P1)

As a visitor, I want to understand what the textbook teaches, not just what features it has.

**Independent Test**: Scroll to capabilities/modules section.

**Acceptance Scenarios**:
1. **Given** I scroll, **Then** learning modules appear in a clear progression
2. **Given** I hover a module, **Then** visual feedback reinforces interactivity
3. **Given** advanced modules, **Then** they are visually distinguished

---

### User Story 3 – Hardware & System Readiness (Priority: P2)

As a learner, I want to quickly assess whether my hardware setup is sufficient for learning with the textbook.

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

### User Story 5 – Interactive 3D Robot Preview (Priority: P1)

As a visitor, I want to see an interactive 3D robot model that I can drag to rotate, showing the actual robot I'll learn to build/simulate, with hover states highlighting different parts and tooltips, so that I understand what I'll be creating from the textbook.

**Independent Test**: Load homepage and interact with the Interactive 3D Robot Preview element.

**Acceptance Scenarios**:
1. **Given** the page loads, **Then** the Interactive 3D Robot Preview appears on the right side of the hero section
2. **Given** I drag the robot model, **Then** it rotates in 3D space providing different perspectives
3. **Given** I hover over different robot parts, **Then** tooltips appear with technical labels ("Servo motors", "AI vision system", "Balance sensors")
4. **Given** the robot is visible, **Then** it has subtle animations (breathing motion, eye glow, joint articulation)
5. **Given** I scroll down the page, **Then** the robot model maintains its interactive capabilities

---

### User Story 6 – Textbook Learning Journey (Priority: P1)

As a visitor, I want to understand this is a learning textbook for building robots, not a platform to build robots, so that I know this is educational content.

**Independent Test**: Load homepage and observe the messaging and content focus.

**Acceptance Scenarios**:
1. **Given** the page loads, **Then** messaging emphasizes learning and textbook content over platform building
2. **Given** I see CTAs, **Then** they redirect to actual book content (/docs) rather than triggering alerts
3. **Given** I explore the hero content, **Then** it's positioned on the left with the Interactive 3D Robot Preview on the right for hierarchical organization
4. **Given** I see the "Start Building" CTA, **Then** it's renamed to "Start Learning" and redirects to /docs
5. **Given** I see the "View Modules" CTA, **Then** it redirects to modules section below

---

### User Story 7 – Modules Section (Priority: P1)

As a learner, I want to see course modules created from project_docs/course_structure.md and COURSE_DETAILS.md files, organized hierarchically to guide my learning path.

**Independent Test**: Scroll to modules section.

**Acceptance Scenarios**:
1. **Given** I scroll to modules section, **Then** I see modules created using content from project_docs/course_structure.md and COURSE_DETAILS.md
2. **Given** I view the modules, **Then** they're organized in a clear learning progression
3. **Given** I see weekly breakdown, **Then** it's derived from content in COURSE_DETAILS.md
4. **Given** I explore additional sections, **Then** they're populated from COURSE_DETAILS.md content
5. **Given** I click on modules, **Then** they link to appropriate content rather than triggering alerts

---

### User Story 8 – Card Hover Effects (Priority: P2)

As a visitor, I want to see hover outline effects on all cards on the homepage so that I get visual feedback when interacting with the cards.

**Independent Test**: Hover over any card on the homepage.

**Acceptance Scenarios**:
1. **Given** I hover over a card, **Then** an outline appears around the card
2. **Given** I hover over a card, **Then** the outline is clearly visible with good contrast
3. **Given** I move my cursor away from a card, **Then** the outline disappears smoothly
4. **Given** I hover over any card (ModuleCard, HardwareTierCard, etc.), **Then** the hover effect is consistent
5. **Given** I use keyboard navigation, **Then** the outline effect is also visible on focus

---

### User Story 9 – Mobile Responsive Navigation (Priority: P1)

As a mobile user, I want the navbar to transform into a hamburger menu and the hero section to adapt properly so that I can navigate and view content comfortably on my mobile device.

**Independent Test**: Load homepage on mobile device (< 768px width).

**Acceptance Scenarios**:
1. **Given** I load the homepage on mobile, **Then** the navbar displays as a hamburger menu icon
2. **Given** I tap the hamburger menu, **Then** it expands to show navigation items (LEARN FREE, MODULES, TECHNOLOGY, GitHub, Search, Dark/Light toggle)
3. **Given** the menu is expanded, **Then** I can tap any navigation item to navigate
4. **Given** I tap outside the menu or tap the close icon, **Then** the menu collapses smoothly
5. **Given** I view the hero section on mobile, **Then** content stacks vertically (text content above, robot preview below)
6. **Given** I view the robot preview on mobile, **Then** it scales appropriately without breaking layout
7. **Given** I navigate on mobile, **Then** all touch targets are at least 44px for easy tapping

---

### User Story 10 – Mobile Responsive Docs Sidebar (Priority: P1)

As a mobile user viewing the docs, I want the sidebar to be accessible via a toggle button so that I can navigate documentation without the sidebar blocking content.

**Independent Test**: Load /docs page on mobile device (< 768px width).

**Acceptance Scenarios**:
1. **Given** I load /docs on mobile, **Then** the sidebar is hidden by default
2. **Given** I see a hamburger/toggle button, **Then** I can tap it to reveal the sidebar
3. **Given** the sidebar is revealed, **Then** it overlays the content without breaking layout
4. **Given** the sidebar is open, **Then** I can navigate through documentation sections
5. **Given** I tap outside the sidebar or tap close, **Then** the sidebar closes smoothly
6. **Given** I select a doc item, **Then** the sidebar closes automatically and shows the selected content
7. **Given** I use the sidebar on mobile, **Then** all navigation items have adequate touch targets (≥ 44px)

---

## Requirements *(mandatory)*

### Functional Requirements

#### Hero & Identity
- **FR-001**: Hero MUST communicate RoboCraft as a Physical AI textbook (not a platform)
- **FR-002**: Hero MUST include Interactive 3D Robot Preview (rotatable 3D model showing what learners will build)
- **FR-003**: Hero MUST include primary CTA "Start Learning" redirecting to /docs using orange accent
- **FR-004**: Hero MUST include secondary CTA "View Modules" redirecting to modules section below
- **FR-005**: Hero MUST use grid-based animated background
- **FR-006**: Hero content MUST be positioned on the left with Interactive 3D Robot Preview on the right for hierarchical look

#### Learning Sections
- **FR-007**: Page MUST present learning modules in structured sequence
- **FR-008**: Each module MUST include title, description, and signal indicator
- **FR-009**: Advanced modules MUST have visual differentiation
- **FR-010**: Feature section MUST highlight at least 6 learning capabilities
- **FR-011**: At least 2 features MUST be marked as "Core"
- **FR-012**: Modules section MUST be created using content from project_docs/course_structure.md and COURSE_DETAILS.md

#### Hardware & Systems
- **FR-013**: Page MUST display 3 system/hardware tiers
- **FR-014**: Each tier MUST include cost and recommendation context
- **FR-015**: One tier MUST be visually marked as recommended

#### Interactive 3D Robot Preview
- **FR-016**: Page MUST include Interactive 3D Robot Preview in hero section
- **FR-017**: Robot Preview MUST be a 3D rotating humanoid model that follows mouse pointer (cursor-tracking rotation)
- **FR-018**: Robot Preview MUST rotate based on mouse movement direction (right movement = rotate right, left movement = rotate left)
- **FR-019**: Robot Preview MUST show the actual robot learners will build/simulate
- **FR-020**: Robot Preview MUST have subtle animations (breathing motion, eye glow, joint articulation)
- **FR-021**: Robot Preview MUST have hover states: different parts highlight with tooltips
- **FR-022**: Robot Preview tooltips MUST show technical labels ("Servo motors", "AI vision system", "Balance sensors")
- **FR-023**: Robot Preview MUST be positioned on the right side of hero section
- **FR-024**: Robot Preview MUST not overlap with text content on left side
- **FR-025**: Hero content (System Heartbeat Core, title, subtitle, description, CTAs) MUST be positioned on left side
- **FR-026**: Proper spacing MUST be maintained between left content and right robot preview

#### Content & Redirects
- **FR-024**: All buttons MUST redirect to actual content, not trigger alerts
- **FR-025**: "Start Building" CTA MUST be changed to "Start Learning"
- **FR-026**: "Start Learning" CTA MUST redirect to /docs
- **FR-027**: "View Modules" CTA MUST redirect to modules section below
- **FR-028**: Bottom CTA "Get Started Today" MUST redirect to /docs
- **FR-029**: All content MUST focus on textbook approach, not platform building

#### Course Content Integration
- **FR-030**: Modules section MUST be created using content from project_docs/course_structure.md
- **FR-031**: Additional sections MUST be added to homepage from COURSE_DETAILS.md by analyzing it
- **FR-032**: Weekly breakdown section MUST be added from COURSE_DETAILS.md content
- **FR-033**: All content MUST emphasize learning over building platforms

#### Visual & Motion
- **FR-034**: Design MUST use defined CSS color tokens
- **FR-035**: Orange MUST be reserved for interaction and emphasis
- **FR-036**: Motion MUST be staggered and non-blocking
- **FR-037**: Page MUST respect prefers-reduced-motion

#### Typography & Layout
- **FR-038**: Headlines MUST use Space Grotesk
- **FR-039**: Technical labels MUST use JetBrains Mono
- **FR-040**: Layout MUST favor sharp edges over rounded cards

#### Responsiveness & Accessibility
- **FR-041**: Page MUST be responsive from 320px–2560px
- **FR-042**: Touch targets MUST be ≥ 44px on mobile
- **FR-043**: Color contrast MUST meet WCAG 2.1 AA
- **FR-044**: Focus states MUST be visible for keyboard navigation
- **FR-077**: Navbar MUST transform to hamburger menu on mobile devices (< 768px)
- **FR-078**: Hamburger menu MUST expand/collapse smoothly with mobile-friendly navigation
- **FR-079**: Hero section MUST stack content vertically on mobile (content above, robot below)
- **FR-080**: Interactive 3D Robot Preview MUST scale appropriately on mobile devices
- **FR-081**: Docs sidebar MUST be accessible on mobile via hamburger menu or toggle button
- **FR-082**: Docs sidebar MUST overlay content on mobile without breaking layout
- **FR-083**: Mobile navigation MUST maintain orange accent color consistency

#### Card Hover Effects
- **FR-045**: All cards on homepage MUST show neon orange hover outline effects when hovered
- **FR-046**: Card hover outline MUST use neon orange color (#f97316) with glow effect
- **FR-047**: Card hover outline MUST be clearly visible with good contrast
- **FR-048**: Card hover outline MUST disappear smoothly when cursor moves away
- **FR-049**: Card hover effects MUST be consistent across all card types
- **FR-050**: Card hover effects MUST also be visible on keyboard focus

#### Navigation & Footer
- **FR-051**: Navbar MUST include RoboCraft logo, LEARN FREE, MODULES, TECHNOLOGY, GitHub link, Search bar, Dark/Light mode button
- **FR-052**: Navbar items (LEARN FREE, MODULES, TECHNOLOGY) MUST be in orange color (#f97316) for consistency
- **FR-053**: Navbar MUST include embedded Docusaurus search bar (same as /docs page)
- **FR-054**: Navbar MUST include Dark/Light mode toggle button with same icon as /docs
- **FR-055**: Footer MUST include Docs section (Textbook), Community section (GitHub: github.com/sheikh-mohammad, LinkedIn: linkedin.com/in/sheikh-mohammad-li/), More section (Codebase with repo link)
- **FR-056**: Footer MUST include copyright: "Copyright © 2026 RoboCraft. Made with ❤️ by Sheikh Mohammad."
- **FR-057**: GitHub link MUST be added to navbar pointing to github.com/sheikh-mohammad
- **FR-058**: Same logo MUST appear in both homepage and docs navbar

#### Docs Theme Integration
- **FR-059**: /docs theme MUST match homepage theme (dark space foundation with orange accents)
- **FR-060**: All Docusaurus theme colors in /docs MUST use homepage industrial aesthetic
- **FR-061**: /docs default theme MUST be changed to homepage theme
- **FR-062**: /docs font MUST be changed to Google Sans Code
- **FR-063**: /docs navbar MUST be updated to match homepage navbar exactly
- **FR-064**: "Edit this page" link and icon MUST be removed from all docs pages
- **FR-065**: /docs footer MUST be replaced with homepage footer

#### Typography
- **FR-066**: All text on homepage MUST use Google Sans Code font
- **FR-067**: All text in /docs MUST use Google Sans Code font
- **FR-068**: Font loading MUST be optimized for performance

#### Color Mode System
- **FR-069**: Dark mode MUST use black (#08090d) as primary, orange (#f97316) as secondary, white minimally
- **FR-070**: Light mode MUST use white (#ffffff) as primary, orange (#f97316) as secondary, black minimally
- **FR-071**: Color mode toggle MUST persist user preference
- **FR-072**: Transitions between color modes MUST be smooth
- **FR-073**: All components MUST support both color modes

#### Visual Effects
- **FR-074**: Prominency effect MUST be applied throughout the codebase for professional appearance
- **FR-075**: Visual hierarchy MUST be established through depth and elevation
- **FR-076**: Consistent visual language MUST be maintained across all components

---

### Non-Functional Requirements

- **NFR-001**: Lighthouse Performance ≥ 90
- **NFR-002**: Lighthouse Accessibility ≥ 95
- **NFR-003**: Initial content visible < 2s on 3G
- **NFR-004**: Animations sustain 60fps on mid-range devices
- **NFR-005**: 3D robot model interactions perform smoothly on target devices

---

## Key Entities

- **Hero System**: Primary identity and trust anchor
- **Module Signal Card**: Reusable learning capability unit
- **Feature Block**: Learning capability explanation
- **Hardware Tier Card**: System readiness indicator
- **CTA Block**: Conversion and commitment section
- **Interactive 3D Robot Preview**: Rotatable 3D humanoid robot model with hover tooltips showing actual robot learners will build
- **Card Hover Effects**: Visual feedback system for all cards on the homepage
- **Learning Modules**: Content organized from project_docs/course_structure.md and COURSE_DETAILS.md
- **Navigation System**: Top navbar with RoboCraft logo, LEARN FREE, MODULES, TECHNOLOGY, GitHub link, Search bar, Dark/Light mode toggle (unified across homepage and docs)
- **Footer Content**: Comprehensive footer with Docs (Textbook), Community (GitHub, LinkedIn), More (Codebase), Copyright
- **Typography System**: Google Sans Code font applied to all text (homepage and docs)
- **Color Mode System**: Dark/Light mode with proper color palettes and smooth transitions
- **Visual Effects System**: Prominency effects for professional appearance throughout

---

## Success Criteria *(mandatory)*

- **SC-001**: Users identify RoboCraft as a comprehensive textbook within first viewport
- **SC-002**: All five major sections render correctly on mobile and desktop
- **SC-003**: Orange accent is used consistently and sparingly
- **SC-004**: Grid and technical motifs appear in ≥ 2 sections
- **SC-005**: Page passes Lighthouse performance and accessibility targets
- **SC-006**: Motion enhances hierarchy without reducing readability
- **SC-007**: Visual audit confirms industrial (not sci-fi) aesthetic
- **SC-008**: "Free forever" messaging is clearly visible and credible
- **SC-009**: Interactive 3D Robot Preview gives tactile preview of what learners will create
- **SC-010**: Interactive 3D Robot Preview responds appropriately to user interactions (drag rotation, hover tooltips)
- **SC-011**: Interactive 3D Robot Preview reinforces learning-focused Physical AI + Robotics identity
- **SC-012**: Interactive 3D Robot Preview provides immediate perception of the robot learners will build/simulate
- **SC-013**: Interactive 3D Robot Preview creates clear association with Professional, serious, industrial aesthetic
- **SC-014**: Interactive 3D Robot Preview maintains balanced hero composition (content left, robot right)
- **SC-015**: Interactive 3D Robot Preview does not distract from core textbook messaging
- **SC-016**: Interactive 3D Robot Preview reinforces learning credibility
- **SC-017**: Interactive 3D Robot Preview parts, tooltips, and interactions are clearly readable
- **SC-018**: Interactive 3D Robot Preview enhances hero section without distracting from content
- **SC-019**: All cards on homepage show hover outline effects
- **SC-020**: Card hover effects provide clear visual feedback to users
- **SC-021**: All CTAs redirect to actual content (/docs, modules section) instead of showing alerts
- **SC-022**: Content focuses on textbook learning rather than platform building
- **SC-023**: Modules section effectively presents content from project_docs/course_structure.md and COURSE_DETAILS.md
- **SC-024**: Weekly breakdown section is properly implemented from COURSE_DETAILS.md content
- **SC-025**: Navigation and footer include appropriate content and redirects as specified
- **SC-026**: 3D robot model performs smoothly with acceptable frame rates
- **SC-027**: Google Sans Code font is applied consistently across homepage and docs
- **SC-028**: Dark/Light mode toggle works correctly with proper color palettes
- **SC-029**: GitHub link appears in navbar and redirects correctly
- **SC-030**: Search bar is integrated and functional in navbar
- **SC-031**: Navbar design is unified across homepage and docs
- **SC-032**: Footer includes correct links (GitHub: github.com/sheikh-mohammad, LinkedIn: linkedin.com/in/sheikh-mohammad-li/)
- **SC-033**: "Edit this page" link is removed from all docs pages
- **SC-034**: Docs footer matches homepage footer
- **SC-035**: Prominency effects create professional appearance throughout
- **SC-036**: Color mode preference persists across sessions
- **SC-037**: Same logo appears in both homepage and docs navbar
- **SC-038**: Navbar transforms to hamburger menu on mobile devices (< 768px)
- **SC-039**: Hamburger menu expands/collapses smoothly with all navigation items accessible
- **SC-040**: Hero section stacks vertically on mobile (content above, robot below)
- **SC-041**: Interactive 3D Robot Preview scales appropriately on mobile without breaking layout
- **SC-042**: Docs sidebar is accessible on mobile via toggle button
- **SC-043**: Docs sidebar overlays content on mobile without layout issues
- **SC-044**: All mobile touch targets meet 44px minimum requirement
- **SC-045**: Mobile navigation maintains orange accent color consistency

---

## Implementation Requirements

- **IR-001**: The frontend-design skill MUST be used to generate all UI components and styling
- **IR-002**: All visual design elements MUST be created using the frontend-design skill during implementation
- **IR-003**: The first implementation task (task 001) MUST invoke the frontend-design skill
- **IR-004**: Interactive 3D Robot Preview MUST be implemented with drag-to-rotate functionality
- **IR-005**: All buttons MUST redirect to actual content instead of triggering alerts
- **IR-006**: Content MUST emphasize textbook approach over platform-building approach

## Non-Goals

- Backend, auth, or RAG changes
- Heavy 3D rendering or WebGL effects beyond basic rotation
- Gamification or playful visuals
- Complex backend systems beyond static content display

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|-----|-------|------------|
| Orange overuse | Visual fatigue | Restrict to interaction tokens |
| Animation overload | Performance drop | Stagger + reduced-motion support |
| 3D model performance | Slow rendering | Optimized models + fallbacks |
| Dark contrast issues | Accessibility | Continuous contrast audits |
| Complex visuals | Maintenance cost | Tokenized CSS + documented motifs |
| Redirect failures | UX issues | Thorough link testing |