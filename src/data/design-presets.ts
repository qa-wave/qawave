// ============================================================
// qawave.ai — Design Presets for /design/styles route
// 10 visual style variants applied to the same showcase
// landing (Hero + Pillars + CTA).
// ============================================================

export type PresetId =
  | "klasik"
  | "gradient"
  | "glass"
  | "dark"
  | "vapor"
  | "aurora"
  | "forest"
  | "ocean"
  | "steel"
  | "cosmic";

export interface DesignPreset {
  id: PresetId;
  label: string;
  /** Optional swatch color shown in the switcher pill. */
  swatch?: string;
  /** Theme variant: "dark" or "light" — controls scrollbar / colorScheme. */
  scheme: "dark" | "light";
  /** CSS variables applied to a root wrapper. Components consume these via arbitrary values. */
  vars: Record<string, string>;
  /** Tailwind classes applied to the root showcase wrapper. */
  rootClass: string;
  /** Body / showcase class — handles fonts and decorative effects. */
  bodyClass: string;
  /** Hero-specific decoration class (radial blob, mesh gradient, scanlines, etc.). */
  heroDecorClass?: string;
  /** Per-section override classes. */
  sectionClass?: {
    hero?: string;
    pillars?: string;
    cta?: string;
  };
  /** Per-component override classes. */
  componentClass?: {
    badge?: string;
    headline?: string;
    body?: string;
    primaryButton?: string;
    secondaryButton?: string;
    pillarCard?: string;
    pillarIcon?: string;
    pillarTagline?: string;
  };
  /** Default font stack applied to .qa-style-root. */
  fontFamily?: string;
  /** Text-transform applied to headlines (e.g. "uppercase" for Brutalist). */
  headlineTransform?: "none" | "uppercase";
  /** Whether headlines use the serif/display family. */
  headlineSerif?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Preset definitions                                                 */
/* ------------------------------------------------------------------ */

export const PRESETS: DesignPreset[] = [
  // 1. Klasik — current production dark indigo
  {
    id: "klasik",
    label: "Klasik",
    swatch: "#4f46e5",
    scheme: "dark",
    vars: {
      "--ds-bg": "#050505",
      "--ds-surface": "#111113",
      "--ds-surface-2": "#18181b",
      "--ds-text": "#ededed",
      "--ds-text-muted": "#a1a1aa",
      "--ds-border": "rgba(255,255,255,0.06)",
      "--ds-border-strong": "rgba(79,70,229,0.3)",
      "--ds-accent": "#4f46e5",
      "--ds-accent-2": "#6366f1",
      "--ds-accent-soft": "rgba(79,70,229,0.15)",
      "--ds-radius": "1rem",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-klasik",
    heroDecorClass:
      "bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(79,70,229,0.10),transparent)]",
  },

  // 2. Gradient — vibrant purple→pink→orange
  {
    id: "gradient",
    label: "Gradient",
    swatch: "#a855f7",
    scheme: "dark",
    vars: {
      "--ds-bg": "#0a0118",
      "--ds-surface": "rgba(255,255,255,0.06)",
      "--ds-surface-2": "rgba(255,255,255,0.10)",
      "--ds-text": "#fafafa",
      "--ds-text-muted": "rgba(250,250,250,0.72)",
      "--ds-border": "rgba(255,255,255,0.18)",
      "--ds-border-strong": "rgba(255,255,255,0.35)",
      "--ds-accent": "#ec4899",
      "--ds-accent-2": "#f97316",
      "--ds-accent-soft": "rgba(236,72,153,0.18)",
      "--ds-radius": "1.25rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[linear-gradient(135deg,#1e0a3c_0%,#7c1d6f_35%,#dc2626_70%,#f97316_100%)]",
    bodyClass: "qa-style-gradient",
    heroDecorClass: "qa-gradient-mesh",
  },

  // 3. Glass — light pastel + frosted glass
  {
    id: "glass",
    label: "Glass",
    swatch: "#a5b4fc",
    scheme: "light",
    vars: {
      "--ds-bg": "#eef2ff",
      "--ds-surface": "rgba(255,255,255,0.55)",
      "--ds-surface-2": "rgba(255,255,255,0.75)",
      "--ds-text": "#1e1b4b",
      "--ds-text-muted": "rgba(30,27,75,0.66)",
      "--ds-border": "rgba(99,102,241,0.18)",
      "--ds-border-strong": "rgba(99,102,241,0.35)",
      "--ds-accent": "#6366f1",
      "--ds-accent-2": "#ec4899",
      "--ds-accent-soft": "rgba(99,102,241,0.14)",
      "--ds-radius": "1.5rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[linear-gradient(180deg,#e0e7ff_0%,#fce7f3_50%,#fef3c7_100%)]",
    bodyClass: "qa-style-glass",
    heroDecorClass: "qa-glass-orbs",
    componentClass: {
      pillarCard: "backdrop-blur-xl",
    },
  },

  // 4. Dark — ultra-monochrome, no color accent
  {
    id: "dark",
    label: "Dark",
    swatch: "#000000",
    scheme: "dark",
    vars: {
      "--ds-bg": "#000000",
      "--ds-surface": "#0a0a0a",
      "--ds-surface-2": "#141414",
      "--ds-text": "#ffffff",
      "--ds-text-muted": "rgba(255,255,255,0.55)",
      "--ds-border": "rgba(255,255,255,0.10)",
      "--ds-border-strong": "rgba(255,255,255,0.40)",
      "--ds-accent": "#ffffff",
      "--ds-accent-2": "#a3a3a3",
      "--ds-accent-soft": "rgba(255,255,255,0.08)",
      "--ds-radius": "0.75rem",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-dark",
    heroDecorClass:
      "bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(255,255,255,0.06),transparent_70%)]",
    componentClass: {
      primaryButton:
        "bg-white text-black hover:bg-neutral-200 shadow-none",
    },
  },

  // 5. Vapor — soft synthwave pastel
  {
    id: "vapor",
    label: "Vapor",
    swatch: "#ec4899",
    scheme: "light",
    vars: {
      "--ds-bg": "#fdf4ff",
      "--ds-surface": "rgba(255,255,255,0.65)",
      "--ds-surface-2": "rgba(255,255,255,0.85)",
      "--ds-text": "#4c1d95",
      "--ds-text-muted": "rgba(76,29,149,0.66)",
      "--ds-border": "rgba(236,72,153,0.18)",
      "--ds-border-strong": "rgba(236,72,153,0.40)",
      "--ds-accent": "#ec4899",
      "--ds-accent-2": "#06b6d4",
      "--ds-accent-soft": "rgba(236,72,153,0.14)",
      "--ds-radius": "1.25rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[linear-gradient(180deg,#fef3c7_0%,#fbcfe8_30%,#c7d2fe_70%,#a5f3fc_100%)]",
    bodyClass: "qa-style-vapor",
    heroDecorClass: "qa-vapor-horizon",
  },

  // 6. Aurora — dark teal + green/blue mesh
  {
    id: "aurora",
    label: "Aurora",
    swatch: "#14b8a6",
    scheme: "dark",
    vars: {
      "--ds-bg": "#001f1d",
      "--ds-surface": "rgba(20,184,166,0.06)",
      "--ds-surface-2": "rgba(20,184,166,0.10)",
      "--ds-text": "#ccfbf1",
      "--ds-text-muted": "rgba(204,251,241,0.65)",
      "--ds-border": "rgba(20,184,166,0.20)",
      "--ds-border-strong": "rgba(34,211,238,0.45)",
      "--ds-accent": "#14b8a6",
      "--ds-accent-2": "#22d3ee",
      "--ds-accent-soft": "rgba(20,184,166,0.16)",
      "--ds-radius": "1.25rem",
    },
    rootClass: "bg-[#001f1d] text-[var(--ds-text)]",
    bodyClass: "qa-style-aurora",
    heroDecorClass: "qa-aurora-mesh",
  },

  // 7. Forest — deep emerald nature
  {
    id: "forest",
    label: "Forest",
    swatch: "#10b981",
    scheme: "dark",
    vars: {
      "--ds-bg": "#0a1f12",
      "--ds-surface": "#102a1a",
      "--ds-surface-2": "#163b25",
      "--ds-text": "#d1fae5",
      "--ds-text-muted": "rgba(209,250,229,0.66)",
      "--ds-border": "rgba(16,185,129,0.18)",
      "--ds-border-strong": "rgba(132,204,22,0.40)",
      "--ds-accent": "#10b981",
      "--ds-accent-2": "#84cc16",
      "--ds-accent-soft": "rgba(16,185,129,0.14)",
      "--ds-radius": "1.25rem",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-forest",
    heroDecorClass: "qa-forest-mist",
  },

  // 8. Ocean — deep blue
  {
    id: "ocean",
    label: "Ocean",
    swatch: "#0ea5e9",
    scheme: "dark",
    vars: {
      "--ds-bg": "#021124",
      "--ds-surface": "#032541",
      "--ds-surface-2": "#053a5e",
      "--ds-text": "#e0f2fe",
      "--ds-text-muted": "rgba(224,242,254,0.65)",
      "--ds-border": "rgba(14,165,233,0.18)",
      "--ds-border-strong": "rgba(56,189,248,0.45)",
      "--ds-accent": "#0ea5e9",
      "--ds-accent-2": "#38bdf8",
      "--ds-accent-soft": "rgba(14,165,233,0.16)",
      "--ds-radius": "1rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[radial-gradient(ellipse_at_top,#053a5e_0%,#021124_60%)]",
    bodyClass: "qa-style-ocean",
    heroDecorClass: "qa-ocean-waves",
  },

  // 9. Steel — industrial gunmetal blueprint
  {
    id: "steel",
    label: "Steel",
    swatch: "#3b82f6",
    scheme: "dark",
    vars: {
      "--ds-bg": "#1a1d24",
      "--ds-surface": "#232831",
      "--ds-surface-2": "#2d333f",
      "--ds-text": "#e2e8f0",
      "--ds-text-muted": "rgba(226,232,240,0.62)",
      "--ds-border": "rgba(148,163,184,0.16)",
      "--ds-border-strong": "rgba(59,130,246,0.45)",
      "--ds-accent": "#3b82f6",
      "--ds-accent-2": "#94a3b8",
      "--ds-accent-soft": "rgba(59,130,246,0.14)",
      "--ds-radius": "0.5rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[linear-gradient(180deg,#1a1d24_0%,#232831_100%)]",
    bodyClass: "qa-style-steel",
    heroDecorClass: "qa-steel-blueprint",
  },

  // 10. Cosmic — deep space + nebula
  {
    id: "cosmic",
    label: "Cosmic",
    swatch: "#a855f7",
    scheme: "dark",
    vars: {
      "--ds-bg": "#0a0118",
      "--ds-surface": "rgba(168,85,247,0.06)",
      "--ds-surface-2": "rgba(168,85,247,0.10)",
      "--ds-text": "#ede9fe",
      "--ds-text-muted": "rgba(237,233,254,0.66)",
      "--ds-border": "rgba(168,85,247,0.20)",
      "--ds-border-strong": "rgba(192,132,252,0.45)",
      "--ds-accent": "#a855f7",
      "--ds-accent-2": "#22d3ee",
      "--ds-accent-soft": "rgba(168,85,247,0.18)",
      "--ds-radius": "1.5rem",
    },
    rootClass:
      "text-[var(--ds-text)] bg-[radial-gradient(ellipse_at_top,#1a0938_0%,#0a0118_60%)]",
    bodyClass: "qa-style-cosmic",
    heroDecorClass: "qa-cosmic-nebula",
  },
];

export const PRESET_BY_ID: Record<PresetId, DesignPreset> = Object.fromEntries(
  PRESETS.map((p) => [p.id, p])
) as Record<PresetId, DesignPreset>;

export const VISIBLE_PRESETS = PRESETS.slice(0, 5);
export const HIDDEN_PRESETS = PRESETS.slice(5);

export const DEFAULT_PRESET: PresetId = "klasik";
