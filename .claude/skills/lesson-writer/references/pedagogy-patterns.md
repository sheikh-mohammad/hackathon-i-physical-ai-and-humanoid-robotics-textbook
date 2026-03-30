# Pedagogy Patterns for Technical Education

Patterns and best practices for creating effective technical lessons.

---

## Bloom's Taxonomy for Robotics Education

Structure learning objectives using Bloom's levels:

| Level | Action Verbs | Example for Robotics |
|-------|--------------|---------------------|
| Remember | Define, List, Identify | "List the components of a ROS 2 node" |
| Understand | Explain, Describe, Summarize | "Explain how DDS enables node communication" |
| Apply | Implement, Execute, Demonstrate | "Implement a publisher node in Python" |
| Analyze | Compare, Contrast, Examine | "Compare topic vs service communication" |
| Evaluate | Assess, Critique, Judge | "Evaluate which sensor suits a navigation task" |
| Create | Design, Build, Develop | "Design a complete robot perception pipeline" |

**Progression Rule**: Each lesson should target 2-3 levels, building from lower to higher.

---

## Lesson Structure Patterns

### The Hook-Content-Practice Pattern

```markdown
## Introduction (Hook)
[Real-world problem or interesting question]

## Core Content
[Main teaching material]

## Practice
[Hands-on exercises]

## Summary
[Key takeaways]
```

### The Concept-Example-Exercise Pattern

```markdown
## Concept
[Theoretical explanation]

## Example
[Concrete implementation]

## Exercise
[Student practice with similar problem]
```

### The Progressive Complexity Pattern

```markdown
## Simple Case
[Basic version of concept]

## Common Case
[Typical real-world usage]

## Complex Case
[Advanced scenario with edge cases]
```

---

## Exercise Design Patterns

### Scaffolded Exercises

Progress from guided to independent:

1. **Guided Exercise**: Step-by-step with exact commands
2. **Semi-Guided Exercise**: Goal stated, approach hinted
3. **Independent Exercise**: Goal stated, student determines approach

### Debugging Exercises

Present broken code for students to fix:

```markdown
## Exercise: Debug the Publisher

The following code has 3 errors. Find and fix them:

```python
import rclpy
from rclpy.node import Node

class BrokenPublisher(Node):
    def __init__(self):
        super().__init__('broken_publisher')
        self.publisher = self.create_publisher(String, 'topic', 10)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello'
        self.publisher.publish(msg)

def main():
    node = BrokenPublisher()
    rclpy.spin(node)
    rclpy.shutdown()
```

**Hint**: Check imports, timer creation, and node initialization.
```

### Compare and Contrast Exercises

```markdown
## Exercise: Communication Patterns

For each scenario, choose the appropriate ROS 2 communication pattern:

1. A robot continuously publishing sensor data → _____
2. Requesting a one-time calculation → _____
3. Executing a long-running navigation task → _____

Explain your reasoning for each choice.
```

---

## Code Example Patterns

### Complete and Runnable

Always provide complete examples:

```python
# ❌ Bad: Incomplete snippet
def callback(msg):
    print(msg.data)

# ✅ Good: Complete, runnable example
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # Prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    subscriber = MinimalSubscriber()
    rclpy.spin(subscriber)
    subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Annotated Examples

Include explanatory comments:

```python
class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')  # Node name must be unique

        # Create a timer that calls callback every 0.5 seconds
        self.timer = self.create_timer(0.5, self.timer_callback)

        # QoS profile for reliable communication
        qos = QoSProfile(
            reliability=ReliabilityPolicy.RELIABLE,
            depth=10
        )
```

### Before/After Patterns

Show evolution from simple to complex:

```markdown
### Version 1: Basic Publisher
[Simpler version]

### Version 2: With Parameters
[Added parameter handling]

### Version 3: Production Ready
[Error handling, logging, cleanup]
```

---

## Quiz Design Patterns

### Conceptual Questions

Test understanding, not memorization:

```markdown
**Question**: Why does ROS 2 use DDS as middleware?

- [ ] To make the code run faster
- [x] To enable communication between processes and machines
- [ ] To reduce memory usage
- [ ] To simplify Python syntax

**Explanation**: DDS (Data Distribution Service) provides the communication
layer that allows ROS 2 nodes to communicate across processes and machines
without custom networking code. It handles discovery, quality of service,
and message routing.
```

### Code Prediction Questions

```markdown
**Question**: What will this code output?

```python
node = Node('test')
node.get_logger().info(f'Node name: {node.get_name()}')
```

- [ ] "Node name: node"
- [x] "Node name: test"
- [ ] Error: node name not set
- [ ] "Node name: Node"

**Explanation**: The node name is set during initialization via the
constructor argument 'test', which is retrieved by `get_name()`.
```

### Scenario Questions

```markdown
**Question**: Your robot's camera publishes at 30 Hz, but your processing
node can only handle 10 Hz. What's the best QoS setting?

- [ ] RELIABLE with depth 30
- [x] BEST_EFFORT with depth 10
- [ ] RELIABLE with depth 10
- [ ] BEST_EFFORT with depth 30

**Explanation**: BEST_EFFORT drops packets rather than blocking, which is
appropriate for high-frequency sensor data where latest data matters more
than receiving every message. Depth 10 matches the processing rate.
```

---

## Callout Patterns

### When to Use Each Callout

| Callout | Use For | Example |
|---------|---------|---------|
| `:::tip` | Practical advice, shortcuts | "Use tab completion for topic names" |
| `:::note` | Important information | "ROS 2 Humble is the LTS version until 2027" |
| `:::warning` | Common mistakes, safety | "Never run `sudo rm -rf` on your workspace" |
| `:::info` | Additional context | "This feature was introduced in ROS 2 Foxy" |

### Callout Examples

```markdown
:::tip
Use `ros2 topic hz /topic_name` to quickly check if a topic is publishing.
:::

:::note
The quality of service (QoS) settings must match between publisher and
subscriber for communication to work reliably.
:::

:::warning
Always disconnect power before working on robot hardware. Even "disabled"
motors can have residual charge.
:::

:::info
NVIDIA Isaac Sim requires an RTX GPU. GTX cards are not supported for
ray tracing features.
:::
```

---

## Prerequisite Declaration Pattern

```markdown
## Prerequisites

Before starting this lesson, ensure you have:

### Required Knowledge
- [ROS 2 Installation](link-to-lesson) - Basic ROS 2 setup
- [Python Fundamentals](link-to-lesson) - Classes, functions, imports

### Hardware Requirements
- Computer with Ubuntu 22.04
- ROS 2 Humble installed

### Software Requirements
- Python 3.10+
- `colcon` build tools
```

---

## Summary Patterns

### Key Takeaways Format

```markdown
## Summary

### Key Takeaways

1. **Concept 1**: Brief explanation
2. **Concept 2**: Brief explanation
3. **Concept 3**: Brief explanation

### What's Next

In the next lesson, [Lesson Name](link), we will build on these concepts
to [what they'll learn next].
```

### Quick Reference Format

```markdown
## Quick Reference

| Command | Purpose |
|---------|---------|
| `ros2 node list` | List active nodes |
| `ros2 topic list` | List active topics |
| `ros2 service list` | List available services |
```

---

## Depth Progression Pattern

### Module 1-2: Beginner Content
- Conceptual explanations
- Simple, complete examples
- Guided exercises with solutions
- Basic quiz questions

### Module 3-4: Intermediate Content
- Technical implementations
- Parameter variations
- Semi-guided exercises
- Scenario-based questions

### Module 5-7: Advanced Content
- Complex integrations
- Performance considerations
- Independent exercises
- Design decision questions
