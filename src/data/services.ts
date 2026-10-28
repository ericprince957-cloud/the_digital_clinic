export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  category: string;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "all",
    name: "All Services",
    icon: "Grid3X3",
    description: "View all available services",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    description: "Expert skin health consultations and treatments",
  },
  {
    id: "dental",
    name: "Dental Care",
    icon: "Smile",
    description: "Comprehensive dental health services",
  },
  {
    id: "fertility",
    name: "Fertility & Women's Health",
    icon: "Heart",
    description: "Specialised fertility and reproductive health services",
  },
  {
    id: "medspa",
    name: "Medical Spa & Aesthetics",
    icon: "Gem",
    description: "Luxury aesthetic treatments and wellness services",
  },
];

export const services: Service[] = [
  // Dermatology
  {
    id: "derm-1",
    name: "Skin Consultation",
    description: "Comprehensive skin assessment with personalised treatment recommendations from our dermatology specialist.",
    price: "₦35,000",
    duration: "30 min",
    category: "dermatology",
  },
  {
    id: "derm-2",
    name: "Acne Treatment",
    description: "Targeted acne management including assessment, treatment plan, and follow-up care for clearer skin.",
    price: "₦45,000",
    duration: "45 min",
    category: "dermatology",
  },
  {
    id: "derm-3",
    name: "Chemical Peels",
    description: "Professional chemical peel treatment to improve skin texture, tone, and overall appearance.",
    price: "₦65,000",
    duration: "60 min",
    category: "dermatology",
  },
  {
    id: "derm-4",
    name: "Skin Rejuvenation",
    description: "Advanced skin rejuvenation therapy to restore youthful glow and improve skin elasticity.",
    price: "Price after consultation",
    duration: "60 min",
    category: "dermatology",
  },
  {
    id: "derm-5",
    name: "Pigmentation Treatment",
    description: "Specialised treatment for hyperpigmentation, dark spots, and uneven skin tone.",
    price: "₦55,000",
    duration: "45 min",
    category: "dermatology",
  },
  // Dental Care
  {
    id: "dent-1",
    name: "Dental Consultation",
    description: "Complete oral health assessment with professional advice and treatment planning.",
    price: "₦25,000",
    duration: "30 min",
    category: "dental",
  },
  {
    id: "dent-2",
    name: "Teeth Whitening",
    description: "Professional teeth whitening treatment for a brighter, more confident smile.",
    price: "₦75,000",
    duration: "60 min",
    category: "dental",
  },
  {
    id: "dent-3",
    name: "Dental Cleaning",
    description: "Professional dental cleaning and polishing to maintain optimal oral hygiene.",
    price: "₦40,000",
    duration: "45 min",
    category: "dental",
  },
  {
    id: "dent-4",
    name: "Tooth Extraction",
    description: "Safe and comfortable tooth extraction performed by our experienced dental team.",
    price: "Price after consultation",
    duration: "30 min",
    category: "dental",
  },
  {
    id: "dent-5",
    name: "Dental Braces Consultation",
    description: "Orthodontic assessment and braces consultation for teeth alignment options.",
    price: "₦30,000",
    duration: "45 min",
    category: "dental",
  },
  // Fertility & Women's Health
  {
    id: "fert-1",
    name: "Fertility Consultation",
    description: "Comprehensive fertility assessment with specialist guidance and next-step planning.",
    price: "₦50,000",
    duration: "60 min",
    category: "fertility",
  },
  {
    id: "fert-2",
    name: "Reproductive Health Assessment",
    description: "Thorough reproductive health evaluation including hormonal and fertility markers.",
    price: "₦60,000",
    duration: "60 min",
    category: "fertility",
  },
  {
    id: "fert-3",
    name: "Ultrasound Services",
    description: "Professional ultrasound scanning services for diagnostic and monitoring purposes.",
    price: "₦35,000",
    duration: "30 min",
    category: "fertility",
  },
  {
    id: "fert-4",
    name: "Women's Health Consultation",
    description: "Dedicated women's health consultation covering general wellness and preventive care.",
    price: "₦30,000",
    duration: "45 min",
    category: "fertility",
  },
  // Medical Spa & Aesthetics
  {
    id: "spa-1",
    name: "Deep Cleansing Facial",
    description: "Luxury deep cleansing facial treatment for refreshed, radiant, and deeply nourished skin.",
    price: "₦45,000",
    duration: "60 min",
    category: "medspa",
  },
  {
    id: "spa-2",
    name: "Advanced Skin Treatment",
    description: "Customised skin treatment combining multiple modalities for optimal skin health results.",
    price: "₦70,000",
    duration: "90 min",
    category: "medspa",
  },
  {
    id: "spa-3",
    name: "Laser Hair Removal",
    description: "Safe and effective laser hair removal treatment for long-lasting smooth skin.",
    price: "Price after consultation",
    duration: "30–60 min",
    category: "medspa",
  },
  {
    id: "spa-4",
    name: "Anti-Ageing Treatments",
    description: "Advanced anti-ageing therapies to reduce fine lines and restore youthful vitality.",
    price: "Price after consultation",
    duration: "60 min",
    category: "medspa",
  },
  {
    id: "spa-5",
    name: "Body Contouring",
    description: "Non-invasive body contouring treatment for sculpting and toning targeted areas.",
    price: "Price after consultation",
    duration: "60–90 min",
    category: "medspa",
  },
];
