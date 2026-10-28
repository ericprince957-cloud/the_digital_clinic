export interface Testimonial {
  id: string;
  name: string;
  review: string;
  service: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Adebayo M.",
    review: "The level of professionalism and care I received was exceptional. The clinic environment is modern and welcoming, and the doctor took time to explain everything clearly.",
    service: "Skin Consultation",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Chioma N.",
    review: "I've been to several dental clinics, but this experience was different. The team made me feel comfortable throughout, and the results of my teeth whitening were amazing.",
    service: "Teeth Whitening",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Funke A.",
    review: "The facial treatment was luxurious and my skin has never looked better. The aesthetician was knowledgeable and used only quality products. I'll definitely be returning.",
    service: "Deep Cleansing Facial",
    rating: 5,
  },
  {
    id: "test-4",
    name: "Emeka O.",
    review: "Booking through WhatsApp was so convenient. The staff were responsive and professional. The consultation was thorough and I felt my concerns were genuinely heard.",
    service: "General Consultation",
    rating: 4,
  },
  {
    id: "test-5",
    name: "Ngozi E.",
    review: "Dr. Okafor was incredibly compassionate and thorough during my fertility consultation. The clinic provides a private, comfortable space for sensitive health discussions.",
    service: "Fertility Consultation",
    rating: 5,
  },
];
