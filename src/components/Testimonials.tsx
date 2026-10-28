import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Trusted Care. Meaningful Experiences.
          </h2>
          <p className="text-text-light text-lg">
            Hear from patients who have experienced our professional care firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg shadow-primary/5 border border-border relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Quote size={18} className="text-accent" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < current.rating ? "text-accent fill-accent" : "text-border"}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-text text-lg leading-relaxed mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              "{current.review}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-primary">{current.name}</p>
                <p className="text-text-light text-sm">{current.service}</p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-6" : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-text-light text-xs mt-8">
          * Testimonials shown are demonstration material. For an actual clinic, testimonials should be published with appropriate patient consent.
        </p>
      </div>
    </section>
  );
}
