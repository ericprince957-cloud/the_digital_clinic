import { MessageCircle } from "lucide-react";
import { clinicConfig } from "../data/config";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
          Ready to Prioritise Your Health?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Take the first step towards better health. Book a consultation with our experienced medical team today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/20"
          >
            Book an Appointment
          </a>
          <a
            href={`https://wa.me/${clinicConfig.whatsapp}?text=${encodeURIComponent("Hello, I have a general enquiry about your services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-all gap-2"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
