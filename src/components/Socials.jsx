
import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { socialLinks } from '../../constants/index.js';
export default function Socials() {
  useGSAP(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#social-media',
        start: 'top center',
      },
      ease: "power1.inOut"
      })
    
    timeline
      .from('.social-icons', {
        opacity: 0, yPercent: 100, stagger: 0.02
    })
      .to('.viking-face', {
      x: '100', duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section id="social-media" className="bg-[#c1cbb3] overflow-hidden">
      <div className="relative h-60 flex items-center justify-center px-4 lg:px-18">
        <img 
          src="images/img-face.png" 
          alt="" 
          className="hidden lg:block absolute -left-70 top-0 object-contain h-[100%] viking-face" 
        />
        <div className="flex items-center justify-center flex-col gap-6">
          <div className="rounded-full border-[#1e1e1e] border-2 px-16 py-2">
            <h3 className="color-[#1e1e1e] qurova-regular text-lg md:text-2xl">
              See what we are up to...
            </h3>
          </div>
          <div className="social-icons flex justify-center gap-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="p-2 bg-[#d35f1c] rounded-md flex items-center justify-center h-full hover:bg-[#b84f15] transition"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <img src={social.icon} alt="" className="h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}