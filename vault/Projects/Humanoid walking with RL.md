---
title: Humanoid walking with reinforcement learning
status: published
featured: true
order: 2
year: 2025
context: TU Dortmund project · Booster T1 humanoid
domains: [Robot learning, Control]
stack: [PyTorch, Isaac Gym, Isaac Sim, MuJoCo, Python]
plain: Taught a human-sized robot to walk by letting a virtual copy practise thousands of times in simulation — then moved that skill to a second simulator and to the real robot.
technical: Trained an RL locomotion policy for the Booster T1 humanoid in Isaac Gym / Isaac Sim, validated it via sim-to-sim transfer to MuJoCo, and carried out a sim-to-real deployment.
outcome: Locomotion policy transferred sim-to-sim and deployed sim-to-real on the Booster T1.
repo:
video:
---

## The problem
Walking is hard to hand-code: a humanoid has to balance, place its feet and react to disturbances many times a second.

## The approach
- Trained a locomotion policy with reinforcement learning in Isaac Gym / Isaac Sim.
- **Sim-to-sim:** re-ran the trained policy in MuJoCo — a different physics engine — to catch behaviour that only works because of one simulator's quirks.
- **Sim-to-real:** deployed the policy on the physical Booster T1.

%% TODO(Rakesh): add reward design, observation/action space, training time, and a walking clip (sim + real side by side works best). %%
