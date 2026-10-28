import { Award, Heart, Shield, Calendar, type LucideIcon } from "lucide-react";
import { valuePropositions } from "../data/config";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Heart,
  Shield,
  Calendar,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Healthcare You Can Trust
          </h2>
          <p className="text-text-light text-lg">
            We combine clinical excellence with genuine care to deliver an experience that puts your wellbeing first.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((item) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
