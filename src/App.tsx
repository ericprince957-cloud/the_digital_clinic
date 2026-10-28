import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Team from "./components/Team";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Team />
      <Booking />
      <Testimonials />
      <CTABanner />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
