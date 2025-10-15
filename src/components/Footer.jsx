import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Footer() {
  const currentYear = new Date().getFullYear();

  useGSAP(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#footer',
        start: 'top center',
      },
      ease: "power1.inOut"
      })
    
    timeline
      .from('.footer-content', {
        opacity: 0, yPercent: 100, stagger: 0.02
    })
      .to('.footer-image', {
      y: '-70', duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="footer bg-[#fff8ed] relative">
      <img 
        src="images/img-footer.png" 
        alt="" 
        className="hidden lg:block absolute right-0 -bottom-20 h-[150%] lg:h-[200%] footer-image"
      />
      <div className="relative flex items-center justify-center ml-0 lg:justify-start lg:ml-18 py-10">
        <div className="footer-content flex items-center lg:items-start justify-center flex-col">
          <div>
            <img src="images/img-logo-dark.png" className="h-16" alt="OrangeHelm Logo" />
          </div>
          <p className="text-[#1e1e1e] ml-4">
            © {currentYear} OrangeHelm. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}