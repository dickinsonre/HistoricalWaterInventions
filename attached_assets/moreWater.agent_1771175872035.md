# Bug Bashing Gap Analysis: ICM InfoWorks Design Logic

## What's Already Been Covered

Based on the chat, here's the tested territory:

| | Tester | What They Found | |
|---|---|
| | **Kate** | Constraint slope invalid error (IWICM-1827); missing CSV export for IDF & pipe catalog | |
| | **Andres** | IDF units wrong (hours vs. minutes); K factor 2.755→2.778; mixed pervious/impervious handling question; pipe catalog CIRC auto-fill inconsistency; slope units display (m/m vs %) | |
| | **Paul** | Vertical tile issue; replicated others' findings | |
| | **Mel** | DuckDB/SQL data management suggestion (feature request) | |

The focus so far has been heavily on **units, display labels, and the Rational Method coefficient** — important but narrow. Most of the *design logic algorithm itself* appears untested.

---

## Does the Bug Bashing Make Sense?

**Yes, absolutely — and the findings so far are genuinely impressive.** Andres's K-factor catch is exactly the kind of "trust-eroding" precision bug that users in consulting firms will find on day one. Kate's CSV export gap and slope constraint error are real workflow blockers. The quality of discussion (Sam tracing the 2.755 back to an ignored US K≈1.008, Robert's 1981 SWMM3 acres-to-hectares story) shows deep domain expertise in the room.

**BUT** — the testing is clustered around **input UI and unit display**. The actual *design engine* — pipe sizing, slope assignment, flow progression downstream, constraint enforcement — appears barely touched. You have **2 days left**. Here's where to focus:

---

## What's Missing: Comprehensive Test Plan

### 🔴 **Critical: Core Design Algorithm (Untested)**

**1. Pipe Sizing Accuracy — Hand-Calculate and Compare**
- Take the simplest case: one subcatchment, one pipe, one outfall
- Hand-calculate: Q = 2.778 × C × i × A (metric)
- Use Manning's equation to size the pipe: Q = (1/n) × A × R^(2/3) × S^(1/2)
- Does the design logic pick the correct pipe diameter from the catalog?
- Does it pick the **next size up** when the exact size isn't in the catalog?
- What Manning's n does it use, and does it match the catalog?

**2. Downstream Flow Accumulation**
- Build a simple branching network: 3 subcatchments → 3 upstream pipes → junction → 1 downstream pipe
- Does the downstream pipe accumulate flows correctly?
- Does the time of concentration increase correctly (pipe travel time added)?
- Does the rainfall intensity decrease as Tc increases (moving down the IDF curve)?
- Is the downstream pipe sized larger than upstream pipes?

**3. Constraint Enforcement**
- Set minimum velocity (e.g., 0.6 m/s self-cleansing) — does the design logic enforce it?
- Set maximum velocity (e.g., 6 m/s) — does it constrain?
- Set minimum pipe diameter (e.g., 225mm) — does it enforce?
- Set minimum cover depth — does it check and adjust inverts?
- Set minimum/maximum slope — does it obey? (Kate found a slope constraint error — push harder on this)
- **What happens when constraints conflict?** E.g., minimum velocity requires a steep slope but minimum cover requires a shallow slope. Does it warn the user or silently pick one?

**4. Crown vs. Invert vs. Soffit Alignment**
- At junctions where pipe sizes change, how are inverts set?
- Test: upstream pipe = 300mm, downstream = 450mm. Are crowns aligned (standard practice) or inverts aligned?
- Is there a setting for this? If so, does it work?

### 🟡 **Important: Design Scenarios**

**5. Flat Terrain**
- Set ground slopes near zero (0.1%)
- Does the design logic still produce feasible pipe slopes?
- Does it warn about potential sedimentation / low velocity?

**6. Steep Terrain**
- Set ground slopes > 10%
- Does it limit pipe slopes to prevent supercritical flow?
- Does it introduce drop manholes where needed?

**7. Non-Circular Pipe Shapes**
- Switch catalog to include EGG, RECT, ARCH shapes
- Does the design logic size non-circular pipes correctly?
- Are the hydraulic radius and area calculations correct for these shapes?

**8. Multiple Return Periods**
- Design for 10-year storm, then check capacity for 100-year
- Does the report show surcharge/flooding for the check storm?
- Can you even run design logic for one return period and verify for another?

### 🟡 **Important: Andres's Unanswered Question (Push It)**

**9. Mixed Pervious/Impervious Areas (AreaTakeOff)**

Andres raised this but it was acknowledged without resolution. This is a **design-breaking issue** if not handled correctly:

- Create a subcatchment with 50% impervious (C=0.9) and 50% pervious (C=0.2)
- What contributing area does the design logic use? Total area or impervious only?
- What C value does it use? Composite weighted C, or just impervious C?
- Test both extremes: 95% pervious vs. 95% impervious
- **If it treats everything as impervious, document the overestimation magnitude** — this matters for cost (oversized pipes = wasted money)

### 🟠 **US/Imperial Units (Completely Untested!)**

**10. Switch to US Customary Units**

All testing so far has been metric. Sam confirmed "We started with metric as this is the units used in the target market." But:

- Does design logic work in US units at all?
- Q = C × i × A (no conversion factor in US — K≈1.008, usually dropped)
- Are pipe sizes in inches? Are standard US pipe diameters in the catalog (8", 10", 12", 15", 18", 21", 24"...)?
- Do velocity constraints convert correctly (ft/s vs m/s)?
- If US units aren't supported yet, **is there a clear error message or is it silently wrong?**

### 🔵 **Edge Cases & Boundary Conditions**

**11. Input Validation**
- Enter **negative** rainfall intensity → what happens?
- Enter **zero** contributing area → crash or graceful error?
- Enter an IDF curve with **non-monotonic** values (intensity increases with duration) → caught?
- Leave IDF curve **empty** → error message quality?
- Enter a duration in the IDF curve that **doesn't cover** the calculated Tc → extrapolation or error?
- Enter a C value > 1.0 or < 0 → caught?

**12. Network Topology Edge Cases**
- **Single pipe** (simplest case — good for hand-calc validation)
- **Long linear network** (20+ pipes in series — does Tc get unreasonably large?)
- **Parallel pipes** between same two nodes → how handled?
- **Looped network** (not dendritic) → does design logic even work? Error message?
- **Disconnected segments** → what happens?
- **Network with existing (already-sized) pipes mixed with unsized pipes** → partial redesign?

**13. Repeatability**
- Run design logic twice on the same network → identical results?
- Run design logic, undo, run again → same results?
- Close and reopen the model, run again → same results?

### 🔵 **Reporting & Output**

**14. Design Report Validation**
- Does the report show all intermediate calculations (Tc, i, C, A, Q, V, pipe selected)?
- Can you trace each value back to the inputs?
- Are the column headers and units correct throughout?
- Does the report clearly flag which constraints were binding?
- **Can you export/print the report?** (Ties to Kate's CSV export finding)

**15. Post-Design Simulation Check**
- After running design logic, **run a full hydraulic simulation** with the design storm
- Does the network actually perform as designed (no flooding, no surcharging beyond acceptable levels)?
- If there's a mismatch between design logic results and simulation results, that's a major credibility issue

### 🟣 **UX / Workflow**

**16. Error Message Quality**
- For every error you trigger, ask: "Would a user who doesn't have Sam's phone number understand what went wrong and how to fix it?"
- Kate's slope constraint error — does the message tell you *which* pipe and *what* slope?

**17. Defaults**
- Start a brand new project, open design logic with zero configuration → are the defaults sensible?
- Are default C values reasonable? Default minimum velocity? Default minimum cover?

**18. Help / Documentation**
- Andrew posted the`/ADSK:Ultimate /ff:stagehelp` command — does the help actually cover design logic?
- Are the help pages accurate, or do they describe a different/older version?

---

## Suggested Priority for Final 2 Days

If I had to pick the **top 5 tests** for maximum impact:

| | Priority | Test | Why | |
|---|---|---|
| | **1** | Hand-calculate a single pipe and compare to design logic output | Validates the entire engine in one test | |
| | **2** | Test a branching 3→1 network for flow accumulation & Tc progression | Tests the core downstream design logic | |
| | **3** | Switch to US/Imperial units and run design logic | Untouched territory, high risk of silent errors | |
| | **4** | Push Andres's pervious/impervious question with a concrete test case | Unanswered question with real-world cost implications | |
| | **5** | Run a hydraulic simulation on the designed network | The ultimate validation — does the design actually work? | |

---

## One More Thought

Mel's DuckDB suggestion is forward-thinking but probably a longer-term feature request. However, Kate's CSV export finding is immediately actionable — if you can't export IDF curves and pipe catalogs, you can't share design standards across projects or teams, which is a real workflow gap for consulting firms that reuse standards.

The bug bashing team is strong. The findings so far have been excellent, especially for a new feature. The gap is that the *algorithmic correctness* of the design engine itself hasn't been stress-tested yet — and that's where the scariest bugs will hide. Two days is enough to cover the top 5 priorities above if someone builds a simple test network and brings a calculator.