"use client";

import { motion } from "framer-motion";
import { socialProofData } from "@/data/landing";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function SocialProofSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionWrapper id="social-proof">
        {/* ---- Headline ---- */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold leading-[1.12] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {socialProofData.headline}
          </motion.h2>
        </div>

        {/* ---- 4 Metrics Grid ---- */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 grid grid-cols-2 gap-6 md:mb-20 md:grid-cols-4 md:gap-8"
        >
          {socialProofData.metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-neutral-500">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Testimonial ---- */}
        <motion.blockquote
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-raised p-8 md:p-12"
        >
          <p className="text-lg italic leading-relaxed text-neutral-300 md:text-xl">
            &ldquo;{socialProofData.testimonial.quote}&rdquo;
          </p>
          <footer className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-muted">
              <span className="text-sm font-semibold text-accent-light">
                QA
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {socialProofData.testimonial.author}
              </p>
              <p className="text-sm text-neutral-500">
                {socialProofData.testimonial.role},{" "}
                {socialProofData.testimonial.company}
              </p>
            </div>
          </footer>
        </motion.blockquote>
      </SectionWrapper>
    </motion.div>
  );
}

export default SocialProofSection;
