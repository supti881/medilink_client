// import Doctors from "../Components/Doctors";
// import Footer from "../Components/Footer";
 import Hero from "../components/Hero";
// import HowItWorks from "../Components/HowItWorks";
import Navbar from "../components/Navbar"
// import Specialties from "../Components/Specialist";
// import TestimonialAndCTA from "../Components/Testimonials";


const Home = () => {
  return (
       
     <div className="min-h-screen  text-base-content" data-theme="night">
      <Navbar />
      <Hero></Hero>
      {/* <Hero />
      <Specialties />
      <HowItWorks />
      <Doctors />
      <TestimonialAndCTA />
      <Footer /> */}
    </div>
  );
};

export default Home;