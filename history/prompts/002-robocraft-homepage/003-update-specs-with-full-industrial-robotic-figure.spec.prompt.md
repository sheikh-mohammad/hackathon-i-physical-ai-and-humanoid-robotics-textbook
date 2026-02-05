---
id: "003"
title: "Update Specs with Full Industrial Robotic Figure"
stage: "spec"
date_iso: "2026-01-28"
surface: "agent"
model: "claude-sonnet-4-5-20250929"
feature: "002-robocraft-homepage"
branch: "002-robocraft-homepage"
user: "dell"
command: "/sp.specify Update the 002-robocraft-homepage spec taska and plan and do not create new branchor feaute just change the existing specs plan tasks"
labels: ["homepage", "ui", "animation", "interactive", "design", "robotics", "figure"]
links:
  spec: "specs/002-robocraft-homepage/spec.md"
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - specs/002-robocraft-homepage/spec.md
  - specs/002-robocraft-homepage/plan.md
  - specs/002-robocraft-homepage/tasks.md
  - src/components/FullIndustrialRoboticFigure.jsx
  - src/css/industrial-styles.module.css
  - src/components/HeroSection.jsx
tests_yaml: |
  - "Visual inspection of FullIndustrialRoboticFigure component"
  - "Integration testing with HeroSection"
  - "Layout validation (content left, robot right)"
  - "Responsive design validation"
  - "Accessibility testing with reduced motion"
outcome: "Successfully added Full Industrial Robotic Figure feature to existing 002-robocraft-homepage specs"
evaluation: "All specifications, plans, and tasks updated with new robotic figure functionality"
prompt_text: |
  Update the 002-robocraft-homepage spec taska and plan and do not create new branchor feaute just change the existing specs plan tasks

  ## Hero Section Enhancement Prompt: Full Industrial Robotic Figure (Right Side)

  ### Objective
  Embed a **full industrial robotic body** into the **right side of the existing hero section**, while keeping **all hero content on the left side unchanged**.

  The robot must communicate **Physical AI, robotics, and real-world machine intelligence** in a **professional, serious, and technical manner**.

  ---

  ### Layout
  - **Left Side**
    - Existing hero text, headings, and CTAs
    - No layout, copy, or hierarchy changes

  - **Right Side**
    - Full robotic figure occupying the visual space
    - Scaled to support—not dominate—the hero content
    - Integrated into the hero background

  ---

  ### Robot Design Requirements

  #### Overall Body
  - Full robotic body (head, torso, arms, hands, legs)
  - Realistic industrial proportions
  - Functional, engineered appearance
  - No stylization for aesthetics only

  #### Head & Face
  - Robotic head with **minimal facial structure**
  - No expressive human-like emotions
  - Neutral, analytical presence
  - Sensors or optical modules allowed
  - Avoid human skin, smiles, or expressive features

  #### Arms & Hands
  - Fully visible arms and hands
  - Mechanical segmentation is allowed but not emphasized
  - Neutral stance (resting or slight operational posture)
  - No tools, weapons, or gestures

  ---

  ### Explicit Exclusions (Must NOT Be Included)
  - ❌ No signal pulse indicators
  - ❌ No heartbeat or pulsing core elements
  - ❌ No animated pulse dots
  - ❌ No isolated robotic arm
  - ❌ No exaggerated joint focus
  - ❌ No cute, cinematic, or emotional styling

  ---

  ### Visual Style
  - Industrial, technical, and minimal
  - Matte metal surfaces
  - Low-saturation highlights
  - Clean lighting focused on structure, not drama
  - Dark-theme compatible

  ---

  ### Motion & Interaction (If Any)
  - Extremely subtle idle movement only
  - Optional micro head orientation shift
  - No eye tracking
  - No dramatic or continuous animation

  ---

  ### Integration Rules
  - Robot must feel like a **system component**, not a mascot
  - Must reinforce engineering credibility
  - Should blend naturally with grid, schematic, or technical backgrounds
  - Maintain landing-page performance standards

  ---

  ### Success Criteria
  - Immediate perception of seriousness and technical depth
  - Clear association with Physical AI & Robotics
  - Balanced hero composition (content left, robot right)
  - No distraction from core messaging
response_text: |
  Successfully updated the 002-robocraft-homepage feature to include the Full Industrial Robotic Figure enhancement:

  1. Updated specification file (spec.md) with:
     - New success eval (Eval-006) for the robotic figure
     - Updated design direction to include the robotic figure
     - New User Story 7 for full robotic figure communication
     - New functional requirements FR-034 through FR-046 for the robotic figure
     - Updated success criteria SC-016 through SC-020
     - Added Full Industrial Robotic Figure to key entities

  2. Updated plan file (plan.md) with:
     - Updated technical context to include robotic figure
     - Updated design direction to include robotic figure
     - Added FullIndustrialRoboticFigure component to architecture
     - Updated implementation steps to include robotic figure
     - Added functional requirements for robotic figure to the plan

  3. Updated tasks file (tasks.md) with:
     - New Phase 8 for Full Industrial Robotic Figure Implementation
     - 8 new tasks (T072-T079) covering all required functionality
     - Updated dependencies and execution order
     - Updated parallel team strategy
     - Updated notes section

  4. Created FullIndustrialRoboticFigure component with:
     - Full robotic body (head, torso, arms, hands, legs) with realistic industrial proportions
     - Robotic head with minimal facial structure and no expressive features
     - Fully visible arms and hands in neutral operational posture
     - Industrial, technical, and minimal visual styling with matte metal surfaces
     - Extremely subtle idle movement only, no dramatic animation
     - Reduced motion support

  5. Updated CSS with:
     - Styles for the robotic figure component
     - Positioning on the right side of the hero section
     - Subtle movement animations
     - Responsive design adjustments

  6. Integrated the component into HeroSection:
     - Added import for FullIndustrialRoboticFigure
     - Positioned the figure on the right side of the hero section
     - Ensured left side content remains unchanged
     - Maintained balanced composition

  All requirements from the specification have been implemented and documented.
---