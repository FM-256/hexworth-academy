#!/bin/bash
# Apply Hexworth Academy branding to myEMATES applets

APPLETS_DIR="/home/eq/Ai content creation/network-essentials/Home/tools/ip-applets"

# Hexworth branding CSS and header HTML
BRAND_CSS='
/* Hexworth Academy Branding */
.hexworth-wrapper {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
    min-height: 100vh;
    padding: 0;
    margin: 0;
}
.hexworth-header {
    background: linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
}
.hexworth-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    text-decoration: none;
}
.hexworth-logo-icon {
    font-size: 28px;
}
.hexworth-logo-text {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
}
.hexworth-badge {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: #1e1b4b;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
}
.hexworth-content {
    display: flex;
    justify-content: center;
    padding: 20px;
}
.hexworth-footer {
    background: rgba(30, 27, 75, 0.8);
    color: rgba(255,255,255,0.7);
    text-align: center;
    padding: 12px;
    font-size: 12px;
}
.hexworth-footer a {
    color: #a78bfa;
    text-decoration: none;
}
.hexworth-footer a:hover {
    color: #fbbf24;
}
'

BRAND_HEADER='
<div class="hexworth-wrapper">
    <header class="hexworth-header">
        <a href="../../../catalog.html?theme=academy" class="hexworth-logo">
            <span class="hexworth-logo-icon">🏰</span>
            <span class="hexworth-logo-text">Hexworth Academy</span>
        </a>
        <span class="hexworth-badge">House of Web</span>
    </header>
    <div class="hexworth-content">
'

BRAND_FOOTER='
    </div>
    <footer class="hexworth-footer">
        <p>Educational content powered by <a href="https://www.myemates.com" target="_blank">myEMATES</a> |
        NSF Grant #DUE 1601612 |
        <a href="../../../catalog.html">← Back to Catalog</a></p>
    </footer>
</div>
'

# Function to apply branding to a single HTML file
apply_branding() {
    local file="$1"
    local filename=$(basename "$file")

    # Skip if already branded or if it's our custom applet
    if grep -q "hexworth-wrapper" "$file" 2>/dev/null; then
        echo "  ⏭️  $filename (already branded)"
        return
    fi

    if [[ "$filename" == "binary-decimal-converter.html" ]]; then
        echo "  ⏭️  $filename (custom applet)"
        return
    fi

    echo "  🎨 Branding: $filename"

    # Create backup
    cp "$file" "${file}.bak"

    # Create temp file
    local temp_file="${file}.tmp"

    # Process the file
    awk -v css="$BRAND_CSS" -v header="$BRAND_HEADER" -v footer="$BRAND_FOOTER" '
    /<\/style>/ && !style_done {
        print $0
        print css
        style_done = 1
        next
    }
    /<body>/ {
        print $0
        print header
        body_found = 1
        next
    }
    /<\/body>/ {
        print footer
        print $0
        next
    }
    { print }
    ' "$file" > "$temp_file"

    # Replace original with processed file
    mv "$temp_file" "$file"

    # Remove backup if successful
    rm -f "${file}.bak"
}

echo "🏰 Applying Hexworth Academy branding to IP Applets..."
echo ""

# Process each applet folder
for folder in "$APPLETS_DIR"/*/; do
    if [[ -d "$folder" ]]; then
        folder_name=$(basename "$folder")
        echo "📁 $folder_name/"

        # Find HTML files in this folder
        for html_file in "$folder"*.html; do
            if [[ -f "$html_file" ]]; then
                apply_branding "$html_file"
            fi
        done
    fi
done

echo ""
echo "✅ Branding complete!"
