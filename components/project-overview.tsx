"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProjectOverview() {
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
    <section
      id="overview"
      ref={sectionRef}
      className="py-8 md:pt-44 md:pb-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Mobile Heading */}
          <div className="block lg:hidden text-center mb-2 md:mb-6">
            <h3 className="text-2xl md:text-3xl lg:text-[1.75rem] font-bold text-gray-900 font-sans">
              <span>The Power of Location</span>
              <br />
              <span>The Promise of Growth</span>
            </h3>
          </div>

          {/* Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative h-72 md:h-80 lg:h-[480px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/aboutus-2.webp"
                alt="Hubtown Trade Centre Building"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {/* Desktop Heading */}
            <h3 className="hidden lg:block text-2xl md:text-3xl lg:text-[1.75rem] font-bold text-gray-900 mb-6 md:mb-8 font-sans">
              <span>The Power of Location</span>
              <br />
              <span>The Promise of Growth</span>
            </h3>

            <div className="space-y-5 md:space-y-6">
              {[
                {
                  title: "Where Business Meets Opportunity",
                  desc: "A prime location designed to put your brand in the spotlight.",
                },
                {
                  title: "Built for Growth",
                  desc: "Modern spaces that help you scale, connect, and succeed.",
                },
                {
                  title: "Flexibility That Fits You",
                  desc: "Smart layouts and tailored plans crafted around your business needs.",
                },
                {
                  title: "Efficiency at Every Step",
                  desc: "Seamlessly organized spaces that make work smoother and faster.",
                },
                {
                  title: "More Than Just a Space",
                  desc: "A complete ecosystem that drives visibility, footfalls, and profitability.",
                },
                {
                  title: "Future-Ready Today",
                  desc: "Next-generation facilities that keep your business ahead of the curve.",
                },
              ].map((item, idx) => (
                <div
                  className="flex items-start space-x-3 md:space-x-4"
                  key={idx}
                >
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-base md:text-lg lg:text-[1rem] text-gray-700 font-sans leading-relaxed">
                    <span className="font-semibold">{item.title}</span> –{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
