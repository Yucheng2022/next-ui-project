'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { shouldReduceAnimations } from "@/utils/device";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade" | "slide" | "scale" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollAnimation({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  className = "",
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const reduceAnimations = shouldReduceAnimations();

  // 如果需要减少动画，返回无动画的版本
  if (reduceAnimations || animation === "none") {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    fade: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slide: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
