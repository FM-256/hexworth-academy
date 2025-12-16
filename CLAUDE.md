# Network Essentials Project - Claude Guidelines

## Interaction Rules

### 1. DISCUSS BEFORE ACTING
When the user says things like:
- "I want to..." / "I'm thinking about..."
- "What do you think of..." / "How about..."
- "Offer recommendations" / "Give me options"

These are DISCUSSION STARTERS. Respond with ideas, options, and questions - NOT tool calls or edits.

### 2. EXPLICIT APPROVAL REQUIRED
Only make changes when the user gives explicit approval:
- "Yes, do it" / "Go ahead"
- "Make that change" / "Implement it"
- "Proceed" / "Yes"

### 3. WHEN UNCERTAIN, ASK
If unclear whether the user wants discussion or action:
> "Would you like me to implement this, or are we still exploring options?"

### 4. VERBAL CHECKPOINT
Before any significant edit, state intent and wait:
> "I'm ready to update X, Y, Z. Should I proceed?"

## Project Context
- Educational networking course materials
- Catalog-based HTML presentations and interactive tools
- Version-controlled with GLOBAL_CHANGELOG.md

## Version Management (CRITICAL)
**ALWAYS bump the version when making feature changes or fixes.**

Version must be updated in **4 locations**:
1. `Home/index.html:~2281` - Header display: `<span id="currentVersion">X.X.X</span>`
2. `Home/index.html:~2300` - Update modal: `<div class="value" id="modalCurrentVersion">X.X.X</div>`
3. `Home/index.html:~8408` - JS config: `currentVersion: 'X.X.X'`
4. `Home/version.json` - Remote version check file

**Also update `releaseNotes` in version.json** to describe what changed.

## Git Commits - NO AI ATTRIBUTION (MANDATORY)
**NEVER include AI/Claude attribution in commits or code:**
- NO "🤖 Generated with Claude Code" footers
- NO "Co-Authored-By: Claude" lines
- NO AI attribution of any kind in commit messages
- NO AI attribution in code comments or files

This rule is **absolute and permanent**.

## Git Remotes
Push to BOTH remotes after commits:
- `fm256` - Primary (FM-256/hexworth-academy)
- `tntxtra` - Mirror (tntxtra/hexworth-academy)

```bash
git push fm256 main && git push tntxtra main
```
