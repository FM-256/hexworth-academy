#!/bin/bash
# Usage: ./download_applet.sh <cloudfront_folder> <html_filename> <hyperesources_folder>

BASE_URL="https://d2hie3dpn9wvbb.cloudfront.net"
FOLDER=$1
HTML=$2
HYPER=$3
DEST="/home/eq/Ai content creation/network-essentials/Home/tools/ip-applets/$FOLDER"

echo "Downloading $FOLDER..."
mkdir -p "$DEST/$HYPER"

# Download main HTML
wget -q "$BASE_URL/$FOLDER/$HTML" -O "$DEST/$HTML"

# Find and download referenced JS files from HTML
for js in $(grep -oE "${HYPER}/[^\"'?]+" "$DEST/$HTML" | sed 's/?.*//' | sort -u); do
    wget -q "$BASE_URL/$FOLDER/$js" -O "$DEST/$js" 2>/dev/null
done

# Find the generated script
GEN_SCRIPT=$(ls "$DEST/$HYPER/"*_hype_generated_script.js 2>/dev/null | head -1)

if [ -f "$GEN_SCRIPT" ]; then
    # Extract HYPE runtime version and download
    HYPE_VER=$(grep -oE 'HYPE-[0-9]+\.(full|thin)\.min\.js' "$GEN_SCRIPT" | head -1)
    if [ -n "$HYPE_VER" ]; then
        wget -q "$BASE_URL/$FOLDER/$HYPER/$HYPE_VER" -O "$DEST/$HYPER/$HYPE_VER" 2>/dev/null
    fi
    
    # Extract and download all image files
    for img in $(grep -oE '"[^"]+\.(png|jpg|gif|svg)"' "$GEN_SCRIPT" | tr -d '"' | sort -u); do
        wget -q "$BASE_URL/$FOLDER/$HYPER/$img" -O "$DEST/$HYPER/$img" 2>/dev/null
    done
fi

echo "✓ $FOLDER complete"
