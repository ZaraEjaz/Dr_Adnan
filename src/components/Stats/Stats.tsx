const Stats = () => {
  const stats = [
    { value: '98%', label: 'Satisfaction rate' },
    { value: '30+', label: 'Years of experience' },
    { value: '1000+', label: 'Patients Treated' },
    { value: '80', label: 'Expert Doctors' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
