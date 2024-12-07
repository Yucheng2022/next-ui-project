'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const shapes = [
    {
      className: "top-1/4 left-1/4 w-64 h-64 bg-primary-500/10",
      style: { y: y1 },
    },
    {
      className: "top-1/3 right-1/4 w-48 h-48 bg-secondary-500/10",
      style: { y: y2 },
    },
    {
      className: "bottom-1/4 left-1/3 w-56 h-56 bg-success-500/10",
      style: { y: y3 },
    },
  ];

  return (
    <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${shape.className}`}
          style={shape.style}
        />
      ))}
    </div>
  );
}
