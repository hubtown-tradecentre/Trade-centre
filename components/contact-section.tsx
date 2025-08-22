"use client";

import SharedContactForm from "./shared-contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Only the form (no extra background box) */}
        <SharedContactForm />
      </div>
    </section>
  );
}
