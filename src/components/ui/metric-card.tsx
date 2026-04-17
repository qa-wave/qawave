"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { counterAnimationConfig } from "@/lib/motion";

interface MetricCardProps {
  /** The display value string, e.g. "25%", "6x" */
  value: string;
  /** The numeric portion to animate to, e.g. 25, 6, 30 */
  numericValue: number;
  /** Suffix appended after the animated number, e.g. "%", "x" */
  suffix: string;
  /** Short label below the number */
  label: string;
  /** Supporting text below the label */
  supportingText?: string;
  /** Source attribution for the data point */
  source?: string;
  /** URL for the source */
  sourceUrl?: string;
  className?: string;
}

function AnimatedCounter({
  to,
  suffix,
  reducedMotion,
}: {
  to: number;
  suffix: string;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: counterAnimationConfig.duration * 1000,
    bounce: counterAnimationConfig.bounce,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      if (reducedMotion) {
        motionValue.set(to);
      } else {
        motionValue.set(to);
      }
    }
  }, [isInView, to, motionValue, reducedMotion]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        const rounded =
          to % 1 !== 0 ? latest.toFixed(1) : Math.round(latest).toString();
        ref.current.textContent = rounded + suffix;
      }
    });
    return unsubscribe;
  }, [spring, suffix, to]);

  if (reducedMotion) {
    return (
      <span ref={ref}>
        {to}
        {suffix}
      </span>
    );
  }

  return <span ref={ref}>0{suffix}</span>;
}

export function MetricCard({
  value,
  numericValue,
  suffix,
  label,
  supportingText,
  source,
  sourceUrl,
  className,
}: MetricCardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "group relative rounded-2xl border border-border bg-surface-raised p-6 md:p-8 text-center transition-all duration-300 hover:border-border-accent hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-foreground">
        {prefersReduced ? (
          value
        ) : (
          <AnimatedCounter
            to={numericValue}
            suffix={suffix}
            reducedMotion={!!prefersReduced}
          />
        )}
      </div>
      <p className="mt-3 text-sm md:text-base font-semibold text-foreground">
        {label}
      </p>
      {supportingText && (
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          {supportingText}
        </p>
      )}
      {source && (
        <p className="mt-3 pt-3 border-t border-border text-xs text-neutral-600">
          {sourceUrl ? (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors underline underline-offset-2 decoration-neutral-700"
            >
              {source}
            </a>
          ) : (
            source
          )}
        </p>
      )}
    </motion.div>
  );
}
