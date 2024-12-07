'use client'

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade" | "slide" | "scale";
  delay?: number;
}

export function ScrollAnimation({ 
  children, 
  animation = "fade",
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { damping: 25, stiffness: 200 }
  );

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, 0]),
    { damping: 25, stiffness: 200 }
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.8, 1]),
    { damping: 25, stiffness: 200 }
  );

  const getAnimationStyle = () => {
    switch (animation) {
      case "fade":
        return { opacity };
      case "slide":
        return { opacity, y };
      case "scale":
        return { opacity, scale };
      default:
        return { opacity };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getAnimationStyle()}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
