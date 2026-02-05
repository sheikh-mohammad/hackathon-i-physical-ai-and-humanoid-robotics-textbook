# Tasks: RoboCraft Industrial Signal Homepage

**Input**: Design documents from `/specs/002-robocraft-homepage/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Install required fonts (Space Grotesk, JetBrains Mono, IBM Plex Sans) in src/css/fonts.css
- [X] T002 Create industrial color palette CSS variables in src/css/colors.module.css
- [X] T003 [P] Create base CSS modules for industrial theme in src/css/industrial-styles.module.css
- [X] T004 [P] Set up SVG icons for robot assembly schematic and visual motifs in src/icons/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create IndustrialHomepage component in src/components/IndustrialHomepage.jsx
- [X] T006 [P] Create HeroSection component in src/components/HeroSection.jsx
- [X] T007 [P] Create ModuleCard component for displaying course modules in src/components/ModuleCard.jsx
- [X] T008 Create HardwareTierCard component in src/components/HardwareTierCard.jsx
- [X] T009 [P] Create SignalDot component for pulsing visual indicators in src/components/SignalDot.jsx
- [X] T010 [P] Create GridOverlay component for background visual motif in src/components/GridOverlay.jsx
- [X] T011 [P] Create RadialGradient component for mouse-tracking effect in src/components/RadialGradient.jsx
- [X] T012 Create SchematicSVG component for robot assembly visuals in src/components/SchematicSVG.jsx
- [X] T013 [P] Create FloatingLabel component for system callouts in src/components/FloatingLabel.jsx
- [X] T014 [P] Create IndustrialCTA component for primary/secondary actions in src/components/IndustrialCTA.jsx
- [X] T015 Create motion/staggered reveal functionality in src/utils/motion.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First Impression & Trust (Priority: P1) 🎯 MVP

**Goal**: Create a hero section that immediately communicates RoboCraft as a serious Physical AI product

**Independent Test**: Load homepage and evaluate hero section clarity and credibility.

### Implementation for User Story 1

- [X] T016 [P] [US1] Implement hero section layout with industrial design in src/components/HeroSection.jsx
- [X] T017 [P] [US1] Add industrial schematic or robot assembly visual to hero in src/components/HeroSection.jsx
- [X] T018 [US1] Implement primary CTA using orange accent in src/components/HeroSection.jsx
- [X] T019 [US1] Add secondary exploratory CTA to hero in src/components/HeroSection.jsx
- [X] T020 [US1] Implement grid-based animated background for hero in src/components/HeroSection.jsx
- [X] T021 [US1] Add staggered reveal animation to hero content in src/components/HeroSection.jsx
- [X] T022 [US1] Ensure hero renders within 2 seconds with headline, visual system, and CTA
- [X] T023 [US1] Validate that product's Physical AI focus is clear without scrolling

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Product Capabilities Discovery (Priority: P1)

**Goal**: Display product modules in a way that shows what the product enables, not just what it teaches

**Independent Test**: Scroll to capabilities/modules section.

### Implementation for User Story 2

- [X] T024 [P] [US2] Create course modules data structure from existing content in src/data/modules.js
- [X] T025 [P] [US2] Implement ModuleCard component with title, description, and signal indicator in src/components/ModuleCard.jsx
- [X] T026 [US2] Add hover visual feedback to ModuleCard in src/components/ModuleCard.jsx
- [X] T027 [US2] Implement visual distinction for advanced modules in src/components/ModuleCard.jsx
- [X] T028 [US2] Create grid layout for modules section in src/components/ModulesGrid.jsx
- [X] T029 [US2] Add staggered reveal animation to modules section in src/components/ModulesGrid.jsx
- [X] T030 [US2] Implement at least 6 product capabilities in the features section in src/components/FeaturesSection.jsx
- [X] T031 [US2] Mark at least 2 features as "Core" in src/components/FeaturesSection.jsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Hardware & System Readiness (Priority: P2)

**Goal**: Display hardware/system requirements in a way that lets learners quickly assess their setup sufficiency

**Independent Test**: View hardware/system requirements section.

### Implementation for User Story 3

- [X] T032 [P] [US3] Create hardware tiers data structure in src/data/hardware-tiers.js
- [X] T033 [P] [US3] Implement HardwareTierCard component with cost and recommendation context in src/components/HardwareTierCard.jsx
- [X] T034 [US3] Display 3 system/hardware tiers in src/components/HardwareTiersSection.jsx
- [X] T035 [US3] Visually mark one tier as recommended in src/components/HardwareTierCard.jsx
- [X] T036 [US3] Add simulation-only path visibility in the hardware section in src/components/HardwareTiersSection.jsx
- [X] T037 [US3] Implement responsive design for hardware tiers on different screen sizes in src/components/HardwareTierCard.jsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 4 - Mobile Professionalism (Priority: P2)

**Goal**: Ensure the experience feels intentional and usable on mobile devices

**Independent Test**: Load site at 375px width.

### Implementation for User Story 4

- [X] T038 [P] [US4] Implement responsive design breakpoints for mobile in src/css/responsive.module.css
- [X] T039 [P] [US4] Ensure no horizontal scrolling occurs on mobile in src/components/IndustrialHomepage.jsx
- [X] T040 [US4] Maintain clear hierarchy when sections stack on mobile in src/components/*/*.jsx
- [X] T041 [US4] Ensure touch targets meet 44px minimum for mobile in src/components/*/*.jsx
- [X] T042 [US4] Validate mobile accessibility features in src/components/*/*.jsx
- [X] T043 [US4] Test responsive behavior at 375px, 768px, 1440px in src/components/IndustrialHomepage.jsx

**Checkpoint**: All user stories should now be fully functional and mobile-ready

---

## Phase 7: System Heartbeat Core Implementation

**Purpose**: Add the System Heartbeat Core feature to communicate platform vitality

- [X] T055 Create SystemHeartbeatCore component in src/components/SystemHeartbeatCore.jsx
- [X] T056 [P] Implement idle state with rhythmic pulse animation in src/components/SystemHeartbeatCore.jsx
- [X] T057 [P] Implement mouse movement interaction that syncs pulse with cursor in src/components/SystemHeartbeatCore.jsx
- [X] T058 Implement CTA hover interaction that accelerates heartbeat in src/components/SystemHeartbeatCore.jsx
- [X] T059 Implement scroll interaction that transforms core to schematic lines in src/components/SystemHeartbeatCore.jsx
- [X] T060 Add orange accent glow and industrial design styling to core in src/components/SystemHeartbeatCore.jsx
- [X] T061 Implement messaging "A live Physical AI system — not a static course" in src/components/SystemHeartbeatCore.jsx
- [X] T062 Add prefers-reduced-motion support for heartbeat animations in src/components/SystemHeartbeatCore.jsx
- [X] T063 Integrate SystemHeartbeatCore into HeroSection component in src/components/HeroSection.jsx

## Phase 8: Interactive 3D Robot Preview Implementation

**Purpose**: Add the Interactive 3D Robot Preview to the right side of hero section to give tactile preview of what learners will create, establish credibility, tech-forward approach

- [ ] T072 Create Interactive3DRobotPreview component in src/components/Interactive3DRobotPreview.jsx
- [ ] T073 [P] Implement 3D rotating humanoid robot model that users can drag to rotate in src/components/Interactive3DRobotPreview.jsx
- [ ] T074 [P] Implement showing actual robot learners will build/simulate in src/components/Interactive3DRobotPreview.jsx
- [ ] T075 Implement subtle animation (breathing motion, eye glow, joint articulation) in src/components/Interactive3DRobotPreview.jsx
- [ ] T076 Add hover states: Different parts highlight with tooltips ("Servo motors", "AI vision system", "Balance sensors") in src/components/Interactive3DRobotPreview.jsx
- [ ] T077 Implement positioning on the right side of hero section in src/components/Interactive3DRobotPreview.jsx
- [ ] T078 Implement not dominating text content on left side in src/components/Interactive3DRobotPreview.jsx
- [ ] T079 Integrate Interactive 3D Robot Preview into HeroSection component on right side in src/components/HeroSection.jsx

## Phase 9: Card Hover Effects Implementation

**Purpose**: Add hover outline effects to all cards on the homepage for improved user interaction feedback

- [ ] T081 Implement hover outline effects for ModuleCard component in src/components/ModuleCard.jsx
- [ ] T082 Implement hover outline effects for HardwareTierCard component in src/components/HardwareTierCard.jsx
- [ ] T083 [P] Implement hover outline effects for other card components in src/components/
- [ ] T084 Add consistent transition effects for hover states in src/css/industrial-styles.module.css
- [ ] T085 Ensure hover effects meet accessibility standards in src/components/

## Phase 10: Content Structure & Navigation Implementation

**Purpose**: Update content to focus on textbook approach, implement proper redirects, and add comprehensive navigation and footer

- [ ] T086 Update all CTAs to redirect to actual content (robocraft/docs, modules section) instead of triggering alerts
- [ ] T087 Change "Start Building" CTA to "Start Learning" and redirect to robocraft/docs in src/components/HeroSection.jsx
- [ ] T088 Update "View Modules" CTA to redirect to modules section below in src/components/HeroSection.jsx
- [ ] T089 Create modules section using content from project_docs/course_structure.md and COURSE_DETAILS.md in src/components/ModulesSection.jsx
- [ ] T090 Add additional sections to homepage from COURSE_DETAILS.md by analyzing it in src/components/
- [ ] T091 Add weekly breakdown section from COURSE_DETAILS.md content in src/components/WeeklyBreakdownSection.jsx
- [ ] T092 Update bottom CTA "Get Started Today" to redirect to robocraft/docs in src/components/FooterCTA.jsx
- [ ] T093 Implement comprehensive footer with Learn section, Resources and Copyright in src/components/Footer.jsx
- [ ] T094 Implement navigation bar with LEARN FREE, MODULES, TECHNOLOGY, Search and Dark/Light mode in src/components/Navbar.jsx
- [ ] T095 Ensure all content emphasizes textbook approach over platform-building approach

## Phase 10: Remove Old Components & Polish

**Purpose**: Improvements that affect multiple user stories

- [X] T044 [P] Implement accessibility features (ARIA labels, keyboard navigation) across all components
- [X] T045 [P] Add prefers-reduced-motion support for animations in src/utils/motion.js
- [X] T046 Ensure color contrast meets WCAG 2.1 AA requirements across all components
- [X] T047 [P] Optimize performance and validate Lighthouse scores >= 90 performance, >= 95 accessibility
- [X] T048 [P] Add focus states for keyboard navigation across all interactive elements
- [X] T049 Implement mouse-tracking radial gradient orb effect in src/components/RadialGradient.jsx
- [X] T050 Add pulsing signal dot animations in src/components/SignalDot.jsx
- [X] T051 Validate "Free forever. No lock-in." messaging is clearly visible in src/components/HeroSection.jsx
- [X] T52 [P] Integrate existing course content from COURSE_DETAILS.md and project_docs/course_structure into the new homepage
- [X] T053 Run visual audit to confirm all industrial signal motifs are present
- [X] T054 Update main homepage file to use new industrial components in src/pages/index.js

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **System Heartbeat Core (Phase 7)**: Depends on Foundational phase completion
- **Full Industrial Robotic Figure (Phase 8)**: Depends on Foundational phase completion
- **Remove Old Components & Polish (Final Phase)**: Depends on all desired user stories and System Heartbeat Core being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P3)**: Can start after Foundational (Phase 2) - Builds on all previous stories for responsive implementation
- **User Story 5 (P1)**: Can start after Foundational (Phase 2) and System Heartbeat Core (Phase 7) - Builds on hero section for system vitality communication
- **User Story 6 (P1)**: Can start after Foundational (Phase 2) and Autonomous Robotic Arm (Phase 8) - Builds on hero section for robotic presence communication
- **User Story 7 (P1)**: Can start after Foundational (Phase 2) and Full Industrial Robotic Figure (Phase 8) - Builds on hero section for full robotic figure communication

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Implement hero section layout with industrial design in src/components/HeroSection.jsx"
Task: "Add industrial schematic or robot assembly visual to hero in src/components/HeroSection.jsx"

# Launch all styling for User Story 1 together:
Task: "Add primary CTA using orange accent in src/components/HeroSection.jsx"
Task: "Add secondary exploratory CTA to hero in src/components/HeroSection.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
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
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
   - Developer E: System Heartbeat Core (Phase 7)
   - Developer F: Full Industrial Robotic Figure (Phase 8)
3. Stories complete and integrate independently

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
- Task T054 must update the main homepage file (src/pages/index.js) to use the new industrial components
- Task T055-T063 must implement the System Heartbeat Core feature with all interaction states
- Task T064-T071 must implement the Autonomous Robotic Arm feature with all interaction states (to be replaced by Full Industrial Robotic Figure)
- Task T072-T079 must implement the Full Industrial Robotic Figure feature with all interaction states
- The frontend-design skill must be used as specified in the requirements (IR-001 through IR-003)
