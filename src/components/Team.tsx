import { teamMembers } from "../data/team";
import { Award, GraduationCap } from "lucide-react";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
            Meet the People Behind Your Care
          </h2>
          <p className="text-text-light text-lg">
            Our team of qualified healthcare professionals is dedicated to providing exceptional, patient-centred care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-light mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  {member.name.split(" ").slice(1).map(n => n[0]).join("")}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>

              {/* Specialisation */}
              <p className="text-accent text-sm font-medium mb-3">{member.specialisation}</p>

              {/* Qualification */}
              <div className="flex items-center justify-center gap-1.5 text-text-light text-xs mb-2">
                <GraduationCap size={12} />
                <span>{member.qualification}</span>
              </div>

              {/* Experience */}
              <div className="flex items-center justify-center gap-1.5 text-text-light text-xs mb-4">
                <Award size={12} />
                <span>{member.experience} experience</span>
              </div>

              {/* Bio */}
              <p className="text-text-light text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-text-light text-xs mt-8">
          * Team profiles shown are demonstration placeholders. Actual staff information will be provided by the clinic.
        </p>
      </div>
    </section>
  );
}
