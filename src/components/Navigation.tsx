import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-xl">Connect Cube</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("credibility")}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              Our Work
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary cursor-pointer transition-colors"
            >
              About Us
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 pt-20 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-6 items-center">
            <a
              onClick={() => scrollToSection("home")}
              className="text-lg font-medium hover:text-primary cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("mvp-calculator")}
              className="text-lg font-medium hover:text-primary cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("credibility")}
              className="text-lg font-medium hover:text-primary cursor-pointer"
            >
              Our Work
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium hover:text-primary cursor-pointer"
            >
              About Us
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
