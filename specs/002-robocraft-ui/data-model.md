# Data Model: RoboCraft Homepage

## Overview

This document defines the data structures needed for the RoboCraft homepage redesign. The data model encompasses course information, hardware requirements, user journey elements, and visual components that will drive the industrial-themed homepage experience.

## Core Entities

### 1. HomePageSection

Represents a major section of the homepage with configurable content and styling.

```javascript
{
  id: string,              // Unique identifier for the section
  title: string,           // Section headline
  subtitle?: string,       // Optional subheading
  content: string,         // Main content text (Markdown supported)
  type: 'hero' | 'features' | 'courses' | 'hardware' | 'cta' | 'grid',  // Section type
  displayOrder: number,    // Order in which sections appear
  visualStyle: {
    backgroundColor: string,  // Background color (hex or CSS variable)
    textColor: string,        // Text color (hex or CSS variable)
    backgroundImage?: string, // Optional background image/SVG
    animationType?: string    // Animation effect type
  },
  cta?: CTA,
  components: HomePageComponent[]  // Associated visual components
}
```

### 2. CourseModule

Represents individual course modules or product features available on the platform.

```javascript
{
  id: string,                    // Unique identifier for the module
  title: string,                 // Module title
  description: string,           // Brief description
  duration: string,              // Estimated completion time
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert',  // Skill level
  prerequisites?: string[],      // Prerequisite knowledge/skills
  category: string,              // Category (e.g., "ROS", "Simulation", "Hardware")
  status: 'available' | 'coming-soon' | 'beta' | 'archived',  // Availability status
  icon?: string,                 // Icon identifier or SVG content
  features?: string[],           // Key features/benefits of the module
  learningOutcomes: string[],    // What learners will achieve
  hardwareRequirements?: string[] // Specific hardware needed for this module
}
```

### 3. HardwareTier

Defines the different hardware setup options available to users.

```javascript
{
  id: string,                          // Unique identifier for the tier
  name: string,                        // Tier name (e.g., "Starter", "Professional", "Enterprise")
  description: string,                 // Brief description of the tier
  cost: string,                        // Cost information (e.g., "Free", "$299", "Custom")
  recommendation?: 'recommended' | 'alternative' | 'basic' | 'premium',  // Recommendation level
  requirements: {
    cpu: string,                       // CPU requirements
    ram: string,                       // RAM requirements
    gpu?: string,                      // GPU requirements (optional)
    os: string[],                      // Operating systems supported
    storage: string                    // Storage requirements
  },
  features: string[],                  // Features included in this tier
  simulationOnly?: boolean,            // Whether this tier supports simulation only
  physicalHardware?: boolean,          // Whether this tier includes physical hardware
  supportLevel: 'community' | 'standard' | 'premium'  // Level of support provided
}
```

### 4. VisualComponent

Defines visual elements that enhance the industrial aesthetic.

```javascript
{
  id: string,                                    // Unique identifier
  componentName: 'SignalDot' | 'GridOverlay' | 'SchematicSVG' | 'RadialGradient' | 'FloatingLabel',  // Component type
  position: {
    x: number,                                   // X coordinate (percentage)
    y: number,                                   // Y coordinate (percentage)
    zIndex: number                             // Z-index for layering
  },
  properties: {
    color?: string,                              // Color for the component
    size?: number,                               // Size of the component
    animationSpeed?: number,                     // Speed of animations
    opacity?: number,                            // Opacity level
    pulseRate?: number,                          // Pulse interval for signal dots
    gridSpacing?: number                         // Spacing for grid overlays
  },
  displayConditions?: {
    minViewport?: number,                        // Minimum viewport width to display
    maxViewport?: number,                        // Maximum viewport width to display
    sectionId?: string                          // Section where component appears
  }
}
```

### 5. CTA (Call to Action)

Defines interactive elements that drive user engagement.

```javascript
{
  id: string,                                    // Unique identifier
  text: string,                                  // Button/link text
  type: 'primary' | 'secondary' | 'tertiary',   // Visual style
  action: {
    type: 'link' | 'modal' | 'download' | 'scroll',  // Type of action
    destination?: string,                        // Link destination or section ID
    modalContent?: string,                       // Content for modal (if applicable)
    downloadUrl?: string                         // URL for downloads
  },
  trackingId?: string,                           // Analytics tracking ID
  accessibilityLabel: string                     // ARIA label for accessibility
}
```

## Relationship Models

### HomePageSection ↔ CourseModule
- One HomePageSection can contain multiple CourseModules
- CourseModules can appear in multiple sections (e.g., featured in hero and grid)

### HomePageSection ↔ VisualComponent
- One HomePageSection can have multiple VisualComponents
- VisualComponents are positioned relative to their parent section

### CourseModule ↔ HardwareTier
- CourseModules may have specific HardwareTier requirements
- HardwareTiers may be optimized for specific CourseModules

## State Transitions

### CourseModule States
```
draft → review → available → archived
                   ↓
               coming-soon → available
```

### HardwareTier States
```
draft → review → available → archived
```

## Validation Rules

### HomePageSection Validation
- `displayOrder` must be unique within the page
- `title` is required for all sections except hero (where it may be implied)
- `visualStyle.backgroundColor` must be a valid CSS color value
- `type` must be one of the allowed values

### CourseModule Validation
- `title` and `description` are required
- `difficulty` must be one of the defined values
- `learningOutcomes` must contain at least one item
- `duration` must follow format like "2 hours", "3 weeks", etc.

### HardwareTier Validation
- `name` and `description` are required
- `cost` must be in valid format
- `requirements.os` must contain at least one OS
- `supportLevel` is required

### CTA Validation
- `text` is required
- `accessibilityLabel` is required
- `action.type` determines which other fields are required

## Sample Data

### Example HomePageSection (Hero)
```javascript
{
  id: "hero-section",
  title: "Build Physical AI Systems That Work",
  subtitle: "Real robotics education for serious builders",
  content: "RoboCraft transforms theoretical robotics knowledge into practical, deployable systems...",
  type: "hero",
  displayOrder: 1,
  visualStyle: {
    backgroundColor: "#08090d",
    textColor: "#ffffff",
    backgroundImage: "radial-gradient(circle at center, #f97316 0%, transparent 70%)",
    animationType: "staggered-reveal"
  },
  cta: {
    id: "hero-primary-cta",
    text: "Start Building",
    type: "primary",
    action: { type: "link", destination: "/courses" },
    accessibilityLabel: "Start your robotics journey"
  },
  components: [
    {
      id: "hero-grid-overlay",
      componentName: "GridOverlay",
      position: { x: 0, y: 0, zIndex: 1 },
      properties: { gridSpacing: 40, opacity: 0.1 }
    },
    {
      id: "hero-signal-dot",
      componentName: "SignalDot",
      position: { x: 85, y: 30, zIndex: 2 },
      properties: { color: "#f97316", pulseRate: 2000, size: 8 }
    }
  ]
}
```

### Example CourseModule
```javascript
{
  id: "module-ros2-fundamentals",
  title: "ROS 2 Fundamentals",
  description: "Master the Robot Operating System 2 for distributed robotics applications.",
  duration: "4 weeks",
  difficulty: "intermediate",
  prerequisites: ["Basic Python", "Linux command line"],
  category: "Core Systems",
  status: "available",
  icon: "gear-icon",
  features: ["Node management", "Topic communication", "Service calls", "Action servers"],
  learningOutcomes: [
    "Design distributed robotic systems",
    "Implement communication patterns",
    "Deploy ROS 2 applications"
  ],
  hardwareRequirements: ["Computer with Ubuntu 20.04+", "Robot platform (real or simulated)"]
}
```

### Example HardwareTier
```javascript
{
  id: "tier-professional",
  name: "Professional Builder",
  description: "Complete setup for developing and testing physical AI systems",
  cost: "$1,299",
  recommendation: "recommended",
  requirements: {
    cpu: "Intel i7 or AMD Ryzen 7",
    ram: "16GB DDR4",
    gpu: "RTX 3060 or equivalent",
    os: ["Ubuntu 20.04 LTS", "Windows 10+"],
    storage: "512GB SSD"
  },
  features: [
    "Full-size humanoid robot kit",
    "High-performance development computer",
    "Advanced sensors and actuators",
    "Priority support"
  ],
  simulationOnly: false,
  physicalHardware: true,
  supportLevel: "premium"
}
```