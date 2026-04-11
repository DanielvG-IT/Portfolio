"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
  amount?: number;
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 14,
  blur = 5,
  once = true,
  amount = 0.15,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const safeDelay = Math.max(0, Math.min(delay, 0.32));
  const safeDuration = Math.max(0.25, Math.min(duration, 0.75));

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={clsx(className)}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{
        duration: safeDuration,
        delay: safeDelay,
        ease: [0.22, 1, 0.36, 1],
      }}>
      {children}
    </motion.div>
  );
}
