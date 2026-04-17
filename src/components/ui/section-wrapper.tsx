import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** When true, wraps the first child block in a centered, narrow container for headlines. */
  centered?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  centered,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32 lg:py-40", className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          centered && "text-center",
        )}
      >
        {children}
      </div>
    </section>
  );
}
