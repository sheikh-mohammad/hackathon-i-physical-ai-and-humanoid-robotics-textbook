# Quickstart Guide: RoboCraft Industrial-Kinetic Futurism Homepage Development

**Feature**: RoboCraft Holographic Homepage Redesign
**Date**: 2026-01-25

## Prerequisites

### Environment Setup
- Node.js 18.x or higher
- npm or yarn package manager
- Git for version control
- Recommended IDE: VS Code with Docusaurus extensions

### Project Dependencies
```bash
npm install --save-dev docusaurus
npm install react react-dom
```

## Getting Started

### 1. Clone and Setup
```bash
# Navigate to your project directory
cd hackathon-1-physical-ai-humanoid-robotics-textbook

# Install dependencies
npm install
```

### 2. Create Directory Structure
```bash
mkdir -p src/pages src/components src/css static/img
```

### 3. Additional Static Directory for Images
```bash
# Both static/ and static/img/ directories are used for storing generated images
mkdir -p static static/img
```

### 3. Start Development Server
```bash
npm run start
```

## Component Development

### Creating the Main Homepage
1. Create `src/pages/index.js` for the main homepage
2. Use the RoboCraftHomepage component
3. Import content from markdown files

### Developing Components
1. Create components in `src/components/`
2. Use CSS modules for styling (e.g., `ComponentName.module.css`)
3. Follow React best practices with functional components and hooks

## Image Generation Workflow

### Using the Image Generator
1. Generate images using the image-generator skill
2. Save images to both `static/` and `static/img/` directories as needed
3. Reference images using appropriate path format (`/@image-name.ext` for static/ or `/img/image-name.ext` for static/img/)
4. Properly link images between directories when needed

### Recommended Image Sizes
- Background textures: 1920x1080px
- Tech schematics: 500x500px
- Robot joint motifs: 300x300px
- Hero banners: 1200x600px
- Decorative elements: 100x100px
- Technology badges: 200x100px
- Mechanical elements: 400x400px

## Content Integration

### Importing Markdown Files
```javascript
import courseDetails from '@site/../COURSE_DETAILS.md';
import hackathonInfo from '@site/../Hackathon_I_Physical_AI_&_Humanoid_Robotics_Textbook.md';
```

### Processing Content
- Use Docusaurus' built-in markdown processing
- Create a MarkdownRenderer component for industrial styling
- Transform content to match the aesthetic requirements
- Structure content in organized modules with clear learning paths

## Industrial Design Implementation

### CSS Techniques
- Use industrial-themed styling with dark backgrounds and steel/copper accents
- Apply linear gradients for industrial color shifts using specific hex/RGB values from the defined color palette
- Implement keyframe animations for mechanical elements
- Use pseudo-elements for glowing circuit pathways
- Create a dedicated color-palette module for consistent industrial aesthetic
- Implement structured layouts similar to reference education platforms
- Apply blueprint-mode aesthetics with technical drawing visual elements

### Performance Optimization
- Use React.memo() for components that render frequently
- Implement adaptive animations that adjust based on device capabilities
- Use mixed CSS and JavaScript approach based on animation complexity
- Optimize animations using `transform` and `opacity` properties for simple animations
- Use JavaScript libraries like GSAP for complex animations that require more control
- Use CSS containment where appropriate
- Implement adaptive animations that adjust based on device capabilities

## Enhanced Aesthetic Guidelines

### Module Cards
- Create structured presentation of course modules
- Include appropriate icons and clear descriptions
- Implement numbered modules with learning paths
- Ensure readability across different screen sizes

### Technology Stack Display
- Create prominent badges for key technologies (ROS 2, NVIDIA Isaac, Gazebo, etc.)
- Position strategically to highlight key tools and frameworks
- Use consistent styling with industrial aesthetic

### Navigation and User Pathways
- Implement clear navigation pathways with prominent call-to-action buttons
- Create intuitive user journey progression
- Ensure accessibility across all interactive elements

### Industrial Theme Guidelines
- Apply dark industrial theme with appropriate contrast ratios
- Include blueprint-mode aesthetics with technical drawing visual elements
- Feature mechanical precision elements mimicking engineering designs
- Incorporate steel and copper color palette reflecting industrial materials
- Animate robot joints with realistic mechanical movement patterns
- Display glowing circuit pathways mimicking electronic schematics
- Include kinetic motion effects for interactive elements

### Dark/Light Mode Guidelines
- Implement toggle functionality for seamless switching between dark and light modes
- Maintain consistent aesthetic across both dark and light modes
- Ensure all visual elements remain visible and legible in both modes
- Preserve industrial-themed elements in both dark and light modes
- Store user theme preference in local storage for persistence
- Respect system preference for dark/light mode by default
- Provide smooth transition animations when switching between modes
- Maintain proper contrast ratios in both dark and light modes (WCAG 2.1 AA compliance)
- Ensure all interactive elements remain accessible in both modes
- Test theme switching functionality across different browsers and devices

## Development Workflow

### Component Creation Process
1. Plan component structure and props
2. Create component in `src/components/`
3. Write corresponding CSS module
4. Add tests (if applicable)
5. Integrate into the main homepage

### Testing Approach
- Visual testing across different screen sizes
- Content rendering verification
- Performance monitoring
- Accessibility validation

## Deployment Preparation

### Build Process
```bash
npm run build
```

### Optimization
- Minimize CSS and JavaScript bundles
- Optimize images for web delivery
- Implement proper caching headers
- Validate all links and resources

## Troubleshooting

### Common Issues
- Glassmorphism not working on older browsers: Implement fallbacks
- Content not rendering: Check markdown file paths
- Images not displaying: Verify file paths in both static/ and static/img/ directories
- Animation performance issues: Review animation complexity and use appropriate approach (CSS for simple, JS for complex)
- Color inconsistencies: Ensure using specific hex/RGB values from defined color palette
- Performance issues: Review animations and component rendering

### Performance Tips
- Limit the number of simultaneous animations
- Use CSS `contain` property for isolated components
- Implement virtual scrolling for large content sections
- Defer non-critical visual effects