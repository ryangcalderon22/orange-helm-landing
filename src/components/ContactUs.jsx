import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function ContactUs() {
  useGSAP(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-us',
        start: 'top center',
      },
      ease: "power1.inOut"
      })
    
    timeline
      .from('.contact-form', {
        opacity: 0, yPercent: 100, stagger: 0.02
    })
      .to('.circle-door', {
      y: '-20', duration: 1, ease: 'power1.inOut'
    }).to('.rock-grass-right, .rock-grass-left', {
      y: '-20', duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact-us" className="bg-[#d35f1c] relative z-300 -mt-10 overflow-hidden">
      <div className="relative">
        <div className="hidden lg:block absolute -left-40 -bottom-15 w-100">
          <img src="images/img-rock-grass-big.png" alt="" className="object-contain lg:aspect-auto lg:size-full rock-grass-right" />
        </div>
        <div className="hidden lg:block absolute left-10 -bottom-60 w-150">
          <img src="images/img-door.png" alt="" className="object-contain lg:aspect-auto lg:size-full circle-door" />
        </div>
        <div className="hidden lg:block absolute left-110 -bottom-40 w-100">
          <img src="images/img-rock-grass-big.png" alt="" className="object-contain lg:aspect-auto lg:size-full rock-grass-right" />
        </div>

        <div className="contact-form flex relative w-full justify-center lg:justify-end px-4 lg:px-10 lg:px-18 py-10">
          <form onSubmit={handleSubmit} className="grid grid-row-8 divide-y-2 divide-black border-black w-180 outline-2">
            <div className="flex flex-row gap-4 py-2 px-4 items-center justify-center text-white text-2xl bg-[#1e1e1e]">
              <h1>Contact Us</h1>
            </div>

            <div className="flex flex-row gap-4 py-2 px-4">
              <label className="flex-none min-w-[100px]">Fullname:</label>
              <input 
                type="text" 
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="border-0 bg-none focus:outline-none grow"
              />
            </div>
            
            <div className="flex flex-row gap-4 py-2 px-4">
              <label className="flex-none min-w-[100px]">Email:</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-0 bg-none focus:outline-none grow"
              />
            </div>
            
            <div className="flex flex-row rowspan-3 gap-4 py-2 px-4">
              <label className="flex-none min-w-[100px]">Message:</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="border-0 bg-none focus:outline-none grow"
              />
            </div>
            
            <div className="flex flex-row gap-4 py-2 px-4">
              <button 
                type="submit" 
                className="cursor-pointer w-full bg-[#fff8ed] hover:bg-[#ffffff] text-[#d35f1c] font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}