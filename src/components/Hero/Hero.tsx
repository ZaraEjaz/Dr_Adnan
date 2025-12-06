import { Star, ArrowRight, Search, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-medium text-gray-700">4.7 | 3,460 Reviews</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              A modern{' '}
              <span className="inline-flex items-center relative">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-500 absolute -top-2 -left-8" />
                safe
              </span>{' '}
              and effective approach to{' '}
              <span className="inline-flex items-center relative">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-orange-400 fill-orange-400 absolute -top-2 -left-8" />
                well being
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span className="font-medium">Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-md font-medium">
                Learn more
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-200 to-blue-300 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Doctor"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 md:left-4 bg-white rounded-3xl shadow-2xl p-6 max-w-xs hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Available Doctors</h3>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Jonathan Reed"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm text-gray-900">Jonathan Reed</p>
                    <p className="text-xs text-gray-500">Gastroenterologist</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Olivia Bennett"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm text-gray-900">Olivia Bennett</p>
                    <p className="text-xs text-gray-500">Dermatologist</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a Doctor"
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
