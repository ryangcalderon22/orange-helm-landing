import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Socials from './components/Socials'
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Portfolio />
      <ContactUs />
      <Socials />
      <Footer />
    </>
  )
}

export default App