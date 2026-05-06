#!/usr/bin/env python3
"""Install QAWave agent team from the _roles/ library.

Copies 12 chosen agent definitions, normalizes frontmatter, and prepends
a QAWave-specific context block so each agent operates in our brand voice.

Run once: `python3 .claude/install_agents.py`
"""
from __future__ import annotations
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).parent.parent          # qawave/
ROLES = Path("/Users/tm/workspaces/teams/downloaded/_roles")
TARGET = ROOT / ".claude" / "agents"

# (target_name, source_role_folder, source_filename, qawave_focus)
TEAM = [
    # Orchestration
    ("chief-of-staff", "orchestration-meta", "context-manager.md",
     "Routes work across the QAWave agent team. Daily digests, escalations, cross-agent handoffs."),

    # Brand & content (5)
    ("brand-guardian", "marketing", "brand-guardian.md",
     "Defends 'The Edge of QA Automation' positioning. Reviews every public message for tone."),
    ("copywriter", "marketing", "copywriter.md",
     "Writes Czech + English copy for landing sections, emails, ads. Knows the qawave-web-strategy.md."),
    ("content-marketer", "marketing", "content-marketer.md",
     "Plans content calendar, distribution, repurposing. Tracks performance."),
    ("blog-writer", "content-writing", "blog-writer.md",
     "Long-form articles for qawave.ai/blog. Senior QA / CTO audience. Authoritative, not academic."),
    ("seo-specialist", "seo", "seo-specialist.md",
     "Keyword research + on-page optimization for QA + AI testing terms (CZ + EN markets)."),

    # Engineering & design (3)
    ("frontend-designer", "design-ux", "frontend-designer.md",
     "Designs new sections / components for the Next.js 16 + Tailwind v4 marketing site."),
    ("code-reviewer", "code-review", "code-reviewer.md",
     "Reviews TSX / TS changes before merge. Performance, accessibility, idiomatic React 19."),
    ("technical-writer", "documentation", "technical-writer.md",
     "Writes case studies, docs, API references, customer onboarding guides."),

    # Domain expertise & research (3)
    ("qa-expert", "testing-qa", "qa-expert.md",
     "QA domain authority. Validates technical claims, helps with case studies + thought leadership."),
    ("competitive-analyst", "research-analysis", "competitive-analyst.md",
     "Tracks Applitools, Mabl, QA Wolf, Functionize, TestRigor. Updates differentiation matrix."),
    ("customer-retention", "customer-support", "customer-retention-loyalty-agent.md",
     "Drafts onboarding emails, QBR prep, retention plays for design partners."),
]

QAWAVE_PREFIX = """\

## QAWave context (prepended automatically)

You operate as a member of the **QAWave** agent team — a solo-founder, AI-native QA studio.

**Brand:** *"The Edge of QA Automation"* — agentic, autonomous quality engineering for senior teams.
**Audience:** Senior QA Engineers, QA Managers, CTOs at mid-to-enterprise SaaS companies (CZ + EU primary, US secondary).
**Voice:** authoritative not academic, visionary not hype-driven, confident not dismissive, European directness.
**Languages:** Czech is primary for landing site + outbound to CZ market; English for international content.

**Source-of-truth documents (read before writing):**
- `qawave-web-strategy.md` — full positioning, voice, competitive matrix
- `docs/business-context.md` — bootstrap mode operating context
- `docs/agent-team.md` — your peers + handoff protocols

**Hard rules:**
- No "revolutionary", "transform", "disruptive", "next-gen", or hype clichés
- Every claim must have a measurable proof point or data anchor
- Compare against real competitors (Applitools, Mabl, QA Wolf, Functionize, TestRigor)
- Do not invent customer names, metrics, or testimonials
- Tag any AI-generated public content per EU AI Act transparency requirement

**When uncertain:** escalate to chief-of-staff agent, do not fabricate.

---

"""


def normalize_frontmatter(content: str, agent_name: str, description: str) -> str:
    """Ensure clean YAML frontmatter with our naming + qawave-tuned description."""
    if content.startswith("---"):
        end = content.find("\n---", 4)
        if end != -1:
            body = content[end + 4 :].lstrip("\n")
        else:
            body = content
    else:
        body = content

    # Build new frontmatter (minimal, Claude Code-compatible)
    fm = [
        "---",
        f"name: {agent_name}",
        f"description: {description}",
        "model: sonnet",
        "---",
        "",
    ]
    return "\n".join(fm) + body


def main() -> int:
    if not ROLES.exists():
        print(f"ERROR: roles library not found at {ROLES}")
        return 1

    TARGET.mkdir(parents=True, exist_ok=True)

    installed = []
    skipped = []
    for name, role_folder, filename, focus in TEAM:
        src = ROLES / role_folder / filename
        if not src.exists():
            skipped.append((name, f"source missing: {src}"))
            continue

        try:
            content = src.read_text(encoding="utf-8")
        except Exception as e:
            skipped.append((name, str(e)))
            continue

        new_content = normalize_frontmatter(content, name, focus)
        # Inject QAWave prefix between frontmatter and body
        parts = new_content.split("---\n\n", 2)
        if len(parts) >= 2:
            body_with_prefix = QAWAVE_PREFIX + parts[1]
            new_content = "---\n" + parts[0].lstrip("-").lstrip("\n") + "---\n\n" + body_with_prefix
        else:
            # fallback if split unexpected
            new_content = new_content + "\n" + QAWAVE_PREFIX

        out_path = TARGET / f"{name}.md"
        out_path.write_text(new_content, encoding="utf-8")
        installed.append((name, src.relative_to(ROLES.parent)))

    print(f"Installed {len(installed)} agents into {TARGET.relative_to(ROOT)}/")
    for name, src in installed:
        print(f"  ✓ {name:<22s} ← {src}")
    if skipped:
        print(f"\n⚠️  Skipped {len(skipped)}:")
        for name, reason in skipped:
            print(f"  ✗ {name}: {reason}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
