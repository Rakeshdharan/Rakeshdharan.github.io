---
title: Imitation learning for autonomous path tracking
status: published
featured: true
order: 3
year: 2025
context: TU Dortmund · Chronos car / CRS platform
domains: [Robot learning, Control, Navigation]
stack: [PyTorch, Gymnasium, ROS 1/2, Python, C++]
plain: A small self-driving car learns to steer along a track by copying an expert controller — and the expert keeps correcting it while it drives, so it learns from its own mistakes.
technical: Online DAgger for path tracking with a 7-D observation space and 1-D steering action. A PID controller acts as the expert, labelling states visited by the learned policy online during driving, with β-decay mixing between expert and learner.
outcome: Learned steering policy trained with online expert relabelling on the CRS / Chronos car stack.
repo:
video:
---

## The problem
Plain behaviour cloning breaks down when the learner drifts into states the expert never visited — small errors compound.

## The approach
- **Expert:** a tuned PID path-tracking controller.
- **Learner:** a neural policy mapping a 7-dimensional observation to a steering command.
- **Online DAgger:** while the learned policy drives, the expert labels every visited state; the dataset grows exactly where the learner struggles. A β-decay schedule hands control from expert to learner over iterations.
- Integrated with ROS 1/2 on the open-source CRS / Chronos car platform.

%% TODO(Rakesh): add tracking-error numbers vs. the PID baseline and a short driving clip. %%
