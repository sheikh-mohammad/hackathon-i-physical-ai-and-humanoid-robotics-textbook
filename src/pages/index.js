import React, { useState, useEffect } from 'react';
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import GlassContainer from '../components/GlassContainer/GlassContainer';
import HolographicCard from '../components/HolographicCard/HolographicCard';
import ColorPaletteProvider from '../components/ColorPaletteProvider/ColorPaletteProvider';
import FloatingElement from '../components/FloatingElement/FloatingElement';
import TechIcon from '../components/TechIcon/TechIcon';
import AnimationController from '../components/AnimationController/AnimationController';
import MarkdownRenderer from '../components/MarkdownRenderer/MarkdownRenderer';
import { AccessibilityProvider } from '../components/AccessibilityProvider/AccessibilityProvider';
import styles from './index.module.css';

// Import CSS modules for styling
import '../css/color-palette.module.css';
import '../css/holographic-styles.module.css';
import '../css/animations.module.css';

// Sample content for demonstration - in a real implementation, this would come from the markdown file
const courseDetailsContent = `# Course Details: Physical AI and Humanoid Robotics

## Course Overview
This comprehensive course covers the fundamentals and advanced concepts of Physical AI and Humanoid Robotics. Students will learn about the intersection of artificial intelligence and robotics, focusing on embodied cognition and real-world interaction.

## Learning Objectives
- Understand the principles of Physical AI
- Learn about humanoid robot design and mechanics
- Master AI algorithms for robotic control
- Explore sensor integration and perception systems
- Develop skills in robot programming and simulation

## Course Modules
### Module 1: Introduction to Physical AI
- Definition and scope of Physical AI
- Historical context and evolution
- Current applications and future trends

### Module 2: Humanoid Robot Anatomy
- Mechanical design principles
- Actuator systems and control
- Sensor integration and feedback loops
- Power management and efficiency`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text-primary">
          RoboCraft - Holographic Tech Garden
        </Heading>
        <p className="hero__subtitle text-secondary">Physical AI Humanoid Robotics Textbook with Holographic Aesthetic</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <AccessibilityProvider>
      <ColorPaletteProvider>
        <Layout
          title={`RoboCraft - Holographic Tech Garden`}
          description="Physical AI Humanoid Robotics Textbook homepage with holographic aesthetic">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <HomepageHeader />
          <main id="main-content">
            <div className={styles.mainContainer}>
              {/* Floating elements and tech icons */}
              <AnimationController animationComplexity="simple" animationType="float">
                <FloatingElement
                  type="botanical"
                  size="medium"
                  className={styles.floatingBotanical1}
                  style={{ position: 'absolute', top: '15%', left: '10%' }}
                />
              </AnimationController>

              <AnimationController animationComplexity="simple" animationType="float">
                <TechIcon
                  type="circuit"
                  size="medium"
                  className={styles.techIcon1}
                  style={{ position: 'absolute', top: '25%', right: '15%' }}
                />
              </AnimationController>

              <AnimationController animationComplexity="complex" animationType="complexFloat">
                <FloatingElement
                  type="tech"
                  size="large"
                  className={styles.floatingTech1}
                  style={{ position: 'absolute', bottom: '20%', left: '20%' }}
                />
              </AnimationController>

              {/* Main content area with glass UI elements */}
              <GlassContainer className={`${styles.mainContent} bg-medium`}>
                <HolographicCard title="AI & Robotics Innovation" variant="highlight">
                  <p>Explore the cutting-edge world of physical AI and humanoid robotics.</p>
                </HolographicCard>

                <HolographicCard title="Learning Resources" variant="floating">
                  <p>Access comprehensive textbooks and learning materials for AI and robotics enthusiasts.</p>
                </HolographicCard>

                <HolographicCard title="Course Details" variant="default">
                  <MarkdownRenderer content={courseDetailsContent} sourceFile="COURSE_DETAILS.md" />
                </HolographicCard>

                <HolographicCard title="Hackathon Events">
                  <p>Participate in our exciting hackathons focused on AI and humanoid robotics challenges.</p>
                </HolographicCard>
              </GlassContainer>

              {/* Ambient particle effects container */}
              <div className={styles.particleContainer}>
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className={clsx('particle', styles.particle)}
                    style={{
                      '--end-x': `${Math.random() * 100 - 50}px`,
                      '--end-y': `${Math.random() * 100 - 50}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      backgroundColor: Math.random() > 0.5 ? 'var(--holographic-blue)' : 'var(--holographic-teal)'
                    }}
                  />
                ))}
              </div>
            </div>
          </main>
        </Layout>
      </ColorPaletteProvider>
    </AccessibilityProvider>
  );
}
