"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_PRESET,
  PRESET_BY_ID,
  type PresetId,
} from "@/data/design-presets";
import { StyleSwitcher } from "@/components/design/styles/style-switcher";
import { StyledShowcase } from "@/components/design/styles/styled-showcase";
import "./styles.css";

const VALID_IDS = new Set(Object.keys(PRESET_BY_ID));

function readInitial(): PresetId {
  if (typeof window === "undefined") return DEFAULT_PRESET;
  const fromHash = window.location.hash.replace(/^#/, "");
  if (fromHash && VALID_IDS.has(fromHash)) return fromHash as PresetId;
  const fromQuery = new URLSearchParams(window.location.search).get("style");
  if (fromQuery && VALID_IDS.has(fromQuery)) return fromQuery as PresetId;
  return DEFAULT_PRESET;
}

export default function DesignStylesPage() {
  const [active, setActive] = useState<PresetId>(DEFAULT_PRESET);

  // Hydrate from URL after mount to avoid SSR mismatch.
  useEffect(() => {
    setActive(readInitial());
  }, []);

  const handleChange = (id: PresetId) => {
    setActive(id);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = id;
      window.history.replaceState(null, "", url.toString());
    }
  };

  const preset = PRESET_BY_ID[active];

  return (
    <>
      <StyleSwitcher active={active} onChange={handleChange} />
      <StyledShowcase preset={preset} />
    </>
  );
}
