# Implementation Plan: 002-robocraft-ui

## Technical Context

**Feature**: Redesign of the RoboCraft homepage with industrial-themed UI components and styling, including System Heartbeat Core and Schematic-Style Robot
**Location**: frontend/src/pages/index.js (main homepage file)
**Technology Stack**: JavaScript, React JS, Docusaurus 3.1.0, CSS Modules
**Design Theme**: Industrial Confidence — Orange (Deep space dark #08090d with industrial orange #f97316 accents)
**Primary Goal**: Create a new industrial-themed homepage for RoboCraft robotics education platform with a System Heartbeat Core and Schematic-Style Robot that visually communicates platform vitality and tech stack structure
**Project Structure**: All Docusaurus-related files are organized in the frontend/ directory at the root level

**Frontend Directory Structure**:
- `frontend/.docusaurus/` - Docusaurus build cache (generated)
- `frontend/build/` - Production build output (generated)
- `frontend/node_modules/` - Node.js dependencies (generated)
- `frontend/src/` - Source code (components, pages, CSS, utils)
- `frontend/static/` - Static assets (images, fonts, icons)
- `frontend/docusaurus.config.js` - Main Docusaurus configuration
- `frontend/package.json` - Node.js dependencies and scripts
- `frontend/package-lock.json` - Dependency lock file
- `frontend/sidebars.js` - Documentation sidebar configuration

## Design Direction

- **Theme**: Deep space dark `#08090d` — controlled, premium foundation
- **Primary Accent**: Industrial orange `#f97316` — CTAs, focus states, interaction, navbar items
- **Secondary Accent**: Warm amber `#fb923c` — glows, gradients, hover energy
- **Neon Orange**: `#f97316` with glow effect — hover outline effects on cards
- **Success Color**: System green `#22c55e` — active states, health indicators
- **Typography**:
  - All text: Google Sans Code (monospace font for professional coding aesthetic)
  - Applied to both homepage and docs
- **Color Modes**:
  - Dark mode: Black (#08090d) primary, Orange (#f97316) secondary, White minimal
  - Light mode: White (#ffffff) primary, Orange (#f97316) secondary, Black minimal
  - Smooth transitions between modes
  - User preference persistence
- **Motion**:
  - Staggered section reveals
  - Pulsing signal dots
  - Mouse-tracking radial gradient orb (subtle, low opacity)
  - System Heartbeat Core: rhythmic pulse with interactive states
  - Interactive 3D Robot Preview: cursor-tracking rotation (follows mouse movement), breathing motion, eye glow, joint articulation
- **Visual Motifs**:
  - Robot assembly schematic SVG
  - Grid and alignment overlays
  - Floating system labels and callouts
  - Central System Heartbeat Core (circular/hexagonal reactor-style node)
  - Interactive 3D Robot Preview (cursor-tracking rotation with hover tooltips)
  - Neon orange hover outline effects on cards with glow
- **Layout**:
  - Hero section: Content on left (System Heartbeat Core, title, subtitle, description, CTAs), Interactive 3D Robot Preview on right
  - No overlap between content and robot preview
  - Proper spacing and hierarchy maintained
- **Navigation**:
  - Navbar items in orange color for consistency
  - GitHub link in navbar (github.com/sheikh-mohammad)
  - Embedded Docusaurus search bar (same as /docs)
  - Dark/Light mode toggle button with same icon as /docs
  - Same logo in navbar for both homepage and docs
  - Unified navbar design across homepage and docs
- **Docs Theme**:
  - /docs should use homepage theme (dark space foundation with orange accents)
  - All Docusaurus theme colors should match homepage industrial aesthetic
  - Font changed to Google Sans Code for consistency
  - Navbar updated to match homepage navbar exactly
  - Footer replaced with homepage footer
  - "Edit this page" link and icon removed from all docs pages
  - Same logo in navbar as homepage
- **Messaging**:
  - Outcome-driven copy
  - Personal learning journey framing
  - Explicit commitment: **"Free forever. No lock-in."**
- **Visual Effects**:
  - Prominency effect applied throughout for professional appearance
  - Depth and hierarchy through subtle shadows and elevation
  - Consistent visual language across all components

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
- Location: frontend/src/pages/index.js
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
- Purpose: Interactive 3D humanoid robot model with cursor-tracking rotation, showing the actual robot they'll build/simulate with hover tooltips
- Props: modelPath, cursorTracking, hoverTooltips, animationEnabled, position, size
- Style: 3D rotating humanoid model positioned on the right side of hero section, with subtle breathing motion, eye glow, joint articulation
- Behavior: Cursor-tracking rotation (follows mouse movement - right movement = rotate right, left movement = rotate left), hover tooltips with technical labels ("Servo motors", "AI vision system", "Balance sensors")
- Layout: Positioned on right side without overlapping left content

**Component 6: CardHoverEffects**
- Purpose: Visual feedback system for all cards on the homepage
- Props: hoverOutline, focusOutline, transitionDuration, glowEffect
- Style: Neon orange outline effects (#f97316) with glow, smooth transitions
- Behavior: Show neon orange outline with glow on hover and focus, smooth disappearance when not active

**Component 7: LearningModulesSection**
- Purpose: Display course modules from project_docs/course_structure.md and COURSE_DETAILS.md
- Props: modulesData
- Style: Structured layout with clear progression
- Behavior: Links to appropriate content sections

**Component 8: NavigationBar**
- Purpose: Top navigation with RoboCraft logo, LEARN FREE, MODULES, TECHNOLOGY, GitHub link, Search bar, Dark/Light mode toggle
- Props: navItems, themeToggle, searchConfig, githubLink
- Style: Clean, professional header with RoboCraft branding, orange accent for nav items
- Behavior: Responsive navigation, theme switching with persistence, search functionality

**Component 9: FooterSection**
- Purpose: Comprehensive footer with Docs (Textbook), Community (GitHub, LinkedIn), More (Codebase), Copyright
- Props: footerLinks
- Style: Organized sections with appropriate redirects
- Behavior: Links to GitHub (github.com/sheikh-mohammad), LinkedIn (linkedin.com/in/sheikh-mohammad-li/), Codebase (repo link)

**Component 10: ColorModeSystem**
- Purpose: Dark/Light mode management with proper color palettes
- Props: defaultMode, persistPreference
- Style: Dark mode (black primary, orange secondary, white minimal), Light mode (white primary, orange secondary, black minimal)
- Behavior: Smooth transitions, preference persistence, system preference detection

**Component 11: TypographySystem**
- Purpose: Google Sans Code font integration across all text
- Props: fontFamily, fontWeights, fontSizes
- Style: Monospace professional coding aesthetic
- Behavior: Optimized font loading, fallback fonts

**Component 12: ProminencyEffects**
- Purpose: Visual effects system for professional appearance
- Props: elevationLevels, shadowStyles
- Style: Subtle shadows, depth, hierarchy
- Behavior: Consistent visual language across components

### 2.2 Styling Strategy

- Primary theme: Deep space dark (#08090d) for dark mode, White (#ffffff) for light mode
- Primary accent: Industrial orange (#f97316) - CTAs, navbar items, hover effects
- Neon orange: Industrial orange (#f97316) with glow effect - card hover outlines
- Secondary accent: Warm amber (#fb923c)
- Typography: Google Sans Code for all text (homepage and docs)
- Motion: Staggered reveals, pulsing dots, subtle radial gradients, System Heartbeat Core animations, cursor-tracking robot rotation
- Visual Motifs: Grid lines, schematic elements, radial glow for System Heartbeat Core, neon orange outlines with glow
- Color Modes: Dark mode (black primary, orange secondary, white minimal), Light mode (white primary, orange secondary, black minimal)
- Visual Effects: Prominency effects with subtle shadows and elevation for professional appearance

### 2.3 Implementation Steps

1. Create new component files in frontend/src/components/
2. Update frontend/src/pages/index.js to use new components
3. Apply industrial-themed styling with CSS modules
4. Integrate Google Sans Code font for all text (homepage and docs)
5. Implement Dark/Light mode system with proper color palettes
6. Integrate course content from existing markdown files (project_docs/course_structure.md, COURSE_DETAILS.md)
7. Implement System Heartbeat Core component with all interaction states
8. Implement Interactive 3D Robot Preview component with cursor-tracking rotation (follows mouse movement)
9. Fix hero section layout: content on left (System Heartbeat Core, title, subtitle, description, CTAs), robot on right without overlap
10. Implement neon orange hover effects with glow for all card components
11. Update navbar items (LEARN FREE, MODULES, TECHNOLOGY) to orange color (#f97316)
12. Add GitHub link to navbar (github.com/sheikh-mohammad)
13. Integrate embedded Docusaurus search bar in navbar (same as /docs)
14. Add Dark/Light mode toggle button in navbar with same icon as /docs
15. Add same logo to both homepage and docs navbar
16. Create Learning Modules section using content from project_docs/course_structure.md and COURSE_DETAILS.md
17. Implement Navigation Bar with all required features (logo, nav items, GitHub, search, theme toggle)
18. Implement comprehensive Footer with Docs (Textbook), Community (GitHub, LinkedIn), More (Codebase), Copyright
19. Update all CTAs to redirect to actual content (/docs, modules section) instead of triggering alerts
20. Update Docusaurus theme configuration to match homepage theme (dark space foundation with orange accents)
21. Update /docs font to Google Sans Code
22. Update /docs navbar to match homepage navbar exactly
23. Remove "Edit this page" link and icon from all docs pages
24. Replace /docs footer with homepage footer
25. Implement prominency effects throughout for professional appearance
26. Implement responsive design
27. Add accessibility attributes
28. Optimize performance for 3D model interactions and font loading

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
- [ ] All links and CTAs redirect to actual content (/docs, modules section) instead of triggering alerts
- [ ] Interactive 3D Robot Preview appears on the right side of hero section
- [ ] Interactive 3D Robot Preview is rotatable by dragging
- [ ] Interactive 3D Robot Preview shows hover tooltips with technical labels ("Servo motors", "AI vision system", "Balance sensors")
- [ ] Interactive 3D Robot Preview has subtle animations (breathing motion, eye glow, joint articulation)
- [ ] Interactive 3D Robot Preview does not dominate text content on left side
- [ ] Content positioned on left, Interactive 3D Robot Preview positioned on right for hierarchical look
- [ ] "Start Building" CTA changed to "Start Learning" and redirects to /docs
- [ ] "View Modules" CTA redirects to modules section below
- [ ] Bottom CTA "Get Started Today" redirects to /docs
- [ ] Modules section created using content from project_docs/course_structure.md and COURSE_DETAILS.md
- [ ] Weekly breakdown section added from COURSE_DETAILS.md content
- [ ] Additional sections added from COURSE_DETAILS.md by analyzing it
- [ ] All cards on homepage show hover outline effects when hovered
- [ ] Card hover outline is clearly visible with good contrast
- [ ] Card hover outline disappears smoothly when cursor moves away
- [ ] Card hover effects are consistent across all card types
- [ ] Card hover effects are also visible on keyboard focus
- [ ] Navigation includes RoboCraft logo, LEARN FREE, MODULES, TECHNOLOGY, GitHub link, Search bar, Dark/Light mode button
- [ ] GitHub link in navbar points to github.com/sheikh-mohammad
- [ ] Search bar is properly integrated in navbar (Algolia configuration)
- [ ] Dark/Light mode toggle button uses same icon as /docs
- [ ] Same logo appears in both homepage and docs navbar
- [ ] Navbar design is unified across homepage and docs
- [ ] Footer includes Docs section (Textbook link)
- [ ] Footer includes Community section (GitHub: github.com/sheikh-mohammad, LinkedIn: linkedin.com/in/sheikh-mohammad-li/)
- [ ] Footer includes More section (Codebase with repo link)
- [ ] Footer copyright reads "Copyright © 2026 RoboCraft. Made with ❤️ by Sheikh Mohammad."
- [ ] Same footer appears in both homepage and docs
- [ ] Google Sans Code font is applied to all text on homepage
- [ ] Google Sans Code font is applied to all text in /docs
- [ ] Font loading is optimized for performance
- [ ] Dark mode uses black (#08090d) primary, orange (#f97316) secondary, white minimal
- [ ] Light mode uses white (#ffffff) primary, orange (#f97316) secondary, black minimal
- [ ] Color mode transitions are smooth
- [ ] Color mode preference persists across sessions
- [ ] All components support both dark and light modes
- [ ] /docs theme matches homepage theme (dark space foundation with orange accents)
- [ ] /docs navbar matches homepage navbar exactly
- [ ] "Edit this page" link and icon removed from all docs pages
- [ ] /docs footer replaced with homepage footer
- [ ] Prominency effects applied throughout for professional appearance
- [ ] Visual hierarchy established through depth and elevation
- [ ] Consistent visual language maintained across all components
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
- [ ] Font loading optimized with font-display: swap
- [ ] Color mode transitions perform smoothly without layout shifts
- [ ] All images and assets optimized for web delivery
- [ ] Prominency effects do not impact performance negatively

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
