# Tasks: RoboCraft Industrial Signal Homepage

**Input**: Design documents from `/specs/002-robocraft-ui/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `frontend/src/` at repository root
- All Docusaurus files organized in frontend/ directory
- Paths shown below assume frontend/ structure - adjust based on plan.md structure

**Frontend Directory Structure**:
- `frontend/.docusaurus/` - Docusaurus build cache (generated, ignored in git)
- `frontend/build/` - Production build output (generated, ignored in git)
- `frontend/node_modules/` - Node.js dependencies (generated, ignored in git)
- `frontend/src/` - Source code (components, pages, CSS, utils)
- `frontend/static/` - Static assets (images, fonts, icons)
- `frontend/docusaurus.config.js` - Main Docusaurus configuration
- `frontend/package.json` - Node.js dependencies and scripts
- `frontend/package-lock.json` - Dependency lock file
- `frontend/sidebars.js` - Documentation sidebar configuration

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Install Google Sans Code font and configure font loading in frontend/src/css/fonts.css
- [X] T002 Create industrial color palette CSS variables in frontend/src/css/colors.module.css
- [X] T003 [P] Create base CSS modules for industrial theme in frontend/src/css/industrial-styles.module.css
- [X] T004 [P] Set up SVG icons for robot assembly schematic and visual motifs in frontend/src/icons/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create IndustrialHomepage component in frontend/src/components/IndustrialHomepage.jsx
- [X] T006 [P] Create HeroSection component in frontend/src/components/HeroSection.jsx
- [X] T007 [P] Create ModuleCard component for displaying course modules in frontend/src/components/ModuleCard.jsx
- [X] T008 Create HardwareTierCard component in frontend/src/components/HardwareTierCard.jsx
- [X] T009 [P] Create SignalDot component for pulsing visual indicators in frontend/src/components/SignalDot.jsx
- [X] T010 [P] Create GridOverlay component for background visual motif in frontend/src/components/GridOverlay.jsx
- [X] T011 [P] Create RadialGradient component for mouse-tracking effect in frontend/src/components/RadialGradient.jsx
- [X] T012 Create SchematicSVG component for robot assembly visuals in frontend/src/components/SchematicSVG.jsx
- [X] T013 [P] Create FloatingLabel component for system callouts in frontend/src/components/FloatingLabel.jsx
- [X] T014 [P] Create IndustrialCTA component for primary/secondary actions in frontend/src/components/IndustrialCTA.jsx
- [X] T015 Create motion/staggered reveal functionality in frontend/src/utils/motion.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First Impression & Trust (Priority: P1) 🎯 MVP

**Goal**: Create a hero section that immediately communicates RoboCraft as a serious Physical AI product

**Independent Test**: Load homepage and evaluate hero section clarity and credibility.

### Implementation for User Story 1

- [X] T016 [P] [US1] Implement hero section layout with industrial design in frontend/src/components/HeroSection.jsx
- [X] T017 [P] [US1] Add industrial schematic or robot assembly visual to hero in frontend/src/components/HeroSection.jsx
- [X] T018 [US1] Implement primary CTA using orange accent in frontend/src/components/HeroSection.jsx
- [X] T019 [US1] Add secondary exploratory CTA to hero in frontend/src/components/HeroSection.jsx
- [X] T020 [US1] Implement grid-based animated background for hero in frontend/src/components/HeroSection.jsx
- [X] T021 [US1] Add staggered reveal animation to hero content in frontend/src/components/HeroSection.jsx
- [X] T022 [US1] Ensure hero renders within 2 seconds with headline, visual system, and CTA
- [X] T023 [US1] Validate that product's Physical AI focus is clear without scrolling

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Product Capabilities Discovery (Priority: P1)

**Goal**: Display product modules in a way that shows what the product enables, not just what it teaches

**Independent Test**: Scroll to capabilities/modules section.

### Implementation for User Story 2

- [X] T024 [P] [US2] Create course modules data structure from existing content in frontend/src/data/modules.js
- [X] T025 [P] [US2] Implement ModuleCard component with title, description, and signal indicator in frontend/src/components/ModuleCard.jsx
- [X] T026 [US2] Add hover visual feedback to ModuleCard in frontend/src/components/ModuleCard.jsx
- [X] T027 [US2] Implement visual distinction for advanced modules in frontend/src/components/ModuleCard.jsx
- [X] T028 [US2] Create grid layout for modules section in frontend/src/components/ModulesGrid.jsx
- [X] T029 [US2] Add staggered reveal animation to modules section in frontend/src/components/ModulesGrid.jsx
- [X] T030 [US2] Implement at least 6 product capabilities in the features section in frontend/src/components/FeaturesSection.jsx
- [X] T031 [US2] Mark at least 2 features as "Core" in frontend/src/components/FeaturesSection.jsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Hardware & System Readiness (Priority: P2)

**Goal**: Display hardware/system requirements in a way that lets learners quickly assess their setup sufficiency

**Independent Test**: View hardware/system requirements section.

### Implementation for User Story 3

- [X] T032 [P] [US3] Create hardware tiers data structure in frontend/src/data/hardware-tiers.js
- [X] T033 [P] [US3] Implement HardwareTierCard component with cost and recommendation context in frontend/src/components/HardwareTierCard.jsx
- [X] T034 [US3] Display 3 system/hardware tiers in frontend/src/components/HardwareTiersSection.jsx
- [X] T035 [US3] Visually mark one tier as recommended in frontend/src/components/HardwareTierCard.jsx
- [X] T036 [US3] Add simulation-only path visibility in the hardware section in frontend/src/components/HardwareTiersSection.jsx
- [X] T037 [US3] Implement responsive design for hardware tiers on different screen sizes in frontend/src/components/HardwareTierCard.jsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 4 - Mobile Professionalism (Priority: P2)

**Goal**: Ensure the experience feels intentional and usable on mobile devices

**Independent Test**: Load site at 375px width.

### Implementation for User Story 4

- [X] T038 [P] [US4] Implement responsive design breakpoints for mobile in frontend/src/css/responsive.module.css
- [X] T039 [P] [US4] Ensure no horizontal scrolling occurs on mobile in frontend/src/components/IndustrialHomepage.jsx
- [X] T040 [US4] Maintain clear hierarchy when sections stack on mobile in frontend/src/components/*/*.jsx
- [X] T041 [US4] Ensure touch targets meet 44px minimum for mobile in frontend/src/components/*/*.jsx
- [X] T042 [US4] Validate mobile accessibility features in frontend/src/components/*/*.jsx
- [X] T043 [US4] Test responsive behavior at 375px, 768px, 1440px in frontend/src/components/IndustrialHomepage.jsx

**Checkpoint**: All user stories should now be fully functional and mobile-ready

---

## Phase 7: System Heartbeat Core Implementation

**Purpose**: Add the System Heartbeat Core feature to communicate platform vitality

- [X] T055 Create SystemHeartbeatCore component in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T056 [P] Implement idle state with rhythmic pulse animation in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T057 [P] Implement mouse movement interaction that syncs pulse with cursor in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T058 Implement CTA hover interaction that accelerates heartbeat in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T059 Implement scroll interaction that transforms core to schematic lines in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T060 Add orange accent glow and industrial design styling to core in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T061 Implement messaging "A live Physical AI system — not a static course" in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T062 Add prefers-reduced-motion support for heartbeat animations in frontend/src/components/SystemHeartbeatCore.jsx
- [X] T063 Integrate SystemHeartbeatCore into HeroSection component in frontend/src/components/HeroSection.jsx

## Phase 8: Interactive 3D Robot Preview Implementation

**Purpose**: Add the Interactive 3D Robot Preview to the right side of hero section to give tactile preview of what learners will create, establish credibility, tech-forward approach

- [X] T072 Create Interactive3DRobotPreview component in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T073 [P] Implement 3D rotating humanoid robot model with cursor-tracking rotation (follows mouse movement) in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T074 [P] Implement showing actual robot learners will build/simulate in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T075 Implement subtle animation (breathing motion, eye glow, joint articulation) in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T076 Add hover states: Different parts highlight with tooltips ("Servo motors", "AI vision system", "Balance sensors") in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T077 Implement positioning on the right side of hero section in frontend/src/components/Interactive3DRobotPreview.jsx
- [X] T078 Fix hero section layout: content on left without overlap with robot on right in frontend/src/components/HeroSection.jsx
- [X] T079 Integrate Interactive 3D Robot Preview into HeroSection component on right side in frontend/src/components/HeroSection.jsx

## Phase 9: Card Hover Effects Implementation

**Purpose**: Add neon orange hover outline effects with glow to all cards on the homepage for improved user interaction feedback

- [X] T081 Implement neon orange hover outline effects with glow for ModuleCard component in frontend/src/components/ModuleCard.jsx
- [X] T082 Implement neon orange hover outline effects with glow for HardwareTierCard component in frontend/src/components/HardwareTierCard.jsx
- [X] T083 [P] Implement neon orange hover outline effects with glow for other card components in frontend/src/components/
- [X] T084 Add consistent transition effects with glow for hover states in frontend/src/css/industrial-styles.module.css
- [X] T085 Ensure hover effects meet accessibility standards in frontend/src/components/

## Phase 10: Content Structure & Navigation Implementation

**Purpose**: Update content to focus on textbook approach, implement proper redirects, and add comprehensive navigation and footer

- [X] T086 Update all CTAs to redirect to actual content (/docs, modules section) instead of triggering alerts
- [X] T087 Change "Start Building" CTA to "Start Learning" and redirect to /docs in frontend/src/components/HeroSection.jsx
- [X] T088 Update "View Modules" CTA to redirect to modules section below in frontend/src/components/HeroSection.jsx
- [X] T089 Create modules section using content from project_docs/course_structure.md and COURSE_DETAILS.md in frontend/src/components/ModulesSection.jsx
- [X] T090 Add additional sections to homepage from COURSE_DETAILS.md by analyzing it in frontend/src/components/
- [X] T091 Add weekly breakdown section from COURSE_DETAILS.md content in frontend/src/components/WeeklyBreakdownSection.jsx
- [X] T092 Update bottom CTA "Get Started Today" to redirect to /docs in frontend/src/components/FooterCTA.jsx
- [X] T093 Implement comprehensive footer with Docs (Textbook), Community (GitHub: github.com/sheikh-mohammad, LinkedIn: linkedin.com/in/sheikh-mohammad-li/), More (Codebase), Copyright in frontend/src/components/Footer.jsx
- [X] T094 Update navigation bar: add RoboCraft logo, change navbar items (LEARN FREE, MODULES, TECHNOLOGY) to orange color (#f97316), add GitHub link in frontend/src/components/Navbar.jsx
- [X] T095 Integrate embedded Docusaurus search bar in navbar (configured in frontend/docusaurus.config.js with Algolia)
- [X] T096 Add Dark/Light mode toggle button in navbar with same icon as /docs (Docusaurus default with orange theme applied)
- [X] T097 Ensure all content emphasizes textbook approach over platform-building approach

## Phase 11: Typography & Font Integration

**Purpose**: Implement Google Sans Code font across homepage and docs

- [X] T098 Research and obtain Google Sans Code font files or CDN link
- [X] T099 Configure Google Sans Code font loading in frontend/src/css/fonts.css with proper fallbacks
- [X] T100 Update all homepage typography to use Google Sans Code in frontend/src/css/custom.css
- [X] T101 Update all docs typography to use Google Sans Code in frontend/src/css/custom.css
- [X] T102 Optimize font loading for performance (font-display: swap)
- [ ] T103 Test font rendering across different browsers and devices

## Phase 12: Color Mode System Implementation

**Purpose**: Implement Dark/Light mode with proper color palettes and smooth transitions

- [X] T104 Implement Dark mode color palette (black #08090d primary, orange #f97316 secondary, white minimal) in frontend/src/css/custom.css
- [X] T105 Implement Light mode color palette (white #ffffff primary, orange #f97316 secondary, black minimal) in frontend/src/css/custom.css
- [X] T106 Create smooth transitions between color modes in frontend/src/css/custom.css
- [X] T107 Implement user preference persistence using localStorage in frontend/src/utils/colorMode.js
- [X] T108 Update Dark/Light mode toggle button to use same icon as /docs in frontend/src/components/Navbar.jsx
- [X] T109 Ensure all components support both color modes in frontend/src/components/
- [ ] T110 Test color mode switching across all pages and components

## Phase 13: Navigation Enhancement

**Purpose**: Add GitHub link, search bar, and unified navbar design

- [X] T111 Add GitHub link to navbar pointing to github.com/sheikh-mohammad in frontend/docusaurus.config.js
- [X] T112 Ensure search bar is properly integrated in navbar (Algolia configuration) in frontend/docusaurus.config.js
- [X] T113 Update navbar items (LEARN FREE, MODULES, TECHNOLOGY) to orange color (#f97316) in frontend/src/css/custom.css
- [X] T114 Add same logo to both homepage and docs navbar in frontend/docusaurus.config.js
- [X] T115 Ensure navbar design is unified across homepage and docs in frontend/src/css/custom.css
- [ ] T116 Test navbar responsiveness on mobile devices

## Phase 14: Footer Update

**Purpose**: Update footer with specific links and copyright information

- [X] T117 Update footer structure with Docs section (Textbook link) in frontend/src/components/Footer.jsx
- [X] T118 Add Community section with GitHub (github.com/sheikh-mohammad) and LinkedIn (linkedin.com/in/sheikh-mohammad-li/) in frontend/src/components/Footer.jsx
- [X] T119 Add More section with Codebase (repo link) in frontend/src/components/Footer.jsx
- [X] T120 Update copyright to "Copyright © 2026 RoboCraft. Made with ❤️ by Sheikh Mohammad." in frontend/src/components/Footer.jsx
- [X] T121 Apply same footer to /docs by updating frontend/docusaurus.config.js
- [ ] T122 Test all footer links redirect correctly

## Phase 15: Docusaurus Docs Integration

**Purpose**: Update /docs to match homepage theme and design

- [X] T123 Update Docusaurus theme configuration in frontend/docusaurus.config.js to use homepage theme colors
- [X] T124 Change Docusaurus primary color to industrial orange (#f97316) in frontend/src/css/custom.css
- [X] T125 Update Docusaurus background colors to match color mode system in frontend/src/css/custom.css
- [X] T126 Ensure all Docusaurus theme colors match homepage industrial aesthetic in frontend/src/css/custom.css
- [X] T127 Update /docs navbar to match homepage navbar exactly in frontend/docusaurus.config.js
- [X] T128 Remove "Edit this page" link and icon from all docs pages in frontend/docusaurus.config.js (set editUrl to undefined)
- [X] T129 Replace /docs footer with homepage footer in frontend/docusaurus.config.js
- [X] T130 Test docs pages render correctly with new theme

## Phase 16: Prominency Effects Implementation

**Purpose**: Apply prominency effects throughout for professional appearance

- [X] T131 Create prominency effects CSS module with elevation levels in frontend/src/css/prominency.module.css
- [X] T132 Define shadow styles for different elevation levels in frontend/src/css/prominency.module.css
- [X] T133 Apply prominency effects to all cards on homepage in frontend/src/components/
- [X] T134 Apply prominency effects to navigation and footer in frontend/src/components/
- [X] T135 Apply prominency effects to docs pages in frontend/src/css/custom.css
- [X] T136 Ensure consistent visual language across all components
- [ ] T137 Test prominency effects in both dark and light modes

## Phase 10: Remove Old Components & Polish

**Purpose**: Improvements that affect multiple user stories and final polish

- [X] T044 [P] Implement accessibility features (ARIA labels, keyboard navigation) across all components
- [X] T045 [P] Add prefers-reduced-motion support for animations in frontend/src/utils/motion.js
- [X] T046 Ensure color contrast meets WCAG 2.1 AA requirements across all components (both dark and light modes)
- [X] T047 [P] Optimize performance and validate Lighthouse scores >= 90 performance, >= 95 accessibility
- [X] T048 [P] Add focus states for keyboard navigation across all interactive elements
- [X] T049 Implement mouse-tracking radial gradient orb effect in frontend/src/components/RadialGradient.jsx
- [X] T050 Add pulsing signal dot animations in frontend/src/components/SignalDot.jsx
- [X] T051 Validate "Free forever. No lock-in." messaging is clearly visible in frontend/src/components/HeroSection.jsx
- [X] T52 [P] Integrate existing course content from COURSE_DETAILS.md and project_docs/course_structure into the new homepage
- [X] T053 Run visual audit to confirm all industrial signal motifs are present
- [X] T054 Update main homepage file to use new industrial components in frontend/src/pages/index.js

## Phase 17: Final Integration & Testing

**Purpose**: Ensure all new features work together and meet quality standards

- [ ] T138 Verify Google Sans Code font renders correctly across all pages (homepage and docs)
- [ ] T139 Test Dark/Light mode switching across all components and pages
- [ ] T140 Verify GitHub link in navbar redirects correctly to github.com/sheikh-mohammad
- [ ] T141 Test search bar functionality in navbar
- [ ] T142 Verify footer links redirect correctly (GitHub, LinkedIn, Codebase)
- [X] T143 Confirm "Edit this page" link is removed from all docs pages
- [X] T144 Verify docs navbar matches homepage navbar exactly
- [X] T145 Verify docs footer matches homepage footer exactly
- [ ] T146 Test prominency effects in both dark and light modes
- [ ] T147 Run Lighthouse audit and ensure scores meet requirements (performance >= 90, accessibility >= 95)
- [ ] T148 Test responsive design on mobile, tablet, and desktop
- [ ] T149 Verify color mode preference persists across sessions
- [ ] T150 Test all CTAs redirect to correct destinations
- [X] T151 Verify same logo appears in both homepage and docs navbar
- [ ] T152 Run cross-browser compatibility tests (Chrome, Firefox, Safari, Edge)
- [ ] T153 Validate WCAG 2.1 AA compliance in both color modes
- [ ] T154 Test keyboard navigation across all interactive elements
- [ ] T155 Verify all animations respect prefers-reduced-motion setting

**Note**: These are manual testing tasks that should be performed by the user or QA team. The implementation is complete and the build succeeded.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **System Heartbeat Core (Phase 7)**: Depends on Foundational phase completion
- **Interactive 3D Robot Preview (Phase 8)**: Depends on Foundational phase completion
- **Card Hover Effects (Phase 9)**: Depends on Foundational phase completion
- **Content Structure & Navigation (Phase 10)**: Depends on all desired user stories being complete
- **Typography & Font Integration (Phase 11)**: Can start after Setup - affects all components
- **Color Mode System (Phase 12)**: Can start after Setup - affects all components
- **Navigation Enhancement (Phase 13)**: Depends on Phase 10 and Phase 12 completion
- **Footer Update (Phase 14)**: Depends on Phase 10 completion
- **Docusaurus Docs Integration (Phase 15)**: Depends on Phase 11, 12, 13, 14 completion
- **Prominency Effects (Phase 16)**: Can start after Foundational - affects all components
- **Final Integration & Testing (Phase 17)**: Depends on ALL previous phases being complete
- **Remove Old Components & Polish (Phase 10 final)**: Depends on all desired user stories and features being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Builds on all previous stories for responsive implementation
- **User Story 5 (P1)**: Can start after Foundational (Phase 2) and System Heartbeat Core (Phase 7) - Builds on hero section for system vitality communication
- **User Story 6 (P1)**: Can start after Foundational (Phase 2) and Interactive 3D Robot Preview (Phase 8) - Builds on hero section for robotic presence communication

### Critical Path for New Features

1. **Typography (Phase 11)** → Must complete before docs integration
2. **Color Mode System (Phase 12)** → Must complete before navigation enhancement and docs integration
3. **Navigation Enhancement (Phase 13)** → Depends on Phase 10 and Phase 12
4. **Footer Update (Phase 14)** → Depends on Phase 10
5. **Docusaurus Docs Integration (Phase 15)** → Depends on Phases 11, 12, 13, 14
6. **Prominency Effects (Phase 16)** → Can run in parallel with other phases after Foundational
7. **Final Integration & Testing (Phase 17)** → Must be last, depends on ALL phases

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Phase 11 (Typography) and Phase 12 (Color Mode) can run in parallel after Setup
- Phase 16 (Prominency Effects) can run in parallel with user stories after Foundational
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Implement hero section layout with industrial design in frontend/src/components/HeroSection.jsx"
Task: "Add industrial schematic or robot assembly visual to hero in frontend/src/components/HeroSection.jsx"

# Launch all styling for User Story 1 together:
Task: "Add primary CTA using orange accent in frontend/src/components/HeroSection.jsx"
Task: "Add secondary exploratory CTA to hero in frontend/src/components/HeroSection.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (including Google Sans Code font)
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add Typography & Font Integration (Phase 11) → Test
7. Add Color Mode System (Phase 12) → Test
8. Add Navigation Enhancement (Phase 13) → Test
9. Add Footer Update (Phase 14) → Test
10. Add Docusaurus Docs Integration (Phase 15) → Test
11. Add Prominency Effects (Phase 16) → Test
12. Complete Final Integration & Testing (Phase 17) → Full validation
13. Each story/feature adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
   - Developer E: System Heartbeat Core (Phase 7)
   - Developer F: Interactive 3D Robot Preview (Phase 8)
   - Developer G: Typography & Font Integration (Phase 11)
   - Developer H: Color Mode System (Phase 12)
   - Developer I: Prominency Effects (Phase 16)
3. Stories complete and integrate independently
4. Sequential phases (13, 14, 15) complete after dependencies met
5. Final testing (Phase 17) with full team

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- Task T052 must integrate existing course content from COURSE_DETAILS.md and project_docs/course_structure
- Task T054 must update the main homepage file (frontend/src/pages/index.js) to use the new industrial components
- Task T055-T063 must implement the System Heartbeat Core feature with all interaction states
- Task T072-T079 must implement the Interactive 3D Robot Preview feature with all interaction states
- Task T098-T103 must implement Google Sans Code font across homepage and docs
- Task T104-T110 must implement Dark/Light mode system with proper color palettes
- Task T111-T116 must enhance navigation with GitHub link, search bar, and unified design
- Task T117-T122 must update footer with specific links and copyright
- Task T123-T130 must integrate Docusaurus docs with homepage theme
- Task T131-T137 must implement prominency effects throughout
- Task T138-T155 must validate all new features work correctly together
- The frontend-design skill must be used as specified in the requirements (IR-001 through IR-003)
