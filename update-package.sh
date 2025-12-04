#!/bin/bash
# Network Essentials - Automated Package Builder
# Version: 3.0
# Usage: ./update-package.sh

set -e  # Exit on error

echo "=========================================="
echo "Network Essentials Package Builder v3.0"
echo "=========================================="
echo ""

# Variables
PACKAGE_NAME="network-essentials-v3.0.zip"
BACKUP_DIR="package-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Backup existing package if it exists
if [ -f "$PACKAGE_NAME" ]; then
    echo "📦 Backing up existing package..."
    cp "$PACKAGE_NAME" "$BACKUP_DIR/network-essentials-v3.0_backup_$TIMESTAMP.zip"
    echo "   ✅ Backup saved to: $BACKUP_DIR/network-essentials-v3.0_backup_$TIMESTAMP.zip"
    echo ""
fi

# Remove old package
if [ -f "$PACKAGE_NAME" ]; then
    echo "🗑️  Removing old package..."
    rm "$PACKAGE_NAME"
    echo "   ✅ Old package removed"
    echo ""
fi

# Create new package
echo "📦 Creating new package..."
echo "   Including:"
echo "   • catalog.html (main navigation)"
echo "   • README.md & PACKAGE_MANIFEST.md (documentation)"
echo "   • All presentation HTML files"
echo "   • All speaker notes markdown files"
echo "   • Lab documentation and PDF"
echo "   • Interactive simulators"
echo "   • Design documents"
echo ""

zip -r "$PACKAGE_NAME" \
  catalog.html \
  README.md \
  PACKAGE_MANIFEST.md \
  *-presentation.html \
  *-speaker-notes.md \
  CUMULATIVE_LAB_SERIES.md \
  network-essentials-lab-handout.pdf \
  cisco-devnet-guide.md \
  interactive-network-simulator.v2.html \
  packet-tracer-lite-v3.html \
  VERSION_CONTROL_GUIDE.md \
  PACKET_TRACER_LITE_V3_DESIGN.md \
  INTERACTIVE_LAB_README.md \
  -x "*.Identifier" "*.Zone.Identifier" "*-old.pdf" \
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

# Verify package integrity
echo "✅ Verifying package integrity..."
if unzip -t "$PACKAGE_NAME" > /dev/null 2>&1; then
    echo "   ✅ Package integrity verified - all files valid"
else
    echo "   ❌ ERROR: Package integrity check failed!"
    exit 1
fi
echo ""

# Update PACKAGE_MANIFEST.md with new checksum
if [ -f "PACKAGE_MANIFEST.md" ]; then
    echo "📝 Updating PACKAGE_MANIFEST.md with new checksum..."
    sed -i "s/\*\*Checksum (SHA256):\*\* \[Run.*\]/**Checksum (SHA256):** \`$CHECKSUM\`/" PACKAGE_MANIFEST.md
    echo "   ✅ Manifest updated"
    echo ""
fi

echo "=========================================="
echo "✅ Package build complete!"
echo "=========================================="
echo ""
echo "📦 Ready for distribution:"
echo "   $PACKAGE_NAME ($SIZE)"
echo ""
echo "🚀 Next steps:"
echo "   • Test: unzip $PACKAGE_NAME && open catalog.html"
echo "   • Share via email, cloud storage, or LMS"
echo "   • Deploy to web server for remote access"
echo ""
echo "🔒 Verify integrity with:"
echo "   echo '$CHECKSUM $PACKAGE_NAME' | sha256sum -c"
echo ""
