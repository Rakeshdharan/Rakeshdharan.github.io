---
title: Time-optimal MPC for a diafiltration process
status: published
featured: false
order: 5
year: 2025
context: TU Dortmund · Advanced Process Control
domains: [Control, Software]
stack: [Python, CasADi, Streamlit]
plain: A controller that looks ahead and plans the best way to run a filtering process, so the product reaches its target purity sooner — even when the real process doesn't behave exactly like the model.
technical: Nonlinear batch diafiltration model (volume + concentration dynamics) with time-optimal, economic (time-of-use tariff) and robust MPC formulations in CasADi, benchmarked against open-loop and heuristic policies with Monte-Carlo robustness tests in a Streamlit app.
outcome: Reached product specification about 20 % faster than a standard MPC.
repo: Rakeshdharan/diafiltration-mpc
image: diafiltration-tank.png
---

## What's inside
- Nonlinear process model, RK4 integration and linearisation.
- Five strategies compared: constant open-loop, heuristic threshold, time-optimal MPC, economic MPC with a time-of-use electricity tariff, and robust MPC.
- Monte-Carlo tests for disturbances and plant–model mismatch.
- Interactive Streamlit UI for running and comparing experiments.
