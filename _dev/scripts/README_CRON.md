# GitHub Issue Checker - Automated Setup

## Quick Start

Run the script manually:
```bash
python3 /home/eq/Ai\ content\ creation/network-essentials/scripts/github_issue_checker.py
```

## Cron Setup (Auto-run every 4 hours)

### Option 1: User Crontab (Recommended)
```bash
# Edit your crontab
crontab -e

# Add this line (runs every 4 hours):
0 */4 * * * /usr/bin/python3 "/home/eq/Ai content creation/network-essentials/scripts/github_issue_checker.py" >> "/home/eq/Ai content creation/network-essentials/Issues from github/cron.log" 2>&1
```

### Option 2: Systemd Timer (More Robust)

Create `/etc/systemd/system/github-issue-checker.service`:
```ini
[Unit]
Description=GitHub Issue Checker for Hexworth Academy
After=network-online.target

[Service]
Type=oneshot
User=eq
ExecStart=/usr/bin/python3 "/home/eq/Ai content creation/network-essentials/scripts/github_issue_checker.py"
WorkingDirectory=/home/eq/Ai content creation/network-essentials

[Install]
WantedBy=multi-user.target
```

Create `/etc/systemd/system/github-issue-checker.timer`:
```ini
[Unit]
Description=Run GitHub Issue Checker every 4 hours

[Timer]
OnBootSec=5min
OnUnitActiveSec=4h
Persistent=true

[Install]
WantedBy=timers.target
```

Enable the timer:
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now github-issue-checker.timer
```

## Output Files

The script creates these files in `Issues from github/`:
- `github_issues.json` - Full issue data in JSON format
- `issues_summary.md` - Human-readable markdown summary
- `issue_checker.log` - Run history and logs

## Rate Limits

GitHub API allows 60 requests/hour without authentication.
For higher limits, set a `GITHUB_TOKEN` environment variable:
```bash
export GITHUB_TOKEN="your_personal_access_token"
```

## Check Cron Status
```bash
# List your cron jobs
crontab -l

# Check cron logs
grep CRON /var/log/syslog | tail -20
```
