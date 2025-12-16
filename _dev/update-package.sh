#!/bin/bash
# Network Essentials - Automated Package Builder
# Version: 4.0
# Usage: ./update-package.sh [version]
# Example: ./update-package.sh 4.0

set -e  # Exit on error

echo "=========================================="
echo "Network Essentials Package Builder v4.0"
echo "=========================================="
echo ""

# Get version from argument or default
VERSION="${1:-4.0}"
PACKAGE_NAME="network-essentials-v${VERSION}.zip"
BACKUP_DIR="package-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Check if this version already exists - backup but DON'T delete
if [ -f "$PACKAGE_NAME" ]; then
    echo "📦 Version $VERSION already exists - creating backup..."
    cp "$PACKAGE_NAME" "$BACKUP_DIR/${PACKAGE_NAME%.zip}_backup_$TIMESTAMP.zip"
    echo "   ✅ Backup saved to: $BACKUP_DIR/${PACKAGE_NAME%.zip}_backup_$TIMESTAMP.zip"
    echo ""
fi

# NOTE: We do NOT delete older versions (e.g., v3.9, v3.8, etc.)
# Only the current version being rebuilt gets backed up and replaced

# Create new package
echo "📦 Creating package: $PACKAGE_NAME"
echo "   Including:"
echo "   • All HTML presentations and simulators"
echo "   • All speaker notes and documentation"
echo "   • Lab guides and handouts"
echo ""

zip -r "$PACKAGE_NAME" \
  catalog.html \
  START_HERE.html \
  README.md \
  PACKAGE_MANIFEST.md \
  QUICK-START.txt \
  *-presentation.html \
  *-speaker-notes.md \
  *-visualizer.html \
  CUMULATIVE_LAB_SERIES.md \
  network-essentials-lab-handout.pdf \
  network-essentials-lab-handout.md \
  cisco-devnet-guide.md \
  cisco-devnet-guide.pdf \
  interactive-network-simulator.v2.html \
  packet-tracer-lite-v3.html \
  labs/ \
  VERSION_CONTROL_GUIDE.md \
  PACKET_TRACER_LITE_V3_DESIGN.md \
  INTERACTIVE_LAB_README.md \
  TROUBLESHOOTING_SCENARIOS_DESIGN.md \
  TROUBLESHOOTING_COMPLETE.md \
  BLACKBOARD_DEPLOYMENT_GUIDE.md \
  CERTIFICATION_ROADMAP.md \
  -x "*.Identifier" "*.Zone.Identifier" "*-old.pdf" "*.backup" \
  -q

echo "   ✅ Package created successfully"
echo ""

# Calculate checksum
echo "🔐 Generating SHA256 checksum..."
CHECKSUM=$(sha256sum "$PACKAGE_NAME" | awk '{print $1}')
echo "   SHA256: $CHECKSUM"
echo ""

# Get file size
SIZE=$(ls -lh "$PACKAGE_NAME" | awk '{print $5}')
echo "📊 Package Statistics:"
echo "   • File: $PACKAGE_NAME"
echo "   • Size: $SIZE"
echo "   • Location: $(pwd)/$PACKAGE_NAME"
echo ""

# Count files in package
FILE_COUNT=$(unzip -l "$PACKAGE_NAME" | tail -1 | awk '{print $2}')
echo "   • Files included: $FILE_COUNT"
echo ""

# List all version packages in directory
echo "📚 All version packages:"
ls -lh network-essentials-v*.zip 2>/dev/null | awk '{print "   • " $9 " (" $5 ")"}'
echo ""

# Verify package integrity
echo "✅ Verifying package integrity..."
if unzip -t "$PACKAGE_NAME" > /dev/null 2>&1; then
    echo "   ✅ Package integrity verified - all files valid"
else
    echo "   ❌ ERROR: Package integrity check failed!"
    exit 1
fi
echo ""

echo "=========================================="
echo "✅ Package build complete!"
echo "=========================================="
echo ""
echo "📦 Ready for distribution:"
echo "   $PACKAGE_NAME ($SIZE)"
echo ""
echo "🚀 Next steps:"
echo "   • Test: unzip -o $PACKAGE_NAME -d test_folder && open test_folder/catalog.html"
echo "   • Share via email, cloud storage, or LMS"
echo "   • Deploy to web server for remote access"
echo ""
echo "🔒 Verify integrity with:"
echo "   echo '$CHECKSUM  $PACKAGE_NAME' | sha256sum -c"
echo ""
