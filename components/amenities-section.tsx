"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const amenities = [
  { icon: "amenities/icon-1.webp", title: "24 Hour Water & Electric Supply" },
  { icon: "amenities/icon-2.webp", title: "Specialized Market" },
  { icon: "amenities/icon-3.webp", title: "Specialized Mall" },
  { icon: "amenities/icon-4.webp", title: "Commercial Offices" },
  { icon: "amenities/icon-5.webp", title: "Ample Parking" },
  { icon: "amenities/icon-7.webp", title: "Food Court & Restaurant" },
  { icon: "amenities/icon-8.webp", title: "Entertainment Zone" },
  { icon: "amenities/icon-9.webp", title: "Fire Safety Complied" },
];

export default function AmenitiesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            (entry.target as HTMLElement).dataset.index || "0"
          );

          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return Array.from(newSet);
            });
          } else if (entry.boundingClientRect.top > 0) {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".amenity-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="amenities"
      className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            FACILITIES
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              data-index={index}
              className={`amenity-card group relative overflow-hidden rounded-2xl 
                border border-gray-300 bg-white transform-gpu transition-all duration-1000 ease-out 
                hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5
                ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center items-center p-6 md:p-8">
                <div className="w-16 h-16 md:w-14 md:h-14 relative">
                  <Image
                    src={`/images/${amenity.icon}`}
                    alt={amenity.title}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="px-4 pb-6 text-center">
                <h3 className="text-base md:text-sm font-medium text-gray-900 leading-tight group-hover:text-black transition-colors duration-300">
                  {amenity.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
