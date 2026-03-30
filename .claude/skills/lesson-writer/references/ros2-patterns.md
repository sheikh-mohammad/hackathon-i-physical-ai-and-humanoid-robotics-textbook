# ROS 2 Patterns for Lesson Writing

Common ROS 2 code patterns, best practices, and examples for educational content.

---

## Version-Specific Information

**Target Version**: ROS 2 Humble Hawksbill (LTS, May 2022 - May 2027)

| ROS 2 Version | Status | Ubuntu |
|---------------|--------|--------|
| Humble | LTS (Current) | 22.04 |
| Iron | Supported | 22.04 |
| Jazzy | LTS (Next) | 24.04 |

---

## Core Node Patterns

### Minimal Python Node

```python
#!/usr/bin/env python3
import rclpy
from rclpy.node import Node

class MinimalNode(Node):
    def __init__(self):
        super().__init__('minimal_node')
        self.get_logger().info('Node initialized!')

def main(args=None):
    rclpy.init(args=args)
    node = MinimalNode()

    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Minimal C++ Node

```cpp
#include <rclcpp/rclcpp.hpp>

class MinimalNode : public rclcpp::Node {
public:
    MinimalNode() : Node("minimal_node") {
        RCLCPP_INFO(this->get_logger(), "Node initialized!");
    }
};

int main(int argc, char** argv) {
    rclcpp::init(argc, argv);
    auto node = std::make_shared<MinimalNode>();
    rclcpp::spin(node);
    rclcpp::shutdown();
    return 0;
}
```

---

## Publisher Patterns

### Basic Publisher

```python
from std_msgs.msg import String

class PublisherNode(Node):
    def __init__(self):
        super().__init__('publisher_node')
        self.publisher = self.create_publisher(String, 'topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
        self.count = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello World: {self.count}'
        self.publisher.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.count += 1
```

### Publisher with Custom Message

```python
from my_package.msg import RobotStatus

class StatusPublisher(Node):
    def __init__(self):
        super().__init__('status_publisher')
        self.publisher = self.create_publisher(
            RobotStatus,
            '/robot/status',
            10
        )
        self.timer = self.create_timer(1.0, self.publish_status)

    def publish_status(self):
        msg = RobotStatus()
        msg.header.stamp = self.get_clock().now().to_msg()
        msg.battery_level = 85.5
        msg.is_moving = True
        msg.current_task = "navigation"
        self.publisher.publish(msg)
```

### Publisher with QoS

```python
from rclpy.qos import QoSProfile, ReliabilityPolicy, DurabilityPolicy

class SensorPublisher(Node):
    def __init__(self):
        super().__init__('sensor_publisher')

        # Sensor data: best effort, keep last 10
        sensor_qos = QoSProfile(
            reliability=ReliabilityPolicy.BEST_EFFORT,
            durability=DurabilityPolicy.VOLATILE,
            depth=10
        )

        self.publisher = self.create_publisher(
            SensorData,
            '/sensors/imu',
            sensor_qos
        )
```

---

## Subscriber Patterns

### Basic Subscriber

```python
from std_msgs.msg import String

class SubscriberNode(Node):
    def __init__(self):
        super().__init__('subscriber_node')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10
        )

    def listener_callback(self, msg):
        self.get_logger().info(f'Received: "{msg.data}"')
```

### Subscriber with QoS Matching

```python
# Must match publisher QoS for reliable communication
from rclpy.qos import QoSProfile, ReliabilityPolicy

class CameraSubscriber(Node):
    def __init__(self):
        super().__init__('camera_subscriber')

        # Match camera publisher QoS
        camera_qos = QoSProfile(
            reliability=ReliabilityPolicy.BEST_EFFORT,
            depth=5
        )

        self.subscription = self.create_subscription(
            Image,
            '/camera/image_raw',
            self.image_callback,
            camera_qos
        )
```

---

## Service Patterns

### Service Server

```python
from example_interfaces.srv import AddTwoInts

class ServiceServer(Node):
    def __init__(self):
        super().__init__('service_server')
        self.srv = self.create_service(
            AddTwoInts,
            'add_two_ints',
            self.add_callback
        )

    def add_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(
            f'Incoming request: {request.a} + {request.b}'
        )
        return response
```

### Service Client

```python
from example_interfaces.srv import AddTwoInts

class ServiceClient(Node):
    def __init__(self):
        super().__init__('service_client')
        self.client = self.create_client(AddTwoInts, 'add_two_ints')

        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('Waiting for service...')

    def send_request(self, a, b):
        request = AddTwoInts.Request()
        request.a = a
        request.b = b
        future = self.client.call_async(request)
        return future
```

### Synchronous Service Call (Not Recommended)

```python
# Blocks - use async instead for real applications
def call_service_sync(self, a, b):
    request = AddTwoInts.Request()
    request.a = a
    request.b = b
    future = self.client.call_async(request)
    rclpy.spin_until_future_complete(self, future)
    return future.result()
```

---

## Action Patterns

### Action Server

```python
from rclpy.action import ActionServer, CancelResponse, GoalResponse
from example_interfaces.action import Fibonacci

class FibonacciServer(Node):
    def __init__(self):
        super().__init__('fibonacci_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback,
            goal_callback=self.goal_callback,
            cancel_callback=self.cancel_callback
        )

    def goal_callback(self, goal_request):
        return GoalResponse.ACCEPT

    def cancel_callback(self, goal_handle):
        return CancelResponse.ACCEPT

    async def execute_callback(self, goal_handle):
        feedback_msg = Fibonacci.Feedback()
        feedback_msg.partial_sequence = [0, 1]

        for i in range(1, goal_handle.request.order):
            if goal_handle.is_cancel_requested:
                goal_handle.canceled()
                return Fibonacci.Result()

            feedback_msg.partial_sequence.append(
                feedback_msg.partial_sequence[i] + feedback_msg.partial_sequence[i-1]
            )
            goal_handle.publish_feedback(feedback_msg)
            time.sleep(1)

        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = feedback_msg.partial_sequence
        return result
```

### Action Client

```python
from rclpy.action import ActionClient
from example_interfaces.action import Fibonacci

class FibonacciClient(Node):
    def __init__(self):
        super().__init__('fibonacci_client')
        self._action_client = ActionClient(
            self,
            Fibonacci,
            'fibonacci'
        )

    def send_goal(self, order):
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order

        self._action_client.wait_for_server()
        return self._action_client.send_goal_async(
            goal_msg,
            feedback_callback=self.feedback_callback
        )

    def feedback_callback(self, feedback_msg):
        feedback = feedback_msg.feedback
        self.get_logger().info(f'Feedback: {feedback.partial_sequence}')
```

---

## Parameter Patterns

### Declaring Parameters

```python
class ParamNode(Node):
    def __init__(self):
        super().__init__('param_node')

        # Declare with default value
        self.declare_parameter('my_param', 'default_value')
        self.declare_parameter('int_param', 42)
        self.declare_parameter('double_param', 3.14)
        self.declare_parameter('bool_param', True)

        # Get parameter values
        my_param = self.get_parameter('my_param').value
        int_param = self.get_parameter('int_param').value

        # Parameter callback for dynamic updates
        self.add_on_set_parameters_callback(self.param_callback)

    def param_callback(self, params):
        for param in params:
            if param.name == 'my_param':
                self.get_logger().info(f'Parameter changed: {param.value}')
        return SetParametersResult(successful=True)
```

### Parameter Types

| Type | Declare | Get |
|------|---------|-----|
| String | `declare_parameter('name', 'value')` | `get_parameter('name').value` |
| Integer | `declare_parameter('name', 42)` | `get_parameter('name').value` |
| Double | `declare_parameter('name', 3.14)` | `get_parameter('name').value` |
| Boolean | `declare_parameter('name', True)` | `get_parameter('name').value` |
| Array | `declare_parameter('name', [1, 2, 3])` | `get_parameter('name').value` |

---

## Launch File Patterns

### Python Launch File

```python
from launch import LaunchDescription
from launch_ros.actions import Node
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration

def generate_launch_description():
    return LaunchDescription([
        DeclareLaunchArgument(
            'param_name',
            default_value='default_value',
            description='Parameter description'
        ),
        Node(
            package='my_package',
            executable='my_node',
            name='my_node',
            parameters=[{
                'param_name': LaunchConfiguration('param_name')
            }],
            output='screen'
        )
    ])
```

### XML Launch File

```xml
<launch>
    <arg name="param_name" default="default_value" />

    <node pkg="my_package" exec="my_node" name="my_node" output="screen">
        <param name="param_name" value="$(var param_name)" />
    </node>
</launch>
```

---

## TF2 Patterns

### Broadcasting Transform

```python
from tf2_ros import TransformBroadcaster
from geometry_msgs.msg import TransformStamped

class FramePublisher(Node):
    def __init__(self):
        super().__init__('frame_publisher')
        self.tf_broadcaster = TransformBroadcaster(self)
        self.timer = self.create_timer(0.1, self.broadcast_transform)

    def broadcast_transform(self):
        t = TransformStamped()
        t.header.stamp = self.get_clock().now().to_msg()
        t.header.frame_id = 'world'
        t.child_frame_id = 'robot_base'

        t.transform.translation.x = 1.0
        t.transform.translation.y = 0.0
        t.transform.translation.z = 0.0

        t.transform.rotation.x = 0.0
        t.transform.rotation.y = 0.0
        t.transform.rotation.z = 0.0
        t.transform.rotation.w = 1.0

        self.tf_broadcaster.sendTransform(t)
```

### Listening to Transform

```python
from tf2_ros import Buffer, TransformListener

class FrameListener(Node):
    def __init__(self):
        super().__init__('frame_listener')
        self.tf_buffer = Buffer()
        self.tf_listener = TransformListener(self.tf_buffer, self)
        self.timer = self.create_timer(1.0, self.lookup_transform)

    def lookup_transform(self):
        try:
            t = self.tf_buffer.lookup_transform(
                'target_frame',
                'source_frame',
                rclpy.time.Time()
            )
            self.get_logger().info(
                f'Transform: x={t.transform.translation.x}'
            )
        except Exception as e:
            self.get_logger().warn(f'Transform failed: {e}')
```

---

## Common Command Reference

### Node Commands
```bash
ros2 node list                    # List active nodes
ros2 node info /node_name         # Node details
ros2 run package_name node_name   # Run a node
```

### Topic Commands
```bash
ros2 topic list                   # List topics
ros2 topic info /topic_name       # Topic details
ros2 topic echo /topic_name       # Print messages
ros2 topic pub /topic_name msg_type "data"  # Publish message
ros2 topic hz /topic_name         # Publishing rate
```

### Service Commands
```bash
ros2 service list                 # List services
ros2 service type /service_name   # Service type
ros2 service call /service_name srv_type "request"  # Call service
```

### Action Commands
```bash
ros2 action list                  # List actions
ros2 action info /action_name     # Action details
ros2 action send_goal /action_name action_type "goal"  # Send goal
```

### Parameter Commands
```bash
ros2 param list                   # List parameters
ros2 param get /node_name param_name  # Get parameter
ros2 param set /node_name param_name value  # Set parameter
```

---

## Best Practices

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Node name | snake_case | `image_processor` |
| Topic name | snake_case with namespace | `/camera/image_raw` |
| Service name | snake_case | `get_pose` |
| Action name | snake_case | `navigate_to_pose` |
| Parameter | snake_case | `max_velocity` |

### QoS Selection Guide

| Data Type | Reliability | Durability |
|-----------|-------------|------------|
| Sensor data | BEST_EFFORT | VOLATILE |
| State info | RELIABLE | VOLATILE |
| Configuration | RELIABLE | TRANSIENT_LOCAL |
| Commands | RELIABLE | VOLATILE |

### Error Handling

```python
def safe_operation(self):
    try:
        # ROS operation
        result = self.client.call(request)
    except Exception as e:
        self.get_logger().error(f'Operation failed: {e}')
        return None
    return result
```
