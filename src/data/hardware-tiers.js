/**
 * Hardware Tiers Data for RoboCraft Homepage
 * Defines different hardware setup options for users
 */

export const hardwareTiers = [
  {
    id: 1,
    name: "Simulation Only",
    description: "Complete software-only setup for learning and development",
    cost: "Free",
    recommendation: "basic",
    requirements: {
      cpu: "Intel i5 or AMD Ryzen 5",
      ram: "8GB DDR4",
      os: ["Ubuntu 20.04 LTS", "Windows 10+", "macOS 11+"],
      storage: "100GB SSD"
    },
    features: [
      "Full software simulation",
      "Virtual robot environments",
      "Development tools",
      "Community support"
    ],
    simulationOnly: true,
    physicalHardware: false,
    supportLevel: "community"
  },
  {
    id: 2,
    name: "Professional Builder",
    description: "Complete setup for developing and testing physical AI systems",
    cost: "$1,299",
    recommendation: "recommended",
    requirements: {
      cpu: "Intel i7 or AMD Ryzen 7",
      ram: "16GB DDR4",
      gpu: "RTX 3060 or equivalent",
      os: ["Ubuntu 20.04 LTS", "Windows 10+"],
      storage: "512GB SSD"
    },
    features: [
      "Full-size humanoid robot kit",
      "High-performance development computer",
      "Advanced sensors and actuators",
      "Priority support"
    ],
    simulationOnly: false,
    physicalHardware: true,
    supportLevel: "premium"
  },
  {
    id: 3,
    name: "Enterprise Lab",
    description: "Complete lab setup for organizations and research institutions",
    cost: "Custom",
    recommendation: "premium",
    requirements: {
      cpu: "Intel i9 or AMD Threadripper",
      ram: "32GB+ DDR4",
      gpu: "RTX 4080 or equivalent",
      os: ["Ubuntu 20.04 LTS"],
      storage: "1TB+ NVMe SSD"
    },
    features: [
      "Multiple humanoid robots",
      "Advanced simulation cluster",
      "Dedicated support engineer",
      "Custom integration services",
      "Training and certification"
    ],
    simulationOnly: false,
    physicalHardware: true,
    supportLevel: "premium"
  }
];