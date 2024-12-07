'use client'

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { FeatureCard } from "@/components/FeatureCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "@/utils/animations";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { useRef } from "react";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    console.log("Submitted email:", email);
    alert("Thanks for subscribing!");
  };

  const features = [
    {
      title: "Modern UI",
      description: "Beautiful and responsive components built with NextUI and TailwindCSS",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Dark Mode",
      description: "Seamless dark mode integration with system preference support",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
    },
    {
      title: "TypeScript",
      description: "Full TypeScript support for better development experience",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div 
      className="flex flex-col gap-8 py-8 md:py-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      ref={containerRef}
    >
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 text-center px-4 relative overflow-hidden"
        variants={fadeIn}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-secondary-500/20 pointer-events-none"
          style={{ y: backgroundY }}
        />
        <motion.div 
          className="relative"
          style={{ y: textY }}
        >
          <motion.h1 
            className="font-bold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent animate-gradient"
            variants={slideIn}
          >
            Build Beautiful Web Apps Faster
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-default-600 mt-4"
            variants={fadeIn}
          >
            A modern and beautiful React UI library built with NextUI and TailwindCSS
          </motion.p>
        </motion.div>
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative"
          variants={fadeIn}
        >
          <Button
            color="primary"
            variant="shadow"
            size="lg"
            className="font-semibold"
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="font-semibold"
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Documentation
          </Button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <ScrollAnimation animation="slide">
        <motion.section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.section>
      </ScrollAnimation>

      {/* Newsletter Section */}
      <ScrollAnimation animation="scale">
        <motion.section 
          className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4"
          variants={fadeIn}
        >
          <Card className="max-w-[400px] w-full backdrop-blur-sm bg-background/60">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Stay Updated</p>
                <p className="text-small text-default-500">Get notified about the latest features</p>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  onValueChange={setEmail}
                  size="lg"
                  variant="bordered"
                  className="backdrop-blur-sm"
                />
                <Button 
                  color="primary"
                  onClick={handleSubmit}
                  className="w-full font-semibold"
                  size="lg"
                  as={motion.button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.section>
      </ScrollAnimation>
    </motion.div>
  );
}
