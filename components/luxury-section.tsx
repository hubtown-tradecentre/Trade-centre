"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function LuxurySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/bg-parallax.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      >
        {/* Gradient overlay: dark on right for text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero banner image.webp"
                alt="Luxury Commercial Complex Interior"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          {/* Right Text */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-sans">
              A New Era of Connectivity & Convenience
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-white font-sans">
                  Hubtown Limited, one of India’s leading real estate
                  developers, in collaboration with the Gujarat State Government
                  and GSRTC, is transforming traditional bus depots into
                  world-class ‘bus-ports’ built as per international standards.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-white font-sans">
                  <span className="font-bold">An Integrated Lifestyle Hub</span>{" "}
                  <br />
                  More than just a transit point, this development offers a
                  vibrant mix of retail outlets and business spaces everything
                  you need, all in one place.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-white font-sans">
                  <span className="font-bold">
                    Where Convenience Meets Opportunity
                  </span>{" "}
                  <br />
                  With everything just steps away, this is more than a
                  commercial hub it’s a thriving destination where life,
                  business, and leisure seamlessly connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
