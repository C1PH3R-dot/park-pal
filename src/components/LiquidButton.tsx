import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

const LiquidButton = ({ children, className, variant = "primary", ...props }: LiquidButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
          : "glass text-foreground hover:shadow-lg",
        className
      )}
      {...props}
    >
      {/* Neon trace glow */}
      <span
        className="pointer-events-none absolute w-24 h-24 rounded-full opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, hsl(var(--neon)), transparent 70%)`,
          left: position.x - 48,
          top: position.y - 48,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default LiquidButton;
