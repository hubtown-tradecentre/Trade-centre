"use client";
import SharedContactForm from "./shared-contact-form";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white rounded-2xl max-w-sm w-full shadow-2xl animate-fade-in-up">
        {/* Close button */}
        <button
          id="formSubmitButton"
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
        >
          <svg
            className="w-5 h-5 text-gray-600 hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form content */}
        <SharedContactForm onClose={onClose} />
      </div>
    </div>
  );
}
