import { useEffect, useRef } from 'react'
import { LottieScrollTrigger } from '../utils/lottieScrollTrigger'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'



const Hero = () => {
  const heroLottieRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Split each line into characters
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
      
    return () => {
        // Kills the timeline and its associated ScrollTrigger instance
        cancelAnimationFrame(id)
        split.revert() 
        tl.kill()
      };
  }, [])
  return (
    
    <section id='hero'>
      
      <div className="hero-video-lottie" ref={heroLottieRef}></div>
      <div className="noisy"/>
      <div className="fade-overlay"/>
      <div 
        className='title absolute top-65 md:top-70 left-10'
      >
        <div ref={titleRef}>
          <h1 className='font-jember text-5xl md:text-7xl text-[rgb(255,230,173)]'>
            WELCOME TO,
          </h1>
          <h1 className='font-jember text-5xl md:text-7xl text-[rgb(255,230,173)]'>NIBBLES</h1>
        </div>

        <div className='hours'>
          <h1 className='open text-white' >Open:</h1>
          <p className='days text-white' >Tuesday – Saturday,</p>
          <p className='time text-white' >9:30 AM – 6:30 PM</p>
        </div>

      </div>

      
      
    </section>
  )
}

export default Hero