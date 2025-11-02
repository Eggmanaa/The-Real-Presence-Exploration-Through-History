#!/bin/bash
echo "Testing image URLs..."
echo ""

# Extract all image URLs from index.tsx
grep -o 'src="https://upload.wikimedia.org[^"]*"' src/index.tsx | sed 's/src="//;s/"$//' | while read url; do
    echo "Testing: $(basename "$url" | cut -c1-60)..."
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    if [ "$status" = "200" ]; then
        echo "✅ SUCCESS ($status)"
    else
        echo "❌ FAILED ($status)"
    fi
    echo ""
done
