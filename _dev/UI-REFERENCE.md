# Troubleshooting System - UI Reference Guide

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│ TOOLBAR                                                      │
│ ┌──────────┬────────────┬──────────────┬────────┬─────────┐ │
│ │ 📚 Lab   │ 🔧 TROUBLE │ ❓ Help      │ Other  │ Buttons │ │
│ │ Library  │ SHOOT      │              │        │         │ │
│ └──────────┴────────────┴──────────────┴────────┴─────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## 1. Troubleshooting Modal (Scenario Selector)

```
┌───────────────────────────────────────────────────────────┐
│  🔧 Troubleshooting Scenarios - Fix Broken Networks       │
│                                                      [X]  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│              0/10 scenarios completed                     │
│                                                           │
│  ┌────┬──────────┬─────────────┬──────────┐             │
│  │All │🔰Beginner│🎓Intermediate│🏆Advanced│             │
│  └────┴──────────┴─────────────┴──────────┘             │
│                                                           │
│  ┌─────────────────────────────────┐  ┌────────────────┐ │
│  │ BEGINNER                     ⭐ │  │ INTERMEDIATE   │ │
│  │ Interface Shutdown Mystery      │  │ [Future]       │ │
│  │ ⏱ 10 min                        │  │                │ │
│  │ PC1 cannot ping Router1...      │  │                │ │
│  │ 🏆 Best: 80 pts                 │  │                │ │
│  └─────────────────────────────────┘  └────────────────┘ │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

## 2. Troubleshooting Mode - Right Panel

```
┌───────────────────────────────────────────────────────────┐
│  🔧 TROUBLESHOOTING MODE                           [Exit] │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  📋 Problem Description                                   │
│  ┌───────────────────────────────────────────────────┐   │
│  │ PC1 cannot ping Router1, but the cabling looks    │   │
│  │ correct. What's wrong?                            │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  🛠️ Diagnostic Tools                                     │
│  ┌───────────────────────────────────────────────────┐   │
│  │ show vlan brief                                   │   │
│  │ show interfaces status                            │   │
│  │ show ip interface brief                           │   │
│  │ show running-config                               │   │
│  │ ping [destination]                                │   │
│  │ show ip route                                     │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  📊 Progress Tracker                                      │
│  ┌───────────────────────────────────────────────────┐   │
│  │ ✅ Identified symptom                             │   │
│  │ 🔍 Diagnosing root cause                          │   │
│  │ ⬜ Applied fix                                     │   │
│  │ ⬜ Verified solution                               │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  💡 Progressive Hints                                     │
│  ┌───────────────────────────────────────────────────┐   │
│  │ 🔍 Hint 1: General Guidance              ▼       │   │
│  ├───────────────────────────────────────────────────┤   │
│  │ Check the router's interface status using show... │   │
│  └───────────────────────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────┐   │
│  │ 🔍 Hint 2: Specific Location              🔒      │   │
│  └───────────────────────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────┐   │
│  │ 🔍 Hint 3: Exact Problem                  🔒      │   │
│  └───────────────────────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────┐   │
│  │ ⚠️ Show Complete Solution              ⚠️        │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │             🧪 Test Fix                           │   │
│  └───────────────────────────────────────────────────┘   │
│  ┌───────────────────────────────────────────────────┐   │
│  │             🔄 Reset Scenario                     │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

## 3. Hint System States

### Initial State (Hint 1 unlocked)
```
┌────────────────────────────────────────┐
│ 🔍 Hint 1: General Guidance      ▼    │  ← Unlocked, ready to reveal
├────────────────────────────────────────┤
│ 🔍 Hint 2: Specific Location     🔒   │  ← Locked (grayed out)
├────────────────────────────────────────┤
│ 🔍 Hint 3: Exact Problem         🔒   │  ← Locked (grayed out)
└────────────────────────────────────────┘
```

### After Hint 1 Revealed
```
┌────────────────────────────────────────┐
│ 🔍 Hint 1: General Guidance      ▲    │  ← Used (purple border)
├────────────────────────────────────────┤
│ Check the router's interface status... │  ← Content visible
├────────────────────────────────────────┤
│ 🔍 Hint 2: Specific Location     ▼    │  ← Now unlocked
├────────────────────────────────────────┤
│ 🔍 Hint 3: Exact Problem         🔒   │  ← Still locked
└────────────────────────────────────────┘
```

### All Hints + Solution Revealed
```
┌────────────────────────────────────────┐
│ 🔍 Hint 1: General Guidance      ▲    │  ← All hints used
│ [Hint 1 content expanded]              │
├────────────────────────────────────────┤
│ 🔍 Hint 2: Specific Location     ▲    │
│ [Hint 2 content expanded]              │
├────────────────────────────────────────┤
│ 🔍 Hint 3: Exact Problem         ▲    │
│ [Hint 3 content expanded]              │
├────────────────────────────────────────┤
│ ⚠️ Show Complete Solution      ⚠️     │  ← Red (penalty)
├────────────────────────────────────────┤
│ The interface was administratively...  │
│ ┌──────────────────────────────────┐   │
│ │ enable                           │   │
│ │ configure terminal               │   │
│ │ interface GigabitEthernet0/0     │   │
│ │ no shutdown                      │   │
│ │ end                              │   │
│ └──────────────────────────────────┘   │
│ The 'no shutdown' command enables...   │
└────────────────────────────────────────┘
```

## 4. Test Results Display

### Success Result
```
┌────────────────────────────────────────────────┐
│  ✅ Great job! Issue resolved                  │
│                                                │
│  The interface is now up and connectivity has  │
│  been restored. You successfully identified    │
│  and fixed the issue!                          │
│                                                │
│  ┌──────────────────────────────────────────┐ │
│  │                                          │ │
│  │              80                          │ │
│  │            Points                        │ │
│  │                                          │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  Skills Practiced:                             │
│  [Interface troubleshooting]                   │
│  [show ip interface brief]                     │
│  [Administrative vs operational state]         │
│  [no shutdown command]                         │
└────────────────────────────────────────────────┘
```

### Failure Result
```
┌────────────────────────────────────────────────┐
│  ❌ Issue still present                        │
│                                                │
│  The problem hasn't been resolved yet. Try     │
│  using the diagnostic tools and hints to       │
│  identify the root cause. Remember to check    │
│  the interface status!                         │
└────────────────────────────────────────────────┘
```

## 5. Color Coding

### Difficulty Badges
- **BEGINNER**: Green background (#10b981)
- **INTERMEDIATE**: Orange background (#f59e0b)
- **ADVANCED**: Red background (#ef4444)

### Status Indicators
- **⭐**: Perfect score (100 points, no hints)
- **✅**: Completed (any score)
- **🔒**: Locked (gray, not clickable)
- **▼**: Expandable/collapsed
- **▲**: Expanded/visible

### Progress Tracker Colors
- **✅ Green**: Completed stage
- **🔍 Cyan**: In progress
- **⬜ Gray**: Not started

### Button Colors
- **Test Fix**: Green gradient
- **Solution**: Red gradient (warning)
- **Reset**: Default gray
- **Exit**: White on orange

## 6. Responsive Behavior

### Desktop (>1200px)
- 3-column grid for scenario cards
- Full sidebar visible
- All content in single screen

### Tablet (768px-1200px)
- 2-column grid for scenario cards
- Sidebar scrollable
- Modal at 90% width

### Mobile (<768px)
- 1-column grid for scenario cards
- Stacked layout
- Touch-optimized buttons (44px min)

## 7. Interactive Elements

### Clickable/Interactive
- ✓ Scenario cards (loads scenario)
- ✓ Filter buttons (filters by difficulty)
- ✓ Hint buttons (reveals/collapses)
- ✓ Solution button (reveals/collapses)
- ✓ Test Fix button (runs verification)
- ✓ Reset button (confirms, reloads)
- ✓ Exit button (confirms if unsaved)
- ✓ Diagnostic tool buttons (shows alert)

### Non-Interactive (Display Only)
- Problem description box
- Progress tracker items
- Hint/solution content
- Result display
- Score display
- Skills tags

## 8. Animation Effects

### On Load
- Modal fades in (0.3s)
- Cards slide up (staggered)

### On Interaction
- Button hover: lift up 2px
- Button click: scale down 0.95
- Hint expand: slide down (0.3s)
- Score reveal: fade in + scale

### Status Changes
- Progress icon change: instant
- Border color change: 0.3s transition
- Background color: 0.3s transition

## 9. Accessibility

### Keyboard Navigation
- Tab through buttons
- Enter to activate
- Arrow keys in modals

### Screen Reader Support
- Aria labels on buttons
- Semantic HTML structure
- Status announcements

### Color Contrast
- WCAG AA compliant
- High contrast mode support
- No color-only indicators

## 10. States Summary

| Element | Initial | After Hint 1 | After All Hints | After Test Pass |
|---------|---------|--------------|-----------------|-----------------|
| Hint 1 | Unlocked | Used (purple) | Used (purple) | Used (purple) |
| Hint 2 | Locked 🔒 | Unlocked | Used (purple) | Used (purple) |
| Hint 3 | Locked 🔒 | Locked 🔒 | Used (purple) | Used (purple) |
| Progress 1 | ✅ Green | ✅ Green | ✅ Green | ✅ Green |
| Progress 2 | ⏳ Gray | 🔍 Cyan | 🔍 Cyan | 🔍 Cyan |
| Progress 3 | ⬜ Gray | ⬜ Gray | 🔧 Cyan | 🔧 Cyan |
| Progress 4 | ⬜ Gray | ⬜ Gray | ⬜ Gray | ✅ Green |
| Score | Hidden | Hidden | Hidden | Visible |
| Card Status | None | None | None | ✅ or ⭐ |

---

**File Location**: `/home/eq/Ai content creation/network-essentials/packet-tracer-lite-v3.html`

**Total Lines**: 5,810 lines (1,057 added)

**Browser**: Open in Chrome, Firefox, or Safari for best experience
