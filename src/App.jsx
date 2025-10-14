import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default App