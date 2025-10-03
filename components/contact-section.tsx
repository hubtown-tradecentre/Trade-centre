"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 font-sans">
          Contact Us
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>

        <a
          href="https://hubtown.co.in/projects_enquiry/trade-center/enquiry.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                     text-white font-semibold px-6 py-3 rounded-md shadow-lg 
                     hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 
                     transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

