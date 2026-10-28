import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-text-light text-lg">
            Find answers to common questions about our services and appointments.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card rounded-xl border border-border overflow-hidden transition-all hover:border-primary/20"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-primary pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-text-light flex-shrink-0 transition-transform duration-200 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-text-light text-sm leading-relaxed border-t border-border pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
