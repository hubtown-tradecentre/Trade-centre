"use client";

import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onEnquiryClick: () => void;
}

export default function Navbar({ onEnquiryClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/images/Logo.webp"
              alt="Hubtown Trade Centre"
              width={200}
              height={80}
              className="h-[3.5rem] md:h-[4.5rem] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors font-sans"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors font-sans"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors font-sans"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors font-sans"
            >
              Contact
            </button>
          </div>

          {/* ✅ Bigger Call Button in Navbar */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+918657971339"
              className="flex items-center gap-3 bg-gradient-to-r from-[#533F2F] via-[#3e2f23] to-[#2a1f17] text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] font-sans"
            >
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.12 1.06a11.042 11.042 0 005.516 5.516l1.06-2.12a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden fixed top-20 h-[calc(100vh-5rem)] right-0 w-64 bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4">
          <button
            onClick={() => scrollToSection("overview")}
            className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-bold font-sans"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("amenities")}
            className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-bold font-sans"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-bold font-sans"
          >
            Location
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-bold font-sans"
          >
            Contact
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
