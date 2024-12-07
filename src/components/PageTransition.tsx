'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { shouldReduceAnimations } from "@/utils/device";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceAnimations = shouldReduceAnimations();

  // 如果需要减少动画，直接返回内容
  if (reduceAnimations) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
