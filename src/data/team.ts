export interface TeamMember {
  id: string;
  name: string;
  qualification: string;
  specialisation: string;
  experience: string;
  bio: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "dr-1",
    name: "Dr. Sarah Johnson",
    qualification: "MBBS, MSc Dermatology",
    specialisation: "Consultant Dermatologist",
    experience: "12+ years",
    bio: "Specialising in skin health, dermatological consultations, and personalised treatment plans. Dr. Johnson is committed to helping patients achieve their best skin through evidence-based care.",
  },
  {
    id: "dr-2",
    name: "Dr. Michael Williams",
    qualification: "BDS, MDS Orthodontics",
    specialisation: "Consultant Dentist",
    experience: "10+ years",
    bio: "Dedicated to preventive dental care, oral health, and patient-centred treatment. Dr. Williams brings a gentle approach and modern techniques to every dental procedure.",
  },
  {
    id: "dr-3",
    name: "Dr. Amara Okafor",
    qualification: "MBBS, MRCOG",
    specialisation: "Fertility Specialist",
    experience: "15+ years",
    bio: "A compassionate fertility specialist with extensive experience in reproductive medicine. Dr. Okafor provides holistic care for couples on their fertility journey.",
  },
  {
    id: "dr-4",
    name: "Dr. David Adeyemi",
    qualification: "MBBS, Diploma Aesthetic Medicine",
    specialisation: "Aesthetic Medicine Physician",
    experience: "8+ years",
    bio: "Expert in non-invasive aesthetic procedures and medical spa treatments. Dr. Adeyemi combines clinical precision with an artistic eye for natural-looking results.",
  },
];
