import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-accent bg-accent-muted px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-accent-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
