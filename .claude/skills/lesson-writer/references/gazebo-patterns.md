# Gazebo Patterns for Lesson Writing

Common Gazebo simulation patterns for educational content.

---

## Version Information

**Target Version**: Gazebo (Ignition) Fortress / Gazebo Garden / Gazebo Harmonic

| Version | ROS 2 | Ubuntu | Status |
|---------|-------|--------|--------|
| Fortress | Humble | 22.04 | LTS |
| Garden | Iron | 22.04 | Supported |
| Harmonic | Jazzy | 24.04 | Latest |

**Note**: This document covers Gazebo (formerly Ignition), not Gazebo Classic.

---

## Basic Simulation Patterns

### Launch Gazebo with ROS 2

```python
# Python launch file
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
import os

def generate_launch_description():
    pkg_gazebo_ros = get_package_share_directory('gazebo_ros')

    return LaunchDescription([
        # Launch Gazebo
        IncludeLaunchDescription(
            PythonLaunchDescriptionSource(
                os.path.join(pkg_gazebo_ros, 'launch', 'gazebo.launch.py')
            ),
            launch_arguments={
                'world': 'empty_world',
                'verbose': 'true'
            }.items()
        )
    ])
```

### Spawn URDF Robot

```python
from launch import LaunchDescription
from launch.actions import ExecuteProcess
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        # Robot state publisher (publishes TF)
        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            parameters=[{'robot_description': robot_desc}]
        ),

        # Spawn in Gazebo
        Node(
            package='gazebo_ros',
            executable='spawn_entity.py',
            arguments=[
                '-topic', 'robot_description',
                '-entity', 'my_robot',
                '-x', '0.0',
                '-y', '0.0',
                '-z', '0.1'
            ]
        )
    ])
```

---

## URDF Patterns

### Basic URDF Structure

```xml
<?xml version="1.0"?>
<robot name="my_robot">

    <!-- Base Link -->
    <link name="base_link">
        <visual>
            <geometry>
                <box size="0.5 0.3 0.1"/>
            </geometry>
            <material name="blue">
                <color rgba="0 0 0.8 1"/>
            </material>
        </visual>
        <collision>
            <geometry>
                <box size="0.5 0.3 0.1"/>
            </geometry>
        </collision>
        <inertial>
            <mass value="10.0"/>
            <origin xyz="0 0 0" rpy="0 0 0"/>
            <inertia ixx="0.1" ixy="0" ixz="0"
                     iyy="0.1" iyz="0"
                     izz="0.1"/>
        </inertial>
    </link>

    <!-- Revolute Joint -->
    <joint name="joint1" type="revolute">
        <parent link="base_link"/>
        <child link="link1"/>
        <origin xyz="0.25 0 0" rpy="0 0 0"/>
        <axis xyz="0 0 1"/>
        <limit lower="-3.14" upper="3.14" effort="100" velocity="1.0"/>
    </joint>

</robot>
```

### Xacro Patterns

```xml
<?xml version="1.0"?>
<robot name="my_robot" xmlns:xacro="http://ros.org/wiki/xacro">

    <!-- Property definitions -->
    <xacro:property name="wheel_radius" value="0.05"/>
    <xacro:property name="wheel_length" value="0.02"/>

    <!-- Macro for wheel -->
    <xacro:macro name="wheel" params="prefix parent *origin">
        <link name="${prefix}_wheel">
            <visual>
                <geometry>
                    <cylinder radius="${wheel_radius}" length="${wheel_length}"/>
                </geometry>
            </visual>
            <collision>
                <geometry>
                    <cylinder radius="${wheel_radius}" length="${wheel_length}"/>
                </geometry>
            </collision>
            <inertial>
                <mass value="1.0"/>
                <inertia ixx="0.01" ixy="0" ixz="0"
                         iyy="0.01" iyz="0"
                         izz="0.01"/>
            </inertial>
        </link>

        <joint name="${prefix}_wheel_joint" type="continuous">
            <parent link="${parent}"/>
            <child link="${prefix}_wheel"/>
            <xacro:insert_block name="origin"/>
            <axis xyz="0 0 1"/>
        </joint>
    </xacro:macro>

    <!-- Use macro -->
    <xacro:wheel prefix="left" parent="base_link">
        <origin xyz="0 0.2 0" rpy="1.57 0 0"/>
    </xacro:wheel>

</robot>
```

---

## SDF Patterns

### Basic SDF World

```xml
<?xml version="1.0"?>
<sdf version="1.9">
    <world name="my_world">

        <!-- Physics engine -->
        <physics name="default_physics" default="true" type="ode">
            <max_step_size>0.001</max_step_size>
            <real_time_factor>1.0</real_time_factor>
        </physics>

        <!-- Scene properties -->
        <scene>
            <ambient>0.4 0.4 0.4 1.0</ambient>
            <background>0.7 0.7 0.7 1.0</background>
        </scene>

        <!-- Light -->
        <light name="sun" type="directional">
            <pose>0 0 10 0 0 0</pose>
            <diffuse>0.8 0.8 0.8 1</diffuse>
            <specular>0.2 0.2 0.2 1</specular>
            <direction>-0.5 0.1 -0.9</direction>
        </light>

        <!-- Ground plane -->
        <model name="ground_plane">
            <static>true</static>
            <link name="link">
                <collision name="collision">
                    <geometry>
                        <plane>
                            <normal>0 0 1</normal>
                        </plane>
                    </geometry>
                </collision>
            </link>
        </model>

    </world>
</sdf>
```

### SDF Model with Sensors

```xml
<model name="robot_with_sensors">
    <pose>0 0 0.1 0 0 0</pose>

    <!-- Base link -->
    <link name="base_link">
        <visual name="visual">
            <geometry>
                <box><size>0.5 0.3 0.1</size></box>
            </geometry>
        </visual>

        <!-- Camera sensor -->
        <sensor name="camera" type="camera">
            <update_rate>30</update_rate>
            <camera>
                <horizontal_fov>1.39</horizontal_fov>
                <image>
                    <width>640</width>
                    <height>480</height>
                </image>
                <clip>
                    <near>0.02</near>
                    <far>300</far>
                </clip>
            </camera>
            <topic>camera/image_raw</topic>
        </sensor>

        <!-- IMU sensor -->
        <sensor name="imu" type="imu">
            <update_rate>100</update_rate>
            <topic>imu/data</topic>
        </sensor>

        <!-- LiDAR sensor -->
        <sensor name="lidar" type="gpu_lidar">
            <update_rate>10</update_rate>
            <lidar>
                <scan>
                    <horizontal>
                        <samples>360</samples>
                        <resolution>1</resolution>
                        <min_angle>-3.14159</min_angle>
                        <max_angle>3.14159</max_angle>
                    </horizontal>
                </scan>
                <range>
                    <min>0.1</min>
                    <max>30.0</max>
                </range>
            </lidar>
            <topic>lidar/scan</topic>
        </sensor>
    </link>
</model>
```

---

## Sensor Simulation Patterns

### Camera Configuration

```xml
<sensor name="camera" type="camera">
    <update_rate>30</update_rate>
    <camera>
        <horizontal_fov>1.396</horizontal_fov>
        <image>
            <width>1280</width>
            <height>720</height>
            <format>R8G8B8</format>
        </image>
        <clip>
            <near>0.02</near>
            <far>300</far>
        </clip>
        <noise>
            <type>gaussian</type>
            <mean>0.0</mean>
            <stddev>0.007</stddev>
        </noise>
    </camera>
    <visualize>true</visualize>
    <topic>camera/image_raw</topic>
</sensor>
```

### Depth Camera

```xml
<sensor name="depth_camera" type="depth_camera">
    <update_rate>20</update_rate>
    <camera>
        <horizontal_fov>1.047</horizontal_fov>
        <image>
            <width>640</width>
            <height>480</height>
        </image>
        <clip>
            <near>0.1</near>
            <far>10.0</far>
        </clip>
    </camera>
    <topic>depth_camera</topic>
</sensor>
```

### IMU Configuration

```xml
<sensor name="imu" type="imu">
    <update_rate>100</update_rate>
    <imu>
        <angular_velocity>
            <x>
                <noise type="gaussian">
                    <mean>0.0</mean>
                    <stddev>2e-4</stddev>
                </noise>
            </x>
            <y>
                <noise type="gaussian">
                    <mean>0.0</mean>
                    <stddev>2e-4</stddev>
                </noise>
            </y>
            <z>
                <noise type="gaussian">
                    <mean>0.0</mean>
                    <stddev>2e-4</stddev>
                </noise>
            </z>
        </angular_velocity>
        <linear_acceleration>
            <x>
                <noise type="gaussian">
                    <mean>0.0</mean>
                    <stddev>1.7e-2</stddev>
                </noise>
            </x>
        </linear_acceleration>
    </imu>
    <topic>imu</topic>
</sensor>
```

---

## Gazebo ROS 2 Bridge Patterns

### Bridge Configuration

```xml
<!-- In SDF model -->
<gazebo>
    <plugin filename="libgazebo_ros_diff_drive.so" name="diff_drive">
        <update_rate>50</update_rate>
        <left_joint>left_wheel_joint</left_joint>
        <right_joint>right_wheel_joint</right_joint>
        <wheel_separation>0.4</wheel_separation>
        <wheel_diameter>0.1</wheel_diameter>
        <max_wheel_torque>20</max_wheel_torque>
        <max_wheel_acceleration>1.0</max_wheel_acceleration>
        <command_topic>cmd_vel</command_topic>
        <odometry_topic>odom</odometry_topic>
        <odometry_frame>odom</odometry_frame>
        <robot_base_frame>base_link</robot_base_frame>
    </plugin>
</gazebo>
```

### Diff Drive Plugin

```xml
<plugin name="diff_drive" filename="libgazebo_ros_diff_drive.so">
    <update_rate>50</update_rate>
    <left_joint>left_wheel_joint</left_joint>
    <right_joint>right_wheel_joint</right_joint>
    <wheel_separation>0.4</wheel_separation>
    <wheel_diameter>0.1</wheel_diameter>
    <command_topic>cmd_vel</command_topic>
    <odometry_topic>odom</odometry_topic>
    <odometry_frame>odom</odometry_frame>
    <robot_base_frame>base_link</robot_base_frame>
    <publish_odom>true</publish_odom>
    <publish_odom_tf>true</publish_odom_tf>
</plugin>
```

### Joint State Publisher

```xml
<plugin name="joint_state_publisher" filename="libgazebo_ros_joint_state_publisher.so">
    <update_rate>50</update_rate>
    <joint_name>joint1</joint_name>
    <joint_name>joint2</joint_name>
    <joint_name>joint3</joint_name>
</plugin>
```

### Force/Torque Sensor

```xml
<sensor name="ft_sensor" type="force_torque">
    <update_rate>100</update_rate>
    <force_torque>
        <frame>child</frame>
    </force_torque>
    <plugin name="ft_plugin" filename="libgazebo_ros_force_torque.so">
        <topic>ft_sensor</topic>
    </plugin>
</sensor>
```

---

## Physics Configuration

### ODE Physics

```xml
<physics name="ode_physics" type="ode">
    <max_step_size>0.001</max_step_size>
    <real_time_factor>1.0</real_time_factor>
    <real_time_update_rate>1000</real_time_update_rate>

    <ode>
        <solver>
            <type>quick</type>
            <iters>50</iters>
            <sor>1.3</sor>
        </solver>
        <constraints>
            <cfm>0.0</cfm>
            <erp>0.2</erp>
            <contact_max_correcting_vel>100.0</contact_max_correcting_vel>
            <contact_surface_layer>0.001</contact_surface_layer>
        </constraints>
    </ode>
</physics>
```

### DART Physics

```xml
<physics name="dart_physics" type="dart">
    <max_step_size>0.001</max_step_size>
    <real_time_factor>1.0</real_time_factor>
    <solver>
        <type>dartsim</type>
        <solver_type>dantzig</solver_type>
    </solver>
</physics>
```

---

## World Building Patterns

### Adding Objects

```xml
<!-- Simple box obstacle -->
<model name="box_obstacle">
    <pose>2 1 0.5 0 0 0</pose>
    <static>true</static>
    <link name="link">
        <visual name="visual">
            <geometry>
                <box><size>1 1 1</size></box>
            </geometry>
            <material>
                <ambient>0.7 0.7 0.7 1</ambient>
                <diffuse>0.7 0.7 0.7 1</diffuse>
            </material>
        </visual>
        <collision name="collision">
            <geometry>
                <box><size>1 1 1</size></box>
            </geometry>
        </collision>
    </link>
</model>
```

### Loading Mesh Models

```xml
<model name="table">
    <pose>1 0 0 0 0 0</pose>
    <link name="link">
        <visual name="visual">
            <geometry>
                <mesh>
                    <uri>model://table/meshes/table.dae</uri>
                    <scale>1 1 1</scale>
                </mesh>
            </geometry>
        </visual>
        <collision name="collision">
            <geometry>
                <mesh>
                    <uri>model://table/meshes/table_collision.dae</uri>
                </mesh>
            </geometry>
        </collision>
    </link>
</model>
```

---

## Command Reference

### Gazebo CLI Commands

```bash
# Launch empty world
ros2 launch gazebo_ros gazebo.launch.py

# Launch with specific world
ros2 launch gazebo_ros gazebo.launch.py world:=my_world.sdf

# Spawn model
ros2 run gazebo_ros spawn_entity.py -topic robot_description -entity my_robot

# Delete model
gz service -s /world/default/remove_entity --reqtype gz.msgs.Entity --reptype gz.msgs.Boolean --timeout 1000 --req "name: 'my_robot'"

# List models
gz model --list

# Get model pose
gz model -m my_robot -p
```

### Topic Bridge (Gazebo Classic to ROS 2)

```bash
# Bridge topics between Gazebo and ROS 2
ros2 run ros_gz_bridge parameter_bridge /camera/image_raw@sensor_msgs/msg/Image[gz.msgs.Image
```

---

## Best Practices

### Inertia Values

```xml
<!-- Common mistake: using incorrect inertia -->
<!-- ❌ Wrong: Identity inertia (unrealistic) -->
<inertia ixx="1" ixy="0" ixz="0"
         iyy="1" iyz="0"
         izz="1"/>

<!-- ✅ Correct: Calculate based on geometry -->
<!-- For a box: I = (m/12) * (h² + w²) for Ixx -->
<inertia ixx="0.083" ixy="0" ixz="0"
         iyy="0.083" iyz="0"
         izz="0.083"/>
```

### Joint Limits

```xml
<!-- Always specify realistic limits -->
<joint name="arm_joint" type="revolute">
    <parent link="base_link"/>
    <child link="arm_link"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1.0"/>
    <dynamics damping="0.1" friction="0.1"/>
</joint>
```

### Simulation Stability

| Parameter | Recommendation |
|-----------|----------------|
| Update rate | 1000 Hz default |
| Step size | 0.001s or smaller |
| Solver iterations | 50-100 for complex robots |
| Contact correction | 0.001-0.01 |
