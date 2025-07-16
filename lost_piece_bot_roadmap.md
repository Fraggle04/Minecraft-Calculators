
# 🧭 Lost Piece Bot — Development Roadmap

---

## 🟥 Core System Features

| Feature                        | Priority | Status      | Notes                                               |
|-------------------------------|----------|-------------|-----------------------------------------------------|
| **Combo Calculator**          | 🔴 High  | 🔜 Backlog  | Calculate best move combos for max DPS              |
| **Stamina Efficiency Analyzer** | 🔴 High | 🔜 Backlog  | Rate skills by damage-per-stamina efficiency        |
| **What-If Calculator**        | 🟠 Medium | 🔜 Backlog  | Simulate hypothetical class stats/damage            |
| **Player Stats Card Generator** | 🟠 Medium | 🔜 Backlog | Generate a visual card for user stats               |
| **AI Assistant Q&A**          | 🟠 Medium | 🔜 Backlog  | Q&A bot trained on Lost Piece meta                  |

---

## 🟦 Meta Analysis & Combat Tracking

| Feature                      | Priority | Status      | Notes                                               |
|-----------------------------|----------|-------------|-----------------------------------------------------|
| **Tier List Voting System** | 🔴 High  | 🔜 Backlog  | Let users vote & rank best classes                  |
| **PvE/PvP Split Tier Voting** | 🟡 Low | 🧠 Idea     | Separate tier lists for different modes             |
| **Meta Analyzer**           | 🟠 Medium | 🔜 Backlog  | Analyze usage trends, builds, counters              |
| **Patch Impact Scanner**    | 🟠 Medium | 🔜 Backlog  | Auto-scan patch notes for balance impact            |

---

## 🟩 Fun & Engagement

| Feature                   | Priority | Status      | Notes                                               |
|--------------------------|----------|-------------|-----------------------------------------------------|
| **Titles & Flair System**| 🔴 High  | 🔜 Backlog  | Users earn cosmetic titles from milestones          |
| **Daily Reward Spin**    | 🟠 Medium | 🔜 Backlog  | Gacha-style spinner for small rewards               |
| **Leaderboard System**   | 🟠 Medium | 🔜 Backlog  | Ranks top players by damage, combos, etc.           |
| **Trivia Mode**          | 🟠 Medium | 🔜 Backlog  | Fun quiz game about One Piece / game lore           |
| **Custom Role Unlock Voting** | 🟠 Medium | 🔜 Backlog | Users vote to unlock server roles                  |

---

## 🛠 Dev Tools & Infrastructure

| Feature                          | Priority | Status      | Notes                                               |
|----------------------------------|----------|-------------|-----------------------------------------------------|
| **Fix: `/compare` move output misalign** | 🔴 High | 🔧 Fix Planned | Handle unequal move counts cleanly          |
| **SQLite/TinyDB Persistence**    | 🔴 High  | 🔜 Backlog  | Save votes, rewards, stats across sessions          |
| **Logging & Usage Analytics**    | 🔴 High  | 🔜 Backlog  | Track user behavior and usage stats                 |
| **Sentry Error Tracking**        | 🟠 Medium | 🔜 Backlog  | Crash/error tracking for debugging                  |
| **Redis Caching**                | 🟡 Low   | 🧠 Idea     | Speed up repeated queries for large datasets        |

---

## 📊 Priority View

| Priority | Features |
|----------|----------|
| 🔴 High  | Combo Calculator, Stamina Analyzer, Tier Voting, Titles & Flair, Fix `/compare`, Persistence, Logging |
| 🟠 Medium| Meta Analyzer, Patch Scanner, Daily Spin, Leaderboards, Stats Cards, Trivia, AI Q&A, Sentry |
| 🟡 Low   | PvE/PvP Split Tier Voting, Redis Caching |

---

## ✅ Status View

| Status       | Features |
|--------------|----------|
| 🔜 Backlog    | Most core, meta, fun, and tool features |
| 🔧 Fix Planned| `/compare` move alignment issue         |
| 🧠 Idea       | PvE/PvP Split, Redis                    |

---
