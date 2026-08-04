"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "+92 314 1555125"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Ripple Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/40">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}
