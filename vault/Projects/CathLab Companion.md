---
title: CathLab Companion
status: published
featured: true
order: 1
year: 2026
context: Siemens Healthineers Hackathon 2026 · Challenge C2 · team project
domains: [Robot learning, Manipulation, Software]
stack: [LeRobot, SmolVLA, X-VLA, ACT, robosuite, ManiSkill3, Genesis, Python]
plain: A robot arm that hands instruments to a doctor when asked — "hand me the syringe". When it fails in simulation, the system automatically creates new practice examples for exactly those failures and retrains itself.
technical: Simulation-first, self-improving robot-learning loop for a Franka Panda handover task. Synthetic demos across three physics engines → LeRobot v3 datasets → ACT / SmolVLA / X-VLA training → per-engine evaluation; failures generate a targeted next run. A model registry promotes checkpoints only when they beat production under a confidence-interval rule.
outcome: One failure-driven loop iteration lifted cross-engine success on robosuite from 13 % to 32 %; the promotion gate still kept the stronger production model.
repo: Rakeshdharan/vla-cathlab-companion
video: https://huggingface.co/datasets/Rakeshdharan56/cathlab_demo_media/resolve/main/rollouts/production_cathlab-pick-v2/robosuite_vial_rollout.mp4
links:
  - Datasets on Hugging Face | https://huggingface.co/Rakeshdharan56
---

## The problem
In a cardiac catheterisation lab, the clinician's hands and eyes are busy. A robot that passes the right instrument on a voice request could save time — but collecting real robot training data in a clinical setting is slow and expensive.

## The approach
- **Generate** demonstrations in simulation with scripted experts, across three physics engines (robosuite / MuJoCo, ManiSkill3 / PhysX, Genesis) so the policy doesn't overfit to one simulator.
- **Convert** everything to the LeRobot v3 dataset format and **train** vision-language-action policies (ACT, SmolVLA, X-VLA).
- **Evaluate** every checkpoint on every engine and build a failure report: which object, which stage (reach / grasp), and the sim-to-sim gap.
- **Close the loop:** failures turn into a `next_run.json` that asks the data engine for targeted new episodes, then retrain.
- **Ship safely:** checkpoints are registered as versions and only promoted when their confidence interval beats production.
- A Control Station web UI runs every stage, plus an agent harness for extending the platform.

## Results
Success rate on the handover task (60 episodes per cell, 95 % Wilson CI in the repo):

| Policy | Trained on | robosuite | ManiSkill3 | Genesis |
|---|---|---|---|---|
| Scripted expert | — | 100 % | 100 % | 100 % |
| SmolVLA (production) | robosuite | 38 % | 0 % | 0 % |
| X-VLA v2 | all three engines | 13 % | 13 % | 17 % |
| X-VLA v3 (one loop iteration, +48 targeted episodes) | all three engines | 32 % | 13 % | 22 % |

**Key finding:** each policy works almost only in the simulator it was trained in. Training across all three engines closes the gap, and a single failure-driven loop iteration lifts robosuite success from 13 % to 32 %. The v3 retrain was still **refused** by the promotion rule — its lower confidence bound (21 %) didn't beat production's 38 % — so the safety gate worked as designed.

## What I learned
Honest evaluation infrastructure matters as much as the model: without per-engine reports and a promotion rule, the "better" retrain would have shipped.

%% TODO(Rakesh): add your personal role on the team, and a 20–30 s clip of the Control Station. %%
