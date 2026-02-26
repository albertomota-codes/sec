#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environment
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

echo "==> Installing npm dependencies..."
npm install

echo ""
echo "Dependencies ready. GitHub Pages URL:"
echo "  https://albertomota-codes.github.io/sec/"
echo ""
