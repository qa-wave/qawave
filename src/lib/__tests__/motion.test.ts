import { describe, it, expect } from "vitest";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
  counterAnimationConfig,
  heroTextReveal,
  pathDraw,
  cardLift,
} from "../motion";

describe("motion presets", () => {
  describe("fadeInUp", () => {
    it("has hidden state with opacity 0 and y offset", () => {
      expect(fadeInUp.hidden).toEqual({ opacity: 0, y: 24 });
    });

    it("has visible state with opacity 1 and y 0", () => {
      const visible = fadeInUp.visible as Record<string, unknown>;
      expect(visible.opacity).toBe(1);
      expect(visible.y).toBe(0);
    });
  });

  describe("staggerContainer", () => {
    it("returns variants with default stagger delay", () => {
      const variants = staggerContainer();
      const visible = variants.visible as Record<string, unknown>;
      expect(visible.transition).toEqual({ staggerChildren: 0.15 });
    });

    it("accepts custom stagger delay", () => {
      const variants = staggerContainer(0.3);
      const visible = variants.visible as Record<string, unknown>;
      expect(visible.transition).toEqual({ staggerChildren: 0.3 });
    });
  });

  describe("scaleOnHover", () => {
    it("has correct scale values", () => {
      expect((scaleOnHover.initial as Record<string, unknown>).scale).toBe(1);
      expect((scaleOnHover.hover as Record<string, unknown>).scale).toBe(1.03);
      expect((scaleOnHover.tap as Record<string, unknown>).scale).toBe(0.98);
    });
  });

  describe("counterAnimationConfig", () => {
    it("has expected config shape", () => {
      expect(counterAnimationConfig.duration).toBe(1.2);
      expect(counterAnimationConfig.bounce).toBe(0);
      expect(counterAnimationConfig.ease).toBe("easeOut");
    });
  });

  describe("heroTextReveal", () => {
    it("hidden state has opacity 0", () => {
      expect((heroTextReveal.hidden as Record<string, unknown>).opacity).toBe(0);
    });

    it("visible is a function accepting delay", () => {
      expect(typeof heroTextReveal.visible).toBe("function");
      const result = (heroTextReveal.visible as (d: number) => Record<string, unknown>)(0.5);
      expect(result.opacity).toBe(1);
      expect(result.y).toBe(0);
    });
  });

  describe("pathDraw", () => {
    it("has hidden state with pathLength 0", () => {
      expect((pathDraw.hidden as Record<string, unknown>).pathLength).toBe(0);
    });

    it("has visible state with pathLength 1", () => {
      expect((pathDraw.visible as Record<string, unknown>).pathLength).toBe(1);
    });
  });

  describe("cardLift", () => {
    it("lifts by -4px on hover", () => {
      expect((cardLift.hover as Record<string, unknown>).y).toBe(-4);
    });
  });
});
