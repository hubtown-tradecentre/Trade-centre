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
    <section id="overview" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
            Project Overview
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-sans">
              <span>The Power of Location</span>
              <br />
              <span>The Promise of Growth</span>
            </h3>

            <div className="space-y-6">
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
                <div className="flex items-start space-x-4" key={idx}>
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 font-sans">
                    <span className="font-bold">{item.title}</span> –{" "}
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
