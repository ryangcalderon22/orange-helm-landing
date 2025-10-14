import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { brands } from '../../constants/index.js'

gsap.registerPlugin(ScrollTrigger, SplitText);
const AboutUs = () => {

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-us',
        start: 'top 30%',
      },
      ease: "power1.inOut"
    })

    parallaxTimeline
    .from('.about-title, .about-description, .about-button', {
      opacity: 0, yPercent: 100, stagger: 0.02
    })
    .from('.brands div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5');
  }, []);

  return (
    <section className="bg-[#fff8ed] pb-6 lg:pb-20 relative z-12 w-full" id="about-us">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 lg:px-0 py-6">
        <img src="images/img-logo-dark.png" alt="Logo" className="h-12" />
        <button className="bg-[#d35f1c] text-white px-4 py-2 rounded-lg">
          Menu
        </button>
      </div>

      <div className="relative isolate w-full">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-6 px-4 lg:px-0 mt-0 lg:mt-0">
          {/* What is OrangeHelm */}
          <div className="relative lg:col-span-3 lg:mt-40 z-29">
            <div className="bg-[#c1cbb3] overflow-hidden rounded-lg lg:rounded-tr-lg lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-lg p-6 lg:p-12">
              <div className="px-2 lg:px-4 pt-5 pb-0">
                <h2 className="text-2xl lg:text-4xl qurova-regular about-title">
                  What is OrangeHelm?
                </h2>
              </div>
              <div className="px-2 lg:px-4 py-5">
                <p className="text-sm lg:text-base leading-relaxed about-description">
                  We're not just a team — we're a fleet.{' '}
                  <strong>
                    Forged in creativity, driven by purpose, and guided by the
                    spirit of collaboration
                  </strong>
                  . Whether you're launching, scaling, or steering through stormy
                  waters, OrangeHelm helps you navigate with strength, strategy,
                  and style.
                </p>
              </div>
              <div className="px-2 lg:px-4 py-5 about-button">
                <button className="bg-[#d35f1c] hover:bg-[#b84f15] cursor-pointer rounded-md qurova-regular text-white w-full flex items-center justify-center py-3 text-lg lg:text-xl transition">
                  Join the voyage. Lead with us.
                </button>
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="relative lg:col-span-3 z-29 mt-0 lg:mt-20">
            <div className="py-12 lg:py-24">
              <div className="mx-auto max-w-7xl px-4 lg:px-6 flex flex-col gap-4 items-center">
                <h3 className="text-base lg:text-lg font-semibold">
                  Brands that trust us
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 w-full brands">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="p-4 flex items-center justify-center"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-6 w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;