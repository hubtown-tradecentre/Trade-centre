"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Footer() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cc2.jamoutsourcing.com/jamcrmv2/public/ChatbotSDK/Trade_center_chatbot.js";
    script.async = true;

    script.onload = () => {
      console.log("Chatbot SDK Loaded Successfully");
    };

    script.onerror = (error) => {
      console.error("Chatbot SDK Failed to Load", error);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            
            {/* Logo and Address */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start w-full">
              <Image
                src="/images/Logo.webp"
                alt="Hubtown Trade Centre"
                width={200}
                height={60}
                className="h-12 w-auto mb-6 brightness-0 invert"
                priority
              />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">SITE ADDRESS:</h4>
                  <p className="text-gray-300">
                    HUBTOWN TRADE CENTRE
                    <br />
                    HUBTOWN, B/H BUS TERMINAL,
                    <br />
                    MODHERA CIRCLE, MEHSANA-2
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Phone:</h4>
                  <a
                    href="tel:+918657971339"
                    className="text-gray-300 hover:text-white"
                  >
                    +91 8657971339
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Email:</h4>
                  <a
                    href="mailto:contact@hubtown.co.in"
                    className="text-gray-300 hover:text-white"
                  >
                    contact@hubtown.co.in
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    MahaRERA Reg. No.:
                  </h4>
                  <p className="text-gray-300 break-all">
                    PR/GJ/MEHSANA/MAHESANA/Other/CAA08567/050621
                    <br />
                    <a
                      href="http://www.gujrera.gujarat.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      www.gujrera.gujarat.gov.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start w-full">
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("overview")}
                    className="text-gray-300 hover:text-white"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("amenities")}
                    className="text-gray-300 hover:text-white"
                  >
                    Amenities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("location")}
                    className="text-gray-300 hover:text-white"
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="flex flex-col items-center md:items-start w-full">
              <h4 className="font-semibold text-lg mb-6">Find Us</h4>
              <div className="w-full sm:w-[80%] md:w-[90%] h-32 md:h-64 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Hubtown%20Sales%20office%2C%20Mehsana%20Busport%2C%20Mehsana%2C%20Gujarat%20384002&t=m&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Hubtown Sales Office Location"
                />
              </div>
              <p className="text-sm text-gray-300 mt-2">
                View our location on Google Maps
              </p>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-300">
              © 2025 All rights reserved to Hubtown Trade Centre
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
