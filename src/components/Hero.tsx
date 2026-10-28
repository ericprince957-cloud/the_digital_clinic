import { Shield, Heart, Award } from "lucide-react";
import { clinicConfig, trustIndicators } from "../data/config";

const trustIcons = [Award, Heart, Shield];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-primary/95" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Now Accepting Appointments</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up stagger-1" style={{ fontFamily: 'var(--font-serif)' }}>
            {clinicConfig.tagline}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up stagger-2">
            {clinicConfig.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up stagger-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              Book an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up stagger-4">
            {trustIndicators.map((indicator, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={indicator} className="flex items-center gap-2">
                  <Icon size={16} className="text-secondary" />
                  <span className="text-white/70 text-sm">{indicator}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
