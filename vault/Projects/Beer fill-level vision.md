---
title: Vision-based fill-level control for a beer dispenser
status: published
featured: false
order: 8
year: 2025
context: Aalto University · master's project
domains: [Perception, Control]
stack: [Python, OpenCV, YOLO, Raspberry Pi 4]
plain: A camera watches a glass being filled and works out how much is beer and how much is foam, so the tap can stop at the right moment.
technical: Fill-level estimation (beer + foam) from video as feedback for the dispenser controller. Six approaches compared on a Raspberry Pi 4 — RGB/HSV thresholds, green-screen removal with interactive calibration, optical flow, and YOLO segmentation with mask refinement — trading robustness against frame rate.
outcome: Final system tested on partial fills under controlled lighting with a polariser to cut glare.
repo: Rakeshdharan/automated-beer-dispenser
video: beer-fill-demo.mp4
poster: beer-fill-demo.jpg
image: beer-approaches.png
---

## Six approaches
![[beer-approaches.png]]

![[beer-yolo-segmentation.mp4]]
