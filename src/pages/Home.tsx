import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Vision from '../components/Vision/Vision';
import VirtualCare from '../components/VirtualCare/VirtualCare';
import GallerySection from '../components/GallerySection/GallerySection';
import TrainingPreview from '../components/TrainingPreview/TrainingPreview';
import CourseSection from '../components/CourseSection/CourseSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <GallerySection />
      <TrainingPreview />
      <CourseSection />
      <Vision />
      <VirtualCare />
      <Footer />
    </div>
  );
};

export default Home;
