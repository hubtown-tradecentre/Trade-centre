"use client";

interface EnquiryButtonProps {
  href: string;
  newTab?: boolean;
}

export default function EnquiryButton({ href, newTab = false }: EnquiryButtonProps) {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      id="enquirenowFormSubmit"
      className="fixed right-0 md:right-3 top-1/2 -translate-y-1/2 z-50 
                 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                 text-white px-2 py-2 md:px-2.5 md:py-3 
                 text-sm md:text-base 
                 rounded-l-md md:rounded-l-md font-semibold shadow-xl 
                 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 
                 transition-colors duration-300"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        letterSpacing: "0.5px",
      }}
    >
      ENQUIRE NOW
    </a>
  );
}
