"use client";

import Image from "next/image";

export default function Footer() {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/place/Hubtown+Office+Mehsana/@23.594004,72.379339,14z/data=!4m6!3m5!1s0x395c43d5925e7697:0x6ec383f4fded8266!8m2!3d23.5940041!4d72.3793392!16s%2Fg%2F11c1qw_k0x?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Address */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start w-full">
            <Image
              src="/images/Logo.webp"
              alt="Hubtown Trade Centre"
              width={200}
              height={60}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 font-sans">
                  SITE ADDRESS:
                </h4>
                <p className="text-gray-300 font-sans">
                  HUBTOWN TRADE CENTRE
                  <br />
                  HUBTOWN, B/H BUS TERMINAL,
                  <br />
                  MODHERA CIRCLE, MEHSANA-2
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 font-sans">Phone:</h4>
                <a
                  href="tel:+917026041041"
                  className="text-gray-300 hover:text-white font-sans"
                >
                  +91 7026041041
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 font-sans">
                  MahaRERA Reg. No.:
                </h4>
                <p className="text-gray-300 font-sans break-all">
                  RERA Reg No.: PR/GJ/MEHSANA/MAHESANA/Other/CAA08567/050621
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
            <h4 className="font-semibold text-lg mb-6 font-sans">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors font-sans"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h4 className="font-semibold text-lg mb-6 font-sans">Find Us</h4>
            <div className="w-full sm:w-[80%] md:w-[90%] h-32 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Hubtown%20Sales%20office%2C%20Mehsana%20Busport%2C%20Mehsana%2C%20Gujarat%20384002&t=m&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hubtown Sales Office Location"
                aria-label="Hubtown Sales Office Map"
              />
            </div>
            <p className="text-sm text-gray-300 mt-2 font-sans">
              View our location on Google Maps
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 font-sans">
            © 2025 All rights reserved to Hubtown Trade Centre
          </p>
        </div>
      </div>
    </footer>
  );
}
