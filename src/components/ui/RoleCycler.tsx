"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface RoleCyclerProps {
  roles: string[];
}

const INTERVAL_MS = 3000;

export default function RoleCycler({ roles }: RoleCyclerProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || roles.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [roles.length, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{roles[0]}</span>;
  }

  return (
    <span className="relative inline-block">
      {/* Visually-hidden anchor span keeps the container at the width of the
          longest role so the layout doesn't jump between words. */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {roles.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
