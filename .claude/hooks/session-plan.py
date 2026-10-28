#!/usr/bin/env python3
# SessionStart: puts the first day of the daily plan that still has open
# items into context, so every session starts from where the last one
# stopped. A deferred item marked ⏭ counts as closed.
import glob
import os
import re

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
plans = sorted(glob.glob(os.path.join(root, "PLAN-IMPROVEMENTS-*.md")))
if not plans:
    raise SystemExit(0)

text = open(plans[-1], encoding="utf-8").read()
sections = re.split(r"(?m)^(?=### )", text)
stop = re.search(r"(?m)^\*\*▶ Где остановились.*$", text)

for sec in sections:
    if sec.startswith("### ") and re.search(r"(?m)^- \[ \](?! ⏭)", sec):
        body = re.split(r"(?m)^(---|## )", sec)[0].strip()
        print(f"План дня ({os.path.basename(plans[-1])}), первый незакрытый день:\n{body}")
        if stop and stop.group(0) not in body:
            print(f"\n{stop.group(0)}")
        break
