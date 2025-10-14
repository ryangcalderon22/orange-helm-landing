import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Portfolio />
    </>
  )
}

export default App