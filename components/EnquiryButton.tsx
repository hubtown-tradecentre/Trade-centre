"use client";

interface EnquiryButtonProps {
  onClick: () => void;
}

export default function EnquiryButton({ onClick }: EnquiryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-0 md:right-4 top-1/2 -translate-y-1/2 z-50 
                 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
                 text-white md:px-4 px-3 py-4 text-lg rounded-l-lg font-bold shadow-2xl 
                 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 
                 transition-colors duration-300"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        letterSpacing: "1px",
      }}
    >
      ENQUIRE NOW
    </button>
  );
}
