# Packet Tracer Lite v3.0 - Design Document

**Prepared by:** EQ6
**Date:** 2025-12-02
**Project:** Standalone browser-based network simulator
**Status:** Design Phase

---

## 🎯 Project Goals

Create an enhanced, standalone browser-based network simulator that:
- **Does NOT overwrite** existing v2.0 simulator
- Provides **Cisco Packet Tracer-like** experience in browser
- Focuses on **educational networking fundamentals**
- Requires **zero installation** (pure HTML/CSS/JavaScript)
- Supports **VLAN, routing protocols, ACLs, and packet visualization**

---

## 📋 Feature Comparison

| Feature | v1.0 (29KB) | v2.0 (466KB) | **v3.0 (New)** |
|---------|-------------|--------------|----------------|
| **File** | networking_Lab.Html | interactive-network-simulator.html | **packet-tracer-lite-v3.html** |
| Drag-drop devices | ✅ Basic | ✅ Enhanced | ✅ **Advanced with snap-to-grid** |
| Device types | Router, Switch, Host | Router, Switch, Host + Module Manager | ✅ **Router, L2 Switch, L3 Switch, PC, Server, Cloud** |
| IP Configuration | ✅ Basic | ✅ Enhanced | ✅ **CLI-style config panel** |
| Routing | DV only | DV only | ✅ **DV + OSPF + Static** |
| VLANs | ❌ No | ❌ No | ✅ **Full VLAN support with 802.1Q** |
| ACLs | ❌ No | ❌ No | ✅ **Standard & Extended ACLs** |
| Packet visualization | Basic ping | Animated ping | ✅ **Layer 2/3 visualization with headers** |
| CLI Interface | ❌ No | ❌ No | ✅ **Cisco IOS-style commands** |
| Configuration export | JSON | JSON | ✅ **JSON + Cisco config format** |
| Lab scenarios | Demo only | Module manager | ✅ **Built-in lab library (10+ scenarios)** |

---

## 🏗️ Architecture Design

### Core Components

```
packet-tracer-lite-v3.html (standalone file)
├── UI Layer
│   ├── Canvas (SVG topology view with zoom/pan)
│   ├── Device Toolbar (add devices)
│   ├── CLI Panel (Cisco IOS-style commands)
│   ├── Configuration Panel (GUI config)
│   ├── Packet Inspector (Layer 2/3 visualization)
│   └── Lab Library (pre-built scenarios)
│
├── Data Layer
│   ├── Device Manager (Router, L2SW, L3SW, PC, Server, Cloud)
│   ├── Topology Manager (connections, links)
│   ├── Routing Engine (Static, DV, OSPF)
│   ├── VLAN Manager (trunks, access ports, 802.1Q)
│   ├── ACL Engine (standard, extended)
│   └── Packet Simulator (L2/L3 forwarding logic)
│
└── Simulation Engine
    ├── Packet Generator (ICMP, ARP, broadcast)
    ├── Forwarding Logic (L2 switching, L3 routing)
    ├── Animation Engine (packet path visualization)
    └── Protocol Simulators (ARP, OSPF, STP basics)
```

---

## 🎨 User Interface Design

### Main Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [File] [Edit] [Tools] [Simulation] [Help]     [🔍 Zoom]   │
├──────────┬──────────────────────────────────────┬───────────┤
│          │                                      │  Device   │
│  Device  │                                      │  Config   │
│  Palette │         Canvas (Topology View)       │  ────────  │
│  ────────│                                      │  CLI Tab  │
│  Router  │      [Drag devices here]            │  ────────  │
│  L2 SW   │                                      │  Routing  │
│  L3 SW   │                                      │  Table    │
│  PC      │                                      │  ────────  │
│  Server  │                                      │  VLAN     │
│  Cloud   │                                      │  Table    │
│          │                                      │  ────────  │
│          │                                      │  Packet   │
│          │                                      │  Inspector│
├──────────┴──────────────────────────────────────┴───────────┤
│  Status: Ready  |  Mode: Design  |  Last: Saved 2min ago    │
└─────────────────────────────────────────────────────────────┘
```

### CLI Panel (Cisco IOS-style)

```
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
Router(config-if)# exit
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# end
Router# show ip route
Router# show ip ospf neighbor
```

---

## 🔧 Enhanced Features (v3.0)

### 1. CLI-Style Configuration

**Commands Supported:**
```cisco
# Global commands
enable
configure terminal
exit
end
show running-config
show ip interface brief
show ip route
show vlan brief
show spanning-tree

# Interface commands
interface <name>
ip address <ip> <mask>
switchport mode {access|trunk}
switchport access vlan <id>
switchport trunk allowed vlan <range>
no shutdown

# Routing commands
router ospf <process-id>
network <network> <wildcard> area <area-id>
ip route <network> <mask> <next-hop>

# VLAN commands
vlan <id>
name <name>

# ACL commands
access-list <num> {permit|deny} <source> [<wildcard>]
ip access-group <num> {in|out}
```

### 2. VLAN Support

**Features:**
- Create VLANs (1-4094)
- Configure access ports (assign to VLAN)
- Configure trunk ports (802.1Q tagging)
- Native VLAN configuration
- Inter-VLAN routing on L3 switches

**Visual Indicators:**
- Color-coded VLANs on canvas
- VLAN tags shown in packet inspector
- Trunk links shown with dashed lines

### 3. OSPF Routing Protocol

**Implementation:**
- OSPF Hello packets (simulated)
- Neighbor discovery and adjacency
- DR/BDR election (simplified)
- LSA flooding visualization
- SPF calculation (Dijkstra)
- Routing table updates

**Visual Features:**
- Show OSPF neighbor states
- Animate LSA flooding
- Display SPF tree calculation

### 4. Packet Visualization

**Layer 2 Frame:**
```
┌────────────────────────────────────────────┐
│ Ethernet II Frame                          │
├────────────────────────────────────────────┤
│ Dest MAC:   00:1A:2B:3C:4D:5E             │
│ Source MAC: 00:AA:BB:CC:DD:EE             │
│ Type:       0x0800 (IPv4)                 │
│ VLAN Tag:   802.1Q VLAN 10 (if tagged)    │
└────────────────────────────────────────────┘
```

**Layer 3 Packet:**
```
┌────────────────────────────────────────────┐
│ IP Packet                                  │
├────────────────────────────────────────────┤
│ Source IP:      192.168.1.10              │
│ Dest IP:        192.168.2.20              │
│ Protocol:       ICMP (1)                   │
│ TTL:            64                         │
│ Checksum:       0x1234                     │
└────────────────────────────────────────────┘
```

**ICMP Payload:**
```
┌────────────────────────────────────────────┐
│ ICMP Echo Request                          │
├────────────────────────────────────────────┤
│ Type:           8 (Echo Request)           │
│ Code:           0                          │
│ Sequence:       1                          │
│ Data:           64 bytes                   │
└────────────────────────────────────────────┘
```

### 5. Access Control Lists (ACLs)

**Standard ACLs (1-99):**
```cisco
access-list 10 permit 192.168.1.0 0.0.0.255
access-list 10 deny any
```

**Extended ACLs (100-199):**
```cisco
access-list 100 permit icmp 192.168.1.0 0.0.0.255 192.168.2.0 0.0.0.255
access-list 100 deny ip any any
```

**Visual Feedback:**
- Packets blocked by ACL shown in red
- ACL hit counters displayed
- Detailed deny reasons in packet inspector

### 6. Device Types

**Router:**
- Multiple interfaces (Gi0/0, Gi0/1, Se0/0/0, etc.)
- IP routing enabled by default
- Supports static routes, DV, OSPF
- ACL support on interfaces

**Layer 2 Switch:**
- Multiple ports (Fa0/1 - Fa0/24, Gi0/1 - Gi0/2)
- VLAN support
- Access/trunk port modes
- Basic STP (root bridge selection)
- MAC address table

**Layer 3 Switch:**
- Everything from L2 switch PLUS
- IP routing capability
- SVI (Switched Virtual Interface) for inter-VLAN routing
- Supports routing protocols

**PC/Server:**
- Single NIC
- IP address configuration
- Default gateway
- Generate ping, traceroute
- ARP cache

**Cloud (Internet):**
- Represents WAN/Internet
- Pre-configured IP addresses
- Used for testing external connectivity

---

## 📚 Built-In Lab Library

### Lab 1: Basic Routing (2 Networks)
- 1 Router, 2 Switches, 4 PCs
- Configure IP addresses
- Static routes
- Test ping

### Lab 2: VLAN Configuration
- 1 L2 Switch, 4 PCs
- Create VLANs 10, 20
- Assign access ports
- Test isolation

### Lab 3: Inter-VLAN Routing
- 1 L3 Switch, 1 L2 Switch, 4 PCs
- Configure VLANs
- Create SVIs
- Test inter-VLAN communication

### Lab 4: OSPF Single Area
- 3 Routers, 3 Switches, 3 PCs
- Configure OSPF Area 0
- Verify neighbors
- Test multi-hop routing

### Lab 5: OSPF Multi-Area
- 3 Routers in different areas
- Configure Areas 0, 1, 2
- Show ABR functionality

### Lab 6: ACL Security
- 2 Routers, 2 Networks
- Configure extended ACL
- Block ICMP, allow all else
- Verify with packet inspector

### Lab 7: Trunk Configuration
- 2 Switches with trunk link
- Multiple VLANs
- Native VLAN configuration

### Lab 8: VLAN + Routing + ACL (Comprehensive)
- L3 Switch, L2 Switch, Router
- VLANs 10, 20, 30
- Inter-VLAN routing
- ACL to block VLAN 10 from VLAN 30

### Lab 9: Complex Topology
- 4 Routers, 3 Switches, 8 devices
- OSPF routing
- VLANs across switches
- ACLs for security

### Lab 10: WAN Simulation
- 2 sites with router-to-router WAN link
- OSPF across WAN
- NAT on edge routers (simplified)

---

## 🎯 Educational Focus

### Learning Objectives

**After using v3.0, students will be able to:**
1. Configure IP addresses using CLI commands
2. Create and manage VLANs
3. Configure trunk ports with 802.1Q
4. Implement static and dynamic routing
5. Configure OSPF single and multi-area
6. Create and apply ACLs
7. Understand packet forwarding (L2 and L3)
8. Troubleshoot connectivity issues
9. Visualize protocol operations (ARP, OSPF, ICMP)
10. Design hierarchical networks

---

## 🔬 Technical Implementation

### Data Structures

**Device Object:**
```javascript
{
  id: "R1",
  type: "router",
  name: "Router-1",
  x: 300,
  y: 200,
  interfaces: [
    {
      name: "GigabitEthernet0/0",
      shortName: "Gi0/0",
      ip: "192.168.1.1",
      mask: "255.255.255.0",
      status: "up",
      connectedTo: "SW1:Fa0/1",
      macAddress: "00:1A:2B:3C:4D:5E"
    }
  ],
  routingTable: [],
  arpCache: [],
  config: "" // Running config in Cisco format
}
```

**VLAN Object:**
```javascript
{
  id: 10,
  name: "Sales",
  ports: ["Fa0/1", "Fa0/2", "Fa0/3"],
  color: "#FF6B6B" // For visual identification
}
```

**ACL Object:**
```javascript
{
  number: 100,
  type: "extended",
  entries: [
    {
      action: "permit",
      protocol: "icmp",
      source: "192.168.1.0",
      sourceMask: "0.0.0.255",
      dest: "192.168.2.0",
      destMask: "0.0.0.255"
    }
  ],
  hits: 0
}
```

### Packet Simulation Logic

```javascript
function simulatePacket(source, destination, protocol) {
  let packet = {
    srcIP: source.ip,
    dstIP: destination.ip,
    srcMAC: source.mac,
    dstMAC: "FF:FF:FF:FF:FF:FF", // Will be resolved
    protocol: protocol,
    ttl: 64,
    vlanTag: null,
    path: []
  };

  // Step 1: Check if same subnet (L2 only)
  if (sameSubnet(source, destination)) {
    // ARP for destination MAC
    packet.dstMAC = arpResolve(destination.ip);
    packet.path.push({device: source.switch, action: "L2 switch"});
    return animatePacket(packet);
  }

  // Step 2: L3 routing needed
  packet.dstMAC = source.gateway.mac; // Send to gateway
  packet.path.push({device: source, action: "Send to gateway"});

  // Step 3: Router forwarding
  let currentRouter = source.gateway;
  while (!reached(destination)) {
    // Check ACLs
    if (aclBlocked(currentRouter, packet)) {
      return showDenied(packet, currentRouter);
    }

    // Lookup routing table
    let nextHop = routingLookup(currentRouter, packet.dstIP);
    packet.path.push({device: currentRouter, action: "Route to " + nextHop});
    packet.ttl--;

    if (packet.ttl === 0) {
      return showTTLExpired(packet);
    }

    currentRouter = nextHop;
  }

  // Step 4: Final delivery
  packet.path.push({device: destination, action: "Delivered"});
  return animatePacket(packet);
}
```

---

## 📊 File Size Estimate

**Target:** < 800KB (single file)
- HTML structure: ~10KB
- CSS styling: ~30KB
- JavaScript logic: ~200KB
  - Device manager: 40KB
  - Routing engine: 50KB
  - VLAN/ACL logic: 40KB
  - Packet simulator: 40KB
  - UI/Canvas: 30KB
- Lab scenarios (embedded): ~50KB
- SVG icons (inline): ~20KB
- Documentation (embedded help): ~30KB

**Total estimated:** ~370KB (compressed/minified)

---

## 🎨 Visual Design

### Color Scheme
- **Background:** Dark blue gradient (#0f172a → #1e293b)
- **Devices:**
  - Router: Cyan (#06b6d4)
  - L2 Switch: Purple (#9333ea)
  - L3 Switch: Teal (#14b8a6)
  - PC: Green (#10b981)
  - Server: Orange (#f59e0b)
  - Cloud: Gray (#64748b)
- **Links:**
  - Connected: Green solid line
  - Trunk: Green dashed line
  - Down: Red line
- **VLANs:** Distinct colors per VLAN ID

### Icons (SVG)
- Router: Circular with arrows
- Switch: Rectangular with ports
- PC: Monitor icon
- Server: Rack icon
- Cloud: Cloud shape

---

## ✅ Success Criteria

v3.0 is successful if it:
1. ✅ Runs standalone (single HTML file)
2. ✅ Does NOT overwrite v2.0
3. ✅ Supports VLANs with trunk/access ports
4. ✅ Implements OSPF routing protocol
5. ✅ Has CLI-style configuration interface
6. ✅ Visualizes packet forwarding (L2/L3)
7. ✅ Includes 10+ pre-built lab scenarios
8. ✅ Supports ACLs (standard and extended)
9. ✅ Provides Packet Tracer-like experience
10. ✅ File size < 1MB

---

## 🚀 Development Plan

### Phase 1: Core Structure (30% - MVP)
- ✅ HTML/CSS layout with panels
- ✅ Device palette (drag-drop)
- ✅ Canvas with SVG rendering
- ✅ Basic device objects (Router, Switch, PC)
- ✅ Connection logic
- ✅ IP configuration

### Phase 2: Routing (20%)
- ✅ Static routing
- ✅ Distance-Vector routing
- ✅ OSPF implementation
- ✅ Routing table display

### Phase 3: VLANs (15%)
- ✅ VLAN creation
- ✅ Access port configuration
- ✅ Trunk port configuration
- ✅ 802.1Q tagging
- ✅ Inter-VLAN routing

### Phase 4: CLI Interface (15%)
- ✅ Command parser
- ✅ Cisco IOS commands
- ✅ Configuration generation
- ✅ Show commands

### Phase 5: ACLs & Packet Visualization (10%)
- ✅ Standard ACLs
- ✅ Extended ACLs
- ✅ Packet inspector panel
- ✅ Layer 2/3 visualization

### Phase 6: Lab Library & Polish (10%)
- ✅ 10 pre-built scenarios
- ✅ Load/save functionality
- ✅ Export to JSON/config
- ✅ Help system
- ✅ Keyboard shortcuts

---

## 📖 Documentation Plan

**Embedded Help System:**
- Quick start tutorial (5 min interactive)
- CLI command reference (searchable)
- Lab scenario instructions
- Troubleshooting guide
- Video tutorials (links to external)

**External Documentation:**
- README.md for v3.0
- Teacher's guide (grading rubrics)
- Student workbook (lab exercises)

---

**Next Step:** Begin Phase 1 implementation in standalone file `packet-tracer-lite-v3.html`

**Prepared by:** EQ6
**Date:** 2025-12-02
**Status:** Design Complete ✅ → Ready for Implementation
