import React from "react";
import HeroSection from "./HeroSection";
import MVPCalculator from "./MVPCalculator";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100">
      {/* Hero Section */}
      <HeroSection />

      {/* MVP Calculator Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Fast Could We Build Your MVP?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our interactive calculator to get an instant estimate for your
            startup's MVP development timeline.
          </p>
        </div>
        <MVPCalculator />
      </section>

      {/* Credibility Section */}
      <section
        id="credibility"
        className="py-20 px-4 md:px-8 lg:px-16 bg-muted/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Connect Cube
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've helped startups across various industries launch successful
              products.
            </p>
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Government
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fyuell</h3>
              <p className="text-muted-foreground mb-4">
                Government Fuel management system to help curb fuel fraud for
                over 10,000 vehicles.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">6 week MVP</span>
                <span className="text-sm font-medium">10k+ vehicles</span>
              </div>
            </div>

            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  PropTech
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Realtyplus</h3>
              <p className="text-muted-foreground mb-4">
                An AI powered proptech platform servicing the African market
                with innovative solutions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">8 week MVP</span>
                <span className="text-sm font-medium">Regional impact</span>
              </div>
            </div>

            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Public Safety
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Echosos</h3>
              <p className="text-muted-foreground mb-4">
                A police app helping to address GBV with anonymous reporting
                functions and 24/7 support.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">10 week MVP</span>
                <span className="text-sm font-medium">Critical service</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-background rounded-xl border p-8 shadow-sm mb-16">
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
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">R</span>
                </div>
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">N</span>
                </div>
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">P</span>
                </div>
                <span className="text-sm font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">A</span>
                </div>
                <span className="text-sm font-medium">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">F</span>
                </div>
                <span className="text-sm font-medium">Firebase</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-sm border mb-2">
                  <span className="text-2xl font-bold">M</span>
                </div>
                <span className="text-sm font-medium">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto text-center">
            We are a diverse group of developers, designers, and engineers from
            Southern Africa and South Asia working remotely to deliver
            exceptional digital solutions. Our distributed team brings together
            unique perspectives and expertise to create innovative products for
            clients worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Remote-First Culture</h3>
              <p className="text-muted-foreground">
                As a remote-first company, we've built a collaborative culture
                that transcends borders. Our team works across multiple time
                zones, ensuring continuous progress and diverse perspectives on
                every project.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Proven Expertise</h3>
              <p className="text-muted-foreground">
                Our team includes senior developers with 10+ years of experience
                building scalable applications. We've helped dozens of startups
                successfully launch and scale their products in competitive
                markets.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">
                Founder-Friendly Approach
              </h3>
              <p className="text-muted-foreground">
                We understand the unique challenges founders face. Our
                transparent communication, flexible engagement models, and focus
                on business outcomes make us the ideal technical partner for
                ambitious startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 bg-primary/5"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Startup's MVP?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you launch faster and with the right
            foundation for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Schedule a Call
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 lg:px-16 bg-muted/30" id="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Connect Cube</h3>
            <p className="text-muted-foreground mb-4">
              Building MVPs and platforms for startups with speed and expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 1-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#mvp-calculator"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="#credibility"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Full-Stack Development
                </a>
              </li>
              <li>
                <a
                  href="#credibility"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Technical Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:hello@connectcube.dev"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@connectcube.dev
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Connect Cube. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
