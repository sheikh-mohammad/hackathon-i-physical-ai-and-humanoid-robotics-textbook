# Quickstart Guide: RoboCraft Homepage Redesign

## Overview

This quickstart guide provides the essential steps to implement the RoboCraft industrial-themed homepage. Follow these steps to transform the existing Docusaurus homepage into a professional, engineering-focused product showcase.

## Prerequisites

- Node.js 18+ installed
- Docusaurus 3.1.0 project setup
- Access to Google Fonts (Space Grotesk, JetBrains Mono, IBM Plex Sans)
- Basic understanding of React and CSS Modules

## Step 1: Environment Setup

### 1.1 Clone and Install Dependencies
```bash
# Ensure you're in the project root
npm install
```

### 1.2 Verify Current Setup
```bash
# Start the development server to confirm everything works
npm run start
```

## Step 2: Design System Configuration

### 2.1 Add Required Fonts
Update your `docusaurus.config.js` to include the required fonts:

```javascript
// In docusaurus.config.js
module.exports = {
  themes: [
    '@docusaurus/theme-classic',
    // ... other themes
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
    // ... other stylesheets
  ],
  // ... rest of config
};
```

### 2.2 Define Color Variables
Create a CSS file for your color variables (`src/css/colors.css`):

```css
:root {
  --industrial-dark-bg: #08090d;
  --industrial-orange: #f97316;
  --warm-amber: #fb923c;
  --system-green: #22c55e;
  --text-light: #f8fafc;
  --text-secondary: #cbd5e1;
  --card-bg: #1e293b;
  --border-color: #334155;
}
```

## Step 3: Component Creation

### 3.1 Create Component Directory
```bash
mkdir src/components/RoboCraftHomepage
```

### 3.2 Create Core Components

Create the main homepage component structure:

**File: `src/components/RoboCraftHomepage/Homepage.jsx`**

```jsx
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CoursesSection from './CoursesSection';
import HardwareSection from './HardwareSection';
import CTASection from './CTASection';

import styles from './Homepage.module.css';

export default function RoboCraftHomepage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Education Platform">
      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <HardwareSection />
        <CTASection />
      </main>
    </Layout>
  );
}
```

**File: `src/components/RoboCraftHomepage/HeroSection.jsx`**

```jsx
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={clsx(styles.hero, styles.industrialDark)}>
      <div
        className={styles.radialGradient}
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.1), transparent 80%)`
        }}
      />

      <div className={styles.gridOverlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={clsx(styles.title, styles.spaceGrotesk)}>
            Build Physical AI Systems That Work
          </h1>
          <p className={clsx(styles.subtitle, styles.ibmPlexSans)}>
            Real robotics education for serious builders. Free forever. No lock-in.
          </p>

          <div className={styles.ctaContainer}>
            <Link
              className={clsx(styles.primaryCta, styles.industrialOrange)}
              to="/docs/intro">
              Start Building
            </Link>
            <Link
              className={clsx(styles.secondaryCta, styles.warmAmber)}
              to="/docs/tutorial-basics/creating-a-document">
              Explore Modules
            </Link>
          </div>
        </div>

        <div className={styles.visualElements}>
          <div className={clsx(styles.signalDot, styles.pulse)}></div>
          <div className={styles.schematicSvg}>
            {/* Robot assembly schematic SVG */}
            <svg viewBox="0 0 200 200" className={styles.schematicPath}>
              <path d="M50,50 L150,50 L150,150 L50,150 Z" stroke="var(--warm-amber)" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="100" r="30" stroke="var(--industrial-orange)" strokeWidth="2" fill="none"/>
              <line x1="70" y1="70" x2="130" y2="130" stroke="var(--system-green)" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Step 4: Update Main Homepage

### 4.1 Replace Existing Homepage
Replace the content of `src/pages/index.js` with:

```javascript
import React from 'react';
import RoboCraftHomepage from '../components/RoboCraftHomepage/Homepage';

export default function Home() {
  return <RoboCraftHomepage />;
}
```

## Step 5: Add Motion and Animation

### 5.1 Create Animation Utilities
Create `src/utils/animations.js`:

```javascript
// Animation utilities for staggered reveals
export const staggerReveal = (elements, delay = 100) => {
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * delay);
  });
};

// Initialize staggered animations
export const initStaggeredAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-animate="stagger"]');
  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  // Trigger animations when elements come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        staggerReveal([entry.target]);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
};
```

## Step 6: Implement Responsive Design

### 6.1 Add Media Queries
In your component CSS files, include responsive breakpoints:

```css
/* In each component's module.css file */
@media (max-width: 996px) {
  .container {
    padding: 0 2rem;
  }

  .title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}

@media (max-width: 768px) {
  .content {
    text-align: center;
  }

  .ctaContainer {
    flex-direction: column;
    gap: 1rem;
  }

  .visualElements {
    display: none;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
```

## Step 7: Accessibility Implementation

### 7.1 Add ARIA Labels and Roles
Ensure all interactive elements have proper accessibility attributes:

```jsx
// Example of accessible CTA button
<Link
  className={styles.primaryCta}
  to="/docs/intro"
  aria-label="Start building with RoboCraft - Physical AI education platform">
  Start Building
</Link>
```

### 7.2 Respect Prefers Reduced Motion
Add CSS to respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .pulse {
    animation: none !important;
  }

  .radialGradient {
    background: transparent !important;
  }
}
```

## Step 8: Performance Optimization

### 8.1 Code Splitting
Lazy load heavy components:

```jsx
import { lazy, Suspense } from 'react';

const HeavyAnimationComponent = lazy(() => import('./HeavyAnimationComponent'));

export default function OptimizedSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyAnimationComponent />
    </Suspense>
  );
}
```

### 8.2 Image Optimization
Use WebP with fallbacks for all images:

```jsx
<picture>
  <source srcSet="/img/example.webp" type="image/webp" />
  <img
    src="/img/example.png"
    alt="Description of image"
    loading="lazy"
  />
</picture>
```

## Step 9: Testing Checklist

### 9.1 Functional Tests
- [ ] All navigation links work
- [ ] CTA buttons lead to correct destinations
- [ ] Responsive design works on all screen sizes
- [ ] All interactive elements are accessible

### 9.2 Performance Tests
- [ ] Run Lighthouse audit (target: Performance ≥ 90)
- [ ] Verify accessibility score (target: ≥ 95)
- [ ] Test loading times on 3G connection
- [ ] Check animation performance on mid-range devices

### 9.3 Cross-Browser Tests
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Step 10: Final Validation

### 10.1 Design Audit
- [ ] Industrial orange used only for CTAs and emphasis
- [ ] Deep space dark background established
- [ ] Typography follows Space Grotesk/JetBrains Mono/IBM Plex Sans
- [ ] Grid overlays and schematic elements present
- [ ] Motion is staggered and non-blocking

### 10.2 Content Audit
- [ ] "Free forever. No lock-in." messaging visible
- [ ] Course content properly integrated
- [ ] Hardware tiers clearly presented
- [ ] Outcome-driven copy used throughout

## Troubleshooting

### Common Issues:
1. **Fonts not loading**: Check internet connection and Google Fonts URL
2. **Animations janky**: Verify prefers-reduced-motion support
3. **Colors not matching**: Check CSS variable definitions
4. **Mobile layout broken**: Verify media queries and touch targets ≥ 44px

### Performance Tips:
- Use CSS containment for animated elements
- Implement proper image lazy loading
- Minimize JavaScript where possible
- Use CSS transforms instead of changing layout properties

## Next Steps

1. Deploy to staging environment for final review
2. Conduct user testing sessions
3. Monitor performance metrics in production
4. Gather feedback and iterate on design