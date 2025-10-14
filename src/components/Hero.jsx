import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero = () => {

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });
      
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
      
    gsap.fromTo(".subtitle-bottom", 
      { 
        opacity: 0,
        y: 100
      },
      { 
        opacity: 1,
        y: 0,
        ease: "power1.out",
        stagger: 0.3,
        delay: 0.5
    });

    gsap.fromTo("#logo-left", 
      { 
        opacity: 0,
        x: -20
      },
      { 
        opacity: 1,
        x: 0,
        ease: "power1.out",
        stagger: 0.3,
        delay: 0.5
    });

    gsap.from('.sword, .boat', {
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.1,
    });

    gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".sword, .nav-left-img", { x: -50 }, 0)
    .to(".boat, .nav-right-img", { x: 50 }, 0)
    .to(".arrow", { y: 100 }, 0);
    }, []);

  return (
    <section className="bg-[#d35f1c] relative z-13 w-full" id="hero">
      {/* Gradient Overlays */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-0 -z-10 h-full w-full bg-[radial-gradient(30rem_30rem_at_100%_50%,#fb9a23,transparent)]"
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-0 -z-10 h-full w-full bg-[radial-gradient(30rem_30rem_at_25%_0%,#fb9a23,transparent)]"
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 bottom-0 -z-10 h-full w-full bg-[radial-gradient(30rem_30rem_at_50%_100%,#fb9a23,transparent)]"
      />

      {/* Decorative Images */}
      <img 
        src="images/img-sword.png" 
        alt="" 
        className="hidden lg:block absolute h-[60%] left-[27%] -bottom-[10%] z-20 sword"
      />
      <img 
        src="images/img-boat.png" 
        alt="" 
        className="hidden lg:block absolute h-[40%] right-[10%] -bottom-[8%] z-20 boat"
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-6">
        <img 
          src="images/img-logo-left.png" 
          alt="Orange Helm Logo" 
          className="imageResizeable col-span-2" 
          id="logo-left"
        />
        
        <div className="col-span-4 flex flex-col items-end px-6 pt-6 lg:px-8 w-full gap-y-20 justify-start max-h-[250px] lg:max-h-[300px]">
          <p className="qurova-regular text-white text-right text-[10px] md:text-sm lg:text-lg">
            www.orangehelm.com
          </p>
          
          <div className="flex flex-row items-start justify-end w-full mt-20">
            <div className="flex flex-col items-start gap-0 space-y-5">
              <p className="qurova-regular text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-0 subtitle">
                Welcome to
              </p>
              
              <h1 className="text-6xl xs:text-6xl sm:text-7xl md:text-8xl xl:text-9xl qurova-bold text-white -mt-2 sm:-mt-2 md:-mt-4 lg:-mt-6 mb-0 title">orange<span className="qurova-regular">helm</span></h1>
              
              <p className="items-center justify-center rounded-md bg-[#fff8ed] py-1 text-[#d35f1c] self-end px-4 text-xs xs:text-sm sm:text-lmd md:text-lg subtitle-bottom">
                Steering Strong Brands Forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 bottom-0 z-10 h-15 xs:h-25 sm:h-35 w-full"
      >
        <img 
          src="images/img-wave.png" 
          alt="" 
          className="object-fit aspect-auto size-full relative"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block absolute -bottom-30 z-30 px-6 h-20 w-full">
        <nav role="navigation" className="relative isolate z-10" aria-label="Main navigation">
          <div className="hidden lg:grid grid-cols-8 h-16 items-center justify-between">
            {/* Left Nav Items */}
            <ul className="col-span-3 flex items-center justify-evenly gap-0 bg-[#d35f1c] rounded-xl relative isolate">
              <li className="py-4">
                <a 
                  href="#home" 
                  className="qurova-regular text-white text-2xl hover:text-[#f6f4dc] focus:text-[#f6f4dc] transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="py-4">
                <a 
                  href="#about" 
                  className="qurova-regular text-white text-2xl hover:text-[#f6f4dc] focus:text-[#f6f4dc] transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>

            {/* Center Logo */}
            <div className="flex justify-center col-span-2">
              <img src="images/img-logo-dark.png" alt="Orange Helm Logo" />
            </div>

            {/* Right Nav Items */}
            <ul className="col-span-3 flex items-center justify-evenly gap-0 bg-[#d35f1c] rounded-xl">
              <li className="py-4">
                <a 
                  href="#portfolio" 
                  className="qurova-regular text-white text-2xl hover:text-[#f6f4dc] focus:text-[#f6f4dc] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li className="py-4">
                <a 
                  href="#contact" 
                  className="qurova-regular text-white text-2xl hover:text-[#f6f4dc] focus:text-[#f6f4dc] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Navigation Background Decorations */}
      <div aria-hidden="true" className="hidden lg:block absolute left-[5%] -bottom-15 z-20 nav-left-img">
        <img src="images/nav-bg-2.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute left-[26%] -bottom-15 z-20 nav-left-img">
        <img src="images/nav-bg-1.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute right-[26%] -bottom-15 z-20 nav-right-img">
        <img src="images/nav-bg-1.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute right-[8%] -bottom-15 z-20 nav-right-img">
        <img src="images/nav-bg-2.png" alt="" className="relative h-12" />
      </div>
    </section>
  );
};

export default Hero;