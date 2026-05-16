import { describe, it, expect } from "vitest";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  heroTextReveal,
  pathDraw,
  cardLift,
  counterAnimationConfig,
} from "./motion";

describe("motion variants", () => {
  describe("fadeInUp", () => {
    it("has hidden state with opacity 0 and y offset", () => {
      expect(fadeInUp.hidden).toEqual({ opacity: 0, y: 24 });
    });

    it("has visible state with full opacity and no offset", () => {
      const visible = fadeInUp.visible as Record<string, unknown>;
      expect(visible.opacity).toBe(1);
      expect(visible.y).toBe(0);
    });
  });

  describe("staggerContainer", () => {
    it("creates stagger with default delay", () => {
      const variants = staggerContainer();
      const visible = variants.visible as Record<string, unknown>;
      expect(
        (visible.transition as Record<string, unknown>).staggerChildren
      ).toBe(0.15);
    });

    it("accepts custom delay", () => {
      const variants = staggerContainer(0.3);
      const visible = variants.visible as Record<string, unknown>;
      expect(
        (visible.transition as Record<string, unknown>).staggerChildren
      ).toBe(0.3);
    });

    it("hidden state is empty object", () => {
      const variants = staggerContainer();
      expect(variants.hidden).toEqual({});
    });
  });

  describe("scaleOnHover", () => {
    it("has initial scale of 1", () => {
      expect(scaleOnHover.initial).toEqual({ scale: 1 });
    });

    it("scales up on hover", () => {
      const hover = scaleOnHover.hover as Record<string, unknown>;
      expect(hover.scale).toBe(1.03);
    });

    it("scales down on tap", () => {
      const tap = scaleOnHover.tap as Record<string, unknown>;
      expect(tap.scale).toBe(0.98);
    });
  });

  describe("heroTextReveal", () => {
    it("has hidden state", () => {
      expect(heroTextReveal.hidden).toEqual({ opacity: 0, y: 16 });
    });

    it("visible is a function accepting delay", () => {
      expect(typeof heroTextReveal.visible).toBe("function");
    });
  });

  describe("pathDraw", () => {
    it("hidden has pathLength 0", () => {
      expect(pathDraw.hidden).toEqual({ pathLength: 0, opacity: 0 });
    });
  });

  describe("cardLift", () => {
    it("lifts by 4px on hover", () => {
      const hover = cardLift.hover as Record<string, unknown>;
      expect(hover.y).toBe(-4);
    });
  });

  describe("counterAnimationConfig", () => {
    it("has duration and bounce values", () => {
      expect(counterAnimationConfig.duration).toBe(1.2);
      expect(counterAnimationConfig.bounce).toBe(0);
    });
  });
});
