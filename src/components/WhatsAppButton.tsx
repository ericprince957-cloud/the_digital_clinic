import { MessageCircle } from "lucide-react";
import { clinicConfig } from "../data/config";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent(
    "Hello, I visited your website and would like to make an enquiry."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-0.5 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="group-hover:animate-pulse-soft" />
      <span className="text-sm font-medium hidden sm:inline">Chat with us</span>
    </a>
  );
}
