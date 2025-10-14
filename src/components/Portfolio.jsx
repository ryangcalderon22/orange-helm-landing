import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
import { allPortfolioGallery } from '../../constants/index.js';

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo('.portfolio-gallery img', 
      { opacity: 0, xPercent: -100 }, 
      { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
    );

    const portfolioSplit = new SplitText(".portfolio-title", {
      type: "chars, words",
    });

    gsap.from(portfolioSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from('.rock-big, .rock-small, .tree, .road, .portfolio-plant', {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#portfolio",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(".rock-big, .rock-small", { x: -150, y: -150 }, 0)
      .to(".tree", { y: -250 }, 0);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.portfolio-gallery img', 
      { opacity: 0, xPercent: -100 }, 
      { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' }
    );
  }, [currentIndex]);

  const totalPortfolioGallery = allPortfolioGallery.length;
  console.log(totalPortfolioGallery);

  const goToSlide = (index) => {
    const newIndex = (index + totalPortfolioGallery) % totalPortfolioGallery;
    setCurrentIndex(newIndex);
  };

  const getGalleryAt = (indexOffset) => {
    return allPortfolioGallery[(currentIndex + indexOffset + totalPortfolioGallery) % totalPortfolioGallery];
  };
  
  const currentGallery = getGalleryAt(0);

  return (
    <section className="bg-[#1e1e1e] relative z-13 w-full" id="portfolio">
      <div className="relative">
        {/* Background Road Image */}
        <div className="hidden lg:block absolute inset-x-0 inset-y-0 -top-50">
          <img
            src="images/img-road.png"
            alt=""
            className="object-contain lg:aspect-auto lg:size-full road"
          />
        </div>

        {/* Warrior Image */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute -top-95 inset-x-0 m-auto w-42 h-42 z-20"
        >
          <img src="images/img-warrior.png" alt="" className="relative h-42" />
        </div>

        {/* Tree Image */}
        <div className="hidden lg:block absolute right-0 -top-90 w-100">
          <img
            src="images/img-tree.png"
            alt=""
            className="relative object-contain lg:aspect-auto lg:size-full tree"
          />
        </div>

        {/* Small Rock Image */}
        <div className="hidden lg:block absolute right-120 -top-10 w-60">
          <img
            src="images/img-rock-small.png"
            alt=""
            className="relative object-contain lg:aspect-auto lg:size-full rock-small"
          />
        </div>

        {/* Big Rock Image */}
        <div className="hidden lg:block absolute -left-10 -top-35 w-150">
          <img
            src="images/img-rock-big.png"
            alt=""
            className="relative object-contain lg:aspect-auto lg:size-full rock-big"
          />
        </div>

        {/* Plants Image */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-80">
          <img
            src="images/img-plants.png"
            alt=""
            className="relative object-contain lg:aspect-auto lg:size-full portfolio-plant"
          />
        </div>

        {/* Portfolio Content */}
        <div className="relative z-50 flex items-center justify-center w-full h-full m-auto p-4 md:p-18 mb-10 md:mb-0">
          <div className="bg-[#5a6d7c]/50 backdrop-blur-sm w-full rounded-2xl lg:rounded-4xl p-6 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-4">
              {/* Portfolio Title */}
              <div className="flex items-center justify-center p-px lg:col-span-2">
                <h3 className="qurova-regular text-white text-4xl lg:text-6xl portfolio-title">
                  Portfolio:
                </h3>
              </div>

              {/* Portfolio Image with Navigation */}
              <div className="flex p-px lg:col-span-4 relative">
                <div className="arrows">
                  <button 
                    onClick={() => goToSlide(currentIndex + 1)} 
                    className="btn-right cursor-pointer hover:bg-gray-500/70 absolute bg-gray-500/50 inset-y-0 my-auto right-5 md:right-10 -top-0 flex items-center justify-center h-25 md:h-55 w-5 md:w-15 rounded-full z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-24 text-[#fff8ed]/50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <button 
                    onClick={() => goToSlide(currentIndex - 1)}
                    className="btn-left cursor-pointer hover:bg-gray-500/70 absolute bg-gray-500/50 inset-y-0 my-auto left-5 md:left-10 -top-0 flex items-center justify-center h-25 md:h-55 w-5 md:w-15 rounded-full z-10"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth="1.5" 
                      stroke="currentColor" 
                      className="size-24 text-[#fff8ed]/50"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15.75 19.5 8.25 12l7.5-7.5" 
                      />
                    </svg>
                  </button>
                </div>
                
                <div className="portfolio-gallery w-full">
                  <img
                    src={currentGallery.image}
                    className="object-cover lg:aspect-auto lg:size-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}