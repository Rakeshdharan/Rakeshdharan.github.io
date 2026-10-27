---
title: Mobile robot navigation — RRT, PRM & TEB
status: published
featured: false
order: 6
year: 2025
context: TU Dortmund · TurtleBot3 Waffle Pi
domains: [Navigation, Software]
stack: [ROS 2 Humble, MATLAB, Gazebo, RViz]
plain: Compared different ways for a small wheeled robot to plan a route across a lab and then drive it smoothly around obstacles — in simulation and on the real robot.
technical: ROS 2 Humble TurtleBot3 setup bridged to MATLAB. Global planning with RRT and PRM on an occupancy map of the lab, local planning with a Timed-Elastic-Band controller publishing /cmd_vel, with visualisation of global vs. optimised paths.
outcome: Planners compared on the same lab map; real-time navigation demonstrated.
repo: Rakeshdharan/TEB-MATLAB-ROS2
video: teb-navigation.mp4
poster: teb-navigation.jpg
image: teb-optimized-plan.png
---

## How it works
- **Map:** the lab's occupancy grid loaded as a binary occupancy map in MATLAB.
- **Global plan:** RRT and PRM find a collision-free route.
- **Local plan:** a Timed-Elastic-Band optimiser smooths the route and respects the robot's speed limits, sending velocity commands over ROS 2.

![[teb-optimized-plan.png]]
