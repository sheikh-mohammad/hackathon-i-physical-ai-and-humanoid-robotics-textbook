import React, { useState } from 'react';
import { ColorPaletteProvider } from '../components/ColorPaletteProvider';
import ThemeToggleController from '../components/ThemeToggleController';
import ThemePreferenceManager from '../components/ThemePreferenceManager';
import IndustrialThemeManager from '../components/IndustrialThemeManager';
import AccessibilityThemeValidator from '../components/AccessibilityThemeValidator';
import HeroSection from '../components/HeroSection';
import ModuleCard from '../components/ModuleCard';
import TechStackBadge from '../components/TechStackBadge';
import NavigationPath from '../components/NavigationPath';
import FooterResources from '../components/FooterResources';
import RobotJointElement from '../components/RobotJointElement';
import MechIcon from '../components/MechIcon';
import CircuitPathwayRenderer from '../components/CircuitPathwayRenderer';
import BlueprintRenderer from '../components/BlueprintRenderer';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';

/**
 * RoboCraftHomepage Component
 * Main page component for the RoboCraft holographic homepage
 */
const RoboCraftHomepage = () => {
  const [modules] = useState([
    {
      id: 1,
      title: "Introduction to Robotics",
      description: "Learn the fundamentals of robotics including kinematics, dynamics, and control systems.",
      icon: "gear",
      duration: "3-4 hours",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "ROS 2 Development",
      description: "Master ROS 2 concepts, nodes, topics, services, and message passing.",
      icon: "circuit",
      duration: "4-5 hours",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "NVIDIA Isaac Integration",
      description: "Integrate NVIDIA Isaac for perception, planning, and control in robotics.",
      icon: "engine",
      duration: "5-6 hours",
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Gazebo Simulation",
      description: "Create realistic robot simulations with physics engines and sensor models.",
      icon: "sensor",
      duration: "4-5 hours",
      difficulty: "Intermediate"
    }
  ]);

  const navigationItems = [
    { label: "Home", href: "/", icon: "robot" },
    { label: "Courses", href: "/courses", icon: "gear" },
    { label: "Documentation", href: "robocraft/docs", icon: "bolt" },
    { label: "Community", href: "/community", icon: "sensor", cta: "New" }
  ];

  const resources = [
    { label: "Getting Started Guide", href: "/guide", icon: "bolt" },
    { label: "API Documentation", href: "/api", icon: "circuit" },
    { label: "Tutorials", href: "/tutorials", icon: "gear" },
    { label: "Examples", href: "/examples", icon: "engine" }
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com", icon: "circuit" },
    { label: "Discord", href: "https://discord.com", icon: "sensor" },
    { label: "Forum", href: "https://forum.example.com", icon: "bolt" }
  ];

  const techStack = [
    { tech: "ROS 2", icon: "circuit" },
    { tech: "NVIDIA Isaac", icon: "engine" },
    { tech: "Gazebo", icon: "sensor" },
    { tech: "Python", icon: "bolt" },
    { tech: "C++", icon: "gear" }
  ];

  return (
    <ColorPaletteProvider>
      <ThemePreferenceManager />
      <IndustrialThemeManager>
        <AccessibilityThemeValidator>
          <div className={`${styles.darkTheme} ${colorStyles.bgSteelDark}`} style={{ minHeight: '100vh', position: 'relative' }}>
            {/* Background decorative elements */}
            <div style={{ position: 'fixed', top: '10%', left: '5%', opacity: 0.1, zIndex: 0 }}>
              <RobotJointElement size="large" animate={true} />
            </div>
            <div style={{ position: 'fixed', top: '20%', right: '10%', opacity: 0.1, zIndex: 0 }}>
              <MechIcon type="circuit" size="large" animate={true} />
            </div>
            <div style={{ position: 'fixed', bottom: '15%', left: '15%', opacity: 0.1, zIndex: 0 }}>
              <BlueprintRenderer type="diagram" animate={true} />
            </div>

            {/* Main content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header with theme toggle */}
              <header style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <ThemeToggleController size="large" />
              </header>

              {/* Hero Section */}
              <main style={{ padding: '0 2rem 2rem' }}>
                <HeroSection
                  title="RoboCraft"
                  subtitle="Physical AI & Humanoid Robotics Textbook"
                  description="Master the art of building intelligent humanoid robots with our comprehensive guide covering ROS 2, NVIDIA Isaac, Gazebo simulation, and advanced AI integration."
                  ctaText="Start Learning"
                  onCtaClick={() => alert('Starting the learning journey!')}
                />

                {/* Tech Stack Badges */}
                <div style={{ margin: '2rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {techStack.map((tech, index) => (
                    <TechStackBadge
                      key={index}
                      tech={tech.tech}
                      icon={tech.icon}
                      color="copper"
                    />
                  ))}
                </div>

                {/* Navigation Path */}
                <div style={{ margin: '2rem 0' }}>
                  <NavigationPath items={navigationItems} orientation="horizontal" />
                </div>

                {/* Module Cards */}
                <div style={{ margin: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  {modules.map(module => (
                    <ModuleCard
                      key={module.id}
                      title={module.title}
                      description={module.description}
                      icon={module.icon}
                      number={module.id}
                      duration={module.duration}
                      difficulty={module.difficulty}
                      onClick={() => alert(`Opening module ${module.id}: ${module.title}`)}
                    />
                  ))}
                </div>
              </main>

              {/* Footer */}
              <footer style={{ marginTop: '3rem' }}>
                <FooterResources
                  resources={resources}
                  socialLinks={socialLinks}
                />
              </footer>
            </div>
          </div>
        </AccessibilityThemeValidator>
      </IndustrialThemeManager>
    </ColorPaletteProvider>
  );
};

export default RoboCraftHomepage;