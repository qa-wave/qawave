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
  | "neon"
  | "aurora"
  | "warm"
  | "ocean"
  | "minimal"
  | "brutalist";

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

  // 5. Neon — cyberpunk terminal
  {
    id: "neon",
    label: "Neon",
    swatch: "#a855f7",
    scheme: "dark",
    vars: {
      "--ds-bg": "#06000d",
      "--ds-surface": "#0d0220",
      "--ds-surface-2": "#170535",
      "--ds-text": "#e9d5ff",
      "--ds-text-muted": "rgba(233,213,255,0.68)",
      "--ds-border": "rgba(168,85,247,0.30)",
      "--ds-border-strong": "rgba(217,70,239,0.6)",
      "--ds-accent": "#d946ef",
      "--ds-accent-2": "#22d3ee",
      "--ds-accent-soft": "rgba(217,70,239,0.18)",
      "--ds-radius": "0.5rem",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-neon font-mono",
    heroDecorClass: "qa-neon-grid",
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
    componentClass: {
      headline:
        "[text-shadow:0_0_24px_rgba(217,70,239,0.6),0_0_48px_rgba(217,70,239,0.3)]",
      pillarCard:
        "shadow-[0_0_24px_rgba(217,70,239,0.15),inset_0_0_24px_rgba(34,211,238,0.06)]",
      primaryButton:
        "shadow-[0_0_24px_rgba(217,70,239,0.6)] hover:shadow-[0_0_36px_rgba(217,70,239,0.85)]",
    },
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

  // 7. Warm — cream + terracotta editorial
  {
    id: "warm",
    label: "Warm",
    swatch: "#c2410c",
    scheme: "light",
    vars: {
      "--ds-bg": "#faf6ef",
      "--ds-surface": "#f5e8d8",
      "--ds-surface-2": "#ecdcc4",
      "--ds-text": "#2a1810",
      "--ds-text-muted": "rgba(42,24,16,0.68)",
      "--ds-border": "rgba(42,24,16,0.14)",
      "--ds-border-strong": "rgba(194,65,12,0.35)",
      "--ds-accent": "#c2410c",
      "--ds-accent-2": "#a16207",
      "--ds-accent-soft": "rgba(194,65,12,0.12)",
      "--ds-radius": "0.5rem",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-warm",
    headlineSerif: true,
    fontFamily:
      "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
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

  // 9. Minimal — pure Swiss
  {
    id: "minimal",
    label: "Minimal",
    swatch: "#000000",
    scheme: "light",
    vars: {
      "--ds-bg": "#ffffff",
      "--ds-surface": "#ffffff",
      "--ds-surface-2": "#fafafa",
      "--ds-text": "#000000",
      "--ds-text-muted": "rgba(0,0,0,0.55)",
      "--ds-border": "rgba(0,0,0,0.14)",
      "--ds-border-strong": "#000000",
      "--ds-accent": "#000000",
      "--ds-accent-2": "#404040",
      "--ds-accent-soft": "rgba(0,0,0,0.04)",
      "--ds-radius": "0px",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-minimal",
    componentClass: {
      pillarCard: "shadow-none",
      primaryButton:
        "bg-black text-white hover:bg-neutral-800 shadow-none rounded-none",
      secondaryButton: "rounded-none",
    },
  },

  // 10. Brutalist — yellow + black
  {
    id: "brutalist",
    label: "Brutalist",
    swatch: "#fef200",
    scheme: "light",
    vars: {
      "--ds-bg": "#fef200",
      "--ds-surface": "#ffffff",
      "--ds-surface-2": "#ffffff",
      "--ds-text": "#000000",
      "--ds-text-muted": "rgba(0,0,0,0.78)",
      "--ds-border": "#000000",
      "--ds-border-strong": "#000000",
      "--ds-accent": "#ff0080",
      "--ds-accent-2": "#000000",
      "--ds-accent-soft": "#fef200",
      "--ds-radius": "0px",
    },
    rootClass: "bg-[var(--ds-bg)] text-[var(--ds-text)]",
    bodyClass: "qa-style-brutalist font-mono",
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
    headlineTransform: "uppercase",
    componentClass: {
      pillarCard:
        "border-[3px] border-black shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0_0_#000] rounded-none",
      primaryButton:
        "bg-black text-[#fef200] border-[3px] border-black shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#000] rounded-none uppercase tracking-tight",
      secondaryButton:
        "border-[3px] border-black bg-white text-black hover:bg-[#ff0080] hover:text-white rounded-none uppercase tracking-tight",
      pillarIcon: "border-[3px] border-black rounded-none bg-[#ff0080] text-white",
    },
  },
];

export const PRESET_BY_ID: Record<PresetId, DesignPreset> = Object.fromEntries(
  PRESETS.map((p) => [p.id, p])
) as Record<PresetId, DesignPreset>;

export const VISIBLE_PRESETS = PRESETS.slice(0, 5);
export const HIDDEN_PRESETS = PRESETS.slice(5);

export const DEFAULT_PRESET: PresetId = "klasik";
