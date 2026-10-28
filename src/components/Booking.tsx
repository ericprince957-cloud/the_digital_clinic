import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText, Send, AlertCircle } from "lucide-react";
import { services } from "../data/services";
import { clinicConfig } from "../data/config";
import { teamMembers } from "../data/team";

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.time) newErrors.time = "Please select a time";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappMessage = encodeURIComponent(
      `Hello, I would like to book an appointment.\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || "Not provided"}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Doctor: ${formData.doctor || "No preference"}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Preferred Time: ${formData.time}\n` +
      `Additional Message: ${formData.message || "None"}\n\n` +
      `Please confirm availability. Thank you.`
    );

    const whatsappUrl = `https://wa.me/${clinicConfig.whatsapp}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-20 lg:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-secondary/10 rounded-2xl p-12">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Send size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Appointment Request Sent!
            </h3>
            <p className="text-text-light mb-6">
              Your appointment request has been sent via WhatsApp. Our team will review your request and confirm availability shortly.
            </p>
            <p className="text-sm text-text-light bg-white rounded-lg p-4 border border-border">
              <AlertCircle size={16} className="inline mr-2 text-accent" />
              Please note: Submitting this form does not automatically confirm your appointment. The clinic will confirm availability via WhatsApp.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ fullName: "", phone: "", email: "", service: "", doctor: "", date: "", time: "", message: "" }); }}
              className="mt-6 text-primary font-medium hover:underline"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Info */}
          <div>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Book Appointment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Health Deserves Attention. Book Your Visit.
            </h2>
            <p className="text-text-light text-lg mb-8">
              Schedule a consultation with our professional team at a time that works for you. We'll confirm your appointment via WhatsApp.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Quick Confirmation</h4>
                  <p className="text-text-light text-sm">Receive appointment confirmation via WhatsApp within hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Flexible Scheduling</h4>
                  <p className="text-text-light text-sm">Choose from available slots that fit your schedule.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary text-sm">Privacy Protected</h4>
                  <p className="text-text-light text-sm">We don't collect sensitive medical information through this form.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-border bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-border bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Email Address <span className="text-text-light">(optional)</span>
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Preferred Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-300 bg-red-50' : 'border-border bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.name}>{s.name}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              {/* Doctor */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Preferred Doctor <span className="text-text-light">(optional)</span>
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">No preference</option>
                  {teamMembers.map((m) => (
                    <option key={m.id} value={m.name}>{m.name} – {m.specialisation}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.date ? 'border-red-300 bg-red-50' : 'border-border bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.time ? 'border-red-300 bg-red-50' : 'border-border bg-white'} text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                  >
                    <option value="">Select time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Additional Message <span className="text-text-light">(optional)</span>
                </label>
                <div className="relative">
                  <FileText size={16} className="absolute left-3 top-3 text-text-light" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any additional information..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Appointment Request via WhatsApp
              </button>

              <p className="text-xs text-text-light text-center">
                By submitting, you'll be redirected to WhatsApp. This does not confirm your appointment – the clinic will confirm availability.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
