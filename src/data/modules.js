/**
 * Course Modules Data for RoboCraft Homepage
 * Based on existing content from COURSE_DETAILS.md and project_docs/course_structure
 */

export const courseModules = [
  {
    id: 1,
    title: "Introduction to Physical AI",
    description: "Learn the fundamentals of Physical AI systems, including perception, planning, and actuation.",
    duration: "2-3 weeks",
    difficulty: "Beginner",
    prerequisites: [],
    category: "Core Concepts",
    status: "available",
    icon: "ai",
    features: ["AI fundamentals", "System architecture", "Safety protocols"],
    learningOutcomes: [
      "Understand Physical AI concepts",
      "Design basic AI systems",
      "Implement safety measures"
    ],
    hardwareRequirements: ["Computer with Ubuntu 20.04+", "Simulation environment"]
  },
  {
    id: 2,
    title: "ROS 2 Development",
    description: "Master ROS 2 concepts, nodes, topics, services, and message passing for robotics applications.",
    duration: "3-4 weeks",
    difficulty: "Intermediate",
    prerequisites: ["Basic Python", "Linux command line"],
    category: "Core Systems",
    status: "available",
    icon: "circuit",
    features: ["Node management", "Topic communication", "Service calls", "Action servers"],
    learningOutcomes: [
      "Design distributed robotic systems",
      "Implement communication patterns",
      "Deploy ROS 2 applications"
    ],
    hardwareRequirements: ["Computer with Ubuntu 20.04+", "Robot platform (real or simulated)"]
  },
  {
    id: 3,
    title: "NVIDIA Isaac Integration",
    description: "Integrate NVIDIA Isaac for perception, planning, and control in robotics applications.",
    duration: "4-5 weeks",
    difficulty: "Advanced",
    prerequisites: ["ROS 2 Development", "Basic CUDA knowledge"],
    category: "Specialized Systems",
    status: "available",
    icon: "gpu",
    features: ["Perception pipelines", "AI inference", "Motion planning", "Simulation"],
    learningOutcomes: [
      "Implement perception systems",
      "Deploy AI models on robots",
      "Create simulation environments"
    ],
    hardwareRequirements: ["NVIDIA GPU (RTX 3060 or equivalent)", "Isaac compatible robot"]
  },
  {
    id: 4,
    title: "Gazebo Simulation",
    description: "Create realistic robot simulations with physics engines and sensor models.",
    duration: "3-4 weeks",
    difficulty: "Intermediate",
    prerequisites: ["ROS 2 Development", "Basic Physics"],
    category: "Simulation",
    status: "available",
    icon: "sensor",
    features: ["Physics modeling", "Sensor simulation", "World creation", "Plugin development"],
    learningOutcomes: [
      "Develop realistic simulations",
      "Test algorithms safely",
      "Validate robot behaviors"
    ],
    hardwareRequirements: ["Computer with Ubuntu 20.04+", "OpenGL compatible GPU"]
  },
  {
    id: 5,
    title: "Humanoid Control Systems",
    description: "Build control systems for humanoid robots including balance and locomotion.",
    duration: "5-6 weeks",
    difficulty: "Expert",
    prerequisites: ["ROS 2 Development", "Control Theory"],
    category: "Advanced Robotics",
    status: "available",
    icon: "robot",
    features: ["Balance control", "Walking algorithms", "Motion planning", "Safety systems"],
    learningOutcomes: [
      "Implement humanoid controllers",
      "Design stable walking patterns",
      "Ensure safety protocols"
    ],
    hardwareRequirements: ["Humanoid robot platform", "Real-time capable computer"]
  },
  {
    id: 6,
    title: "AI Perception & Planning",
    description: "Implement AI-powered perception and planning for autonomous robot navigation.",
    duration: "4-5 weeks",
    difficulty: "Advanced",
    prerequisites: ["ROS 2 Development", "Machine Learning Basics"],
    category: "AI Systems",
    status: "available",
    icon: "brain",
    features: ["Object detection", "Path planning", "SLAM", "Behavior trees"],
    learningOutcomes: [
      "Build perception systems",
      "Create navigation planners",
      "Implement decision making"
    ],
    hardwareRequirements: ["Computer with Ubuntu 20.04+", "Camera sensors", "LIDAR (optional)"]
  }
];

// Core modules that should be highlighted
export const coreModules = [1, 2, 6]; // Introduction to Physical AI, ROS 2 Development, AI Perception & Planning