export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by filling out the appointment form, or by contacting us directly via WhatsApp. Simply select your preferred service, date, and time, and our team will confirm your booking.",
  },
  {
    id: "faq-2",
    question: "Do I need an appointment before visiting?",
    answer: "We strongly recommend booking an appointment to ensure you receive timely attention and avoid unnecessary wait times. Walk-ins are welcome but may experience longer wait times depending on availability.",
  },
  {
    id: "faq-3",
    question: "How much does a consultation cost?",
    answer: "Consultation fees vary by department. A general consultation starts at ₦25,000, while specialist consultations range from ₦30,000 to ₦50,000. Please check our services section for specific pricing.",
  },
  {
    id: "faq-4",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, cash, and major debit/credit cards. Payment is required at the time of service. Please contact us for corporate billing arrangements.",
  },
  {
    id: "faq-5",
    question: "Where is your clinic located?",
    answer: "Our clinic is located at 12 Victoria Island Way, Lagos, Nigeria. We have ample parking space and are easily accessible from major roads in the Victoria Island area.",
  },
  {
    id: "faq-6",
    question: "Do you offer weekend appointments?",
    answer: "Yes, we offer appointments on Saturdays from 9:00 AM to 3:00 PM. We are closed on Sundays. Please book in advance for weekend appointments as they tend to fill up quickly.",
  },
  {
    id: "faq-7",
    question: "Can I reschedule my appointment?",
    answer: "Absolutely. You can reschedule your appointment by contacting us via WhatsApp or phone at least 24 hours before your scheduled time. We understand that plans change and we're happy to accommodate.",
  },
];
