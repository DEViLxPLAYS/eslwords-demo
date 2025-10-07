import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: LucideIcon;
  className?: string;
}

export function CTAButton({ to, children, variant = "primary", icon: Icon, className = "" }: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className={`${variant === "primary" ? "cta-button" : "cta-button-outline"} ${className}`}
      >
        {children}
        {Icon ? <Icon className="ml-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-5 w-5" />}
      </Link>
    </motion.div>
  );
}
