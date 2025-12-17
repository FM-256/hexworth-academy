# The Unholy Dark Arts - Project Vision

**Created:** December 16, 2025
**Status:** Planning Phase

---

## Project Overview

A separate "house" from Hexworth Academy focused on malware analysis, offensive security techniques, and red/blue team training. Access-controlled educational content designed for qualified students in controlled classroom settings.

---

## Creator Background

- Current: IT/Cyber Higher Learning Professor
- Former: Senior Network Security Engineer (FAANG, AI companies with DoD contracts)
- Experience: NSA/CIA/Intel community work
- Military: 17+ years as Special Operator / Team Member
- Assets: Personal virus repository, extensive documentation

---

## Target Audience

**Option A: Classroom-focused (Selected)**
- Students under direct supervision
- Controlled distribution
- Professor-vetted access

---

## Access Control: The Five Gates (CTF-Style)

Progressive challenge that teaches as it tests. Each gate demonstrates skills required for the content within.

### Gate 1: "See Beyond the Surface"
**Skill:** Source inspection, questioning the visible
- Dark landing page with cryptic message
- Hidden HTML comment containing hex-encoded string
- Decodes to clue for Gate 2
- **Aesthetic:** Dark minimal (clean, surface level)

### Gate 2: "Shadows Speak in Color"
**Skill:** CSS analysis, hidden text detection
- Text hidden via CSS (same color as background)
- Reveals Base64 encoded string
- Decodes to clue for Gate 3
- **Aesthetic:** Terminal green creeping in

### Gate 3: "The Image Holds More"
**Skill:** Steganography, metadata analysis
- Image with hidden data (EXIF, LSB, or encoded filename)
- Reveals path to audio file
- **Aesthetic:** Terminal green dominant

### Gate 4: "Listen Closely"
**Skill:** Audio forensics, DTMF decoding
- Audio file with hidden DTMF tones
- Tones decode to digits (part of final key)
- Students use decoder tools (Audacity, online DTMF decoder)
- **Aesthetic:** Glitch/corruption (things getting weird)

### Gate 5: "Synthesis"
**Skill:** Intelligence fusion, methodical documentation
- Combine pieces from all previous gates
- Enter final passphrase
- Reveals invisible portal button
- Click to enter the Vault
- **Aesthetic:** Occult/arcane (full dark arts)

---

## Aesthetic Progression

| Location | Visual Theme |
|----------|--------------|
| Gate 1 | Dark minimal - black/gray, clean, professional menace |
| Gate 2-3 | Terminal green - classic hacker, monospace, CRT flicker |
| Gate 4 | Glitch/corruption - distorted text, visual artifacts |
| Gate 5 + Vault | Occult/arcane - sigils, forbidden knowledge aesthetic |

---

## Content Modules (Planned)

### Static Analysis
- PE/ELF header parsing visualizers
- Import table analysis ("Why is this calling CreateRemoteThread?")
- Strings analysis with context
- Entropy visualization (packed/encrypted detection)

### Behavioral Analysis
- Kill chain animations
- Registry/filesystem modification patterns
- C2 communication flow diagrams
- Persistence mechanism breakdowns

### Malware Families (Historical Case Studies)
- Stuxnet
- WannaCry
- NotPetya
- EMOTET
- Others from repository

### Red Team Scenarios
- Attack path simulators
- MITRE ATT&CK framework mapper
- Decision-based progression

### Blue Team Response
- SIEM scenario labs ("You see this - what do you do?")
- Incident response flowcharts
- Containment decision trees

### Sandbox Lab Guides
- REMnux setup walkthroughs
- FlareVM configuration
- Network isolation best practices
- Safe analysis methodology

---

## Technical Approach

- **Applets:** HTML/CSS/JS visualizations (no actual executable code)
- **Samples:** Remain in professor's controlled environment
- **Labs:** Guides point to properly isolated VMs
- **Distribution:** Offline-capable, classroom distribution

---

## Project Structure (Draft)

```
dark-arts/
├── gate.html              # Entry point - Gate 1
├── gates/
│   ├── gate-2.html
│   ├── gate-3.html
│   ├── gate-4.html
│   ├── gate-5.html
│   └── assets/
│       ├── listen.mp4     # DTMF audio file
│       └── shadow.png     # Stego image
├── vault/
│   ├── index.html         # Main dashboard
│   ├── modules/
│   │   ├── static-analysis/
│   │   ├── behavioral-analysis/
│   │   ├── malware-families/
│   │   ├── red-team/
│   │   └── blue-team/
│   └── labs/
│       ├── sandbox-setup/
│       └── guided-analysis/
└── assets/
    ├── css/
    ├── js/
    └── images/
```

---

## Skills Validated by Gates

By completing the five gates, students demonstrate:
- Source code inspection
- Encoding/decoding (Hex, Base64, ASCII)
- CSS and DOM analysis
- Steganography awareness
- Audio forensics basics
- Intelligence synthesis
- Documentation methodology

---

## Asset Inventory (Cloned Dec 16, 2025)

### The-MALWARE-Repo (269 files)
Location: `/home/eq/malware-analysis/The-MALWARE-Repo/`

| Category | Files | Notes |
|----------|-------|-------|
| Trojan | 49 | Largest collection |
| Email-Worm | 42 | |
| Ransomware | 38 | High priority for education |
| Joke | 27 | |
| Botnets | 16 | |
| Worm | 16 | |
| Net-Worm | 12 | **Blaster & Sasser source!** |
| RAT | 11 | Remote Access Trojans |
| Banking-Malware | 9 | |
| Virus | 9 | |
| Spyware | 5 | BonziBUDDY included |
| Stealer | 2 | |
| rogues | 2 | |
| Browser Hijackers | 1 | |
| Pony | 1 | |

### slowloris
Location: `/home/eq/malware-analysis/slowloris/`
- Python-based HTTP DoS tool
- Demonstrates connection exhaustion attacks
- Thread pool starvation technique

### wasec (Web Application Security)
Location: `/home/eq/malware-analysis/wasec/`
Source: WASEC Book companion code (Web Application Security)

| Category | Contents | Educational Value |
|----------|----------|-------------------|
| **clickjacking** | Bank/Hummer demos, iframe overlays | UI redress attacks |
| **cookies** | Cookie security flags demo | HttpOnly, Secure, SameSite |
| **cors** | CORS misconfiguration demo | Same-origin policy bypass |
| **hsts** | HSTS header demo | Transport security |
| **sub-resource-integrity** | SRI hash verification | Script integrity validation |
| **xss** | Cross-Site Scripting demos | Injection attacks |

**Technical Note:** Uses Node.js server with local hostfile entries (wasec.local, sub.wasec.local, wasec2.local)

---

## Asset Summary

| Repository | Type | Files/Categories | Primary Use |
|------------|------|------------------|-------------|
| The-MALWARE-Repo | Malware samples & source | 269 files, 15 categories | Static/behavioral analysis |
| slowloris | DoS tool | 1 Python script | Network attack demo |
| wasec | Web security demos | 6 categories | Web app security |

---

## Open Questions

1. ~~Virus repository formats~~ ANSWERED - source code, samples, docs
2. Priority modules to build first?
3. Specific malware families to feature? (Blaster, Sasser, ransomware recommended)
4. Timeline/pacing for development?
5. ~~Correct name for wasecwasec repo?~~ ANSWERED - wasec (Web Application Security)

---

## Next Steps

- [x] Inventory available documentation/samples (Dec 16, 2025)
- [ ] Finalize gate puzzle specifics
- [ ] Design vault dashboard aesthetic
- [ ] Build Gate 1 prototype
- [ ] Create DTMF audio file for Gate 4

---

*"The best defense comes from understanding the offense."*
