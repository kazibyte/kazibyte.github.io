// components/ui/hero/HeroSection.tsx

import Link from "next/link";
import React from "react";

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

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0  opacity-50"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Company Info */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-green-600">Innovate.</span>
              <br />
              <span className="text-red-500">Transform.</span>
              <br />
              <span className="text-yellow-600"> Succeed.</span>
            </h1>
            <p className="text-xl mb-8">{heroSectionData.specialize}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/services"
                className=" dark:bg-green-950 text-green-100 font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition duration-300 text-center"
              >
                {heroSectionData.btn1Text}
              </Link>
              <Link
                href="/about-us"
                className=" dark:bg-green-950 text-green-100 font-semibold px-8 py-3 rounded-full hover:bg-green-500 transition duration-300 text-center"
              >
                {heroSectionData.btn2Text}
              </Link>
            </div>
          </div>

          {/* Right Side: Features */}
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="bg-teal-600 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6">Why Kazi Byte?</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-yellow-400"
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
                  <span>{heroSectionData.features[0]}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>{heroSectionData.features[1]}</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                  <span>{heroSectionData.features[2]}</span>
                </li>
              </ul>
            </div>
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
    </section>
  );
};

export default HeroSection;
