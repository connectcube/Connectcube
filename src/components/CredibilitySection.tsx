import React from "react";
import { motion } from "framer-motion";

interface CredibilitySectionProps {
  className?: string;
}

const CredibilitySection = ({ className = "" }: CredibilitySectionProps) => {
  return (
    <section
      className={`py-20 px-4 md:px-8 lg:px-16 bg-muted/10 ${className}`}
      id="credibility"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Connect Cube
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped startups across various industries launch successful
            products.
          </p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="bg-background rounded-xl border p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Fintech
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">PayQuick</h3>
            <p className="text-muted-foreground mb-4">
              Helped build an MVP payment platform in just 6 weeks, leading to
              successful seed round.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">4 week MVP</span>
              <span className="text-sm font-medium">$2M raised</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-background rounded-xl border p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Health Tech
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">MediTrack</h3>
            <p className="text-muted-foreground mb-4">
              Built patient management platform with HIPAA compliance in record
              time.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">8 week MVP</span>
              <span className="text-sm font-medium">10k+ users</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-background rounded-xl border p-6 shadow-sm"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                E-commerce
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">ShopSmart</h3>
            <p className="text-muted-foreground mb-4">
              Developed a marketplace platform with integrated payment
              processing.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">12 week MVP</span>
              <span className="text-sm font-medium">$1.5M GMV</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="bg-background rounded-xl border p-8 shadow-sm mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="John Smith"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg italic mb-4">
                "Connect Cube helped us go from idea to working MVP in just 6
                weeks. Their technical expertise and startup-focused approach
                made all the difference in our early success."
              </p>
              <div>
                <p className="font-bold">John Smith</p>
                <p className="text-sm text-muted-foreground">CEO, PayQuick</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our Technology Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">R</span>
              </div>
              <span className="text-sm font-medium">React</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">N</span>
              </div>
              <span className="text-sm font-medium">Node.js</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">P</span>
              </div>
              <span className="text-sm font-medium">Python</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">A</span>
              </div>
              <span className="text-sm font-medium">AWS</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">F</span>
              </div>
              <span className="text-sm font-medium">Firebase</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                <span className="text-2xl font-bold">M</span>
              </div>
              <span className="text-sm font-medium">MongoDB</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilitySection;
