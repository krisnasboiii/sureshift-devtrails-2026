# SureShift – Income Protection for Food Delivery Partners

> **Guidewire DEVTrails 2026** | University Hackathon | Parametric Insurance Platform

---

## Team

| Name |
|------|
| Rudatala Rohit Piyushbhai |

**University :**  Parul University

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Our Solution](#our-solution)
3. [Persona & Scenarios](#persona--scenarios)
4. [Application Workflow](#application-workflow)
5. [Platform Choice](#platform-choice)
6. [Weekly Premium Model](#weekly-premium-model)
7. [Parametric Trigger Thresholds](#parametric-trigger-thresholds)
8. [AI / ML Integration Plan](#ai--ml-integration-plan)
9. [Fraud Detection Plan](#fraud-detection-plan)
10. [Adversarial Defense & Anti-Spoofing Strategy](#adversarial-defense--anti-spoofing-strategy)
11. [Business Viability](#business-viability)
12. [Technology Stack](#technology-stack)
13. [Development Plan](#development-plan)
14. [Expected Impact](#expected-impact)

---

## Problem Statement

India has over **15 million gig delivery workers**. Their income depends entirely on the hours they work. External disruptions — heavy rain, floods, poor air quality, or local curfews — can reduce their working hours and cause them to lose **20–30% of their monthly earnings**.

Currently, these workers have **no income protection** against these uncontrollable events. When disruptions occur, they bear the full financial loss with no safety net.

**Key facts:**

- A delivery partner earns ₹400 – ₹800 per day
- Losing just 2 disrupted days per month = ₹800 – ₹1,600 loss (10–15% of monthly income)
- No existing insurance product covers gig worker income loss in India
- Traditional insurance claims are too slow and complicated for daily wage workers

---

## Our Solution

**SureShift** is an AI-enabled parametric insurance platform that automatically protects food delivery partners from income loss caused by external disruptions.

**How it is different from traditional insurance:**

| Feature                  | Traditional Insurance     | SureShift (Parametric)                |
| ------------------------ | ------------------------- | ------------------------------------- |
| Claim process            | Worker files manual claim | Automatic — no action needed          |
| Proof required           | Bills, photos, documents  | None — external data confirms event   |
| Payout time              | Days to weeks             | Minutes to hours                      |
| Pricing model            | Monthly / Annual          | Weekly — matches gig worker pay cycle |
| Suitable for gig workers | No — too complex          | Yes — fully automated                 |

**Coverage scope:** Loss of income ONLY due to external disruptions.  
**Strictly excluded:** Health, life, accident, vehicle repair coverage.

---

## Persona & Scenarios

### Our Persona — Food Delivery Partners

| Attribute      | Details                                              |
| -------------- | ---------------------------------------------------- |
| Platforms      | Zomato, Swiggy, Blinkit, Zepto                       |
| Age group      | 18 – 35 years                                        |
| Device         | Android smartphone (low-end, 2G/3G internet)         |
| Daily income   | ₹400 – ₹800 per day                                  |
| Monthly income | ₹12,000 – ₹18,000 per month                          |
| Work hours     | 8 – 14 hours/day, 6 – 7 days/week                    |
| Cities         | Mumbai, Delhi, Bengaluru, Hyderabad, Chennai         |
| Pain point     | Income stops completely during rain, floods, curfews |

---

### Scenario 1 — Heavy Rain

**Situation:**
Arjun is a Swiggy delivery partner in Mumbai. At 3 PM, heavy rain starts — 80mm in 2 hours. Swiggy reduces order assignments in his zone. Roads flood. He cannot move safely and loses 4–5 hours of earning time.

**Income lost:** ₹300 – ₹500 for that day  
**SureShift trigger:** OpenWeatherMap API detects rainfall > 50mm in 3 hours at Arjun's PIN code  
**Result:** ₹300 automatically credited to Arjun's UPI. No claim filed. No action taken by Arjun.

---

### Scenario 2 — Flood Alert

**Situation:**
Mumbai receives an IMD Red Alert for floods. BMC restricts vehicle movement in low-lying areas. Priya, a Zomato partner in Kurla, cannot reach restaurant pickup zones. Platform shows "delivery suspended in your area." She loses an entire day of income.

**Income lost:** ₹600 – ₹900 for 1–2 days  
**SureShift trigger:** IMD official flood alert issued for worker's city zone  
**Result:** ₹500 credited automatically. Higher payout due to greater severity.

---

### Scenario 3 — Poor Air Quality (AQI Emergency)

**Situation:**
Delhi, November. AQI hits 420 — Severe category. Government advises against outdoor activity. Rahul, a delivery partner, cannot work safely outdoors. Order volumes also drop by 40%. His earnings drop from ₹700 to ₹150.

**Income lost:** ₹400 – ₹550 for that day  
**SureShift trigger:** aqicn.org API detects AQI > 300 in worker's city  
**Result:** ₹250 partial payout credited automatically.

---

### Scenario 4 — Local Curfew

**Situation:**
A sudden political protest leads to a local bandh in Bengaluru. Shops are closed, restaurants are shut, police have blocked main roads. Suresh, a Blinkit partner, cannot operate at all. The bandh lasts his entire working shift — 8 AM to 8 PM.

**Income lost:** ₹600 – ₹800 for that day  
**SureShift trigger:** Official government restriction order issued in worker's zone  
**Result:** ₹400 credited automatically to Suresh's account.

---

## Application Workflow

```
STEP 1 — REGISTRATION
Worker enters: Name, City, Platform, UPI/Bank, Avg weekly income
                        |
                        v
STEP 2 — RISK PROFILING (AI)
ML model calculates risk score based on location + season + worker history
                        |
                        v
STEP 3 — PREMIUM DISPLAY
Worker sees personalised weekly premium (Rs.27 – Rs.60)
Worker pays → Policy activated for 7 days
                        |
                        v
STEP 4 — BACKGROUND MONITORING (Automated, every 30 min)
System checks Weather API + AQI API continuously
Worker does not need to do anything
                        |
                        v
STEP 5 — MULTI-SIGNAL VERIFICATION
Threshold crossed → 6-signal behaviour check →
Fraud score calculated → Green/Amber/Red tier
                        |
                        v
STEP 6 — AUTO PAYOUT
Payout calculated → Razorpay/UPI transfer initiated
Worker receives notification: "Rs.350 credited to your account"
```

---

## Platform Choice

**We chose a Progressive Web App (PWA) built with React.js.**

| Option             | Decision | Reason                                          |
| ------------------ | -------- | ----------------------------------------------- |
| Native Android App | No       | Requires Play Store, longer build time          |
| iOS App            | No       | Delivery partners mostly use Android            |
| PWA (React.js)     | YES      | Works like a mobile app, no installation needed |

**Why PWA is right for our users:**

- Delivery partners use low-end Android phones — PWA is lightweight
- Works on slow 2G/3G internet which is common in delivery zones
- No Play Store download required — open browser and use instantly
- Faster to build and deploy within hackathon timeline
- Supports push notifications like a native app

---

## Weekly Premium Model

Workers pay a small weekly premium to keep their policy active for 7 days. This directly matches the typical weekly payout cycle of gig workers.

**Why weekly and not monthly?**
Gig workers operate week-to-week. A monthly premium is a large upfront cost they may not be able to afford at once. A weekly premium of ₹27 – ₹60 can be paid from a single day's earnings.

### Premium Calculation Formula

```
Final Premium = Base Premium + Location Risk + Season Risk + History Adjustment
```

### Factor Table

| Factor            | Low Risk      | Medium Risk    | High Risk        | Adjustment               |
| ----------------- | ------------- | -------------- | ---------------- | ------------------------ |
| Base Premium      | —             | —              | —                | Rs.30 (all workers)      |
| Location Risk     | Safe zone     | Normal zone    | Flood-prone zone | -Rs.5 / Rs.0 / +Rs.10    |
| Season Risk       | Summer        | Winter         | Monsoon          | Rs.0 / +Rs.5 / +Rs.10    |
| Claim History     | No claims     | Normal         | Many past claims | -Rs.3 / Rs.0 / +Rs.8     |
| **Final Premium** | **Rs.22 min** | **Rs.30 base** | **Rs.58 max**    | **Range: Rs.22 – Rs.60** |

### Calculation Examples

**Arjun — Mumbai, July (Monsoon), 2 past claims:**

```
Base:           Rs.30
Location:       +Rs.10  (coastal flood zone)
Season:         +Rs.10  (monsoon)
History:        +Rs.8   (2 past claims)
Final Premium:  Rs.58 / week  |  Coverage up to Rs.600/week
```

**Meena — Pune, May (Summer), no past claims:**

```
Base:           Rs.30
Location:       +Rs.0   (normal zone)
Season:         +Rs.0   (summer)
History:        -Rs.3   (new user bonus)
Final Premium:  Rs.27 / week  |  Coverage up to Rs.600/week
```

---

## Parametric Trigger Thresholds

Payouts are triggered automatically when specific data thresholds are crossed. No manual claim is required from the worker at any point.

| Event             | Trigger Condition                   | Data Source        | Payout |
| ----------------- | ----------------------------------- | ------------------ | ------ |
| Heavy Rain        | Rainfall > 50mm in 3 hours          | OpenWeatherMap API | Rs.300 |
| Flood Alert       | IMD / Govt Red Alert in worker zone | IMD API / Mock     | Rs.500 |
| Poor Air Quality  | AQI > 300 (Severe category)         | aqicn.org API      | Rs.250 |
| Curfew / Shutdown | Official govt restriction in zone   | Govt alerts / Mock | Rs.400 |

**Data Sources:**

- OpenWeatherMap API (free tier) — real rainfall data by PIN code, 1000 free calls/day
- aqicn.org API (free tier) — real-time AQI data by city
- IMD alerts — simulated / mock data for prototype (acceptable per hackathon guidelines)

---

## AI / ML Integration Plan

AI and ML are used in 3 specific places in the SureShift workflow.

### 1. Dynamic Premium Calculation

**Why it is needed:** Fixed pricing is unfair. A Mumbai coastal worker faces far more flood risk than a Pune inland worker.

**Implementation:**

- Input features: City zone risk score, current season, claim history count, days active
- Phase 1: Rule-based scoring system (deterministic, no training needed)
- Phase 2: Linear Regression model trained on 500+ simulated worker profiles
- Output: Weekly premium value between Rs.22 – Rs.60
- Validation: 80/20 train-test split, target accuracy above 85%

### 2. Fraud Detection (Anomaly Detection)

**Why it is needed:** Workers could attempt to claim during genuine weather events that do not affect their specific location.

**Implementation:**

- Phase 1: Rule-based checks — GPS match, duplicate account detection
- Phase 2: Isolation Forest algorithm (unsupervised anomaly detection) on claim patterns
- Detects:
  - GPS mismatch — worker not in affected zone at claim time
  - Impossible movement — location jumps 15+ km in under 2 minutes
  - Claim frequency anomaly — significantly above city average
  - Duplicate accounts — same phone number, device ID, or bank account

### 3. Risk Prediction

**Why it is needed:** System must pre-allocate payout reserves for high-risk weeks.

**Implementation:**

- Uses historical IMD weather + AQI data to predict high-risk zones next week
- Dynamically adjusts premiums before predicted high-risk periods
- Sends advance alerts to workers: "Heavy rain expected Thursday — your policy is active"

---

## Fraud Detection Plan

### Weather Verification

OpenWeatherMap data is cross-checked against the worker's registered PIN code at the exact time of the event. If no qualifying event is detected in the worker's area, the claim is rejected automatically.

### GPS Location Check

Worker GPS is verified when an event is detected. Worker must physically be in the affected zone. This prevents claiming events that occurred in a different city area.

### Activity Pattern Analysis

Suspicious patterns are flagged automatically:

- Repeated claims in a short period
- Worker only appears active during disruption events
- Claim rate significantly higher than city average for that event

### Duplicate Account Detection

System checks across all registered accounts for:

- Same phone number
- Same device ID (device fingerprint)
- Same bank account or UPI ID

All duplicate accounts are immediately blocked.

---

## Adversarial Defense & Anti-Spoofing Strategy

### The Threat We Are Solving

A coordinated syndicate of workers can use GPS spoofing
apps to fake their location inside a weather-affected
zone while sitting safely at home — triggering false
payouts and draining the liquidity pool.

---

### 1. The Differentiation — Real Worker vs Spoofer

Our AI does NOT rely on GPS alone. We use a
multi-signal behavioural model:

| Signal                | Genuine Worker                          | GPS Spoofer                 |
| --------------------- | --------------------------------------- | --------------------------- |
| Accelerometer data    | Shows bike movement, vibration          | Stationary — no movement    |
| Battery drain pattern | High (navigation + delivery app active) | Low (phone idle)            |
| Network cell tower    | Matches claimed GPS zone                | Does NOT match GPS location |
| App usage             | Zomato/Swiggy app active                | Delivery app not running    |
| Historical location   | Has been in this zone before            | Never visited this zone     |
| Speed pattern         | Moving 20–40 kmph (delivery speed)      | Zero movement               |

If 3 or more signals contradict the GPS location,
the claim is auto-flagged for review — not rejected.

---

### 2. The Data — Beyond Basic GPS

We collect and cross-reference these data points:

**Device-Level Signals:**

- Accelerometer + gyroscope data (is the phone moving?)
- Network cell tower ID (does it match GPS zone?)
- WiFi network name (home WiFi vs street network?)
- Battery consumption rate (active navigation = high drain)
- Screen-on time and active app session

**Behavioural Signals:**

- Delivery app (Zomato/Swiggy) active session detected
- Time-of-day pattern (does this match worker's normal hours?)
- Zone visit history (has worker ever been in this area before?)

**Network/Syndicate Detection:**

- Claim velocity check — if 50+ claims arrive from
  same PIN code within 10 minutes = auto-freeze + alert
- Device fingerprint clustering — multiple claims from
  same physical device = immediate block
- Telegram/social signal: sudden spike in claims
  from a single zone = coordinated fraud flag

---

### 3. The UX Balance — Protecting Honest Workers

We use a 3-tier response system — NOT binary
approve/reject:

**Tier 1 — Auto Approved (Green)**
All signals consistent. Payout in under 60 seconds.

**Tier 2 — Soft Flag (Amber)**
1-2 signals inconsistent (e.g. weak GPS signal
in heavy rain — very common).
→ Worker receives payout with a small verification
request: "Confirm you are outdoors" (one tap).
→ If confirmed, full payout released immediately.
→ No penalty. No delay beyond 2 minutes.

**Tier 3 — Hard Flag (Red)**
3+ signals contradicting GPS. Coordinated pattern detected.
→ Claim paused. Worker notified instantly.
→ Worker can submit one passive proof
(auto-uploaded photo with metadata OR cell tower log).
→ If verified — payout released + flag cleared.
→ If fraud confirmed — account suspended.

**Key Principle: Innocent Until Proven Guilty**
A worker with poor network in heavy rain
WILL have inconsistent GPS signals.
Our system knows this and never auto-rejects
based on a single signal. The burden of proof
is on our system — not the worker.

---

### Why This Architecture Works

- No single point of failure — spoofer must fake
  6+ signals simultaneously (practically impossible)
- Coordinated rings are detected by velocity
  clustering before individual claims are processed
- Honest workers face ZERO friction in 95%+ of cases
- The system gets smarter over time —
  Isolation Forest model retrains on new fraud patterns

---

## Business Viability

| Metric                    | Value                          |
| ------------------------- | ------------------------------ |
| Target workers — Year 1   | 10,000                         |
| Average weekly premium    | Rs.40                          |
| Weekly premium revenue    | Rs.4,00,000                    |
| Expected claim rate       | 12% of active workers per week |
| Average payout per claim  | Rs.370                         |
| Weekly payout cost        | Rs.44,400                      |
| Gross margin (before ops) | ~89%                           |
| Break-even worker count   | 500 workers                    |

**Why this model is financially sustainable:**

- Not every disruption affects every worker — localised events mean only a subset claims each week
- Parametric thresholds filter out minor disruptions — only genuine income-loss events trigger payouts
- Fraud detection reduces invalid claim volume significantly
- As the worker base scales, risk distributes across a larger pool — margins improve

---

## Technology Stack

| Layer           | Technology                   | Reason                                                       |
| --------------- | ---------------------------- | ------------------------------------------------------------ |
| Frontend        | React.js (PWA)               | Mobile-friendly, no app store needed, low-end device support |
| Backend         | Python / Django              | Fast development, strong ML library ecosystem                |
| Database        | Firebase / PostgreSQL        | Real-time sync for claims, structured policy records         |
| ML / AI         | scikit-learn (Python)        | Linear Regression + Isolation Forest, well-documented        |
| Weather API     | OpenWeatherMap (free tier)   | Real rainfall by PIN code, 1000 free API calls/day           |
| AQI API         | aqicn.org (free tier)        | Real-time AQI by city, free access                           |
| Payments        | Razorpay (test/sandbox mode) | Indian UPI support, sandbox mode available for demo          |
| Hosting         | Vercel + Render (free tier)  | Free frontend and backend hosting, easy deployment           |
| Version Control | GitHub                       | Required by hackathon — same repo across all 3 phases        |

---

## Development Plan

### Phase 1 — Ideation & Foundation (Deadline: March 20)

- [x] Persona research and scenario definition
- [x] Weekly premium model designed
- [x] Parametric trigger thresholds defined
- [x] AI/ML integration plan documented
- [x] Tech stack finalised
- [x] Adversarial defense strategy documented
- [ ] Basic UI wireframe / mockup
- [ ] 2-minute strategy video
- [ ] README submitted via GitHub

### Phase 2 — Core Build (Deadline: April 4)

- [ ] Worker registration and onboarding flow
- [ ] Insurance policy activation
- [ ] Dynamic premium calculator (rule-based moving to ML)
- [ ] OpenWeatherMap API integration
- [ ] AQI API integration
- [ ] Automated claim trigger system (3–5 triggers)
- [ ] Mock payout flow via Razorpay test mode
- [ ] Multi-signal fraud detection implementation
- [ ] 3-tier claim response system
- [ ] 2-minute demo video

### Phase 3 — Scale & Polish (Deadline: April 17)

- [ ] Advanced fraud detection (GPS check + Isolation Forest)
- [ ] Worker dashboard (earnings protected, active policy, claim history)
- [ ] Admin dashboard (loss ratios, fraud alerts, weekly risk forecast)
- [ ] Full simulated payout demonstration
- [ ] 5-minute final demo video (live disruption trigger to payout)
- [ ] Final pitch deck (PDF) — persona, AI architecture, business model

---

## Expected Impact

SureShift addresses a real and currently unserved gap in India's gig economy.

**For workers:**

- Small weekly cost provides meaningful income protection
- Zero-effort claims — no paperwork, no waiting, no phone calls
- Financial stability during disruptions that are completely outside their control

**For the insurance industry:**

- Scalable parametric model with low operational cost
- Data-driven risk assessment reduces loss ratio
- Expandable beyond food delivery to cab drivers, construction workers, street vendors

**Our goal is to build a system that is simple, transparent, and scalable for India's 15 million+ gig delivery workers.**

---

_SureShift — Protecting Every Shift, Automatically._
