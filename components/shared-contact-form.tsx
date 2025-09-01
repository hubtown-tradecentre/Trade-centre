"use client";
import { useState } from "react";

interface SharedContactFormProps {
  onClose?: () => void;
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
}

export default function SharedContactForm({
  onClose,
  className = "",
}: SharedContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // 🔑 Replace with your deployed Google Apps Script Web App URL
  const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbw9QNLn5OzJY-CXmrSnZSq8tKjUMmHFtAtZ8sfnY_HTOJ8_8idnK_PunI7kGNagooZSKw/exec";

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setPhoneError("");

    if (!formData.name || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.phone.length < 10) {
      setPhoneError("Please enter a 10 digit number");
      return;
    }

    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({ name: "", phone: "", email: "" });
        setTimeout(() => {
          setShowThankYou(false);
          if (onClose) onClose();
        }, 3000);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Special handling for phone number - only allow digits
    if (name === "phone") {
      // Check if the input contains non-numeric characters
      if (value && !/^\d*$/.test(value)) {
        setPhoneError("Please enter only numbers");
        return; // Don't update the state with invalid input
      } else {
        setPhoneError(""); // Clear error if input is valid
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Additional handler for keydown to prevent non-numeric keys
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if (
      [8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)
    ) {
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
      setPhoneError("Please enter only numbers");
    } else {
      setPhoneError(""); // Clear error for valid key
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Background blobs */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-20"></div>
      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl opacity-20"></div>

      {/* Main form container */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border-2 border-blue-300">
        {!showThankYou ? (
          <>
            <div className="text-center mb-5">
              <div className="inline-block p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
                Get In Touch
              </h2>
            </div>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                id="name-field"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 text-gray-800 placeholder-gray-500 focus:placeholder-transparent"
              />

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="Phone Number *"
                  required
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full px-0 py-3 bg-transparent border-0 border-b-2 ${
                    phoneError ? "border-red-500" : "border-gray-300"
                  } focus:border-blue-500 outline-none transition-colors duration-300 text-gray-800 placeholder-gray-500 focus:placeholder-transparent`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300 text-gray-800 placeholder-gray-500 focus:placeholder-transparent"
              />

              <button
                id="formSubmitButton"
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </span>
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                I authorize North Star and its representatives to Call, SMS,
                Email or WhatsApp me about its products and offers. This consent
                overrides any registration for DND / NDNC.
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="inline-block p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-2">
              Your enquiry has been submitted successfully
            </p>
            <p className="text-blue-600 font-medium">
              We&apos;ll contact you soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
