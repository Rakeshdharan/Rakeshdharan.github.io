---
title: SO-101 vision pick-and-place
status: published
featured: false
order: 4
year: 2026
context: Personal project · SO-101 desktop arm
domains: [Manipulation, Perception]
stack: [Python, OpenCV, AprilTags, PyBullet, Feetech servos]
plain: A small desktop robot arm that spots a sweet on the table with its camera, works out how to bend its joints to reach it, and drops it into a cup.
technical: End-to-end pick-and-place for the 6-DOF SO-101. AprilTags calibrate the workspace (homography), HSV segmentation detects targets and streams them over UDP, and a PyBullet digital twin solves inverse kinematics before commanding Feetech STS servos directly over USB.
outcome: Working end-to-end pipeline with calibration tools and an interactive controller.
repo: Rakeshdharan/SO101
video:
---

## How it works
1. **Calibrate:** four AprilTags define the table plane; a homography maps pixels to robot coordinates.
2. **See:** HSV colour segmentation finds the target and publishes its position over UDP.
3. **Plan:** a PyBullet digital twin of the arm (URDF from Onshape) solves inverse kinematics.
4. **Act:** joint targets go straight to the Feetech servos; an interactive console handles pick, place, home and gripper commands.

%% TODO(Rakesh): add a clip of a full pick-and-place cycle. %%
