# Implementation Plan: 002-robocraft-homepage

## Technical Context

**Feature**: Redesign of the RoboCraft homepage with industrial-themed UI components and styling, including System Heartbeat Core and Schematic-Style Robot
**Location**: src/pages/index.js (main homepage file)
**Technology Stack**: JavaScript, React JS, Docusaurus 3.1.0, CSS Modules
**Design Theme**: Industrial Confidence — Orange (Deep space dark #08090d with industrial orange #f97316 accents)
**Primary Goal**: Create a new industrial-themed homepage for RoboCraft robotics education platform with a System Heartbeat Core and Schematic-Style Robot that visually communicates platform vitality and tech stack structure

## Design Direction

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
  - Schematic-Style Robot: subtle pulse and hover interactions
- **Visual Motifs**:
  - Robot assembly schematic SVG
  - Grid and alignment overlays
  - Floating system labels and callouts
  - Central System Heartbeat Core (circular/hexagonal reactor-style node)
  - Schematic-Style Robot (technical diagram with core node and peripheral components)
  - Hover outline effects on cards
- **Messaging**:
  - Outcome-driven copy
  - Personal builder journey framing
  - Explicit commitment: **"Free forever. No lock-in."**

### Dependencies
- Docusaurus 3.1.0 framework
- @docusaurus/preset-classic
- clsx utility
- Google Fonts (JetBrains Mono, Space Grotesk, IBM Plex Sans)
- Existing course content from COURSE_DETAILS.md and project_docs/course_structure

### Integrations
- Course content integration from existing markdown files
- Navigation system with Docusaurus framework
- Responsive design for all device sizes

### Unknowns
- Specific layout requirements for course modules display
- Exact component breakdown needed for the redesign
- Performance optimization requirements details

## Constitution Check

Based on the project constitution principles:
- ✅ Minimal viable change approach will be followed
- ✅ Code references will be used when modifying existing files
- ✅ Accessibility standards (WCAG 2.1 AA) will be maintained
- ✅ Performance goals will be considered (Lighthouse >= 90, accessibility >= 95)
- ✅ Testing will be implemented with Playwright for e2e tests
- ✅ Security best practices will be followed

## Gates

### Entry Gates
- [ ] Docusaurus environment properly set up
- [ ] Design assets and color palette confirmed
- [ ] Course content structure understood
- [ ] Performance requirements validated

### Exit Gates
- [ ] Homepage renders correctly with new industrial design
- [ ] All links and navigation functional
- [ ] Mobile responsiveness verified
- [ ] Performance benchmarks met (Lighthouse scores)
- [ ] Accessibility compliance verified
- [ ] Cross-browser compatibility tested

## Phase 0: Outline & Research

### 0.1 Research Tasks

#### 0.1.1 Resolve Unknowns

**Task 0.1.1**: Research existing homepage structure
- Location: src/pages/index.js
- Purpose: Understand current implementation before redesign
- Method: Analyzed existing code and identified components to replace
- Status: COMPLETED - Basic Docusaurus homepage structure identified

**Task 0.1.2**: Research industrial design patterns
- Location: Design guidelines from planning.md
- Purpose: Understand the "Industrial Confidence — Orange" theme requirements
- Method: Analyzed color palette, typography, motion, and visual motifs
- Status: COMPLETED - All design elements documented in research.md

**Task 0.1.3**: Research Docusaurus homepage customization
- Location: Docusaurus 3.1.0 documentation
- Purpose: Understand best practices for homepage customization
- Method: Reviewed documentation and examples
- Status: COMPLETED - Best practices documented in research.md

#### 0.1.2 Best Practices Research

**Task 0.1.4**: Best practices for React component design
- Technology: React JS with Docusaurus
- Domain: Educational platform homepage
- Method: Researched React and Docusaurus best practices
- Status: COMPLETED - Component architecture documented in research.md

**Task 0.1.5**: Best practices for accessibility in educational platforms
- Technology: Web accessibility standards
- Domain: Educational platform
- Method: Researched WCAG 2.1 AA compliance techniques
- Status: COMPLETED - Accessibility requirements documented in research.md

#### 0.1.3 Integration Patterns Research

**Task 0.1.6**: Research course content integration patterns
- Source: COURSE_DETAILS.md and project_docs/course_structure
- Purpose: Understand how to integrate existing course content
- Method: Analyzed content structure and determined display patterns
- Status: COMPLETED - Integration patterns documented in research.md

### 0.2 Consolidated Research Findings

**Decision**: All unknowns resolved through comprehensive research
**Rationale**: Research.md contains detailed analysis of existing structure, design patterns, best practices, and integration methods
**Alternatives considered**: Various design frameworks and component architectures were evaluated before settling on industrial-themed approach with Docusaurus integration

[Research completed and documented in research.md]

## Phase 1: Design & Contracts

### 1.1 Data Model Design

[Data model defined in data-model.md with comprehensive entity definitions, relationships, validation rules, and sample data]

**Entity 1: HomePageSection**
- Fields: id, title, content, type, displayOrder, visualStyle, cta, components
- Relationships: Contains multiple CourseModule entities
- Validation: Must have title and content, displayOrder must be unique within page

**Entity 2: CourseModule**
- Fields: id, title, description, duration, difficulty, prerequisites, category, status, icon, features, learningOutcomes, hardwareRequirements
- Relationships: Belongs to HomePageSection
- Validation: Must have title, description, and learningOutcomes

**Entity 3: HardwareTier**
- Fields: id, name, description, cost, recommendation, requirements, features, simulationOnly, physicalHardware, supportLevel
- Relationships: May be associated with CourseModules
- Validation: Must have name, description, and requirements

**Entity 4: VisualComponent**
- Fields: id, componentName, position, properties, displayConditions
- Relationships: Associated with HomePageSection
- Validation: Must have componentName and valid position

### 1.2 API Contracts

[API contracts defined in contracts/homepage-api-contracts.md with comprehensive endpoint specifications, request/response formats, and error handling]

**Contract 1: CourseContentService**
- Endpoint: GET /api/courses
- Methods: GET
- Input: Query parameters (status, category, difficulty, page, limit)
- Output: Paginated array of CourseModule objects with metadata
- Errors: 400 for invalid parameters, 500 for server errors

**Contract 2: FeaturedCourseService**
- Endpoint: GET /api/courses/featured
- Methods: GET
- Input: None required
- Output: Array of featured CourseModule objects with priority ranking
- Errors: 500 for server errors

**Contract 3: HardwareTierService**
- Endpoint: GET /api/hardware-tiers
- Methods: GET, POST for recommendations
- Input: None required for GET, user profile for POST
- Output: Array of HardwareTier objects or personalized recommendations
- Errors: 400 for invalid profile data, 500 for server errors

**Contract 4: HomePageConfigurationService**
- Endpoint: GET /api/homepage/layout
- Methods: GET
- Input: None required
- Output: HomePageSection objects with visual components and theme configuration
- Errors: 500 for server errors

### 1.3 Quickstart Guide

[Complete quickstart guide defined in quickstart.md with detailed implementation steps]

1. Environment setup and dependency installation
2. Design system configuration (fonts, colors, CSS variables)
3. Component creation following industrial aesthetic
4. Update main homepage to use new components
5. Implement motion and animation effects
6. Add responsive design breakpoints
7. Implement accessibility features
8. Optimize performance with code splitting and image optimization
9. Testing and validation across devices and browsers

### 1.4 Agent Context Update

[Placeholder - will be updated after design completion]

## Phase 2: Implementation Approach

### 2.1 Component Architecture

**Component 1: IndustrialHomepage**
- Purpose: Main homepage container
- Props: courseData, themeConfig
- Children: Header, HeroSection, CourseGrid, Features, Footer

**Component 2: HeroSection**
- Purpose: Landing area with main CTA
- Props: title, subtitle, ctaText, ctaLink
- Style: Industrial orange accent background

**Component 3: CourseGrid**
- Purpose: Display available courses/modules
- Props: courses
- Style: Grid layout with hover effects

**Component 4: SystemHeartbeatCore**
- Purpose: Central industrial element that visually communicates platform vitality
- Props: idlePulse, mouseSync, ctaHoverEffect, scrollTransform
- Style: Circular/hexagonal reactor-style with orange glow, grid background, radial glow
- Behavior: Rhythmic pulse animation, cursor-synced pulse, CTA hover acceleration, scroll transformation

**Component 5: Interactive3DRobotPreview**
- Purpose: Interactive 3D humanoid robot model that users can drag to rotate, showing the actual robot they'll build/simulate with hover tooltips
- Props: modelPath, rotationEnabled, hoverTooltips, animationEnabled, position, size
- Style: 3D rotating humanoid model positioned on the right side of hero section, with subtle breathing motion, eye glow, joint articulation
- Behavior: Draggable rotation, hover tooltips with technical labels ("Servo motors", "AI vision system", "Balance sensors")

**Component 6: CardHoverEffects**
- Purpose: Visual feedback system for all cards on the homepage
- Props: hoverOutline, focusOutline, transitionDuration
- Style: Outline effects with good contrast, smooth transitions
- Behavior: Show outline on hover and focus, smooth disappearance when not active

**Component 7: LearningModulesSection**
- Purpose: Display course modules from project_docs/course_structure.md and COURSE_DETAILS.md
- Props: modulesData
- Style: Structured layout with clear progression
- Behavior: Links to appropriate content sections

**Component 8: NavigationBar**
- Purpose: Top navigation with LEARN FREE, MODULES, TECHNOLOGY, Search and Dark/Light mode
- Props: navItems, themeToggle
- Style: Clean, professional header with RoboCraft branding
- Behavior: Responsive navigation and theme switching

**Component 9: FooterSection**
- Purpose: Comprehensive footer with Learn section, Resources and Copyright
- Props: footerLinks
- Style: Organized sections with appropriate redirects
- Behavior: Links to book content, modules, specific chapters

### 2.2 Styling Strategy

- Primary theme: Deep space dark (#08090d)
- Primary accent: Industrial orange (#f97316)
- Secondary accent: Warm amber (#fb923c)
- Typography: Space Grotesk for headlines, JetBrains Mono for technical text, IBM Plex Sans for body
- Motion: Staggered reveals, pulsing dots, subtle radial gradients, System Heartbeat Core animations
- Visual Motifs: Grid lines, schematic elements, radial glow for System Heartbeat Core

### 2.3 Implementation Steps

1. Create new component files in src/components/
2. Update src/pages/index.js to use new components
3. Apply industrial-themed styling with CSS modules
4. Integrate course content from existing markdown files (project_docs/course_structure.md, COURSE_DETAILS.md)
5. Implement System Heartbeat Core component with all interaction states
6. Replace Schematic-Style Robot with Interactive 3D Robot Preview component
7. Implement Interactive 3D Robot Preview component with drag rotation and hover tooltips
8. Implement Card Hover Effects for all card components
9. Create Learning Modules section using content from project_docs/course_structure.md and COURSE_DETAILS.md
10. Implement Navigation Bar with LEARN FREE, MODULES, TECHNOLOGY, Search and Dark/Light mode
11. Implement comprehensive Footer with Learn section, Resources and Copyright
12. Update all CTAs to redirect to actual content (robocraft/docs, modules section) instead of triggering alerts
13. Implement responsive design
14. Add accessibility attributes
15. Optimize performance for 3D model interactions

## Phase 3: Risk Analysis

### 3.1 Top Risks

**Risk 1**: Breaking existing navigation or routing
- Mitigation: Maintain existing routes, only update page content
- Blast radius: Entire site navigation

**Risk 2**: Performance degradation
- Mitigation: Monitor Lighthouse scores, optimize images and assets
- Blast radius: Site performance and SEO

**Risk 3**: Accessibility regression
- Mitigation: Use axe DevTools, follow WCAG 2.1 AA guidelines
- Blast radius: Compliance and user experience

### 3.2 Quality Assurance

- Unit tests for new components
- End-to-end tests with Playwright
- Performance audits with Lighthouse
- Accessibility validation with axe DevTools
- Cross-browser testing

## Phase 4: Acceptance Criteria

### 4.1 Functional Requirements

- [ ] Homepage displays with new industrial design and Interactive 3D Robot Preview
- [ ] All course content is accessible and properly displayed from project_docs/course_structure.md and COURSE_DETAILS.md
- [ ] Navigation works correctly with proper redirects
- [ ] Mobile responsiveness meets touch target requirements (>= 44px)
- [ ] All links and CTAs redirect to actual content (robocraft/docs, modules section) instead of triggering alerts
- [ ] Interactive 3D Robot Preview appears on the right side of hero section
- [ ] Interactive 3D Robot Preview is rotatable by dragging
- [ ] Interactive 3D Robot Preview shows hover tooltips with technical labels ("Servo motors", "AI vision system", "Balance sensors")
- [ ] Interactive 3D Robot Preview has subtle animations (breathing motion, eye glow, joint articulation)
- [ ] Interactive 3D Robot Preview does not dominate text content on left side
- [ ] Content positioned on left, Interactive 3D Robot Preview positioned on right for hierarchical look
- [ ] "Start Building" CTA changed to "Start Learning" and redirects to robocraft/docs
- [ ] "View Modules" CTA redirects to modules section below
- [ ] Bottom CTA "Get Started Today" redirects to robocraft/docs
- [ ] Modules section created using content from project_docs/course_structure.md and COURSE_DETAILS.md
- [ ] Weekly breakdown section added from COURSE_DETAILS.md content
- [ ] Additional sections added from COURSE_DETAILS.md by analyzing it
- [ ] All cards on homepage show hover outline effects when hovered
- [ ] Card hover outline is clearly visible with good contrast
- [ ] Card hover outline disappears smoothly when cursor moves away
- [ ] Card hover effects are consistent across all card types
- [ ] Card hover effects are also visible on keyboard focus
- [ ] Navigation includes RoboCraft logo, LEARN FREE, MODULES, TECHNOLOGY, Search bar, Dark/Light mode button
- [ ] Footer includes Learn section (Start Your Journey, Course Modules, Technology subsections), Resources section, Copyright
- [ ] Footer links redirect to appropriate content (book, modules section, specific chapters)
- [X] System Heartbeat Core appears in hero section with rhythmic pulse animation
- [X] System Heartbeat Core responds to cursor movement with subtle pulse syncing
- [X] System Heartbeat Core accelerates heartbeat when CTAs are hovered
- [X] System Heartbeat Core transforms to schematic lines/wireframe on scroll
- [X] System Heartbeat Core messaging "A live Physical AI system — not a static course" is displayed
- [X] System Heartbeat Core respects prefers-reduced-motion setting

### 4.2 Non-Functional Requirements

- [ ] Lighthouse performance score ≥ 90
- [ ] Lighthouse accessibility score ≥ 95
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] WCAG 2.1 AA compliance (contrast ratios: 4.5:1 for text, 3:1 for large text)
- [ ] Respects prefers-reduced-motion setting
- [ ] 3D robot model performs smoothly (≥ 30fps) on target devices
- [ ] Interactive 3D Robot Preview has acceptable performance with fallback for low-end devices

## Phase 5: Delivery Plan

### 5.1 Iterative Approach

**Iteration 1**: Basic layout and styling
- Set up component structure
- Apply basic industrial theme colors
- Ensure responsive design foundation

**Iteration 2**: Content integration and 3D robot preview
- Connect to existing course data from project_docs/course_structure.md and COURSE_DETAILS.md
- Implement Interactive 3D Robot Preview with drag rotation and hover tooltips
- Add interactive elements

**Iteration 3**: Navigation, footer and polish
- Implement Navigation Bar with LEARN FREE, MODULES, TECHNOLOGY, Search and Dark/Light mode
- Add comprehensive Footer with Learn section, Resources and Copyright
- Fine-tune animations and motion
- Optimize performance for 3D model interactions
- Conduct accessibility audit
- Final testing and validation

### 5.2 Success Metrics

- User engagement metrics
- Performance scores (Lighthouse)
- Accessibility compliance
- Cross-browser compatibility
- Mobile usability
- 3D robot model interaction performance
- User perception of textbook-focused approach vs platform approach
