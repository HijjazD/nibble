import { useEffect, useRef } from 'react'
import { LottieScrollTrigger } from '../utils/lottieScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

import { pinAndAnimateLogo } from '../utils/pinAndAnimateLogo'


const Hero = () => {
  const heroLottieRef = useRef(null)
  const titleRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const header = document.querySelector("#navbar");
    const headerOffset = header.offsetHeight;

    const getResponsiveValues = () => {
      const width = window.innerWidth;
      
      if (width < 640) { // Mobile
        return { y: 300, x: 135, scale: 1.8 };
      } else if (width < 768) { // Small tablet
        return { y: 320, x: 130, scale: 3 };
      } else if (width < 1024) { // Tablet
        return { y: 400, x: 140, scale: 3 };
      } else if (width < 1280) { // Desktop
        return { y: 450, x: 140, scale: 4 };
      } else { // Large desktop
        return { y: 450, x: -150, scale: 4.5 };
      }
    };

    const { y, x, scale } = getResponsiveValues();
    // Split each line into characters
    const timelines = [
        pinAndAnimateLogo({
          trigger: "#navbar",
          start: `top+=${headerOffset} top`,
          end: "+=400",
          headerOffset,
          animations: [
            {target:logoRef.current, vars: { y: y, scale: 2, ease: "power2.inOut" }},
            {target:logoRef.current, vars: { x: x, scale: scale ,ease: "power2.inOut"}}
          ]
        }),

      ]
    
    const split = new SplitText(titleRef.current, { type: "chars" })
    const chars = split.chars

    const id = requestAnimationFrame(() => {
      const st = {
        trigger: "#hero",
        endTrigger: "#about",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        markers: false,
        anticipatePin: 1,       
        invalidateOnRefresh: true,
        refreshPriority: 3,   
        
        
      }
      LottieScrollTrigger({
        //lottie -vars
        container: heroLottieRef.current,
        path: "/videos/nibblehero.json",
  
        //gsap -vars
        scrollTrigger: st,

      }) 
    })

    gsap.fromTo(
      '.fade-overlay',
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: '#hero',
          start: 'top+=50 top',
          end: 'top+=550 top',
          scrub: true,
          markers: false
        },
      }
    );

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#navbar",  // use the same trigger as your chars
        start: "bottom top",
        toggleActions: "play none none reverse",
        markers: true,
      }
    })

    tl.from(chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
    })


    // Then Open
    .fromTo(".open",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )

    // Then Days
    .fromTo(".days",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )

    // Then Time
    .fromTo(".time",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )

    .fromTo(".location",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
      
    return () => {
        // Kills the timeline and its associated ScrollTrigger instance
        cancelAnimationFrame(id)
        split.revert() 
         timelines.forEach((tl) => tl.revert())
        tl.kill()
      };
  }, [])
  return (
    
    <section id='hero'>
      <div 
        ref={logoRef}
        className='logo-wrapper absolute top-4 left-[calc(50%-80px)] z-[100] h-[50px] md:top-[15px]'
      >
        <img 
          src='/images/logo.png'
          className='logo h-[40px]'
          alt="Logo"
        />
      </div>
      <div className="hero-video-lottie" ref={heroLottieRef}></div>
      <div className="noisy"/>
      <div className="fade-overlay"/>
      <div 
        className='title absolute top-65 md:top-70 left-10'
      >
        <div ref={titleRef}>
          <h1 className='font-kiwi text-5xl md:text-8xl text-[rgb(255,230,173)]'>
            WELCOME TO,
          </h1>
          <h1 className='font-kiwi text-5xl md:text-8xl text-[rgb(255,230,173)]'>NIBBLES</h1>
        </div>

        <div className='hours'>
          <h1 className='open text-white font-gameboy' >Open:</h1>
          <p className='days text-white font-gameboy' >Tuesday – Saturday,</p>
          <p className='time text-white font-gameboy' >9:30 AM – 6:30 PM</p>
        </div>

      </div>

      {/* Location Button at Bottom Center */}
    <div className="location absolute bottom-10 w-full flex justify-center">
      <a
        href="https://maps.app.goo.gl/wZ5JgthkG2HpuyMz5"
        target="_blank"
        rel="noopener noreferrer"
        className="location-btn inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[rgb(255,230,173)] text-black font-semibold hover:bg-white transition-all duration-300 shadow-lg font-gameboy"
      >
        📍 Find Us
      </a>
    </div>
      
    </section>
  )
}

export default Hero
