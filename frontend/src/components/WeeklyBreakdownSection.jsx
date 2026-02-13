import React from 'react';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/colors.module.css';

/**
 * WeeklyBreakdownSection Component
 * Displays weekly breakdown of the course from COURSE_DETAILS.md
 */
const WeeklyBreakdownSection = () => {
  const weeklyBreakdown = [
    {
      weeks: "Weeks 1-2",
      title: "Introduction to Physical AI",
      topics: [
        "Foundations of Physical AI and embodied intelligence",
        "From digital AI to robots that understand physical laws",
        "Overview of humanoid robotics landscape",
        "Sensor systems: LIDAR, cameras, IMUs, force/torque sensors"
      ]
    },
    {
      weeks: "Weeks 3-5",
      title: "ROS 2 Fundamentals",
      topics: [
        "ROS 2 architecture and core concepts",
        "Nodes, topics, services, and actions",
        "Building ROS 2 packages with Python",
        "Launch files and parameter management"
      ]
    },
    {
      weeks: "Weeks 6-7",
      title: "Robot Simulation with Gazebo",
      topics: [
        "Gazebo simulation environment setup",
        "URDF and SDF robot description formats",
        "Physics simulation and sensor simulation",
        "Introduction to Unity for robot visualization"
      ]
    },
    {
      weeks: "Weeks 8-10",
      title: "NVIDIA Isaac Platform",
      topics: [
        "NVIDIA Isaac SDK and Isaac Sim",
        "AI-powered perception and manipulation",
        "Reinforcement learning for robot control",
        "Sim-to-real transfer techniques"
      ]
    },
    {
      weeks: "Weeks 11-12",
      title: "Humanoid Robot Development",
      topics: [
        "Humanoid robot kinematics and dynamics",
        "Bipedal locomotion and balance control",
        "Manipulation and grasping with humanoid hands",
        "Natural human-robot interaction design"
      ]
    },
    {
      weeks: "Week 13",
      title: "Conversational Robotics",
      topics: [
        "Integrating GPT models for conversational AI in robots",
        "Speech recognition and natural language understanding",
        "Multi-modal interaction: speech, gesture, vision"
      ]
    }
  ];

  return (
    <section
      className={styles.container}
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#0f1419'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Weekly Breakdown
        </h2>
        <p className={`${styles.bodyText} ${colorStyles.textPrimary}`} style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto' }}>
          A structured 13-week journey through Physical AI and Humanoid Robotics
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {weeklyBreakdown.map((week, index) => (
          <div
            key={index}
            className={styles.card}
            style={{
              marginBottom: '2rem',
              padding: '2rem',
              borderLeft: '4px solid #f97316'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 className={`${styles.headline} ${colorStyles.textAccentPrimary}`} style={{ fontSize: '1.5rem', margin: 0 }}>
                {week.title}
              </h3>
              <span className={`${styles.technicalText} ${colorStyles.textAccentSecondary}`} style={{ fontSize: '0.875rem' }}>
                {week.weeks}
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {week.topics.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className={styles.bodyText}
                  style={{
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative',
                    color: '#94a3b8'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#f97316'
                  }}>
                    •
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyBreakdownSection;
