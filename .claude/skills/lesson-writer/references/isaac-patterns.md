# NVIDIA Isaac Patterns for Lesson Writing

Common NVIDIA Isaac Sim and Isaac ROS patterns for educational content.

---

## Version Information

**Target Versions**:
- Isaac Sim 2023.1.x / 2024.x
- Isaac ROS 2.0+ (Humble)
- NVIDIA Omniverse

**Requirements**:
- RTX GPU (RTX 2070 or higher recommended)
- NVIDIA Driver 525+ (Linux) / 528+ (Windows)
- CUDA 11.8+ / 12.x
- 64GB RAM recommended

---

## Isaac Sim Core Patterns

### Basic Simulation Setup

```python
from omni.isaac.kit import SimulationApp

# Initialize simulation
simulation_app = SimulationApp({"headless": False})

from omni.isaac.core import World
from omni.isaac.core.robots import Robot

# Create world
world = World()

# Add ground plane
world.scene.add_default_ground_plane()

# Reset and run
world.reset()

for i in range(1000):
    world.step(render=True)

simulation_app.close()
```

### Spawning a Robot

```python
from omni.isaac.core.utils.stage import add_reference_to_stage
from omni.isaac.core.robots import Robot

# Add USD asset to stage
add_reference_to_stage(
    usd_path="/path/to/robot.usd",
    prim_path="/World/Robot"
)

# Create robot wrapper
robot = Robot(
    prim_path="/World/Robot",
    name="my_robot"
)

# Add to scene
world.scene.add(robot)
```

### Articulation Control

```python
from omni.isaac.core.articulations import Articulation

# Get articulation
articulation = Articulation(
    prim_path="/World/Robot",
    name="robot_arm"
)

world.scene.add(articulation)
world.reset()

# Get joint positions
positions = articulation.get_joint_positions()

# Set joint positions target
articulation.set_joint_position_targets(
    np.array([0.0, 0.5, -0.5, 0.0, 0.5, 0.0])
)

# Control in each step
world.step(render=True)
```

### Applying Forces

```python
from omni.isaac.core.prims import RigidPrim

# Get rigid body
rigid_body = RigidPrim(
    prim_path="/World/Object",
    name="object"
)

# Apply force
rigid_body.apply_force(
    force=np.array([0.0, 0.0, 100.0]),  # Force in Newtons
    position=np.array([0.0, 0.0, 0.0])   # Application point
)

# Apply impulse
rigid_body.apply_impulse(
    impulse=np.array([10.0, 0.0, 0.0])
)
```

---

## Sensor Simulation Patterns

### Camera Sensor

```python
from omni.isaac.sensor import Camera

# Create camera
camera = Camera(
    prim_path="/World/Camera",
    position=np.array([0.0, 0.0, 1.0]),
    frequency=20,
    resolution=(640, 480),
    orientation=np.array([0.0, 0.0, 0.0, 1.0])
)

# Initialize
camera.initialize()

# Get data
world.step(render=True)
rgb_data = camera.get_rgb()          # Shape: (H, W, 4)
depth_data = camera.get_depth()       # Shape: (H, W)
intrinsics = camera.get_intrinsics()  # 3x3 matrix

# Save images
camera.save_rgb("rgb_output.png")
camera.save_depth("depth_output.png")
```

### IMU Sensor

```python
from omni.isaac.sensor import ImuSensor

# Create IMU attached to robot
imu = ImuSensor(
    prim_path="/World/Robot/base_link/imu",
    name="imu_sensor"
)

# Get IMU data
world.step(render=True)
imu_data = imu.get_current_frame()

# Access readings
acceleration = imu_data['lin_acc']  # Linear acceleration
angular_vel = imu_data['ang_vel']   # Angular velocity
orientation = imu_data['orientation']  # Quaternion
```

### Contact Sensor

```python
from omni.isaac.sensor import ContactSensor

# Create contact sensor on foot
contact_sensor = ContactSensor(
    prim_path="/World/Robot/left_foot/contact_sensor",
    name="left_foot_contact"
)

# Check contact
world.step(render=True)
if contact_sensor.get_current_frame()['num_contacts'] > 0:
    print("Foot is in contact!")
```

---

## Isaac ROS Integration Patterns

### Isaac ROS Visual SLAM

```yaml
# Launch file excerpt
isaac_ros_visual_slam_node:
  ros__parameters:
    enable_rectified_pose: true
    denoise_input_images: false
    rectified_images: true
    enable_debug_mode: false
    debug_mode_halt_on_loop_closure: false
    enable_slam_visualization: true
    enable_observations_view: true
    enable_map_frame: true
    map_frame: 'map'
    odom_frame: 'odom'
    base_frame: 'camera_link'
    pose_imu: true
```

### Isaac ROS Nvblox (3D Reconstruction)

```yaml
nvblox_node:
  ros__parameters:
    global_frame: 'odom'
    pose_pose_frame: 'camera_pose'
    depth_back_projection_subsampling_factor: 4
    depth_preprocessing: true
    depth_preprocessing_max_depth: 3.0
    use_depth: true
    use_color: true
    use_lidar: false
```

### Isaac ROS Object Detection

```python
# Launch file for object detection
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import IncludeLaunchDescription

def generate_launch_description():
    return LaunchDescription([
        # DNN inference node
        Node(
            package='isaac_ros_tensor_rt',
            executable='tensor_rt_node',
            parameters=[{
                'model_file_path': '/models/detection.onnx',
                'engine_file_path': '/models/detection.plan',
                'output_tensor_names': ['output'],
            }]
        ),
        # Object detection decoder
        Node(
            package='isaac_ros_nvobject_detection',
            executable='object_detection_decoder_node',
        )
    ])
```

---

## Domain Randomization Patterns

### Lighting Randomization

```python
from omni.isaac.core.utils.stage import get_current_stage
from pxr import UsdLux

def randomize_lighting(stage):
    # Get dome light
    dome_light = UsdLux.DomeLight.Get(stage, "/Environment/DomeLight")

    # Randomize intensity
    intensity = np.random.uniform(100, 1000)
    dome_light.GetIntensityAttr().Set(intensity)

    # Randomize color temperature
    color_temp = np.random.uniform(4000, 9000)  # Kelvin
    dome_light.GetColorTemperatureAttr().Set(color_temp)
```

### Material Randomization

```python
import random
from pxr import Gf, UsdShade

def randomize_material(prim_path, stage):
    material = UsdShade.Material.Get(stage, prim_path)

    # Randomize albedo color
    r = random.uniform(0.2, 0.8)
    g = random.uniform(0.2, 0.8)
    b = random.uniform(0.2, 0.8)
    material.GetInput('albedo').Set(Gf.Vec3f(r, g, b))

    # Randomize roughness
    roughness = random.uniform(0.1, 0.9)
    material.GetInput('roughness').Set(roughness)

    # Randomize metallic
    metallic = random.uniform(0.0, 1.0)
    material.GetInput('metallic').Set(metallic)
```

### Pose Randomization

```python
def randomize_object_pose(prim, x_range, y_range, z_range):
    x = np.random.uniform(*x_range)
    y = np.random.uniform(*y_range)
    z = np.random.uniform(*z_range)

    # Random rotation around Z axis
    angle = np.random.uniform(0, 2 * np.pi)

    prim.set_world_pose(
        position=np.array([x, y, z]),
        orientation=np.array([0, 0, np.sin(angle/2), np.cos(angle/2)])
    )
```

---

## Synthetic Data Generation Patterns

### Data Collection Loop

```python
import os
from PIL import Image

class DataCollector:
    def __init__(self, output_dir):
        self.output_dir = output_dir
        self.frame_count = 0

    def collect_frame(self, camera, world):
        # Step simulation
        world.step(render=True)

        # Get images
        rgb = camera.get_rgb()
        depth = camera.get_depth()

        # Save images
        frame_dir = os.path.join(self.output_dir, f"frame_{self.frame_count:06d}")
        os.makedirs(frame_dir, exist_ok=True)

        # RGB as PNG
        rgb_image = Image.fromarray(rgb[:, :, :3])
        rgb_image.save(os.path.join(frame_dir, "rgb.png"))

        # Depth as NPY
        np.save(os.path.join(frame_dir, "depth.npy"), depth)

        self.frame_count += 1
```

### Annotation Generation

```python
def generate_bounding_boxes(prim_path, camera):
    """Generate 2D bounding box from 3D object"""
    # Get object 3D bounds
    from omni.isaac.core.utils.prims import get_prim_path
    from omni.isaac.core.prims import XFormPrim

    obj = XFormPrim(prim_path=prim_path)
    bounds = obj.get_world_bounds()

    # Project 3D bounds to 2D
    intrinsics = camera.get_intrinsics()

    # Get camera pose
    camera_pose = camera.get_world_pose()

    # Transform bounds to camera frame and project
    # ... projection math ...

    return {
        "class": "object_class",
        "bbox": [x_min, y_min, x_max, y_max],
        "confidence": 1.0
    }
```

---

## RL Training Patterns

### Environment Wrapper

```python
from omni.isaac.core.tasks import BaseTask

class RobotTask(BaseTask):
    def __init__(self, name, env_num=1):
        super().__init__(name, env_num)

    def set_up_scene(self, scene):
        # Add robot
        scene.add(self._robot)

        # Add objects
        scene.add(self._target)

    def pre_physics_step(self, actions):
        # Apply actions to robot
        self._robot.apply_action(actions)

    def post_physics_step(self):
        # Get observations
        obs = self._robot.get_observations()

        # Calculate reward
        reward = self._calculate_reward()

        # Check done
        done = self._check_done()

        return obs, reward, done
```

### Reward Function Examples

```python
def distance_reward(self):
    """Reward for getting closer to target"""
    robot_pos = self._robot.get_world_pose()[0]
    target_pos = self._target.get_world_pose()[0]
    distance = np.linalg.norm(robot_pos - target_pos)
    return -distance

def reaching_reward(self):
    """Reward for reaching target within threshold"""
    distance = self._get_distance_to_target()
    if distance < 0.1:  # 10cm threshold
        return 1.0
    return 0.0

def survival_penalty(self):
    """Penalty for each timestep to encourage efficiency"""
    return -0.01
```

---

## Performance Optimization

### GPU Acceleration Settings

```python
# Enable GPU physics
from omni.isaac.core.utils.extensions import enable_extension
enable_extension("omni.physx.gpu")

# Physics settings
from pxr import PhysicsSchemaTools
stage = get_current_stage()

# Set GPU dynamics
physx_scene_api = PhysicsSchemaTools.getPhysxSceneAPI(stage)
physx_scene_api.GetEnableGPUDynamicsAttr().Set(True)

# Increase solver iterations for stability
physx_scene_api.GetSolverIterationCountAttr().Set(100)
```

### Rendering Optimization

```python
# Reduce render quality for speed
simulation_app = SimulationApp({
    "headless": True,
    "width": 640,
    "height": 480,
    "renderer": "RayTracedLighting",  # Faster than PathTracing
    "anti_aliasing": 1  # Reduce AA
})
```

---

## Common CLI Commands

### Isaac Sim Python

```bash
# Run script
./python.sh scripts/my_script.py

# Headless mode
./python.sh scripts/my_script.py --headless

# With specific USD
./python.sh scripts/my_script.py --usd_path=/path/to/scene.usd
```

### Isaac ROS Build

```bash
# Build Isaac ROS workspace
cd ~/isaac_ros_ws
colcon build --symlink-install

# Source
source install/setup.bash

# Run visual SLAM
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

---

## Best Practices

### Simulation Stability

| Setting | Recommended Value |
|---------|------------------|
| Physics timestep | 1/240s (default) or smaller |
| Solver iterations | 50-100 for articulated robots |
| Contact offset | 0.001 - 0.005m |
| Rest offset | 0.0m |

### Memory Management

```python
# Clear assets between runs
world.scene.clear()

# Remove specific objects
world.scene.remove_object("object_name")

# Reset world state
world.reset()
```

### ROS 2 Integration

```python
from omni.isaac.core.utils.extensions import enable_extension

# Enable ROS 2 bridge
enable_extension("omni.isaac.ros2_bridge")

# Now ROS 2 nodes can communicate with simulation
import rclpy
from rclpy.node import Node
```
