# Network Essentials Project - Global Changelog

## Hexworth Academy v7.6.0 - A+ Core 2 Sprint 1 Complete (2025-12-15)

### 🎓 Major Feature: CompTIA A+ Core 2 Operating Systems Content

**Agent:** CCode-Eta
**Sprint:** A+ Core 2 Sprint 1 - Domain 1 (Operating Systems - 31% of exam)

#### Summary
Complete coverage of Windows administration fundamentals with 15 new educational resources:
- 5 Presentations (slides with exam tips)
- 5 Interactive Simulators (guided tasks, quiz modes)
- 5 Hands-On Labs (real device exercises with progress tracking)

#### New Files Created

**Presentations (`Home/resources/presentations/aplus-core2/`):**
- `windows-editions.html` (67KB) - Windows 10/11 edition comparison
- `windows-settings.html` (60KB) - Settings app navigation
- `control-panel.html` (55KB) - Control Panel utilities & run commands
- `admin-tools.html` (44KB) - MMC consoles & management tools
- `windows-features.html` (44KB) - System tools (msconfig, msinfo32, etc.)

**Interactive Applets (`Home/resources/tools/aplus-applets/`):**
- `windows-editions-matrix.html` (41KB) - Feature comparison matrix with filters
- `windows-settings-simulator.html` (64KB) - Simulated Settings interface
- `control-panel-simulator.html` (113KB) - Full Control Panel simulation
- `admin-tools-simulator.html` (68KB) - Event Viewer, Disk Management, Services, Task Scheduler
- `windows-system-tools.html` (67KB) - 19 system tools reference with quiz

**Hands-On Labs (`Home/resources/tools/aplus-applets/`):**
- `lab-windows-editions.html` (53KB)
- `lab-windows-settings.html` (59KB)
- `lab-control-panel.html` (74KB)
- `lab-admin-tools.html` (49KB)
- `lab-system-tools.html` (67KB)

**Documentation:**
- `Home/docs/APLUS_CORE2_SPRINT_PLAN.md` - Full sprint roadmap

#### Files Modified
- `Home/index.html` - Added A+ Core 2 section in House of Script, version bump
- `Home/version.json` - Version 7.6.0 with release notes

#### Statistics
- **Total New Files:** 16
- **Total Size:** ~925KB
- **Lines Added:** 23,842

#### Notes
- All applets feature localStorage persistence for progress tracking
- Mobile-responsive design across all content
- Quiz modes and guided tasks for exam preparation
- Integrated into catalog under "House of Script" section

---

## Packet Tracer Lite v7.5.1 - CLI Help Enhancement (2025-12-15)

### 🔧 Bug Fix: 'network' Command Guidance

**Agent:** Claude-Opus
**Issue:** GitHub - "Network 0.0.0.0 0.0.0.0 command unrecognized in Packet Tracer Lite"

#### Fix 1: Outside Router Config Mode
Added inline CLI help when users type `network` command outside of router configuration mode:

```
% Invalid input - 'network' requires router configuration mode
  Hint: For a default route, use:
        ip route 0.0.0.0 0.0.0.0 <next-hop-ip>
  Hint: For OSPF, first enter:
        router ospf 1
        network <ip> <wildcard> area <num>
```

#### Fix 2: Incomplete Syntax in OSPF/EIGRP Mode
Previously, typing `network 0.0.0.0 0.0.0.0` in OSPF mode (without `area X`) silently failed. Now shows:

```
% Incomplete command - OSPF requires area
  Syntax: network <ip> <wildcard> area <area-id>
  Example: network 0.0.0.0 255.255.255.255 area 0
```

#### Documentation: CLI Command Reference Updated
- Enhanced OSPF `network` command description with example syntax
- Added new **EIGRP Commands** section with 5 commands:
  - `router eigrp [as-number]`
  - `network [ip] [wildcard]`
  - `no auto-summary`
  - `show ip eigrp neighbors`
  - `show ip eigrp topology`
- Enhanced static route description with default route example

### Files Modified
- `packet-tracer-lite-v3.html` (line ~7600): Added incomplete syntax handlers for OSPF/EIGRP
- `packet-tracer-lite-v3.html` (line ~7696): Added network command handler outside router mode
- `packet-tracer-lite-v3.html` (line ~2258): Added EIGRP Commands section to CLI Reference
- `packet-tracer-lite-v3.html` (line ~2238): Enhanced OSPF network command description
- `Home/index.html`: Version bumped to 7.5.1 (3 locations)
- `Home/version.json`: Updated version and release notes

---

## Catalog v7.6.0 - House of Forge Unlocked (2025-12-11)

### 🔨 New Feature: House of Forge - Hardware Section

**Agent:** CCode-Opus

Unlocked the fourth house in Hexworth Academy! House of Forge is now active with hardware fundamentals, ready for CompTIA A+ certification content.

### House of Forge Details
- **Theme**: Molten Bronze/Hearth Fire 🔥
- **Primary Color**: `#b45309` (amber bronze)
- **Accent Color**: `#ff6b35` (flame orange)
- **Focus**: Hardware, PC components, A+ certification

### New Folder Structure
```
Home/tools/forge-applets/
├── hard_drive_geometry/    # HDD platters, sectors, cylinders
├── multimeter/             # Digital multimeter usage
└── process_controls/       # PLCs and industrial automation
```

### Applets Migrated from House of Logic
| Applet | Old Location | New Location |
|--------|--------------|--------------|
| Hard Drive Geometry | logic-applets/ | forge-applets/ |
| Multimeter | logic-applets/ | forge-applets/ |
| Process Controls | logic-applets/ | forge-applets/ |

### Houses Summary - All 4 Houses Active

| House | Theme | Focus Area | Applets |
|-------|-------|------------|---------|
| 🌐 House of Web | Deep Ocean/Silver | IP Addressing, Subnetting | 2 |
| 🛡️ House of Shield | Crimson/Black | Cybersecurity + Crypto + CMMC | 84 |
| 🧠 House of Logic | Purple/Teal/Green | Programming, AI, Electronics, Math | **23** |
| 🔨 House of Forge | Bronze/Flame | Hardware Fundamentals | **3** |

**Total Applets: 112** (redistributed across 4 houses)

### Ready for A+ Content
House of Forge is prepared with:
- Forge branding applied to all applets
- "Hardware Fundamentals" sub-section created
- Placeholder text: "CompTIA A+ certification content coming soon!"

---

## Catalog v7.5.0 - Final myEMATES Integration (2025-12-10)

### 🏛️ New Feature: CMMC Compliance & Frameworks in House of Shield
### 📐 New Feature: Mathematics & Number Systems in House of Logic

**Agent:** CCode-Opus

Completed the myEMATES curriculum integration by adding the final 2 sections:
- **CMMC** (17 applets): Cybersecurity Maturity Model Certification framework and all 14 security domains
- **Mathematics** (12 applets): Number systems, notation, units, and physics fundamentals

### New CMMC Applet Folders Added
```
Home/tools/cyber-applets/
├── cmmc_framework/            # CMMC 2.0 Framework Overview
├── cmmc_cui/                  # Controlled Unclassified Information
├── cmmc_quiz/                 # CMMC Knowledge Test
├── cmmc_access_control/       # Access Control (AC) Domain
├── cmmc_awareness_training/   # Awareness & Training (AT) Domain
├── cmmc_audit_accountability/ # Audit & Accountability (AU) Domain
├── cmmc_security_assessment/  # Security Assessment (CA) Domain
├── cmmc_config_management/    # Configuration Management (CM) Domain
├── cmmc_identification_auth/  # Identification & Auth (IA) Domain
├── cmmc_incident_response/    # Incident Response (IR) Domain
├── cmmc_maintenance/          # Maintenance (MA) Domain
├── cmmc_media_protection/     # Media Protection (MP) Domain
├── cmmc_physical_protection/  # Physical Protection (PE) Domain
├── cmmc_personnel_security/   # Personnel Security (PS) Domain
├── cmmc_risk_assessment/      # Risk Assessment (RA) Domain
├── cmmc_system_comm_protection/ # System & Comms Protection (SC) Domain
└── cmmc_system_info_integrity/  # System & Info Integrity (SI) Domain
```

### New Mathematics Applet Folders Added
```
Home/tools/logic-applets/
├── binary_numbers/         # Binary number representation
├── binary_challenge/       # Binary conversion quiz
├── ip_binary_decimal/      # IP address binary ↔ decimal
├── hexadecimal_numbers/    # Hexadecimal (base-16)
├── boolean_algebra/        # AND, OR, NOT, XOR logic
├── scientific_notation/    # Power-of-10 notation
├── engineering_notation/   # SI prefixes (kilo, mega, giga)
├── si_base_units/          # 7 fundamental SI units
├── si_derived_units/       # Hertz, Newton, Volt, Ohm, Watt
├── unit_conversions/       # Metric ↔ Imperial
├── newtons_law/            # F = ma physics
└── sampling_methodology/   # Nyquist theorem, aliasing
```

### CMMC Applets Organized by Category

| Category | Badge Color | Applets |
|----------|-------------|---------|
| 🏛️ Framework | Crimson `#dc143c` | Framework Overview, CUI, Knowledge Test |
| 🔐 Domain | Coral `#ff6b6b` | All 14 NIST 800-171 security domains |

### Mathematics Applets Organized by Category

| Category | Badge Color | Applets |
|----------|-------------|---------|
| 🔢 Number Systems | Teal `#0e8a7d` | Binary Numbers, Binary Challenge, Hexadecimal, IP Binary |
| ∧∨ Logic | Green `#84c547` | Boolean Algebra |
| 📊 Math | Cyan `#06b6d4` | Scientific Notation, Engineering Notation |
| 📏 Units | Pink `#ec4899` | SI Base Units, SI Derived Units, Unit Conversions |
| 🍎 Physics | Red `#f43f5e` | Newton's Law, Sampling Methodology |

### Technical Notes
- **CMMC Format**: Mix of Tumult Hype (3) and HTML5Point (14) applets
- **HTML5Point**: PowerPoint-to-HTML conversion with `data/` folder structure
- **Resources**: Downloaded all slide images and player files
- **Branding**: Shield branding (17) + Logic branding (12) applied

### Houses Summary - Final Totals

| House | Theme | Focus Area | Applets |
|-------|-------|------------|---------|
| 🌐 House of Web | Purple/Gold | IP Addressing, Subnetting | 2 |
| 🛡️ House of Shield | Crimson/Black | Cybersecurity + Crypto + CMMC | **84** |
| 🧠 House of Logic | Purple/Teal/Green | Programming, AI, Electronics, Math | **26** |

**Total Applets: 112** (completes all 7 myEMATES sections)

### myEMATES Integration Complete ✅
All 7 original myEMATES curriculum sections now integrated:
1. ✅ Cybersecurity (53 applets)
2. ✅ Cryptography (14 applets)
3. ✅ CMMC (17 applets) - NEW
4. ✅ Digital Electronics (12 applets)
5. ✅ Programming & AI (2 applets)
6. ✅ Mathematics (12 applets) - NEW
7. ✅ Web/Networking (2 applets)

---

## Catalog v7.4.0 - Digital Electronics Expansion (2025-12-10)

### ⚡ New Feature: Digital Electronics Sub-Section in House of Logic

**Agent:** CCode-Opus

Added 12 electronics applets to House of Logic, expanding the section with digital circuits, electrical fundamentals, and signal processing topics. Reorganized section with two sub-categories.

### New Applet Folders Added
```
Home/tools/logic-applets/
├── combination_circuits/      # Boolean combination circuits
├── d_type_flip_flop/          # D-type flip flop operation
├── demorgans_theorem/         # DeMorgan's theorem
├── digital_modulation/        # Digital signal modulation
├── gated_rs_latch/            # Gated RS latch
├── hard_drive_geometry/       # HDD platters, sectors, cylinders
├── latches_flip_flops/        # Latches and flip flops intro
├── multimeter/                # Digital multimeter usage
├── ohms_law/                  # Ohm's Law fundamentals
├── ohms_law_simulation/       # Interactive Ohm's Law practice
├── process_controls/          # PLC and industrial automation
└── signal_modulation/         # AM/FM modulation
```

### Applets Organized by Category

| Category | Badge Color | Applets |
|----------|-------------|---------|
| 🔢 Digital Logic | Orange `#f59e0b` | Combination Circuits, DeMorgan's Theorem |
| 🔄 Sequential | Green `#10b981` | Latches & Flip Flops, Gated RS Latch, D-Type Flip Flop |
| ⚡ Electrical | Purple `#8b5cf6` | Ohm's Law, Ohm's Law Simulation, Multimeter |
| 📡 Signals | Cyan `#06b6d4` | Signal Modulation, Digital Modulation |
| 💾 Hardware | Pink `#ec4899` | Hard Drive Geometry |
| 🏭 Industrial | Red `#f43f5e` | Process Controls |

### Catalog Reorganization
House of Logic now has two sub-sections:
- **🤖 Programming & AI** (2 applets) - AI Basics, Basic Programming
- **⚡ Digital Electronics** (12 applets) - New section

### Technical Statistics
- **Total Resources Downloaded**: 491 files
- **Applets Branded**: 12 files with Ubuntu theme
- **Total House of Logic Applets**: 14 (2 Programming + 12 Electronics)

### Houses Summary Updated
| House | Theme | Focus Area | Applets |
|-------|-------|------------|---------|
| 🌐 House of Web | Purple/Gold | IP Addressing, Subnetting | 2 |
| 🛡️ House of Shield | Crimson/Black | Cybersecurity + Cryptography | 67 |
| 🧠 House of Logic | Purple/Teal/Green | Programming, AI, Electronics | 14 |

---

## Catalog v7.3.1 - Cryptography Applets Expansion (2025-12-10)

### 🔐 New Feature: Cryptography Sub-Section in House of Shield

**Agent:** CCode-Opus

Added 14 cryptography-focused educational applets to the House of Shield section, expanding the cybersecurity curriculum with dedicated cryptographic concepts.

### New Applet Folders Added
```
Home/tools/cyber-applets/
├── block_mode/          # Block cipher modes (ECB, CBC, CTR)
├── blockchain/          # Blockchain fundamentals
├── cryptocurrency/      # Cryptocurrency systems
├── cryptography/        # Introduction to cryptography
├── cryptomatch/         # CryptoMatch matching game
├── diffie_hellman/      # Diffie-Hellman key exchange
├── digital_signatures/  # Digital signature creation/verification
├── encrypt_data/        # XOR operations & binary encryption
├── encryption/          # Encryption algorithms
├── factor_prime/        # Prime factorization (RSA security)
├── hashing/             # Cryptographic hash functions
├── hashing_narrated/    # Hashing with voice-over narration
├── pki/                 # Public Key Infrastructure
└── rsa/                 # RSA algorithm
```

### Applets Organized by Category

| Category | Badge Color | Applets |
|----------|-------------|---------|
| 🔑 Fundamentals | Orange `#f59e0b` | Intro to Crypto, Encryption, XOR/Binary, Block Modes |
| #️⃣ Integrity | Green `#10b981` | Hashing, Hashing (Narrated), Digital Signatures |
| 🔐 Asymmetric | Purple `#8b5cf6` | RSA, Diffie-Hellman, Prime Factorization |
| 🏛️ Infrastructure | Pink `#ec4899` | PKI |
| ⛓️ Applications | Cyan `#06b6d4` | Blockchain, Cryptocurrency |
| 🎯 Games | Red `#f43f5e` | CryptoMatch |

### Catalog Updates
- Added new sub-section: "🔐 Cryptography" under House of Shield
- 14 new cards with color-coded category badges
- Positioned after "Network Security" and before "Reconnaissance" sections

### Technical Statistics
- **Total Resources Downloaded**: 455 files
- **Applets Branded**: 14 files with House of Shield theme
- **Total Cybersecurity Applets**: 67 (53 original + 14 crypto)

### Houses Summary Updated
| House | Theme | Focus Area | Applets |
|-------|-------|------------|---------|
| 🌐 House of Web | Purple/Gold | IP Addressing, Subnetting | 2 |
| 🛡️ House of Shield | Crimson/Black | Cybersecurity + Cryptography | 67 |
| 🧠 House of Logic | Purple/Teal/Green | Programming, AI | 2 |

---

## Catalog v7.3.0 - House of Logic Programming Applets (2025-12-10)

### 🧠 New Feature: House of Logic (Ubuntu-Themed Programming Section)

**Agent:** CCode-Opus

Added 2 foundational programming applets to the catalog with a new Ubuntu-inspired "House of Logic" theme.

### New Directory Structure
```
Home/tools/logic-applets/
├── ai_basics/
│   ├── AI.html
│   └── AI.hyperesources/
├── programming_basics/
│   ├── primer.html
│   └── primer.hyperesources/
├── apply_logic_branding.py
└── download_logic_applets.py
```

### Applets Included

| Applet | Description | Topics |
|--------|-------------|--------|
| 🤖 AI Basics | Introduction to artificial intelligence | Machine learning, deep learning, neural networks, AI ethics |
| 💻 Basic Programming | Core programming concepts | Variables, data types, functions, loops, conditionals, arrays |

### Ubuntu-Inspired Color Palette
- **Primary Purple**: `#772953` (Ubuntu Aubergine)
- **Dark Background**: `#2c001e` (Dark Aubergine)
- **Teal Accent**: `#0e8a7d` (Badges, borders)
- **Green Highlight**: `#84c547` (Buttons, Ubuntu Green)
- **White**: Text on dark backgrounds

### House of Logic Branding
- **Header**: Purple gradient with 🏰 Hexworth Academy logo
- **Badge**: "🧠 House of Logic" with teal border
- **Wrapper**: Dark aubergine gradient background
- **Footer**: myEMATES/NSF attribution + "Back to Catalog" link
- **Buttons**: Ubuntu green (`#84c547`) with dark text

### Catalog Updates
- Added new section: "🧠 Programming Applets (House of Logic)"
- 2 cards with feature lists
- Ubuntu-inspired styling distinct from Shield (crimson) and Web (purple/gold)

### Technical Statistics
- **Total Resources Downloaded**: 279 files
- **AI Basics**: 164 resources
- **Programming Basics**: 115 resources
- **Applets Branded**: 2 files

### Hexworth Academy Houses Summary
| House | Theme | Focus Area | Color |
|-------|-------|------------|-------|
| 🌐 House of Web | Purple/Gold | IP Addressing, Subnetting | `#4c1d95` |
| 🛡️ House of Shield | Crimson/Black | Cybersecurity | `#dc143c` |
| 🧠 House of Logic | Purple/Teal/Green | Programming, AI | `#772953` |

---

## Catalog v7.2.0 - Cybersecurity Applets Integration (2025-12-10)

### 🛡️ Major Feature: House of Shield Cybersecurity Content

**Agent:** CCode-Opus

Integrated 53 licensed myEMATES cybersecurity educational applets into the catalog with Hexworth Academy "House of Shield" branding (crimson & black theme).

### New Directory Structure
```
Home/tools/cyber-applets/
├── access_control/
├── attacks_malware/
├── biometrics/
├── buffer_overflow/
├── career_exploration/
├── code_injection/
├── code_injection_quiz/
├── config_management/
├── cookie_caper/
├── cross_site_scripting/
├── cube_challenge/
├── cyber_hat_match/
├── cyber_scramble/
├── cybersecurity_controls/
├── cybersecurity_scenario/
├── data_roles/
├── design_principles/
├── eap/
├── ethical_hacking_case/
├── ethics_challenge/
├── ethics_conduct/
├── firewalls/
├── five_pillars/
├── google_hacking/
├── hacker_hangman/
├── heartbleed/
├── ids_ips/
├── kerberos/
├── meltdown_spectre/
├── nat_pat/
├── os_command_injection/
├── osint/
├── osint_challenge/
├── pen_testing/
├── phishing_mystery/
├── physical_protection/
├── privacy/
├── protocol_analysis/
├── pspg/
├── ransomware/
├── risk_analysis/
├── risk_management/
├── social_engineering/
├── social_engineering_tactics/
├── spoofing/
├── sql_injection/
├── stuxnet/
├── the_cube/
├── threat_actors/
├── threeway_handshake/
├── vpn/
├── whats_my_crime/
├── wireless_security/
├── apply_shield_branding.py
└── download_missing_resources.py
```

### Applets by Category

#### 📚 Security Fundamentals (13 applets)
| Applet | Description |
|--------|-------------|
| Five Pillars | CIA triad + Authentication + Non-repudiation |
| Risk Management | Threat assessment and countermeasures |
| Risk Analysis | Quantitative/qualitative risk techniques |
| Access Control | DAC, MAC, RBAC models |
| Cybersecurity Controls | Technical, admin, physical controls |
| Design Principles | Defense in depth, least privilege |
| Data Roles | Owners, custodians, users |
| Ethics & Conduct | Professional codes and legal responsibilities |
| Privacy | Privacy laws and best practices |
| Physical Protection | Physical security controls |
| Config Management | Secure baselines and hardening |
| PSPG | Policies, Standards, Procedures, Guidelines |
| EAP | Enterprise Architecture Planning |

#### ⚔️ Threats & Attacks (10 applets)
| Applet | Description |
|--------|-------------|
| Attacks & Malware | Viruses, worms, trojans overview |
| Ransomware | Encryption attacks and prevention |
| Phishing Mystery | Identify phishing attempts |
| Social Engineering | Psychological manipulation |
| Social Engineering Tactics | Pretexting, baiting, tailgating |
| Spoofing | IP, MAC, email, DNS spoofing |
| Threat Actors | Hacktivists, nation-states, insiders |
| Stuxnet | Famous ICS worm case study |
| Heartbleed | OpenSSL vulnerability analysis |
| Meltdown & Spectre | CPU vulnerabilities |

#### 🌐 Web Application Security (7 applets)
| Applet | Description |
|--------|-------------|
| SQL Injection | Attack vectors and prevention |
| Cross-Site Scripting | XSS reflected, stored, DOM-based |
| Code Injection | Malicious code insertion |
| OS Command Injection | System command execution |
| Buffer Overflow | Stack smashing and prevention |
| Cookie Caper | Session hijacking |
| Google Hacking | Dorking for exposed data |

#### 🔐 Network Security (9 applets)
| Applet | Description |
|--------|-------------|
| Firewalls | Types and rule configuration |
| IDS/IPS | Detection and prevention systems |
| VPN | IPsec, SSL/TLS protocols |
| Wireless Security | WEP, WPA, WPA2, WPA3 |
| NAT & PAT | Address translation security |
| Kerberos | Ticket-based authentication |
| Biometrics | Fingerprint, facial, iris scanning |
| Three-Way Handshake | TCP connection security |
| Protocol Analysis | Network monitoring |

#### 🔎 Reconnaissance (2 applets)
| Applet | Description |
|--------|-------------|
| OSINT | Open source intelligence gathering |
| Penetration Testing | Ethical hacking methodology |

#### 🎮 Interactive Challenges (12 applets)
| Applet | Description |
|--------|-------------|
| Career Exploration | Cybersecurity career paths |
| Ethics Challenge | Ethics scenario game |
| Cyber Hat Match | White/black/grey hat matching |
| Cyber Scramble | Word puzzle game |
| Hacker Hangman | Terminology hangman |
| What's My Crime? | Cybercrime identification |
| Cube Challenge | 3D security puzzle |
| The Cube | Interactive exploration |
| OSINT Challenge | Hands-on investigation |
| Code Injection Quiz | Vulnerability quiz |
| Ethical Hacking Case | Exam preparation |
| Cybersecurity Scenario | Decision-making simulation |

### House of Shield Branding
Applied to all 53 applets with crimson & black theme:
- **Header**: Crimson gradient (`#1a0a0a` → `#8b0000` → `#dc143c`)
- **Badge**: "🛡️ House of Shield" with crimson border
- **Wrapper**: Dark gradient background
- **Footer**: myEMATES/NSF attribution + "Back to Catalog" link
- **Icon**: 🏰 Hexworth Academy castle

### Catalog Updates
- Added new section: "🛡️ Cybersecurity Applets (House of Shield)"
- 53 cards organized in 6 sub-categories
- Color-coded by category:
  - Fundamentals: Crimson (`#dc143c`)
  - Threats: Dark red (`#ff6b6b`)
  - Web Security: Blue (`#4a9fff`)
  - Network Security: Green (`#4ade80`)
  - Recon: Purple (`#a78bfa`)
  - Games: Magenta (`#e879f9`)

### Technical Statistics
- **Total Resources Downloaded**: 5,219 files
- **Applets Branded**: 53 files
- **Structure**: Tumult Hype `.html` + `.hyperesources/` folders
- **Attribution**: NSF Grant #DUE 1601612

### Helper Scripts Created
- `apply_shield_branding.py` - Injects House of Shield CSS/HTML
- `download_missing_resources.py` - Fetches images/audio/HYPE runtime

---

## Catalog v7.1.0 - IP Addressing Applets Integration (2025-12-10)

### 🌐 Major Feature: myEMATES Educational Applets

**Agent:** CCode-Epsilon

Integrated 13 licensed myEMATES educational applets plus 1 custom-built applet into the catalog, all themed with Hexworth Academy branding.

### New Directory Structure
```
Home/tools/ip-applets/
├── binary-decimal-converter.html  ← Custom built (replaces buggy binaryIP)
├── binaryIP/
├── classA/
├── classB/
├── intro_subnetting/
├── IPv6/
├── IPv6Challenge/
├── macaddressing/
├── NAT/
├── network_classes2/
├── networkaddressing/
├── subnetting/
├── VLSM/
├── VLSM_challenge/
└── [each folder contains .html + .hyperesources/]
```

### Applets Included

| Applet | Description | Source |
|--------|-------------|--------|
| 🔢 Binary-Decimal Converter | 8-bit toggle switches, IP practice mode | **Custom Built** |
| Binary to Decimal (binaryIP) | Original myEMATES binary trainer | myEMATES |
| Network Classes | Classful addressing A/B/C/D/E | myEMATES |
| Network Addressing | IP structure and notation | myEMATES |
| Intro to Subnetting | Subnet fundamentals | myEMATES |
| Class A Subnetting | Large network subnetting | myEMATES |
| Class B Subnetting | Medium network subnetting | myEMATES |
| Subnetting (Class C) | Small network subnetting | myEMATES |
| VLSM | Variable Length Subnet Masking | myEMATES |
| VLSM Challenge | VLSM practice problems | myEMATES |
| IPv6 Fundamentals | IPv6 address structure | myEMATES |
| IPv6 Challenge | Compress/expand IPv6 practice | myEMATES |
| NAT | Network Address Translation | myEMATES |
| MAC Addressing | MAC address format/OUI | myEMATES |

### Custom Binary-Decimal Converter Features
Created as replacement for binaryIP applet (which has a typo - missing `0110` for decimal 6):
- **4-bit Reference Table**: Correct 0-15 binary mappings
- **8-bit Interactive Toggle**: Click bits to flip, see decimal result
- **IP Address Practice Mode**: Generate random octets to convert
- **Hexworth Themed**: Purple/gold color scheme matching academy branding

### Hexworth Academy Branding
Applied consistent branding to all 13 myEMATES applets:
- **Header**: Purple gradient with 🏰 Hexworth Academy logo
- **Badge**: "House of Web" gold badge
- **Wrapper**: Dark gradient background (`#0a0a0a` → `#1a1a2e`)
- **Footer**: myEMATES/NSF attribution + "Back to Catalog" link
- **Link Integration**: Header links to `catalog.html?theme=academy`

### Catalog Updates
- Added new section: "🌐 IP Addressing Applets (House of Web)"
- 14 cards in Tools tab with color-coded styling
- Custom applet highlighted with gold border
- Section description credits myEMATES curriculum
- All cards use consistent launch button styling

### Technical Notes
- **Tumult Hype**: Applets use Hype runtime (~93KB JS engine)
- **Structure**: Each applet requires `.html` + `.hyperesources/` folder
- **Branding**: CSS injection into `<style>` + HTML wrapper around `<body>` content
- **Attribution**: NSF Grant #DUE 1601612 credited in all footers

### Files Created
- `Home/tools/ip-applets/binary-decimal-converter.html` (30KB)
- `Home/tools/ip-applets/[13 myEMATES folders]/`

### Files Modified
- `Home/catalog.html` - Added IP Applets section (~150 lines)
- All 13 myEMATES `.html` files - Hexworth branding injection

### Credits
- **myEMATES**: Original educational content (licensed)
- **NSF**: Grant #DUE 1601612 funding
- **Tumult Hype**: Animation/interaction framework

---

## Catalog v7.0.0 - Dual Path Experience (2025-12-10)

### 🎭 Major Feature: Two Themed Paths

**Agent:** CCode-Epsilon

Introduced a landing page with two distinct themed experiences, allowing users to choose their preferred aesthetic for the course materials.

### New Files
- `Home/index.html` - Landing page with path selection

### Path Options

| Path | Theme | Aesthetic |
|------|-------|-----------|
| 🏰 **Hexworth Academy** | Magical | Purple glow, gold particles, wizarding school |
| 💊 **The Network** | Matrix | Green code rain, cyber glow, digital reality |

### Landing Page Features
- Full viewport, distraction-free choice
- Two large clickable cards
- Animated hover effects (glow rings)
- Hexworth: Floating gold particles
- Network: Binary code scroll + scanline
- "Choose Your Path" header

### Matrix Theme (The Network)
Complete visual overhaul for the Matrix path:

**Color Palette:**
- Background: Near-black `#0a0a0a`
- Primary: Matrix green `#00ff41`
- Cards: Dark green glass effect
- Glow: Phosphor green ambient

**Effects:**
- Scanline animation (subtle CRT feel)
- Green-tinted particles
- Monospace header font
- Terminal aesthetic throughout

**Components Themed:**
- Tab bar, cards, buttons, stat boxes
- Info/warning boxes
- Section headers
- All interactive elements

### Technical Implementation
- URL parameter: `?theme=network`
- localStorage persistence
- Skips portal for Matrix path
- CSS-only effects (no JS animations)

### User Flow
```
index.html
    ├── Hexworth Academy → Portal → Sorting → Catalog
    └── The Network → Catalog (Matrix theme)
```

### Files Modified
- `Home/catalog.html`
  - Added Matrix theme CSS (~160 lines)
  - Added URL parameter detection
  - Added theme persistence logic

---

## Catalog v6.2.0 - Tab Navigation System (2025-12-10)

### 🗂️ Major UX Change: Sections → Tabs

**Agent:** CCode-Epsilon

Converted collapsible sections to a tabbed interface, eliminating the long scrolling page and providing cleaner navigation.

### Changes

#### Tab Structure (6 tabs)
| Tab | Icon | Content |
|-----|------|---------|
| Overview | 📋 | Stats + Quick Start Guide |
| Presentations | 🎓 | 24 interactive presentations |
| Labs | 🧪 | 6 cumulative labs |
| Troubleshooting | 🔧 | Lab troubleshooting guides |
| Tools | 🛠️ | 17 interactive visualizers |
| Handouts | 📄 | PDF resources & docs |

#### Features
- **Tab bar**: Glass-morphism design with house-themed colors
- **Active state**: Gradient fill with glow effect
- **Hover effects**: Shimmer animation + lift
- **Persistence**: Tab selection saved to localStorage
- **Mobile responsive**: Icons-only mode on small screens
- **Smooth transitions**: Fade-in animation when switching tabs
- **ARIA attributes**: Proper accessibility roles

### Technical Details
- CSS-only tab styling (no framework dependencies)
- JavaScript tab switching with localStorage persistence
- Overview tab active by default
- Legacy collapsible code retained for compatibility

### Files Modified
- `Home/catalog.html`
  - Added tab navigation CSS (~130 lines)
  - Added tab bar HTML
  - Converted 6 sections to tab panels
  - Added tab switching JavaScript

### UX Improvement
- **Before**: Long scrolling page with 6 collapsible sections
- **After**: Fixed viewport with tabbed navigation
- Reduces cognitive load
- Clearer information architecture
- Faster content access

---

## Catalog v6.1.1 - UX: Overview Section Restructure (2025-12-10)

### 📋 Structural Change: Merged Overview Section

**Agent:** CCode-Epsilon

Consolidated Statistics and Quick Start Guide into a single "Overview" section at the top of the catalog for better user orientation.

### Changes
- **Merged sections**: Combined "Course Statistics" and "Quick Start Guide" into unified "Overview" section
- **Section order**: Stats displayed first (what's here), then Quick Guide (how to use it)
- **Removed**: Standalone Quick Start Guide section from bottom of page
- **Default state**: Overview section starts expanded for immediate visibility

### Rationale
- Quick Start/orientation content should be the first thing users see, not buried at the bottom
- New users need to understand the course structure before diving into content
- Merging reduces section count while improving information architecture

### Files Modified
- `Home/catalog.html` - Section restructure (moved Quick Start content, removed duplicate)

---

## Catalog v6.1.0 - Magical Atmosphere Overhaul (2025-12-10)

### 🎨 Visual Enhancement: Rich Jewel-Tone Color Schemes

**Agent:** CCode-Epsilon

Complete CSS overhaul transforming the Hexworth Academy theme from basic/mechanical colors to immersive, magical atmosphere with rich jewel tones, ambient effects, and dynamic animations.

### Color Palette Redesign

| House | Before | After |
|-------|--------|-------|
| 🌐 **Web** | Flat blue → cyan | Deep ocean depths with silver-blue glow |
| 🛡️ **Shield** | Muddy red → black | Obsidian fortress with ember gold accents |
| ⚙️ **Forge** | Dull orange → brown | Molten bronze with hearth fire glow |
| 💻 **Script** | Jarring green → purple | Enchanted forest with arcane mist |
| 📚 **Classic** | Basic purple | Refined amethyst with depth |

### New Visual Effects

#### Ambient Atmosphere
- **Multi-layer background**: 3-stop gradients with radial glow overlays
- **Floating particles**: CSS-only animated dots that drift with house-specific colors
- **Subtle texture overlay**: Dot pattern for depth without performance impact

#### Card Enhancements
- **Glass morphism**: `backdrop-filter: blur()` with translucent backgrounds
- **Shimmer effect**: Light sweep animation on hover
- **Glow shadows**: House-colored ambient glow on hover
- **Smooth scaling**: Cards lift and grow with cubic-bezier easing

#### Button Magic
- **Gradient backgrounds**: Dynamic two-tone with house colors
- **Light sweep animation**: Shine effect on hover
- **Glow halos**: Ambient colored shadow on interaction

#### Typography
- **Pulsing title glow**: Subtle animation on header text
- **Text shadows**: Multi-layer shadows for depth
- **Letter spacing**: Improved readability

#### Stat Boxes
- **Radial glow overlay**: Magical light source effect
- **Hover lift**: Interactive elevation with shadow growth
- **Glass highlight**: Top edge light reflection

### Technical Details
- All effects are **CSS-only** (no JavaScript dependencies)
- Uses CSS custom properties for theme consistency
- New variables added: `--gradient-mid`, `--glow-color`, `--particle-color`, `--card-glow`, `--ambient-1`, `--ambient-2`
- Smooth 60fps animations with hardware acceleration

### Files Modified
- `Home/catalog.html` - Complete CSS enhancement (lines 14-437 + house card styles)

### Performance Notes
- All animations use `transform` and `opacity` for GPU acceleration
- Particle effects use CSS background patterns (no DOM elements)
- `backdrop-filter` supported in all modern browsers
- Graceful degradation for older browsers

---

## Catalog v6.0.0 - Hexworth Academy (2025-12-09)

### 🏰 Major Release: Hexworth Academy Rebrand

Complete transformation into an immersive Harry Potter-style wizarding school experience for IT education.

### New Features

#### Entry Portal Experience
- **Captive Portal Style Welcome** - Dark magical theme with floating gold particles
- **Three Entry Paths:**
  1. 🎩 "Sort Me Into My House!" - Take the 8-question sorting quiz
  2. 🏠 "I Know My House" - Choose directly from 4 houses
  3. 📚 "Skip the Magic" - Classic catalog view (escape hatch)

#### Sorting Quiz
- 8 personality/preference questions
- Questions like "Which superpower would you choose?" and "Pick a creature to be your familiar"
- Reveals your "true house" with dramatic result screen
- Option B behavior: Shows true house but redirects to House of the Web (only unlocked house)
- Shuffled answer order for fairness

#### Four IT Houses
| House | Domain | Status | Colors |
|-------|--------|--------|--------|
| 🌐 House of the Web | Networking | ✅ Unlocked | Blue & Silver |
| 🛡️ House of the Shield | Cybersecurity | 🔒 Coming Soon | Crimson & Black |
| ⚙️ House of the Forge | Hardware | 🔒 Coming Soon | Orange & Bronze |
| 💻 House of the Script | Software | 🔒 Coming Soon | Green & Purple |

#### Dynamic House Theming
- CSS variables system for house colors
- Body background gradient changes per house
- Buttons, headers, section borders all adapt
- House crest badge in top-right corner (clickable to re-open portal)

#### Classic Mode
- Full escape hatch for users who prefer professional view
- Reverts to "Network Essentials" branding
- Original purple gradient theme

#### Persistence
- localStorage remembers house choice
- Returning users skip portal, go straight to themed catalog
- Can re-access portal by clicking house crest badge

### Technical Implementation
- CSS custom properties (variables) for theming
- `HOUSES` configuration object for easy expansion
- `QUIZ_QUESTIONS` array for sorting quiz
- Particle animation system for magical atmosphere
- Smooth fade/scale animations throughout

### Files Modified
- `Home/catalog.html` - Complete UI overhaul with Hexworth Academy

---

## Catalog v5.6.2 (2025-12-09)

### Welcome Portal Feature
- **Captive Portal Style Welcome Screen** - Professional modal overlay greets users
  - Displays on first visit and after each version update
  - Version-aware: remembers last seen version in localStorage
  - Auto-hides when user has already seen current version
  - Three content sections: What's New, Announcements, Quick Stats
  - Tip of the Day with keyboard shortcut hints
  - Smooth fade + scale animations on appear/dismiss
  - Backdrop blur effect for modern look
  - Keyboard accessible: Enter or Escape to dismiss
  - "Enter Catalog" button with hover effects
  - Stats display: 24 Presentations, 18 Tools, 445+ Slides

### Technical Implementation
- `CATALOG_VERSION` constant for easy version management
- `shouldShowWelcome()` compares against localStorage
- `dismissWelcome()` with fade-out animation before hiding
- `initWelcomePortal()` runs on DOMContentLoaded
- Accessible focus management (button focused after animation)

### Catalog Updates
- Updated catalog version to v5.6.2

---

## Catalog v5.6.1 (2025-12-09)

### UX Improvements - Catalog Navigation

#### Collapsible Sections
- All 7 catalog sections are now collapsible/expandable
- Click section header to toggle visibility
- Expand All / Collapse All control buttons at top of page
- Item count badges on each section header (e.g., "24 items")
- Collapse state persists via localStorage (remembered between visits)
- Smooth CSS transition animations

#### Search Bar with Autocomplete
- Full-text search across all catalog items (presentations, tools, labs, handouts)
- Real-time autocomplete dropdown as you type
- Search by title, type, or keywords (e.g., "vlan", "ospf", "troubleshooting")
- Results grouped by category with icons
- Keyboard navigation: ↑/↓ arrows to navigate, Enter to select, Esc to close
- Ctrl+K / Cmd+K keyboard shortcut to focus search
- Clear button (✕) to reset search
- Match highlighting in dropdown results
- "No results" feedback with suggestions

#### Troubleshooting Visualizer Enhancement
- Command Simulator now has realistic timed output
- All commands (ping, tracert, ipconfig, nslookup, netstat, arp, route) output line-by-line
- Ping replies appear at ~1 second intervals (like real ping)
- ARP/routing tables appear progressively
- Input is disabled while command is "running"
- Provides more realistic terminal simulation experience

### Catalog Updates
- Updated catalog version to v5.6.1

---

## Catalog v5.6.0 (2025-12-09)

### Sprint 15: Network Troubleshooting

### New Content Created
- **troubleshooting-presentation.html** - 20-slide interactive presentation
  - Network+ N10-008 Domain 5 (Troubleshooting) coverage - ~22% of exam (LARGEST domain!)
  - Topics: 7-step troubleshooting methodology
  - Command-line tools: ping, traceroute/tracert, ipconfig/ifconfig
  - DNS tools: nslookup, dig
  - Network statistics: netstat, arp, route
  - Advanced tools: pathping, mtr, nmap, tcpdump
  - Hardware tools: Cable testers, tone generators, loopback plugs, TDR/OTDR
  - Common wired issues: Duplex mismatch, bad cables, broadcast storms
  - Common wireless issues: Interference, channel overlap, overcapacity
  - IP addressing issues: APIPA, duplicate IPs, wrong subnet
  - DNS troubleshooting workflows
  - Performance issues: Latency, jitter, packet loss
  - OSI-based troubleshooting approaches (bottom-up, top-down, divide-and-conquer)

- **troubleshooting-speaker-notes.md** - Comprehensive instructor guide (~700 lines)
  - Teaching focus for each slide with real-world examples
  - Memory aids for 7-step methodology
  - Command syntax for both Windows and Linux
  - Troubleshooting workflow diagrams
  - Common exam traps and misconceptions
  - Lab activity suggestions
  - Practice scenarios

- **troubleshooting-visualizer.html** - 6-tab interactive learning tool
  - Tab 1: 7-Step Methodology - Interactive step explorer with details
  - Tab 2: Command Simulator - Practice ping, tracert, ipconfig, netstat, arp
  - Tab 3: Ping Sequence - Interactive layer-by-layer connectivity test
  - Tab 4: Hardware Tools - Cable tester, tone generator, TDR info cards
  - Tab 5: Scenarios - 5 interactive troubleshooting challenges
  - Tab 6: Exam Quiz - 10 Network+ Domain 5 questions with explanations

### Catalog Updates
- Updated catalog version to v5.6.0
- Added troubleshooting presentation card to Presentations section
- Added troubleshooting visualizer card to Interactive Tools section
- Statistics updated: 24 presentations, 445 slides, 21 speaker notes, 18 visualizers

### Deployment
- Files created in Home/presentations/, Home/tools/, Home/speaker-notes/
- Ready for v5.6.0 deployment zip

### Notes
- Network Troubleshooting is Domain 5 - the largest domain on Network+ at ~22%
- Covers objectives 5.1-5.5 comprehensively
- Focus on practical, hands-on diagnostic skills

---

## Catalog v5.5.1 (2025-12-09)

### UX Improvements
- **security-presentation.html**
  - Added "Back to Catalog" button (fixed position, top-left)
  - Fixed navigation buttons being cut off on some screens
  - Changed container from `height: 100vh` to `min-height: 100vh`
  - Fixed overflow issues preventing full slide visibility

- **security-visualizer.html** - Major UX overhaul
  - Implemented sidebar layout for all 8 tabs (options on left, content on right)
  - CIA Triad: Sidebar buttons for Confidentiality/Integrity/Availability
  - AAA Framework: Login form in sidebar, flow steps in main area
  - Firewall Rules: Test inputs in sidebar, rules display in main area
  - Attack Types: Attack buttons in sidebar, detailed info in main area
  - VPN Comparison: IPSec/SSL/Compare buttons in sidebar with detailed content
  - Auth Protocols: RADIUS/TACACS+/Kerberos/LDAP buttons with comparison table
  - Wireless Security: WEP/WPA/WPA2/WPA3 buttons with evolution comparison
  - Exam Quiz: Progress and topics in sidebar, questions in main area
  - Added responsive design (sidebar collapses on mobile)
  - Enhanced content with exam tips and technical details

### Catalog Updates
- Updated catalog version to v5.5.1

---

## Catalog v5.5.0 (2025-12-09)

### Sprint 14: Network Security

### New Content Created
- **security-presentation.html** - 20-slide interactive presentation
  - Network+ N10-008 Domain 4 (Security) coverage - ~20% of exam!
  - Topics: CIA Triad, AAA Framework (Authentication, Authorization, Accounting)
  - Authentication protocols: RADIUS, TACACS+, Kerberos, LDAP
  - 802.1X Port-Based Authentication with EAP methods
  - Firewall types: Packet filtering, Stateful, NGFW, UTM
  - VPN technologies: IPSec (ESP, AH, IKE), SSL/TLS VPN
  - IDS vs IPS, signature vs anomaly-based detection
  - Common attacks: DDoS (volumetric, protocol, application), MITM, spoofing
  - Wireless security evolution (WEP→WPA→WPA2→WPA3)
  - Network hardening and security best practices

- **security-speaker-notes.md** - Comprehensive instructor guide (~600 lines)
  - Teaching focus for each slide with real-world examples
  - CIA Triad explanations with industry context
  - AAA Framework walkthrough with login simulation
  - Protocol comparison tables (RADIUS vs TACACS+ vs Kerberos)
  - VPN diagrams and deployment scenarios
  - Attack visualizations with defense mechanisms
  - Exam tips and practice questions
  - Lab activity suggestions

- **security-visualizer.html** - 8-tab interactive learning tool
  - Tab 1: CIA Triad - Interactive triangle with examples and threats
  - Tab 2: AAA Framework - Login simulator showing auth/authz/accounting flow
  - Tab 3: Firewall Rules - Test traffic against configurable rule sets
  - Tab 4: Attack Types - DDoS, MITM, ARP/DNS spoofing, VLAN hopping visualized
  - Tab 5: VPN Comparison - IPSec vs SSL/TLS side-by-side with diagrams
  - Tab 6: Auth Protocols - RADIUS, TACACS+, Kerberos, LDAP comparison table
  - Tab 7: Wireless Security - WEP to WPA3 timeline with security ratings
  - Tab 8: Exam Quiz - 10 Network+ security questions with explanations

### Catalog Updates
- Updated catalog version to v5.5.0
- Added security presentation card to Presentations section
- Added security visualizer card to Interactive Tools section
- Updated statistics: 23 presentations, 425 slides, 20 speaker notes, 17 visualizers

### Deployment
- Files created in Home/presentations/, Home/tools/, Home/speaker-notes/
- Ready for v5.5.0 deployment zip

### Notes
- Security is ~20% of Network+ exam - critical topic coverage
- Covers objectives 4.1-4.5 comprehensively
- Complements existing wireless security content from Sprint 13

---

## Catalog v5.4.3 (2025-12-09)

### Documentation Update
- **Updated** - PACKET_TRACER_LITE_V3_DESIGN.md completely rewritten for v3.9
  - Changed from design document to user documentation
  - Added complete CLI command reference (50+ commands in tables)
  - Added version history (v3.0 through v3.9)
  - Added lab library documentation (7 config labs, 10 troubleshooting, 6 cumulative)
  - Added export/import guide with naming conventions
  - Added keyboard shortcuts reference
  - Added bug fixes history
  - Added Network+ objectives alignment table
  - Added troubleshooting FAQ section
  - Synced to both root and Home/docs/ locations

### Catalog Updates
- Updated catalog version to v5.4.3

---

## Catalog v5.4.2 (2025-12-09)

### Packet Tracer Lite v3.9
- **Bug Fix** - Fixed interface selection for `int Gi0/1`, `int Fa0/2`, etc.
  - Root cause: The `/` character in interface names (e.g., `GigabitEthernet0/1`) was not being stripped when comparing, causing match failures
  - Now properly normalizes both the input and interface names by stripping non-alphanumeric characters
  - Commands like `int Gi0/0`, `int Gi0/1`, `int Fa0/1`, etc. now correctly select the specified interface
  - Also increased the "Available interfaces" list from 5 to 8 items for better visibility

### Catalog Updates
- Updated catalog version to v5.4.2
- Updated Packet Tracer Lite from v3.8 to v3.9

---

## Catalog v5.4.1 (2025-12-09)

### Packet Tracer Lite v3.8
- **New Feature** - CLI Command Reference Popup
  - 📖 button next to CLI input opens comprehensive command documentation
  - 10 categories: Mode Navigation, Interface Config, Switching/VLANs, STP, Routing, HSRP, ACLs, DHCP, Device Management, Show Commands
  - Real-time search filters commands as you type
  - Each command shows: syntax, description, mode required, and examples
  - Dark theme matches CLI aesthetic
  - Click outside or press Escape to close

### Catalog Updates
- Updated catalog version to v5.4.1
- Updated Packet Tracer Lite from v3.7 to v3.8

---

## Catalog v5.4.0 (2025-12-09)

### Sprint 13: Wireless Networking

### New Content Created
- **wireless-presentation.html** - 20-slide interactive presentation
  - Network+ N10-008 Objective 2.4 coverage
  - Topics: 802.11 standards (a/b/g/n/ac/ax), Wi-Fi generations
  - Frequency bands (2.4 GHz, 5 GHz, 6 GHz) and characteristics
  - Channel planning and non-overlapping channels (1, 6, 11)
  - Wireless security evolution (WEP, WPA, WPA2, WPA3)
  - CSMA/CA vs CSMA/CD collision avoidance
  - MIMO, MU-MIMO, and OFDMA technologies

- **wireless-speaker-notes.md** - Comprehensive instructor guide (~600 lines)
  - Teaching focus for each slide
  - Real-world analogies (radio spectrum, walkie-talkies)
  - Site survey guidance and AP placement tips
  - Common exam questions and misconceptions
  - Lab activity suggestions

- **wireless-visualizer.html** - 4-tab interactive learning tool
  - Tab 1: Standards Explorer - Click standards to see specs/features/use cases
  - Tab 2: Channel Visualizer - 2.4/5 GHz spectrum visualization with overlap demo
  - Tab 3: Security Comparison - Interactive timeline WEP→WPA→WPA2→WPA3
  - Tab 4: Quiz - 10 questions with explanations

### Deployment
- Files copied to Home/presentations/, Home/tools/, Home/speaker-notes/
- Home/catalog.html updated with new content cards
- Statistics updated: 22 presentations, 405 slides, 19 speaker notes

### Notes
- Complements existing networking content (Chapter 12 of Network+ curriculum)
- Focus on wireless standards and security for exam preparation

---

## Catalog v5.3.3 (2025-12-09)

### Packet Tracer Lite v3.7
- **Bug Fix** - Fixed "Back to Catalog" button 404 error
  - Changed link from `catalog.html` to `../catalog.html` (correct relative path from tools/ folder)

### Catalog Updates
- Updated catalog version to v5.3.3
- Updated Packet Tracer Lite from v3.6 to v3.7

---

## Catalog v5.3.2 (2025-12-09)

### Packet Tracer Lite v3.6
- **Export/Import Enhancement** - Full configuration data now saved in exports
  - Export now includes: config object (VLANs, routes, OSPF, EIGRP, ACLs), DHCP server settings
  - Import properly restores all configuration data
  - Previously, exports only saved device positions and basic interface info
- **Documentation Added** - New "Export & Import Guide" section in Help panel
  - Step-by-step export instructions
  - What data gets saved (comprehensive list)
  - Import use cases (backup, submit, share, transfer)
  - Lab submission naming conventions
  - Version compatibility notes

### Catalog Updates
- Updated catalog version to v5.3.2
- Updated Packet Tracer Lite from v3.5 to v3.6

---

## Catalog v5.3.1 (2025-12-09)

### Bug Fixes
- **Packet Tracer Lite v3.5** - Fixed cumulative lab persistence
  - Configurations (VLANs, routes, OSPF, EIGRP, ACLs) now persist between lab iterations
  - DHCP server settings now saved properly
  - Added auto-save triggers after CLI commands and GUI Apply button
  - Standardized version strings from mixed (v3.0/v3.2/v3.4) to v3.5

### Catalog Updates
- Added version number to catalog header (v5.3.1)
- Updated "Last Updated" date to 2025-12-09
- Copied missing PRESENTATION_STATUS.md to Home/docs/

---

## Sprint 12: Switch Operations (2025-12-09)

### New Content Created
- **switch-operations-presentation.html** - 20-slide interactive presentation
  - Network+ N10-008 Objective 2.1 & 2.3 coverage
  - Topics: MAC Learning, Forwarding Decisions, Switching Methods (Store-and-Forward, Cut-Through, Fragment-Free)
  - Port Security configuration and violation modes
  - PoE standards (802.3af/at/bt) and power budgeting
  - SPAN/RSPAN/ERSPAN port mirroring
  - QoS fundamentals

- **switch-operations-speaker-notes.md** - Comprehensive instructor guide (~500 lines)
  - Teaching focus for each slide
  - Real-world analogies (MAC learning, port security attacks)
  - CLI command examples and troubleshooting workflows
  - Common exam questions and misconceptions
  - Lab activity suggestions

- **switch-operations-visualizer.html** - 4-tab interactive learning tool
  - Tab 1: MAC Learning Simulator - Send frames and watch CAM table populate
  - Tab 2: Port Security Config Generator - Generate Cisco IOS commands
  - Tab 3: PoE Calculator - Calculate power budgets with different switch models
  - Tab 4: Quiz - 10 questions with explanations

### Deployment
- Files copied to Home/presentations/, Home/tools/, Home/speaker-notes/
- Home/catalog.html updated with new content cards
- Statistics updated: 21 presentations, 385 slides, 18 speaker notes

### Notes
- Complements existing VLAN and STP presentations (avoids duplication)
- Focus on switch fundamentals and advanced features not previously covered

---

## Sprint 11: Network Devices (2025-12-09)

### New Content Created
- **devices-presentation.html** - 20-slide interactive presentation
  - Network+ N10-008 Objective 2.1 coverage
  - Topics: NICs, Hubs, Bridges, Switches, Routers, L3 Switches, Firewalls, IDS/IPS, DMZ, Wireless APs, DHCP/DNS, Load Balancers, Proxy Servers, VPN Concentrators
  - Includes device placement architecture slide

- **devices-speaker-notes.md** - Comprehensive instructor guide (~670 lines)
  - Teaching focus for each slide
  - Real-world analogies and examples
  - CLI commands for demonstrations
  - Common exam questions and misconceptions
  - Lab activity suggestions

- **devices-visualizer.html** - 4-tab interactive learning tool
  - Tab 1: Device Explorer - Click devices for detailed specifications
  - Tab 2: OSI Layer Map - Visual organization of devices by layer
  - Tab 3: Collision/Broadcast Domains - Interactive comparison of Hub vs Switch vs Router
  - Tab 4: Quiz - 10 questions with explanations

### Deployment
- Files copied to Home/presentations/, Home/tools/, Home/speaker-notes/
- Home/catalog.html updated with new content cards
- Statistics updated: 20 presentations, 365 slides, 17 speaker notes

---

## Sprint 10: Cloud & Datacenter (2025-12-09)

### New Content Created
- **cloud-presentation.html** - 18-slide interactive presentation
  - Cloud computing concepts, service models (IaaS, PaaS, SaaS)
  - Deployment models (Public, Private, Hybrid, Community)
  - Datacenter tiers and infrastructure

- **cloud-speaker-notes.md** - Instructor guide

- **cloud-visualizer.html** - Interactive learning tool
  - Service model explorer
  - Deployment model comparison
  - Match scenarios exercise
  - Knowledge quiz

### Bug Fixes
- Fixed "Back to Catalog" links (changed to ../catalog.html)
- Fixed Match Scenarios feedback display
- Fixed Quiz loading issue (JavaScript event parameter errors)
- Fixed Deployment Models interactive (same event parameter issue)

### Deployment
- Files copied to Home/ structure
- Catalog updated with cloud content cards

---

## Previous Sprints (Pre-Changelog)

Sprints 1-9 completed prior to changelog creation. Content includes:
- OSI Model presentations and tools
- TCP/IP Suite content
- IP Addressing and Subnetting
- Ethernet Standards
- Network Topologies
- Cabling and Connectors
- Wireless Networking
- Network Services (DNS, DHCP, NTP)
- Routing and Switching fundamentals

---

**Document Created:** 2025-12-09
**Maintained by:** CCode-Delta
