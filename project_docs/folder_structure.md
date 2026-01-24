# Folder Structure for Physical AI Humanoid and Robotics Textbook

```markdown
./ (current directory)
docs/
├── index.md
├── getting-started/
│   ├── index.md
│   ├── what-is-physical-ai.md
│   ├── course-overview.md
│   └── hardware-requirements/
│       ├── index.md
│       ├── workstation-requirements/
│       │   ├── index.md
│       │   ├── gpu-requirements-selection.md
│       │   ├── cpu-memory-specifications.md
│       │   ├── os-installation-configuration.md
│       │   └── driver-installation-optimization.md
│       ├── edge-computing-kits/
│       │   ├── index.md
│       │   ├── jetson-setup.md
│       │   ├── development-environment.md
│       │   ├── resource-management.md
│       │   └── deployment-strategies.md
│       ├── sensor-integration/
│       │   ├── index.md
│       │   ├── realsense-camera-setup.md
│       │   ├── imu-calibration-integration.md
│       │   ├── multi-sensor-synchronization.md
│       │   └── data-fusion-techniques.md
│       └── robot-platform-selection/
│           ├── index.md
│           ├── robot-selection-criteria.md
│           ├── unitree-go2-setup.md
│           ├── unitree-g1-setup.md
│           └── alternative-platforms-comparison.md
├── module-0-introduction-physical-ai/
│   ├── index.md
│   ├── foundations-physical-ai/
│   │   ├── index.md
│   │   ├── what-is-physical-ai.md
│   │   ├── embodied-intelligence-principles.md
│   │   ├── digital-vs-physical-ai.md
│   │   └── historical-context-evolution.md
│   ├── from-digital-ai-physical/
│   │   ├── index.md
│   │   ├── digital-ai-limitations.md
│   │   ├── physical-laws-constraints.md
│   │   ├── physics-simulation-basics.md
│   │   └── real-world-application-challenges.md
│   ├── humanoid-robotics-landscape/
│   │   ├── index.md
│   │   ├── current-state-humanoid-robots.md
│   │   ├── major-players-technologies.md
│   │   ├── use-cases-applications.md
│   │   └── future-trends-predictions.md
│   └── sensor-systems/
│       ├── index.md
│       ├── lidar-sensors-applications.md
│       ├── camera-systems-computer-vision.md
│       ├── imu-sensors-balance.md
│       └── force-torque-sensors-feedback.md
├── module-1-robotic-nervous-system/
│   ├── index.md
│   ├── ros2-architecture-core-concepts/
│   │   ├── index.md
│   │   ├── ros2-vs-ros1.md
│   │   ├── dds-communication.md
│   │   ├── client-libraries.md
│   │   └── qos-settings.md
│   ├── nodes-topics-services-actions/
│   │   ├── index.md
│   │   ├── node-creation.md
│   │   ├── topic-communication.md
│   │   ├── service-communication.md
│   │   └── action-communication.md
│   ├── building-ros2-packages-python/
│   │   ├── index.md
│   │   ├── package-structure.md
│   │   ├── publishers-subscribers.md
│   │   ├── services-clients.md
│   │   └── testing-debugging.md
│   ├── launch-files-parameter-management/
│   │   ├── index.md
│   │   ├── xml-launch-files.md
│   │   ├── python-launch-files.md
│   │   ├── parameter-declaration.md
│   │   └── configuration.md
│   ├── bridging-python-agents-ros/
│   │   ├── index.md
│   │   ├── agent-integration.md
│   │   ├── rclpy-integration.md
│   │   ├── message-passing.md
│   │   └── real-time-control.md
│   └── understanding-urdf-humanoids/
│       ├── index.md
│       ├── urdf-basics.md
│       ├── joint-link-definitions.md
│       ├── visual-collision-properties.md
│       └── humanoid-urdf-elements.md
├── module-2-digital-twin/
│   ├── index.md
│   ├── gazebo-simulation-setup/
│   │   ├── index.md
│   │   ├── installing-configuring-gazebo.md
│   │   ├── basic-world-creation.md
│   │   ├── model-import-placement.md
│   │   └── simulation-parameters.md
│   ├── urdf-sdf-formats/
│   │   ├── index.md
│   │   ├── converting-urdf-sdf.md
│   │   ├── sdf-world-format.md
│   │   ├── model-customization-sdf.md
│   │   └── physics-properties-sdf.md
│   ├── physics-simulation-environment/
│   │   ├── index.md
│   │   ├── physics-engine-config.md
│   │   ├── gravity-environmental-forces.md
│   │   ├── collision-detection-response.md
│   │   └── contact-sensors-feedback.md
│   ├── high-fidelity-rendering-hri/
│   │   ├── index.md
│   │   ├── unity-setup-robotics.md
│   │   ├── material-texture-mapping.md
│   │   ├── lighting-environmental-effects.md
│   │   └── realistic-physics-simulation.md
│   └── simulating-sensors/
│       ├── index.md
│       ├── simulating-lidar.md
│       ├── camera-depth-simulation.md
│       ├── imu-sensor-simulation.md
│       └── force-torque-simulation.md
├── module-3-ai-robot-brain/
│   ├── index.md
│   ├── nvidia-isaac-sdk/
│   │   ├── index.md
│   │   ├── isaac-sdk-setup.md
│   │   ├── isaac-sim-overview.md
│   │   ├── isaac-apps-framework.md
│   │   └── isaac-gem-library.md
│   ├── photorealistic-simulation/
│   │   ├── index.md
│   │   ├── usd-asset-creation.md
│   │   ├── material-lighting-systems.md
│   │   ├── synthetic-data-pipeline.md
│   │   └── domain-randomization.md
│   ├── isaac-ros-vslam/
│   │   ├── index.md
│   │   ├── visual-slam-principles.md
│   │   ├── isaac-ros-packages.md
│   │   ├── gpu-acceleration-benefits.md
│   │   └── performance-optimization.md
│   ├── nav2-path-planning/
│   │   ├── index.md
│   │   ├── nav2-architecture.md
│   │   ├── costmap-configuration.md
│   │   ├── path-planning-algorithms.md
│   │   └── bipedal-navigation-challenges.md
│   ├── ai-perception-manipulation/
│   │   ├── index.md
│   │   ├── object-detection-robotics.md
│   │   ├── grasping-manipulation-planning.md
│   │   ├── multi-modal-perception-fusion.md
│   │   └── real-time-inference-optimization.md
│   ├── reinforcement-learning-robot-control/
│   │   ├── index.md
│   │   ├── rl-fundamentals-robotics.md
│   │   ├── reward-function-design.md
│   │   ├── training-simulation.md
│   │   └── policy-transfer-real-robots.md
│   └── sim-to-real-transfer/
│       ├── index.md
│       ├── domain-adaptation-methods.md
│       ├── reality-gap-minimization.md
│       ├── calibration-fine-tuning.md
│       └── validation-testing-strategies.md
├── module-4-vision-language-action/
│   ├── index.md
│   ├── vla-framework-introduction/
│   │   ├── index.md
│   │   ├── vla-concept-architecture.md
│   │   ├── multi-modal-integration.md
│   │   ├── real-time-processing-requirements.md
│   │   └── safety-error-handling.md
│   ├── voice-to-action-whisper/
│   │   ├── index.md
│   │   ├── whisper-model-integration.md
│   │   ├── audio-preprocessing.md
│   │   ├── noise-reduction-techniques.md
│   │   └── real-time-voice-processing.md
│   ├── cognitive-planning-llms/
│   │   ├── index.md
│   │   ├── llm-integration-robotics.md
│   │   ├── prompt-engineering-robotics.md
│   │   ├── reasoning-planning-pipelines.md
│   │   └── context-management.md
│   ├── multi-modal-interaction/
│   │   ├── index.md
│   │   ├── multimodal-fusion-techniques.md
│   │   ├── cross-modal-attention.md
│   │   ├── consistent-behavior-generation.md
│   │   └── user-experience-design.md
│   └── capstone-autonomous-humanoid/
│       ├── index.md
│       ├── system-architecture-design.md
│       ├── voice-command-processing.md
│       ├── path-planning-obstacle-navigation.md
│       ├── object-identification-computer-vision.md
│       └── manipulation-action-execution.md
├── module-5-humanoid-robot-development/
│   ├── index.md
│   ├── humanoid-kinematics-dynamics/
│   │   ├── index.md
│   │   ├── forward-inverse-kinematics.md
│   │   ├── dynamic-modeling.md
│   │   ├── center-mass-calculations.md
│   │   └── stability-analysis.md
│   ├── bipedal-locomotion-balance/
│   │   ├── index.md
│   │   ├── walking-gaits-patterns.md
│   │   ├── balance-control-algorithms.md
│   │   ├── zero-moment-point-control.md
│   │   └── disturbance-recovery.md
│   ├── manipulation-grasping/
│   │   ├── index.md
│   │   ├── hand-kinematics.md
│   │   ├── grasp-planning.md
│   │   ├── force-control.md
│   │   └── dexterous-manipulation.md
│   └── human-robot-interaction/
│       ├── index.md
│       ├── social-robotics-principles.md
│       ├── gesture-recognition.md
│       ├── emotional-expression.md
│       └── safety-considerations.md
├── module-6-conversational-robotics/
│   ├── index.md
│   ├── gpt-conversational-ai/
│   │   ├── index.md
│   │   ├── gpt-integration-robotics.md
│   │   ├── context-management.md
│   │   ├── prompt-engineering-robotics.md
│   │   └── safety-ethical-considerations.md
│   ├── speech-recognition-nlu/
│   │   ├── index.md
│   │   ├── asr-systems-robotics.md
│   │   ├── intent-classification.md
│   │   ├── entity-extraction.md
│   │   └── dialogue-management.md
```
