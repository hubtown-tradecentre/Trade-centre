"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import ProjectOverview from "../components/project-overview";
import LuxurySection from "../components/luxury-section";
import AmenitiesSection from "../components/amenities-section";
import LocationSection from "../components/location-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import ContactModal from "../components/contact-modal";
import EnquiryButton from "../components/EnquiryButton"; // import

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

// ❌ remove auto-open modal
// useEffect(() => {
//   if (!hasShownModal) {
//     const timer = setTimeout(() => {
//       setIsModalOpen(true);
//       setHasShownModal(true);
//     }, 15000); // Show once after 15 seconds

//     return () => clearTimeout(timer);
//   }
// }, [hasShownModal]);

  return (
    <main className="min-h-screen">
      <Navbar onEnquiryClick={() => setIsModalOpen(true)} />
      <HeroSection />
      <ProjectOverview />
      <LuxurySection />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
      <Footer />

      {/* Floating Enquire Now Button */}
      <EnquiryButton href="https://hubtown.co.in/projects_enquiry/trade-center/enquiry.html" newTab />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
