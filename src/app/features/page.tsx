'use client'

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "@/utils/animations";

const features = [
  {
    title: "Modern UI Components",
    description: "Built with NextUI, offering a comprehensive suite of beautiful and accessible components.",
    icon: "🎨",
    details: [
      "Pre-built accessible components",
      "Customizable themes",
      "Responsive design",
      "Modern animations"
    ]
  },
  {
    title: "Next.js 13+ Integration",
    description: "Leveraging the latest features of Next.js for optimal performance and developer experience.",
    icon: "⚡",
    details: [
      "App Router",
      "Server Components",
      "API Routes",
      "Optimized Images"
    ]
  },
  {
    title: "TypeScript Support",
    description: "Full TypeScript integration for better development experience and type safety.",
    icon: "📝",
    details: [
      "Type-safe components",
      "Better IDE support",
      "Reduced runtime errors",
      "Enhanced code quality"
    ]
  },
  {
    title: "Theme System",
    description: "Comprehensive theme system with dark mode support and custom color schemes.",
    icon: "🎭",
    details: [
      "Light/Dark modes",
      "System preference detection",
      "Custom color palettes",
      "Seamless transitions"
    ]
  }
];

export default function Features() {
  return (
    <motion.div 
      className="flex flex-col gap-8 py-8 md:py-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.section 
        className="flex flex-col items-center justify-center gap-4 text-center px-4"
        variants={fadeIn}
      >
        <motion.h1 
          className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
          variants={scaleIn}
        >
          Features
        </motion.h1>
        <motion.p 
          className="text-large md:text-xl text-default-600 max-w-md"
          variants={fadeIn}
        >
          Discover all the powerful features that make our framework stand out
        </motion.p>
      </motion.section>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-7xl mx-auto w-full"
        variants={staggerContainer}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader className="flex gap-3 px-6 pt-6">
                <motion.div 
                  className="text-3xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">{feature.title}</h2>
                  <p className="text-default-500">{feature.description}</p>
                </div>
              </CardHeader>
              <CardBody className="px-6">
                <Divider className="my-4"/>
                <motion.ul 
                  className="list-disc list-inside space-y-2"
                  variants={staggerContainer}
                >
                  {feature.details.map((detail) => (
                    <motion.li 
                      key={detail} 
                      className="text-default-500"
                      variants={fadeIn}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </motion.ul>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
