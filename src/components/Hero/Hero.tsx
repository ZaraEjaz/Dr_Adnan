import { useState } from 'react'; // 1. Added useState
import { Star, ArrowRight, Search, MessageCircle, X, Smartphone } from 'lucide-react'; // 2. Added new icons
import OptimizedImage from '../OptimizedImage/OptimizedImage';

const Hero = () => {
  // --- STATE FOR MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- CONFIGURATION ---
  const whatsappNumber = "923212625053"; 
  const whatsappMessage = "Hello Dr. Adnan, I would like to inquire about research guidance.";
  
  // Create the link
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Generate QR Code URL (Dynamic)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappUrl)}`;

  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=anwaradnan32@gmail.com&su=Inquiry regarding Medical Research Guidance";

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-b from-blue-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
              <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Trusted by 3,000+ Researchers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Master Your{' '}
              <span className="inline-flex items-center relative">
                Medical Research
              </span>{' '}
              Guidance
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl">
              Led by <strong>Prof. Dr. Adnan Anwar</strong>. I bridge the gap between complex data and successful publication 
              with expert thesis guidance and statistical analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* --- EMAIL BUTTON --- */}
              <a 
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#001f54] text-white px-8 py-3.5 rounded-full hover:bg-[#001333] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                <span className="font-medium">Contact via Email</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* --- NEW WHATSAPP BUTTON --- */}
              <button 
                onClick={() => setIsModalOpen(true)}
                title="Connect on WhatsApp"
                className="bg-green-600 text-white px-8 py-3.5 rounded-full border-2 border-green-600 hover:bg-green-700 hover:border-green-700 transition-all shadow-sm hover:shadow-green-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Connect on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE + MINI-CARD */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-200 to-blue-300 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <OptimizedImage
                  src="/images/HeroImage.webp"
                  alt="Medical Research"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* MINI CARD (Floating box) */}
            <div className="absolute -bottom-6 -left-6 md:left-4 bg-white rounded-3xl shadow-2xl p-6 max-w-xs hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Popular Services</h3>
              </div>

              <div className="space-y-2 mb-4">
                {/* Mini Item 1 */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Service"
                      className="w-full h-full object-cover"
                      loading="lazy" 
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      Thesis Writing & Guidance
                    </p>
                    <p className="text-xs text-gray-500">Complete academic support</p>
                  </div>
                </div>

                {/* Mini Item 2 */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Service"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      Data Analysis for Research
                    </p>
                    <p className="text-xs text-gray-500">SPSS • Excel • Statistical tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- WHATSAPP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop (Dark Background) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all scale-100">
            {/* Header */}
            <div className="bg-green-600 p-6 text-center relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-green-700 rounded-full p-1 transition-colors"
                aria-label="Close modal"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Let's Connect</h3>
              <p className="text-green-100 text-sm mt-1">Chat with Dr. Adnan directly</p>
            </div>

            {/* Body */}
            <div className="p-8 flex flex-col items-center">
              <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 mb-6">
                 {/* QR CODE IMAGE */}
                <img 
                  src={qrCodeUrl}
                  alt="WhatsApp QR Code" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              
              <p className="text-center text-gray-600 text-sm mb-6">
                Scan this code with your phone camera or WhatsApp to start a chat instantly.
              </p>

              {/* Mobile Fallback Button */}
              <div className="w-full pt-4 border-t border-gray-100">
                 <p className="text-xs text-center text-gray-400 mb-3">On mobile? Click below</p>
                 <a 
                   href={whatsappUrl}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-xl font-medium transition-colors gap-2"
                 >
                   <Smartphone className="w-4 h-4" />
                   Open WhatsApp App
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;