import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { clinicConfig } from "../data/config";

export default function Location() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Visit Us. We're Here to Help.
          </h2>
          <p className="text-text-light text-lg">
            Find our clinic, check our opening hours, and get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7272347974523!2d3.4226!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzIxLjQiRQ!5e0!3m2!1sen!2sng!4v1635000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Clinic Address</h4>
                <p className="text-text-light text-sm">{clinicConfig.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(clinicConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2 hover:underline"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Opening Hours</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-text-light">Monday – Friday</span>
                    <span className="text-text font-medium">{clinicConfig.openingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-text-light">Saturday</span>
                    <span className="text-text font-medium">{clinicConfig.openingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="text-text-light">Sunday</span>
                    <span className="text-text font-medium">{clinicConfig.openingHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Phone</h4>
                <a href={`tel:${clinicConfig.phone}`} className="text-text-light text-sm hover:text-primary transition-colors">
                  {clinicConfig.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">WhatsApp</h4>
                <a
                  href={`https://wa.me/${clinicConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light text-sm hover:text-green-600 transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-primary mb-1">Email</h4>
                <a href={`mailto:${clinicConfig.email}`} className="text-text-light text-sm hover:text-primary transition-colors">
                  {clinicConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-text-light text-xs mt-8">
          * Location and contact details shown are demonstration placeholders. Replace with actual clinic information.
        </p>
      </div>
    </section>
  );
}
