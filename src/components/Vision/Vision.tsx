import { Check } from 'lucide-react';

const Vision = () => {
  const features = [
    {
      title: 'Patient-Centered Care',
      description: 'We prioritize patient needs and preferences, ensuring personalized treatment.',
    },
    {
      title: 'Innovative Health Solutions',
      description: 'We leverage cutting-edge technology and research to deliver healthcare services.',
    },
    {
      title: 'Holistic Wellness',
      description: 'We focus on care that nurtures both physical and mental well-being for a community.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Our Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Finding health solutions with top Experts
            </h2>

            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl font-medium">
              About Us
            </button>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
