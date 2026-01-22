# Docusaurus Project Folder Structure

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
├── part-1-introduction-physical-ai/
│   ├── index.md
│   ├── foundations-embodied-intelligence/
│   │   ├── what-is-physical-ai.md
│   │   ├── embodied-intelligence-principles.md
│   │   ├── digital-vs-physical-ai.md
│   │   └── historical-context.md
│   ├── from-digital-physical-world/
│   │   ├── digital-ai-limitations.md
│   │   ├── physical-laws-constraints.md
│   │   ├── physics-simulation-basics.md
│   │   └── real-world-challenges.md
│   ├── humanoid-robotics-landscape/
│   │   ├── current-state.md
│   │   ├── major-players.md
│   │   ├── use-cases-applications.md
│   │   └── future-trends.md
│   └── sensor-systems/
│       ├── lidar-sensors.md
│       ├── camera-systems.md
│       ├── imu-sensors.md
│       └── force-torque-sensors.md
├── part-2-ros-nervous-system/
│   ├── index.md
│   ├── ros2-architecture/
│   │   ├── ros2-vs-ros1.md
│   │   ├── dds-communication.md
│   │   ├── client-libraries.md
│   │   └── qos-settings.md
│   ├── nodes-topics-services-actions/
│   │   ├── node-creation.md
│   │   ├── topic-communication.md
│   │   ├── service-communication.md
│   │   └── action-communication.md
│   ├── building-ros2-packages/
│   │   ├── package-structure.md
│   │   ├── publishers-subscribers.md
│   │   ├── services-clients.md
│   │   └── testing-debugging.md
│   ├── launch-files-parameters/
│   │   ├── xml-launch-files.md
│   │   ├── python-launch-files.md
│   │   ├── parameter-management.md
│   │   └── configuration.md
│   ├── bridging-python-agents/
│   │   ├── agent-integration.md
│   │   ├── rclpy-integration.md
│   │   ├── message-passing.md
│   │   └── real-time-control.md
│   └── urdf-format/
│       ├── urdf-basics.md
│       ├── joints-links.md
│       ├── visual-collision.md
│       └── humanoid-elements.md
├── part-3-digital-twin/
│   ├── index.md
│   ├── gazebo-simulation/
│   │   ├── installation-setup.md
│   │   ├── world-creation.md
│   │   ├── model-import.md
│   │   └── simulation-parameters.md
│   ├── urdf-sdf-formats/
│   │   ├── urdf-to-sdf.md
│   │   ├── sdf-world-format.md
│   │   ├── model-customization.md
│   │   └── physics-properties.md
│   ├── physics-simulation/
│   │   ├── physics-engine-config.md
│   │   ├── forces-environment.md
│   │   ├── collision-detection.md
│   │   └── contact-sensors.md
│   ├── sensor-simulation/
│   │   ├── lidar-simulation.md
│   │   ├── camera-depth-simulation.md
│   │   ├── imu-simulation.md
│   │   └── force-torque-simulation.md
│   ├── unity-rendering/
│   │   ├── unity-setup.md
│   │   ├── materials-textures.md
│   │   ├── lighting-effects.md
│   │   └── realistic-physics.md
│   └── human-robot-interaction/
│       ├── environment-design.md
│       ├── interaction-protocols.md
│       ├── ui-design.md
│       └── safety-considerations.md
├── part-4-ai-robot-brain/
│   ├── index.md
│   ├── isaac-sdk/
│   │   ├── installation-setup.md
│   │   ├── isaac-sim-overview.md
│   │   ├── isaac-apps.md
│   │   └── isaac-gems.md
│   ├── photorealistic-simulation/
│   │   ├── usd-assets.md
│   │   ├── material-lighting.md
│   │   ├── synthetic-data-pipeline.md
│   │   └── domain-randomization.md
│   ├── isaac-ros-vslam/
│   │   ├── visual-slam-principles.md
│   │   ├── isaac-ros-packages.md
│   │   ├── gpu-acceleration.md
│   │   └── performance-optimization.md
│   ├── nav2-navigation/
│   │   ├── nav2-architecture.md
│   │   ├── costmap-configuration.md
│   │   ├── path-planning-algorithms.md
│   │   └── bipedal-navigation.md
│   ├── ai-perception-manipulation/
│   │   ├── object-detection.md
│   │   ├── grasping-planning.md
│   │   ├── perception-fusion.md
│   │   └── real-time-inference.md
│   ├── rl-robot-control/
│   │   ├── rl-fundamentals.md
│   │   ├── reward-function-design.md
│   │   ├── simulation-training.md
│   │   └── policy-transfer.md
│   └── sim-to-real-transfer/
│       ├── domain-adaptation.md
│       ├── reality-gap-minimization.md
│       ├── calibration-fine-tuning.md
│       └── validation-testing.md
├── part-5-vision-language-action/
│   ├── index.md
│   ├── vla-framework/
│   │   ├── vla-concept.md
│   │   ├── multi-modal-integration.md
│   │   ├── real-time-processing.md
│   │   └── safety-error-handling.md
│   ├── whisper-voice-recognition/
│   │   ├── whisper-integration.md
│   │   ├── audio-preprocessing.md
│   │   ├── noise-reduction.md
│   │   └── real-time-voice.md
│   ├── llm-cognitive-planning/
│   │   ├── llm-integration.md
│   │   ├── prompt-engineering.md
│   │   ├── reasoning-planning.md
│   │   └── context-management.md
│   ├── natural-language-ros-actions/
│   │   ├── nlu-integration.md
│   │   ├── action-decomposition.md
│   │   ├── ros2-execution.md
│   │   └── error-recovery.md
│   └── multi-modal-interaction/
│       ├── speech-recognition.md
│       ├── gesture-recognition.md
│       ├── visual-attention.md
│       └── contextual-response.md
├── part-6-capstone-project/
│   ├── index.md
│   ├── project-planning/
│   │   ├── system-architecture.md
│   │   ├── component-integration.md
│   │   ├── safety-ethical.md
│   │   └── testing-validation.md
│   ├── voice-command-processing/
│   │   ├── voice-pipeline.md
│   │   ├── intent-classification.md
│   │   ├── entity-extraction.md
│   │   └── command-validation.md
│   ├── path-planning-obstacles/
│   │   ├── environment-mapping.md
│   │   ├── dynamic-path-planning.md
│   │   ├── obstacle-avoidance.md
│   │   └── humanoid-navigation.md
│   ├── object-identification/
│   │   ├── object-detection.md
│   │   ├── object-recognition.md
│   │   ├── pose-estimation.md
│   │   └── multi-camera-fusion.md
│   └── manipulation-execution/
│       ├── grasp-planning.md
│       ├── motion-planning.md
│       ├── force-control.md
│       └── task-monitoring.md
├── part-7-hardware-setup/
│   ├── index.md
│   ├── workstation-requirements/
│   │   ├── gpu-selection.md
│   │   ├── cpu-memory-specs.md
│   │   ├── os-installation.md
│   │   └── driver-optimization.md
│   ├── edge-computing-kits/
│   │   ├── jetson-setup.md
│   │   ├── dev-environment.md
│   │   ├── resource-management.md
│   │   └── deployment-strategies.md
│   ├── sensor-integration/
│   │   ├── realsense-setup.md
│   │   ├── imu-calibration.md
│   │   ├── multi-sensor-sync.md
│   │   └── data-fusion.md
│   └── robot-platforms/
│       ├── selection-criteria.md
│       ├── unitree-go2.md
│       ├── unitree-g1.md
│       └── alternatives-comparison.md
└── appendix/
    ├── glossary.md
    ├── troubleshooting.md
    ├── further-reading.md
    └── faq.md
```