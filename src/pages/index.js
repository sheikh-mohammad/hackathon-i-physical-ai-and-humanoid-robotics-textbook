import React from 'react';
import IndustrialHomepage from '../components/IndustrialHomepage';
import HeroSection from '../components/HeroSection';
import ModulesGrid from '../components/ModulesGrid';
import FeaturesSection from '../components/FeaturesSection';
import HardwareTiersSection from '../components/HardwareTiersSection';
import IndustrialCTA from '../components/IndustrialCTA';
import FloatingLabel from '../components/FloatingLabel';
import { courseModules } from '../data/modules';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * RoboCraftHomepage Component
 * Main page component for the RoboCraft industrial-themed homepage
 */
const RoboCraftHomepage = () => {
  const handleModuleClick = (module) => {
    alert(`Opening module: ${module.title}`);
  };

  const handleTierSelect = (tier) => {
    alert(`Selected tier: ${tier.name}`);
  };

  const handleCTAClick = () => {
    alert('Starting the learning journey!');
  };

  return (
    <IndustrialHomepage>
      {/* Floating labels for industrial design motif */}
      <FloatingLabel text="SYSTEM ACTIVE" position="top-left" />
      <FloatingLabel text="ROBOCRAFT v2.0" position="top-right" />

      {/* Hero Section */}
      <HeroSection
        title="RoboCraft"
        subtitle="Physical AI & Humanoid Robotics Platform"
        description="Build intelligent humanoid robots with our comprehensive platform covering Physical AI, ROS 2, NVIDIA Isaac, Gazebo simulation, and advanced AI integration. Free forever. No lock-in."
        ctaText="Start Building"
        secondaryCtaText="View Modules"
        onCtaClick={handleCTAClick}
        onSecondaryCtaClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      />

      {/* Features Section - Product Capabilities */}
      <FeaturesSection />

      {/* Modules Grid - Course Modules */}
      <ModulesGrid onModuleClick={handleModuleClick} />

      {/* Hardware Tiers Section */}
      <HardwareTiersSection onTierSelect={handleTierSelect} />

      {/* Final CTA Section */}
      <section style={{ textAlign: 'center', padding: '3rem 0', marginBottom: '2rem' }}>
        <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to Build Physical AI Systems?
        </h2>
        <p className={styles.bodyText} style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
          Join thousands of builders creating the future of robotics with our industrial-strength platform.
        </p>
        <IndustrialCTA
          text="Get Started Today"
          variant="primary"
          onClick={handleCTAClick}
          style={{ minWidth: '250px', padding: '1rem 2rem' }}
        />
      </section>
    </IndustrialHomepage>
  );
};

export default RoboCraftHomepage;