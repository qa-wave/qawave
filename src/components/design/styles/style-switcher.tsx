"use client";

import { useState } from "react";
import { ChevronDown, Layers } from "lucide-react";
import {
  HIDDEN_PRESETS,
  PRESETS,
  VISIBLE_PRESETS,
  type DesignPreset,
  type PresetId,
} from "@/data/design-presets";
import { cn } from "@/lib/utils";

interface StyleSwitcherProps {
  active: PresetId;
  onChange: (id: PresetId) => void;
}

export function StyleSwitcher({ active, onChange }: StyleSwitcherProps) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = HIDDEN_PRESETS.length;

  return (
    <div
      role="radiogroup"
      aria-label="Vizuální styl stránky"
      className={cn(
        "fixed left-1/2 top-4 z-50 -translate-x-1/2",
        "flex max-w-[calc(100vw-2rem)] flex-col items-center gap-2",
        "rounded-2xl border border-white/10 bg-black/70 p-2 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      )}
    >
      {/* Top row: label + first 5 + expand toggle */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="ml-2 hidden items-center gap-1.5 text-xs font-medium text-neutral-400 sm:inline-flex">
          <Layers className="h-3.5 w-3.5" aria-hidden />
          Vizuální styl:
        </span>

        {VISIBLE_PRESETS.map((preset) => (
          <PillButton
            key={preset.id}
            preset={preset}
            active={preset.id === active}
            onClick={() => onChange(preset.id)}
          />
        ))}

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="style-switcher-extra"
          className={cn(
            "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors",
            "hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white/60"
          )}
        >
          +{hiddenCount}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              expanded && "rotate-180"
            )}
            aria-hidden
          />
        </button>
      </div>

      {/* Hidden row, revealed on toggle */}
      {expanded && (
        <div
          id="style-switcher-extra"
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {HIDDEN_PRESETS.map((preset) => (
            <PillButton
              key={preset.id}
              preset={preset}
              active={preset.id === active}
              onClick={() => onChange(preset.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PillButton({
  preset,
  active,
  onClick,
}: {
  preset: DesignPreset;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2",
        active
          ? "border-white/80 bg-white text-black"
          : "border-white/15 bg-white/5 text-neutral-200 hover:bg-white/10"
      )}
    >
      {preset.swatch && (
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: preset.swatch }}
          aria-hidden
        />
      )}
      {preset.label}
    </button>
  );
}
