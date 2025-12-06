import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Vision from '../components/Vision/Vision';
import VirtualCare from '../components/VirtualCare/VirtualCare';
import DoctorsSection from '../components/DoctorsSection/DoctorsSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Vision />
      <VirtualCare />
      <DoctorsSection />
      <Footer />
    </div>
  );
};

export default Home;
