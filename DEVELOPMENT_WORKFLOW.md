# Network Essentials - Development Workflow

**Version:** 3.0  
**Purpose:** Guide for updating and maintaining the catalog  

---

## 🔄 Automated Package Building

Whenever you modify any content (presentations, speaker notes, labs, simulators, or catalog), the package will be automatically rebuilt to stay current.

### **Quick Update Workflow:**

```bash
# 1. Make your changes to any files
nano catalog.html              # Update catalog
nano ospf-presentation.html    # Edit presentation
nano ospf-speaker-notes.md     # Update speaker notes

# 2. Run the automated package builder
./update-package.sh

# 3. The script will:
#    • Backup existing package
#    • Create new package with all files
#    • Generate SHA256 checksum
#    • Verify package integrity
#    • Update manifest with new checksum
```

### **What Gets Updated Automatically:**

✅ **Always Included in Package:**
- `catalog.html` (navigation hub)
- All `*-presentation.html` files
- All `*-speaker-notes.md` files
- Lab documentation (CUMULATIVE_LAB_SERIES.md, PDF, cisco-devnet-guide.md)
- Both simulators (v2.0 and v3.0)
- All documentation (README.md, PACKAGE_MANIFEST.md, design docs)

❌ **Automatically Excluded:**
- Git version control files
- Backup files and archives
- Windows Zone.Identifier files
- Temporary editor files
- Old/deprecated versions

---

## 📝 Common Update Scenarios

### **Scenario 1: Add New Presentation**

```bash
# 1. Create new presentation
# Example: create bgp-presentation.html

# 2. Update catalog.html
# Add new card for BGP presentation with:
# - Title and description
# - Slide count
# - Feature list
# - Link to bgp-presentation.html

# 3. Update statistics in catalog.html
# Change "11 Interactive Presentations" → "12 Interactive Presentations"
# Recalculate total slides

# 4. Rebuild package
./update-package.sh

# 5. Package now includes new presentation automatically!
```

### **Scenario 2: Add/Update Speaker Notes**

```bash
# 1. Create or edit speaker notes
nano tcp-speaker-notes.md

# 2. Update catalog.html (if adding new notes)
# Change "will be created" → link to markdown file

# 3. Rebuild package
./update-package.sh

# Package automatically includes updated notes
```

### **Scenario 3: Fix Bug in Presentation**

```bash
# 1. Edit presentation HTML
nano vlan-presentation.html
# Fix animation timing, typo, or layout issue

# 2. Rebuild package (no catalog changes needed)
./update-package.sh

# Updated presentation now in package
```

### **Scenario 4: Update Lab Documentation**

```bash
# 1. Edit lab guide
nano CUMULATIVE_LAB_SERIES.md
# Add clarifications, fix commands, update topology

# 2. Rebuild package
./update-package.sh

# Updated lab guide now in package
```

### **Scenario 5: Enhance Simulator**

```bash
# 1. Edit simulator
nano packet-tracer-lite-v3.html
# Add new lab, fix bug, improve UI

# 2. Update catalog if new features added
nano catalog.html
# Update feature list or version number

# 3. Rebuild package
./update-package.sh

# Updated simulator now in package
```

---

## 🎯 Version Management

### **When to Increment Version Number:**

**Minor Updates (v3.0 → v3.1):**
- Bug fixes in presentations
- Typo corrections
- Small improvements to existing content
- No new features or content

**Major Updates (v3.0 → v4.0):**
- New presentations added
- New labs or simulators
- Major feature enhancements
- Significant content additions

### **Updating Version Numbers:**

```bash
# 1. Update version in multiple files:
# - README.md (line 3)
# - PACKAGE_MANIFEST.md (line 4)
# - update-package.sh (line 2, line 12)
# - catalog.html (footer)

# 2. Rename package in script:
# Change PACKAGE_NAME="network-essentials-v3.0.zip"
# To PACKAGE_NAME="network-essentials-v4.0.zip"

# 3. Update version history in README.md
# Add new section under "Updates & Version History"

# 4. Rebuild package
./update-package.sh
```

---

## 🔧 Troubleshooting

### **Problem: Package script fails**

```bash
# Check if zip command is installed
which zip

# If not installed:
sudo apt-get install zip  # Ubuntu/Debian
# or
sudo yum install zip      # CentOS/RHEL
```

### **Problem: Package missing files**

```bash
# Verify files exist before packaging
ls -la *-presentation.html
ls -la *-speaker-notes.md

# Check script includes patterns
cat update-package.sh | grep "zip -r"
```

### **Problem: Package too large**

```bash
# Check for accidentally included large files
unzip -l network-essentials-v3.0.zip | sort -k4 -n

# Add exclusions to update-package.sh if needed
# -x "large-file.mp4" "*.mov"
```

---

## 📊 Quality Assurance Checklist

Before distributing updated package:

- [ ] All presentations open correctly
- [ ] Catalog navigation links work
- [ ] Speaker notes render properly in Markdown viewer
- [ ] Simulators load and function
- [ ] Labs PDF opens correctly
- [ ] README reflects current contents
- [ ] Version numbers consistent across files
- [ ] Checksum generated successfully
- [ ] Package integrity verified
- [ ] File count matches expectations (~30-35 files)

---

## 🚀 Quick Reference Commands

```bash
# Build package
./update-package.sh

# Verify package integrity
unzip -t network-essentials-v3.0.zip

# Check package contents
unzip -l network-essentials-v3.0.zip

# Extract package (for testing)
unzip network-essentials-v3.0.zip -d test-extract/

# Verify checksum
sha256sum -c <<< "75fb9c2bf5361e52b960adcb37e28d78890a018aff621e6b8ddc121e9a3bb478  network-essentials-v3.0.zip"

# List all presentations
ls -1 *-presentation.html

# List all speaker notes
ls -1 *-speaker-notes.md

# Count total slides (approximate)
grep -h "class=\"slide\"" *-presentation.html | wc -l
```

---

## 📂 Project Structure

```
network-essentials/
├── update-package.sh                 # Automated builder ⭐
├── .gitignore                        # Version control ignore rules
├── DEVELOPMENT_WORKFLOW.md           # This file
│
├── catalog.html                      # Main entry point
├── README.md                         # User documentation
├── PACKAGE_MANIFEST.md               # Package inventory
│
├── presentations/
│   ├── ospf-presentation.html
│   ├── vlan-presentation.html
│   └── ... (11 total)
│
├── speaker-notes/
│   ├── ospf-speaker-notes.md
│   ├── vlan-speaker-notes.md
│   └── ... (8 total)
│
├── labs/
│   ├── CUMULATIVE_LAB_SERIES.md
│   └── network-essentials-lab-handout.pdf
│
├── simulators/
│   ├── interactive-network-simulator.v2.html
│   └── packet-tracer-lite-v3.html
│
├── package-backups/                  # Auto-created by script
│   └── network-essentials-v3.0_backup_*.zip
│
└── network-essentials-v3.0.zip       # Current package
```

---

## 🎓 Best Practices

### **1. Test Before Packaging**
- Always test changes in browser before rebuilding package
- Check all navigation links work
- Verify animations and interactivity

### **2. Document Changes**
- Update README.md version history
- Note what changed in git commit messages
- Keep PACKAGE_MANIFEST.md current

### **3. Backup Strategy**
- Script auto-backs up before rebuild
- Keep previous versions in package-backups/
- Consider git commits for source control

### **4. Consistency**
- Use same style/theme across presentations
- Follow naming conventions (*-presentation.html, *-speaker-notes.md)
- Maintain consistent keyboard navigation

### **5. Version Control**
- Commit source files to git regularly
- Don't commit the zip package (it's regenerated)
- Use meaningful commit messages

---

## 🔄 Automated Workflow Summary

```
┌─────────────────────────────────────┐
│  1. Edit Content Files              │
│     • catalog.html                  │
│     • presentations                 │
│     • speaker notes                 │
│     • labs                          │
│     • simulators                    │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  2. Run: ./update-package.sh        │
│     • Backs up old package          │
│     • Creates new package           │
│     • Generates checksum            │
│     • Verifies integrity            │
│     • Updates manifest              │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│  3. Package Ready for Distribution  │
│     • network-essentials-v3.0.zip   │
│     • 591 KB (or current size)      │
│     • All files included            │
│     • Integrity verified ✅         │
└─────────────────────────────────────┘
```

**Time to rebuild package: ~2-3 seconds** ⚡

---

**Remember:** The package builder ensures your distribution package is always current with your latest changes! 🚀
