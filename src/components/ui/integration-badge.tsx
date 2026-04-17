import {
  GitBranch,
  Workflow,
  TestTube,
  MessageSquare,
  SquareKanban,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  GitBranch,
  Workflow,
  TestTube,
  MessageSquare,
  SquareKanban,
};

interface IntegrationBadgeProps {
  /** Display name of the integration */
  name: string;
  /** Name of the lucide-react icon to render */
  icon: string;
  /** Short description of the integration */
  description: string;
  className?: string;
}

export function IntegrationBadge({
  name,
  icon,
  description,
  className,
}: IntegrationBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-surface-raised px-4 py-3 md:px-5 md:py-4 transition-all duration-300 hover:border-border-accent hover:bg-surface-overlay hover:shadow-[0_0_20px_rgba(79,70,229,0.08)]",
        className,
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-neutral-400 transition-colors duration-300 group-hover:text-foreground">
        {IconComponent ? (
          <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <div className="w-6 h-6 md:w-7 md:h-7 rounded bg-neutral-700" />
        )}
      </div>
      <span className="text-xs md:text-sm font-medium text-neutral-500 text-center transition-colors duration-300 group-hover:text-neutral-400">
        {name}
      </span>
      <span className="sr-only">{description}</span>
    </div>
  );
}
