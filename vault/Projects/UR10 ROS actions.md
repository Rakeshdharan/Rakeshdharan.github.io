---
title: UR10 trajectory execution with ROS actions
status: published
featured: false
order: 7
year: 2025
context: TU Dortmund
domains: [Manipulation, Software]
stack: [ROS Noetic, Gazebo, Python, Docker]
plain: Programmed an industrial robot arm in simulation to move through a sequence of points, and to report its progress so other software can wait for it or carry on in parallel.
technical: ROS action–based waypoint execution for a simulated UR10 in Gazebo, comparing blocking and non-blocking goal handling, packaged in a Docker environment with noVNC.
outcome: Reproducible Docker setup and waypoint demos for blocking vs. non-blocking actions.
repo: Rakeshdharan/ros-noetic-action-ur10
video: ur10-actions.mp4
poster: ur10-actions.jpg
---

## Why actions
Topics fire and forget; services block. ROS **actions** give long-running goals with feedback and cancellation — the pattern real cells use to sequence robot motions.
