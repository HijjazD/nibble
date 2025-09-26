import { useEffect, useRef } from 'react'
import { LottieScrollTrigger } from '../utils/lottieScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { pinAndAnimateLogo } from '../utils/pinAndAnimateLogo'

import { MotionPathPlugin } from 'gsap/all'




const Hero = () => {
  const heroLottieRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Split each line into characters
    const split = new SplitText(titleRef.current, { type: "chars" })
    const chars = split.chars

    gsap.from(chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        toggleActions: "play none none reverse",
        markers:true,
      },
    })

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
      
    return () => {
        // Kills the timeline and its associated ScrollTrigger instance
        cancelAnimationFrame(id)
        split.revert() 
      };
  }, [])
  return (
    
    <section id='hero'>
      
      <div className="hero-video-lottie" ref={heroLottieRef}></div>
      <div className="noisy"/>
      <div className="fade-overlay"/>
      <div 
        ref={titleRef}
        className='title absolute top-40 left-10'
      >
        <h1 className='font-jember text-5xl text-[rgb(255,230,173)]'>
          WELCOME TO
        </h1>
        <h1 className='font-jember text-5xl text-[rgb(255,230,173)]'>NIBBLES</h1>
        </div>
      
  

    </section>
  )
}

export default Hero