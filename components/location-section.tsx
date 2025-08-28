"use client";

import {
  LoaderCircle,
  School,
  Plane,
  Hospital,
  Bus,
  Train,
  Factory,
  Building2,
} from "lucide-react";

export default function LocationSection() {
  const nearbyLocations = [
    { Icon: LoaderCircle, distance: "100 M", name: "Modhera Circle" },
    {
      Icon: School,
      distance: "150 M",
      name: "Shree Simandhar Swami Jain Derasar",
    },
    { Icon: Plane, distance: "1 KM", name: "Mehsana Airport" },
    { Icon: Hospital, distance: "1.3 KM", name: "Mehsana Hospital" },
    { Icon: Bus, distance: "0 M", name: "Mehsana Bus Port" },
    { Icon: Train, distance: "2 KM", name: "Mehsana Railway Junction" },
    { Icon: Factory, distance: "850 M", name: "GIDC Industrial Estate" },
    { Icon: Building2, distance: "2 KM", name: "Dudhsagar Dairy Mehsana" },
  ];

  // Helper: convert "1.5 KM" / "100 M" into meters
  const parseDistance = (d: string): number => {
    const value = parseFloat(d);
    return d.toLowerCase().includes("km") ? value * 1000 : value;
  };

  // Sort locations by distance in meters
  const sortedLocations = [...nearbyLocations].sort(
    (a, b) => parseDistance(a.distance) - parseDistance(b.distance)
  );

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps?ll=23.594004,72.379339&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=7981368052886110822",
      "_blank"
    );
  };

  return (
    <section id="location" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Location
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Map */}
          <div className="order-1 lg:order-1 relative">
            <div className="relative h-60 md:h-80 lg:h-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=Hubtown%20Sales%20office%2C%20Mehsana%20Busport%2C%20Mehsana%2C%20Gujarat%20384002&t=m&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Hubtown Trade Centre Location"
                aria-label="Hubtown Trade Centre Map"
              />
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={handleMapClick}
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="order-2 lg:order-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-8 rounded-lg h-full flex flex-col justify-center">
            <h3 className="text-3xl md:text-3xl font-bold mb-8 font-sans">
              AROUND HUBTOWN TRADE CENTER
            </h3>

            <div className="space-y-4">
              {sortedLocations.map((location, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <location.Icon className="w-6 h-6 md:w-5 md:h-5 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="font-semibold font-sans text-base md:text-sm">
                      {location.distance}
                    </span>
                    <span className="ml-2 font-sans text-base md:text-sm">
                      {location.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
