import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { clinicConfig } from "../data/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#team", label: "Our Team" },
    { href: "#booking", label: "Book Appointment" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">DC</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              {clinicConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-text" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-text font-medium py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${clinicConfig.phone}`}
              className="flex items-center gap-2 text-primary font-medium py-2"
            >
              <Phone size={16} />
              {clinicConfig.phone}
            </a>
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block bg-accent text-white text-center px-5 py-3 rounded-full font-medium mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
