import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Jonathan Reed',
      specialty: 'Gastroenterologist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Olivia Bennett',
      specialty: 'Dermatologist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'David Harris',
      specialty: 'Pediatrician',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="doctors" className="py-16 md:py-24 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
              Doctors
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Meet our expert medical team of dedicated specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
