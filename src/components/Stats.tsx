export default function Stats() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "5,000+", label: "Patients Served" },
    { value: "15+", label: "Medical Services" },
    { value: "4.9", label: "Patient Rating" },
  ];

  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                {stat.value}
              </p>
              <p className="text-text-light text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
