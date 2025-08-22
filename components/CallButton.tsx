"use client";

import { Phone } from "lucide-react";
import React from "react";

const CallButton = () => {
  const phoneNumber = "918657971339"; // replace with your number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-24 right-4 z-50 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full 
                 bg-gradient-to-r from-[#533f2f] to-[#3a2a1f] text-white shadow-lg hover:opacity-90 md:hidden"
    >
      <Phone className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  );
};

export default CallButton;
