---
name: Package manager configuration preservation
description: pnpm update can rewrite workspace YAML and discard its explanatory comments.
---

Preserve workspace security-policy comments when updating dependencies.

**Why:** The workspace's pnpm update command rewrites and reorders the YAML configuration and removes comments, including explanations of the supply-chain safeguards, even when only named dependencies are updated.

**How to apply:** Inspect the workspace configuration diff after package updates and restore unrelated formatting and comments. Keep the minimum-release-age policy intact; use an older patched release when the latest version is still inside the release-age window.
