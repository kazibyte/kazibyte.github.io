'use client'
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Define the data structure and type
interface HeroSectionData {
  features: string[];
  specialize: string;
  btn1Text: string;
  btn2Text: string;
  title: string;
}

const heroSectionData: HeroSectionData = {
  features: [
    "Lightning-fast Performance",
    "Client-Centric Approach",
    "Quality Assurance",
  ],
  specialize:
    "We specialize in delivering bespoke software solutions tailored to meet the diverse needs of our clients, ranging from startups to established enterprises.",
  btn1Text: "Get Started",
  btn2Text: "Learn More",
  title: "Why KaziByte!",
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3 } },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section 
      className="relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 opacity-50"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Company Info */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <motion.span 
                className="text-green-600"
                whileHover={{ color: "#4ade80" }}
              >
                Innovate.
              </motion.span>
              <br />
              <motion.span 
                className="text-red-500"
                whileHover={{ color: "#f87171" }}
              >
                Transform.
              </motion.span>
              <br />
              <motion.span 
                className="text-yellow-600"
                whileHover={{ color: "#facc15" }}
              >
                Succeed.
              </motion.span>
            </h1>
            <p className="text-xl mb-8">{heroSectionData.specialize}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/services"
                  className="dark:bg-green-950 text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition duration-300 text-center"
                >
                  {heroSectionData.btn1Text}
                </Link>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/about-us"
                  className="dark:bg-green-950 text-green-800 font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition duration-300 text-center"
                >
                  {heroSectionData.btn2Text}
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="w-full md:w-1/2 md:pl-12">
            <motion.div 
              className="bg-teal-600 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
            >
              <h2 className="text-2xl font-semibold mb-6">Why Kazi Byte?</h2>
              <ul className="space-y-4">
                {heroSectionData.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <svg
                      className={`w-6 h-6 mr-3 ${
                        index === 0
                          ? "text-yellow-400"
                          : index === 1
                          ? "text-green-400"
                          : "text-purple-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default HeroSection;
