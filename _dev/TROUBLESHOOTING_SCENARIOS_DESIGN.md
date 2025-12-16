# Packet Tracer Lite v3.0 - Troubleshooting Scenarios

**Concept:** Pre-built networks with intentional misconfigurations that students must diagnose and fix.

---

## 🎯 SYSTEM ARCHITECTURE

### **Core Features:**

1. **Broken Network Scenarios**
   - Pre-configured topologies with deliberate errors
   - Realistic symptoms (connectivity fails, performance issues)
   - Multiple troubleshooting paths possible
   - Progressive hint system

2. **Diagnostic Tools**
   - Built-in commands (show, ping, traceroute)
   - Symptom checker
   - Hint system (3 levels: gentle → specific → solution)
   - Verification system

3. **Learning Loop**
   - Problem identification
   - Root cause analysis
   - Configuration fix
   - Verification
   - Explanation of why it was broken

---

## 🔧 SCENARIO STRUCTURE

### Each Scenario Includes:

```javascript
{
    id: 'troubleshoot-01',
    title: 'VLAN Misconfiguration Mystery',
    difficulty: 'intermediate',
    estimatedTime: '20 min',
    category: 'troubleshooting',
    
    // Broken topology
    topology: { /* devices with errors */ },
    
    // What's wrong
    problem: {
        symptom: "PC1 cannot ping PC2 even though they're in same VLAN",
        rootCause: "Wrong VLAN assignment on switch port",
        affectedDevices: ['Switch1'],
        correctBehavior: "PCs in same VLAN should communicate"
    },
    
    // Progressive hints
    hints: [
        { level: 1, hint: "Check VLAN assignments on switch ports" },
        { level: 2, hint: "Use 'show vlan brief' to see port-to-VLAN mappings" },
        { level: 3, hint: "PC2's port is assigned to VLAN 20 instead of VLAN 10" }
    ],
    
    // How to fix
    solution: {
        commands: [
            "interface FastEthernet0/2",
            "switchport access vlan 10"
        ],
        explanation: "PC2's port was incorrectly assigned to VLAN 20..."
    },
    
    // Learning objectives
    skills: ['VLAN troubleshooting', 'show commands', 'logical analysis']
}
```

---

## 📚 PROPOSED SCENARIOS (10 Total)

### **Beginner Scenarios (3)**

#### **Scenario 1: Interface Shutdown Mystery**
- **Problem:** PC cannot ping router, but cabling is correct
- **Root Cause:** Interface is administratively down
- **Skills:** Basic troubleshooting, show commands, no shutdown
- **Time:** 10 minutes

#### **Scenario 2: Wrong IP Address**
- **Problem:** Ping fails between two PCs
- **Root Cause:** IP address on wrong subnet
- **Skills:** IP addressing, subnet mask understanding
- **Time:** 15 minutes

#### **Scenario 3: Missing Default Gateway**
- **Problem:** PC can ping router but not remote networks
- **Root Cause:** Default gateway not configured
- **Skills:** Gateway concept, routing basics
- **Time:** 15 minutes

---

### **Intermediate Scenarios (4)**

#### **Scenario 4: VLAN Misconfiguration**
- **Problem:** PC1 can't reach PC2 (same VLAN should work)
- **Root Cause:** Port assigned to wrong VLAN
- **Skills:** VLAN troubleshooting, show vlan brief
- **Time:** 20 minutes

#### **Scenario 5: Trunk Not Passing VLANs**
- **Problem:** VLANs work locally but not across trunk
- **Root Cause:** Native VLAN mismatch or allowed VLANs misconfigured
- **Skills:** Trunk troubleshooting, show interfaces trunk
- **Time:** 25 minutes

#### **Scenario 6: OSPF Neighbors Not Forming**
- **Problem:** OSPF routing not working
- **Root Cause:** Mismatched area IDs or hello/dead timers
- **Skills:** OSPF troubleshooting, neighbor states, timers
- **Time:** 25 minutes

#### **Scenario 7: ACL Blocking Legitimate Traffic**
- **Problem:** Some traffic works, other doesn't
- **Root Cause:** Overly restrictive ACL or implicit deny
- **Skills:** ACL troubleshooting, access-list logic, show access-lists
- **Time:** 25 minutes

---

### **Advanced Scenarios (3)**

#### **Scenario 8: Routing Loop**
- **Problem:** Network extremely slow, packets looping
- **Root Cause:** Static route misconfiguration creating loop
- **Skills:** Routing table analysis, traceroute, loop detection
- **Time:** 30 minutes

#### **Scenario 9: Subnet Mask Mismatch**
- **Problem:** Some hosts work, others don't
- **Root Cause:** Inconsistent subnet masks across network
- **Skills:** Subnetting, network/broadcast calculation
- **Time:** 30 minutes

#### **Scenario 10: Multi-Layer Problem**
- **Problem:** Complex scenario with 3-4 simultaneous issues
- **Root Cause:** VLAN + ACL + routing issues combined
- **Skills:** Systematic troubleshooting, layer-by-layer diagnosis
- **Time:** 40 minutes

---

## 🎮 USER INTERFACE

### **Troubleshooting Mode UI:**

```
┌─────────────────────────────────────────┐
│ 🔧 Troubleshooting Scenario             │
│ Scenario 4: VLAN Misconfiguration       │
│ Difficulty: Intermediate                │
└─────────────────────────────────────────┘

📋 Problem Description:
PC1 (VLAN 10) cannot ping PC2 (also VLAN 10)
even though they're on the same switch.

🎯 Your Mission:
Diagnose and fix the network issue.

┌─ Diagnostic Tools ──────────────────────┐
│ • show vlan brief                        │
│ • show interfaces status                 │
│ • show running-config                    │
│ • ping [destination]                     │
└──────────────────────────────────────────┘

┌─ Hints Available ───────────────────────┐
│ 💡 Hint 1: [Click to reveal]            │
│ 💡 Hint 2: [Locked - use Hint 1 first]  │
│ 💡 Hint 3: [Locked]                     │
│ 🔑 Solution: [Click to see answer]      │
└──────────────────────────────────────────┘

┌─ Your Progress ─────────────────────────┐
│ ✅ Identified symptom                    │
│ ⏳ Diagnosing root cause...              │
│ ⬜ Applied fix                           │
│ ⬜ Verified solution                     │
└──────────────────────────────────────────┘

[Test Fix] [Reset Scenario] [Next Scenario]
```

---

## 🧠 LEARNING METHODOLOGY

### **Troubleshooting Process (Teach Students):**

1. **Identify Symptoms** - What's not working?
2. **Gather Information** - Use show commands
3. **Analyze Data** - What's different from expected?
4. **Hypothesize Root Cause** - What could cause this?
5. **Test Hypothesis** - Apply fix and verify
6. **Document Solution** - Explain what was wrong

### **Progressive Hint System:**

- **Hint 1 (Gentle):** General guidance, no specific answer
- **Hint 2 (Specific):** Points to exact location of problem
- **Hint 3 (Solution):** Tells exactly what's wrong and how to fix

Students penalized for using hints (gamification):
- No hints: 100 points
- Hint 1: 80 points
- Hint 2: 60 points
- Hint 3/Solution: 40 points

---

## 🎨 IMPLEMENTATION DETAILS

### **New Features to Add:**

1. **Troubleshooting Library Button**
   - New toolbar button: "🔧 Troubleshoot"
   - Opens scenario selector
   - Shows completed scenarios with scores

2. **Scenario State Management**
   - Track which scenarios completed
   - Save hint usage
   - Record time to solve
   - Store scores

3. **Diagnostic Commands Panel**
   - Pre-built command shortcuts
   - Output display area
   - Command history
   - Compare expected vs actual output

4. **Verification System**
   - Automatic testing when student clicks "Test Fix"
   - Checks if issue is resolved
   - Provides feedback (pass/fail/partial)

5. **Badge/Achievement System**
   - "Quick Thinker" - Solved without hints
   - "Detective" - Completed all scenarios
   - "Network Doctor" - Solved advanced scenarios
   - "Speed Demon" - Solved under time estimate

---

## 📊 METRICS & FEEDBACK

### **Track for Each Scenario:**
- Time to solve
- Hints used
- Commands executed
- Success rate
- Common mistakes

### **Provide Feedback:**
- "Great job! You identified the VLAN misconfiguration quickly."
- "Pro tip: Always check 'show vlan brief' first in VLAN issues."
- "You used effective troubleshooting methodology."

---

## 🎯 TECHNICAL IMPLEMENTATION

### **File Structure:**

```javascript
const TROUBLESHOOTING_SCENARIOS = {
    'ts-01-interface-down': {
        id: 'ts-01-interface-down',
        title: 'Interface Shutdown Mystery',
        difficulty: 'beginner',
        estimatedTime: '10 min',
        
        // Broken topology
        topology: {
            devices: [
                {
                    id: 'router1',
                    type: 'router',
                    name: 'Router1',
                    interfaces: {
                        'Gi0/0': {
                            ip: '192.168.1.1',
                            mask: '255.255.255.0',
                            shutdown: true  // ← THE PROBLEM!
                        }
                    }
                },
                {
                    id: 'pc1',
                    type: 'pc',
                    name: 'PC1',
                    ip: '192.168.1.10',
                    gateway: '192.168.1.1'
                }
            ]
        },
        
        // Problem definition
        problem: {
            symptom: "PC1 cannot ping Router1 (192.168.1.1)",
            rootCause: "Router interface Gi0/0 is administratively down",
            affectedDevices: ['router1'],
            layers: ['Layer 1', 'Layer 2']
        },
        
        // Hints
        hints: [
            {
                level: 1,
                text: "Check the router's interface status using show commands."
            },
            {
                level: 2,
                text: "Look at 'show ip interface brief' - notice the 'Status' column."
            },
            {
                level: 3,
                text: "Interface Gi0/0 shows 'administratively down' - it's been shutdown."
            }
        ],
        
        // Solution
        solution: {
            commands: [
                "enable",
                "configure terminal",
                "interface GigabitEthernet0/0",
                "no shutdown"
            ],
            explanation: "The interface was administratively disabled with the 'shutdown' command. The 'no shutdown' command enables it."
        },
        
        // Verification
        verification: {
            test: "ping from PC1 to 192.168.1.1",
            expectedResult: "Ping should succeed (5/5 replies)",
            commands: ["show ip interface brief"]
        },
        
        // Learning objectives
        skills: [
            'Interface troubleshooting',
            'show ip interface brief',
            'Administrative vs operational state',
            'no shutdown command'
        ],
        
        // Related content
        relatedLab: 'lab1-routing',
        relatedPresentation: 'ospf-presentation.html'
    }
};
```

---

## 🚀 DEPLOYMENT PLAN

### **Phase 1: Core System (4-6 hours)**
1. Add troubleshooting mode UI
2. Implement scenario loader
3. Create hint system
4. Build verification engine

### **Phase 2: Scenarios (6-8 hours)**
5. Build 3 beginner scenarios
6. Build 4 intermediate scenarios
7. Build 3 advanced scenarios

### **Phase 3: Polish (2-3 hours)**
8. Add badges/achievements
9. Create progress tracking
10. Build scenario completion dashboard

---

## 💡 UNIQUE FEATURES

### **What Makes This Special:**

1. **Realistic Errors** - Based on real-world misconfigurations
2. **Progressive Learning** - Start easy, build to complex
3. **Hint System** - Students learn without frustration
4. **Verification** - Automatic checking of fixes
5. **Methodology Teaching** - Teaches HOW to troubleshoot
6. **Skills Transfer** - Prepares for real network issues

### **Advantages Over Traditional Labs:**

- **Safe Environment** - Can't break real equipment
- **Instant Reset** - Try different approaches
- **Multiple Paths** - Various solutions possible
- **Immediate Feedback** - Know if fix worked
- **Self-Paced** - Work at own speed
- **Repeatable** - Practice same scenario multiple times

---

## 📈 EDUCATIONAL VALUE

### **Skills Developed:**

- ✅ Systematic troubleshooting methodology
- ✅ Command-line proficiency (show commands)
- ✅ Logical thinking and root cause analysis
- ✅ Pattern recognition (common issues)
- ✅ Problem-solving under constraints
- ✅ Configuration verification
- ✅ Real-world network diagnosis

### **CCNA/Network+ Alignment:**

- Covers troubleshooting domains extensively
- Practices show commands repeatedly
- Builds confidence in diagnosis
- Prepares for simulation questions on exams

---

Would you like me to build this troubleshooting system using agents? 🚀

I can deploy:
- **1 interactive-code-architect agent** to build the core system
- **Multiple agents in parallel** to create 5-10 scenarios simultaneously

This would add tremendous real-world value to the catalog!
