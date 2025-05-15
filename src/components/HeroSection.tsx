import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Transform Your Startup Idea Into Reality",
  subtitle = "We build MVPs and scalable platforms for startups in weeks, not months. Tech expertise that accelerates your journey from concept to launch.",
  ctaText = "Get Your Free Consultation",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Code block animation variants
  const codeBlockVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const codeLine = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[700px] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo and company name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="flex items-center gap-3 px-4 py-2">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </motion.div>
              <motion.span
                className="text-black font-bold text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Connect Cube
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {title}
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  if (onCtaClick) onCtaClick();
                }}
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-md transition-all duration-300"
              >
                {ctaText}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-md transition-all duration-300"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              className="p-6 border-t-2 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-6 h-6 text-blue-500" />
              </motion.div>
              <h3 className="text-black font-bold text-lg mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                MVP development in as little as 4 weeks with our agile approach.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border-t-2 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <Code className="w-6 h-6 text-purple-500" />
              </motion.div>
              <h3 className="text-black font-bold text-lg mb-2">
                Technical Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Clean, scalable code built by senior developers with startup
                experience.
              </p>
            </motion.div>

            <motion.div
              className="p-6 border-t-2 border-cyan-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <Zap className="w-6 h-6 text-cyan-500" />
              </motion.div>
              <h3 className="text-black font-bold text-lg mb-2">
                Startup-First Approach
              </h3>
              <p className="text-gray-600 text-sm">
                We understand founder needs and build with growth and funding in
                mind.
              </p>
            </motion.div>
          </motion.div>

          {/* Tech stack indicators */}
          <motion.div
            className="mt-16 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div
              className="text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              React
            </motion.div>
            <motion.div
              className="text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Node.js
            </motion.div>
            <motion.div
              className="text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              TypeScript
            </motion.div>
            <motion.div
              className="text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              GraphQL
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
