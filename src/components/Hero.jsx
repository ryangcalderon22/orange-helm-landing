import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {

  useGSAP(() => {
    gsap.to("#text", { 
      opacity: 1,
      y: 0,
      ease: "power1.out",
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
  }, []);

  return (
    <section className="bg-[#d35f1c] relative z-[13] w-full" id="hero">
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
        className="hidden lg:block absolute h-[60%] left-[27%] -bottom-[10%] z-20"
      />
      <img 
        src="images/img-boat.png" 
        alt="" 
        className="hidden lg:block absolute h-[40%] right-[10%] -bottom-[8%] z-20"
      />

      {/* Main Content Grid */}
      <div className="grid grid-cols-6">
        <img 
          src="images/img-logo-left.png" 
          alt="Orange Helm Logo" 
          className="imageResizeable col-span-2" 
          id="logo-left"
        />
        
        <div className="col-span-4 flex flex-col items-end px-6 pt-6 lg:px-8 w-full gap-y-20 justify-between">
          <p className="qurova-regular text-white text-right text-[10px] md:text-sm lg:text-lg">
            www.orangehelm.com
          </p>
          
          <div className="flex flex-row items-start w-full">
            <div className="shrink grow-[1.7] basis-0 flex flex-col items-start gap-4 md:gap-2 lg:gap-0 mt-4 lg:mt-45 md:mt-30">
              <h1 className="qurova-regular text-lg md:text-4xl lg:text-5xl tracking-tight text-white">
                Welcome to <span className="sr-only">Orange Helm</span>
              </h1>
              
              <img 
                className="-mt-7 md:-mt-10" 
                src="images/img-logo-text.png" 
                alt="Orange Helm"
              />
              
              <div className="items-center justify-center rounded-md bg-[#fff8ed] py-1 text-[#d35f1c] self-end -mt-4 md:-mt-8 xl:px-14 lg:px-10 px-2 text-[10px] sm:text-md md:text-md lg:text-lg">
                Steering Strong Brands Forward.
              </div>
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
          className="object-cover aspect-auto size-full relative"
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
      <div aria-hidden="true" className="hidden lg:block absolute left-[5%] -bottom-15 z-20">
        <img src="images/nav-bg-2.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute left-[26%] -bottom-15 z-20">
        <img src="images/nav-bg-1.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute right-[26%] -bottom-15 z-20">
        <img src="images/nav-bg-1.png" alt="" className="relative h-12" />
      </div>
      <div aria-hidden="true" className="hidden lg:block absolute right-[8%] -bottom-15 z-20">
        <img src="images/nav-bg-2.png" alt="" className="relative h-12" />
      </div>
    </section>
  );
};

export default Hero;