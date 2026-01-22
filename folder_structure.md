# Docusaurus Project Folder Structure

Based on the course modules specified in the document:

## Module 1: The Robotic Nervous System (ROS 2)
- Part: The Robotic Nervous System (ROS 2)
  - Chapter: ROS 2 Architecture and Core Concepts
    - Lesson: ROS 2 vs ROS 1 Differences
    - Lesson: DDS Communication Layer
    - Lesson: Client Library Implementations
    - Lesson: Quality of Service Settings
  - Chapter: Nodes, Topics, Services, and Actions
    - Lesson: Node Creation and Management
    - Lesson: Topic-Based Communication
    - Lesson: Service-Based Communication
    - Lesson: Action-Based Communication
  - Chapter: Building ROS 2 Packages with Python
    - Lesson: Package Structure and Organization
    - Lesson: Creating Publishers and Subscribers
    - Lesson: Developing Services and Clients
    - Lesson: Testing and Debugging Packages
  - Chapter: Launch Files and Parameter Management
    - Lesson: XML Launch Files
    - Lesson: Python Launch Files
    - Lesson: Parameter Declaration and Handling
    - Lesson: Configuration Management
  - Chapter: Bridging Python Agents to ROS Controllers
    - Lesson: Agent Integration Patterns
    - Lesson: Using rclpy for Python Integration
    - Lesson: Message Passing Between Systems
    - Lesson: Real-Time Control Considerations
  - Chapter: Understanding URDF for Humanoids
    - Lesson: URDF Basics and Syntax
    - Lesson: Joint and Link Definitions
    - Lesson: Visual and Collision Properties
    - Lesson: Humanoid-Specific URDF Elements

## Module 2: The Digital Twin (Gazebo & Unity)
- Part: The Digital Twin (Gazebo & Unity)
  - Chapter: Gazebo Simulation Environment Setup
    - Lesson: Installing and Configuring Gazebo
    - Lesson: Basic World Creation
    - Lesson: Model Import and Placement
    - Lesson: Simulation Parameters and Settings
  - Chapter: URDF and SDF Robot Description Formats
    - Lesson: Converting URDF to SDF
    - Lesson: SDF World Format
    - Lesson: Model Customization in SDF
    - Lesson: Physics Properties in SDF
  - Chapter: Physics Simulation and Environment Building
    - Lesson: Physics Engine Configuration
    - Lesson: Gravity and Environmental Forces
    - Lesson: Collision Detection and Response
    - Lesson: Contact Sensors and Feedback
  - Chapter: High-Fidelity Rendering and Human-Robot Interaction
    - Lesson: Unity Setup for Robotics Simulation
    - Lesson: Material and Texture Mapping
    - Lesson: Lighting and Environmental Effects
    - Lesson: Realistic Physics Simulation
  - Chapter: Simulating Sensors
    - Lesson: Simulating LIDAR Sensors
    - Lesson: Camera and Depth Sensor Simulation
    - Lesson: IMU Sensor Simulation
    - Lesson: Force/Torque Sensor Simulation

## Module 3: The AI-Robot Brain (NVIDIA Isaac™)
- Part: The AI-Robot Brain (NVIDIA Isaac™)
  - Chapter: NVIDIA Isaac SDK and Isaac Sim
    - Lesson: Isaac SDK Installation and Setup
    - Lesson: Isaac Sim Overview
    - Lesson: Isaac Apps Framework
    - Lesson: Isaac Gem Library
  - Chapter: Photorealistic Simulation and Synthetic Data Generation
    - Lesson: USD Asset Creation
    - Lesson: Material and Lighting Systems
    - Lesson: Synthetic Data Pipeline
    - Lesson: Domain Randomization Techniques
  - Chapter: Isaac ROS: Hardware-accelerated VSLAM
    - Lesson: Visual SLAM Principles
    - Lesson: Isaac ROS Packages
    - Lesson: GPU Acceleration Benefits
    - Lesson: Performance Optimization
  - Chapter: Nav2: Path Planning for Bipedal Humanoid Movement
    - Lesson: Nav2 Architecture
    - Lesson: Costmap Configuration
    - Lesson: Path Planning Algorithms
    - Lesson: Bipedal Navigation Challenges
  - Chapter: AI-Powered Perception and Manipulation
    - Lesson: Object Detection in Robotics
    - Lesson: Grasping and Manipulation Planning
    - Lesson: Multi-Modal Perception Fusion
    - Lesson: Real-Time Inference Optimization

## Module 4: Vision-Language-Action (VLA)
- Part: Vision-Language-Action (VLA)
  - Chapter: Introduction to Vision-Language-Action Framework
    - Lesson: VLA Concept and Architecture
    - Lesson: Multi-Modal Integration
    - Lesson: Real-Time Processing Requirements
    - Lesson: Safety and Error Handling
  - Chapter: Voice-to-Action: Using OpenAI Whisper
    - Lesson: Whisper Model Integration
    - Lesson: Audio Preprocessing
    - Lesson: Noise Reduction Techniques
    - Lesson: Real-Time Voice Processing
  - Chapter: Cognitive Planning: Using LLMs
    - Lesson: LLM Integration in Robotics
    - Lesson: Prompt Engineering for Robotics
    - Lesson: Reasoning and Planning Pipelines
    - Lesson: Context Management
  - Chapter: Capstone Project: The Autonomous Humanoid
    - Lesson: System Architecture Design
    - Lesson: Voice Command Processing
    - Lesson: Path Planning and Obstacle Navigation
    - Lesson: Object Identification with Computer Vision
    - Lesson: Manipulation and Action Execution

## Additional Modules Based on Course Structure
- Part: Introduction to Physical AI
  - Chapter: Foundations of Physical AI and Embodied Intelligence
    - Lesson: What is Physical AI?
    - Lesson: Embodied Intelligence Principles
    - Lesson: Differences Between Digital and Physical AI
    - Lesson: Historical Context and Evolution
  - Chapter: From Digital AI to Robots Understanding Physical Laws
    - Lesson: Digital AI Limitations
    - Lesson: Physical Laws and Constraints
    - Lesson: Physics Simulation Basics
    - Lesson: Real-World Application Challenges
  - Chapter: Overview of Humanoid Robotics Landscape
    - Lesson: Current State of Humanoid Robots
    - Lesson: Major Players and Technologies
    - Lesson: Use Cases and Applications
    - Lesson: Future Trends and Predictions
  - Chapter: Sensor Systems: LIDAR, Cameras, IMUs, Force/Torque Sensors
    - Lesson: LIDAR Sensors and Applications
    - Lesson: Camera Systems and Computer Vision
    - Lesson: IMU Sensors and Balance Systems
    - Lesson: Force/Torque Sensors and Feedback

- Part: Humanoid Robot Development
  - Chapter: Humanoid Robot Kinematics and Dynamics
    - Lesson: Forward and Inverse Kinematics
    - Lesson: Dynamic Modeling
    - Lesson: Center of Mass Calculations
    - Lesson: Stability Analysis
  - Chapter: Bipedal Locomotion and Balance Control
    - Lesson: Walking Gaits and Patterns
    - Lesson: Balance Control Algorithms
    - Lesson: Zero Moment Point (ZMP) Control
    - Lesson: Disturbance Recovery
  - Chapter: Manipulation and Grasping with Humanoid Hands
    - Lesson: Hand Kinematics
    - Lesson: Grasp Planning
    - Lesson: Force Control
    - Lesson: Dexterous Manipulation
  - Chapter: Natural Human-Robot Interaction Design
    - Lesson: Social Robotics Principles
    - Lesson: Gesture Recognition
    - Lesson: Emotional Expression
    - Lesson: Safety Considerations

- Part: Reinforcement Learning and Sim-to-Real Transfer
  - Chapter: Reinforcement Learning for Robot Control
    - Lesson: RL Fundamentals for Robotics
    - Lesson: Reward Function Design
    - Lesson: Training in Simulation
    - Lesson: Policy Transfer to Real Robots
  - Chapter: Sim-to-Real Transfer Techniques
    - Lesson: Domain Adaptation Methods
    - Lesson: Reality Gap Minimization
    - Lesson: Calibration and Fine-Tuning
    - Lesson: Validation and Testing Strategies

- Part: Conversational Robotics
  - Chapter: Integrating GPT Models for Conversational AI
    - Lesson: GPT Integration in Robotics
    - Lesson: Context Management
    - Lesson: Prompt Engineering for Robotics
    - Lesson: Safety and Ethical Considerations
  - Chapter: Speech Recognition and Natural Language Understanding
    - Lesson: ASR Systems for Robotics
    - Lesson: Intent Classification
    - Lesson: Entity Extraction
    - Lesson: Dialogue Management
  - Chapter: Multi-Modal Interaction: Speech, Gesture, Vision
    - Lesson: Multimodal Fusion Techniques
    - Lesson: Cross-Modal Attention
    - Lesson: Consistent Behavior Generation
    - Lesson: User Experience Design

- Part: Hardware Requirements and Setup
  - Chapter: Workstation Requirements and Setup
    - Lesson: GPU Requirements and Selection
    - Lesson: CPU and Memory Specifications
    - Lesson: OS Installation and Configuration
    - Lesson: Driver Installation and Optimization
  - Chapter: Edge Computing Kits
    - Lesson: Jetson Orin Nano/NX Setup
    - Lesson: Development Environment Configuration
    - Lesson: Resource Management
    - Lesson: Deployment Strategies
  - Chapter: Sensor Integration
    - Lesson: RealSense Camera Setup
    - Lesson: IMU Calibration and Integration
    - Lesson: Multi-Sensor Synchronization
    - Lesson: Data Fusion Techniques
  - Chapter: Robot Platform Selection and Setup
    - Lesson: Robot Selection Criteria
    - Lesson: Unitree Go2/Quadruped Setup
    - Lesson: Unitree G1/Humanoid Setup
    - Lesson: Alternative Platforms Comparison

---

## Docusaurus Folder Structure

```markdown
docs/
├── intro.md
├── getting-started/
│   ├── index.md
│   ├── what-is-physical-ai.md
│   ├── course-overview.md
│   └── hardware-requirements/
│       ├── workstation-setup.md
│       ├── edge-kits.md
│       └── robot-platforms.md
├── module-1-robotic-nervous-system/
│   ├── index.md
│   ├── ros2-architecture-core-concepts/
│   │   ├── ros2-vs-ros1.md
│   │   ├── dds-communication.md
│   │   ├── client-libraries.md
│   │   └── qos-settings.md
│   ├── nodes-topics-services-actions/
│   │   ├── node-creation.md
│   │   ├── topic-communication.md
│   │   ├── service-communication.md
│   │   └── action-communication.md
│   ├── building-ros2-packages-python/
│   │   ├── package-structure.md
│   │   ├── publishers-subscribers.md
│   │   ├── services-clients.md
│   │   └── testing-debugging.md
│   ├── launch-files-parameter-management/
│   │   ├── xml-launch-files.md
│   │   ├── python-launch-files.md
│   │   ├── parameter-declaration.md
│   │   └── configuration.md
│   ├── bridging-python-agents-ros/
│   │   ├── agent-integration.md
│   │   ├── rclpy-integration.md
│   │   ├── message-passing.md
│   │   └── real-time-control.md
│   └── understanding-urdf-humanoids/
│       ├── urdf-basics.md
│       ├── joint-link-definitions.md
│       ├── visual-collision-properties.md
│       └── humanoid-urdf-elements.md
├── module-2-digital-twin/
│   ├── index.md
│   ├── gazebo-simulation-setup/
│   │   ├── installing-configuring-gazebo.md
│   │   ├── basic-world-creation.md
│   │   ├── model-import-placement.md
│   │   └── simulation-parameters.md
│   ├── urdf-sdf-formats/
│   │   ├── converting-urdf-sdf.md
│   │   ├── sdf-world-format.md
│   │   ├── model-customization-sdf.md
│   │   └── physics-properties-sdf.md
│   ├── physics-simulation-environment/
│   │   ├── physics-engine-config.md
│   │   ├── gravity-environmental-forces.md
│   │   ├── collision-detection-response.md
│   │   └── contact-sensors-feedback.md
│   ├── high-fidelity-rendering-hri/
│   │   ├── unity-setup-robotics.md
│   │   ├── material-texture-mapping.md
│   │   ├── lighting-environmental-effects.md
│   │   └── realistic-physics-simulation.md
│   └── simulating-sensors/
│       ├── simulating-lidar.md
│       ├── camera-depth-simulation.md
│       ├── imu-sensor-simulation.md
│       └── force-torque-simulation.md
├── module-3-ai-robot-brain/
│   ├── index.md
│   ├── nvidia-isaac-sdk/
│   │   ├── isaac-sdk-setup.md
│   │   ├── isaac-sim-overview.md
│   │   ├── isaac-apps-framework.md
│   │   └── isaac-gem-library.md
│   ├── photorealistic-simulation/
│   │   ├── usd-asset-creation.md
│   │   ├── material-lighting-systems.md
│   │   ├── synthetic-data-pipeline.md
│   │   └── domain-randomization.md
│   ├── isaac-ros-vslam/
│   │   ├── visual-slam-principles.md
│   │   ├── isaac-ros-packages.md
│   │   ├── gpu-acceleration-benefits.md
│   │   └── performance-optimization.md
│   ├── nav2-path-planning/
│   │   ├── nav2-architecture.md
│   │   ├── costmap-configuration.md
│   │   ├── path-planning-algorithms.md
│   │   └── bipedal-navigation-challenges.md
│   └── ai-perception-manipulation/
│       ├── object-detection-robotics.md
│       ├── grasping-manipulation-planning.md
│       ├── multi-modal-perception-fusion.md
│       └── real-time-inference-optimization.md
├── module-4-vision-language-action/
│   ├── index.md
│   ├── vla-framework-introduction/
│   │   ├── vla-concept-architecture.md
│   │   ├── multi-modal-integration.md
│   │   ├── real-time-processing-requirements.md
│   │   └── safety-error-handling.md
│   ├── voice-to-action-whisper/
│   │   ├── whisper-model-integration.md
│   │   ├── audio-preprocessing.md
│   │   ├── noise-reduction-techniques.md
│   │   └── real-time-voice-processing.md
│   ├── cognitive-planning-llms/
│   │   ├── llm-integration-robotics.md
│   │   ├── prompt-engineering-robotics.md
│   │   ├── reasoning-planning-pipelines.md
│   │   └── context-management.md
│   └── capstone-autonomous-humanoid/
│       ├── system-architecture-design.md
│       ├── voice-command-processing.md
│       ├── path-planning-obstacle-navigation.md
│       ├── object-identification-computer-vision.md
│       └── manipulation-action-execution.md
├── module-0-introduction-physical-ai/
│   ├── index.md
│   ├── foundations-physical-ai/
│   │   ├── what-is-physical-ai.md
│   │   ├── embodied-intelligence-principles.md
│   │   ├── digital-vs-physical-ai.md
│   │   └── historical-context-evolution.md
│   ├── from-digital-ai-physical/
│   │   ├── digital-ai-limitations.md
│   │   ├── physical-laws-constraints.md
│   │   ├── physics-simulation-basics.md
│   │   └── real-world-application-challenges.md
│   ├── humanoid-robotics-landscape/
│   │   ├── current-state-humanoid-robots.md
│   │   ├── major-players-technologies.md
│   │   ├── use-cases-applications.md
│   │   └── future-trends-predictions.md
│   └── sensor-systems/
│       ├── lidar-sensors-applications.md
│       ├── camera-systems-computer-vision.md
│       ├── imu-sensors-balance.md
│       └── force-torque-sensors-feedback.md
├── module-5-humanoid-robot-development/
│   ├── index.md
│   ├── humanoid-kinematics-dynamics/
│   │   ├── forward-inverse-kinematics.md
│   │   ├── dynamic-modeling.md
│   │   ├── center-mass-calculations.md
│   │   └── stability-analysis.md
│   ├── bipedal-locomotion-balance/
│   │   ├── walking-gaits-patterns.md
│   │   ├── balance-control-algorithms.md
│   │   ├── zero-moment-point-control.md
│   │   └── disturbance-recovery.md
│   ├── manipulation-grasping/
│   │   ├── hand-kinematics.md
│   │   ├── grasp-planning.md
│   │   ├── force-control.md
│   │   └── dexterous-manipulation.md
│   └── human-robot-interaction/
│       ├── social-robotics-principles.md
│       ├── gesture-recognition.md
│       ├── emotional-expression.md
│       └── safety-considerations.md
├── module-6-reinforcement-learning/
│   ├── index.md
│   ├── rl-robot-control/
│   │   ├── rl-fundamentals-robotics.md
│   │   ├── reward-function-design.md
│   │   ├── training-simulation.md
│   │   └── policy-transfer-real-robots.md
│   └── sim-to-real-transfer/
│       ├── domain-adaptation-methods.md
│       ├── reality-gap-minimization.md
│       ├── calibration-fine-tuning.md
│       └── validation-testing-strategies.md
├── module-7-conversational-robotics/
│   ├── index.md
│   ├── gpt-conversational-ai/
│   │   ├── gpt-integration-robotics.md
│   │   ├── context-management.md
│   │   ├── prompt-engineering-robotics.md
│   │   └── safety-ethical-considerations.md
│   ├── speech-recognition-nlu/
│   │   ├── asr-systems-robotics.md
│   │   ├── intent-classification.md
│   │   ├── entity-extraction.md
│   │   └── dialogue-management.md
│   └── multi-modal-interaction/
│       ├── multimodal-fusion-techniques.md
│       ├── cross-modal-attention.md
│       ├── consistent-behavior-generation.md
│       └── user-experience-design.md
├── module-8-hardware-requirements/
│   ├── index.md
│   ├── workstation-requirements/
│   │   ├── gpu-requirements-selection.md
│   │   ├── cpu-memory-specifications.md
│   │   ├── os-installation-configuration.md
│   │   └── driver-installation-optimization.md
│   ├── edge-computing-kits/
│   │   ├── jetson-setup.md
│   │   ├── development-environment.md
│   │   ├── resource-management.md
│   │   └── deployment-strategies.md
│   ├── sensor-integration/
│   │   ├── realsense-camera-setup.md
│   │   ├── imu-calibration-integration.md
│   │   ├── multi-sensor-synchronization.md
│   │   └── data-fusion-techniques.md
│   └── robot-platform-selection/
│       ├── robot-selection-criteria.md
│       ├── unitree-go2-setup.md
│       ├── unitree-g1-setup.md
│       └── alternative-platforms-comparison.md
└── appendix/
    ├── glossary.md
    ├── troubleshooting.md
    ├── further-reading.md
    └── faq.md
```