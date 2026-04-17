import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent text-white font-semibold",
    "shadow-[0_0_20px_rgba(79,70,229,0.3)]",
    "hover:bg-accent-light hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:scale-[1.03]",
    "active:scale-[0.98] active:bg-accent-dark",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none",
  ),
  secondary: cn(
    "bg-transparent border border-accent text-accent-foreground font-semibold",
    "hover:bg-accent-muted",
    "active:bg-accent-muted",
  ),
  ghost: cn(
    "bg-transparent text-neutral-400 font-medium",
    "hover:text-accent-light hover:underline hover:underline-offset-4 hover:decoration-accent-light/50",
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 md:px-10 md:py-5 text-base md:text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const { ...linkProps } = props as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      keyof ButtonBaseProps
    >;
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { ...buttonProps } = props as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof ButtonBaseProps
  >;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
