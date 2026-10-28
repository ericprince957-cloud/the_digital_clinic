import { useState } from "react";
import { Clock, MessageCircle, Grid3X3, Sparkles, Smile, Heart, Gem, type LucideIcon } from "lucide-react";
import { services, serviceCategories } from "../data/services";
import { clinicConfig } from "../data/config";

const iconMap: Record<string, LucideIcon> = {
  Grid3X3,
  Sparkles,
  Smile,
  Heart,
  Gem,
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  const getWhatsAppLink = (serviceName: string) => {
    const message = encodeURIComponent(
      `Hello, I visited your website and I'm interested in your ${serviceName} service. Please provide more information about availability and booking.`
    );
    return `https://wa.me/${clinicConfig.whatsapp}?text=${message}`;
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Comprehensive Care, Expertly Delivered
          </h2>
          <p className="text-text-light text-lg">
            Explore our range of professional medical and aesthetic services. Transparent pricing, professional care.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Grid3X3;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white text-text border border-border hover:border-primary/30 hover:text-primary"
                }`}
              >
                <Icon size={16} />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Service Icon/Header */}
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>

              {/* Service Name */}
              <h3 className="text-lg font-semibold text-primary mb-2">{service.name}</h3>

              {/* Description */}
              <p className="text-text-light text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between mb-4 pt-4 border-t border-border">
                <span className="text-lg font-bold text-accent">{service.price}</span>
                {service.duration && (
                  <span className="flex items-center gap-1 text-text-light text-sm">
                    <Clock size={14} />
                    {service.duration}
                  </span>
                )}
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppLink(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary/5 hover:bg-primary text-primary hover:text-white py-3 rounded-xl text-sm font-medium transition-all"
              >
                <MessageCircle size={16} />
                Enquire About This Service
              </a>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <p className="text-center text-text-light text-xs mt-8 max-w-xl mx-auto">
          {clinicConfig.privacyNotice}
        </p>
      </div>
    </section>
  );
}
