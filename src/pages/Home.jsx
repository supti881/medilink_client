// import Doctors from "../Components/Doctors";
// import Footer from "../Components/Footer";

import Doctors from "../components/Doctors";

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
// import HowItWorks from "../Components/HowItWorks";

import TestimonialAndCTA from "../components/Testimonials";
// import Specialties from "../Components/Specialist";
// import TestimonialAndCTA from "../Components/Testimonials";


const Home = () => {
  return (
       
     <div className="min-h-screen  text-base-content" data-theme="night">
      
      <Hero></Hero>
      < HowItWorks></HowItWorks>
      < TestimonialAndCTA></TestimonialAndCTA>
      <Doctors></Doctors>
      
      
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