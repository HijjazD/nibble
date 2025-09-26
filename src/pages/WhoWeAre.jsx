import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhoWeAre = () => {
  const wrapperRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const section = sectionRef.current
    
    if (!wrapper || !section) return

    // Calculate scroll amount more efficiently
    const getScrollAmount = () => {
      const wrapperWidth = wrapper.scrollWidth
      return -(wrapperWidth - window.innerWidth)
    }

    const ctx = gsap.context(() => {
      // Main horizontal scroll animation
      const horizontalScroll = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1, // Reduced from true to 1 for better performance
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: () => {
            // Force GPU acceleration
            gsap.set(wrapper, { force3D: true })
          }
        }
      })

      // Batch image reveals for better performance
      const imageContainers = gsap.utils.toArray(".img-container")
      const textElements = gsap.utils.toArray(".row p")

      // Create a single timeline for all image reveals
      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          containerAnimation: horizontalScroll,
          trigger: wrapper,
          start: "left right",
          end: "right left",
          scrub: 1,
          refreshPriority: -1,
        }
      })

      // Add image reveals to timeline with staggered timing
      imageContainers.forEach((container, index) => {
        const mask = container.querySelector(".reveal-mask")
        if (mask) {
          const delay = index * 0.1 // Stagger reveals
          revealTimeline.to(mask, {
            xPercent: 100,
            ease: "power2.out",
            duration: 0.6,
          }, delay)
        }
      })

      // Batch text animations
      textElements.forEach((text, index) => {
        gsap.fromTo(text, {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            containerAnimation: horizontalScroll,
            trigger: text,
            start: "left 70%",
            toggleActions: "play none none reverse",
            once: true, // Only animate once for better performance
          }
        })
      })

    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section id='whoweare' ref={sectionRef}>     
      <div className="wrapper" ref={wrapperRef}>
        <div className="slide pt-40">
          {/* Column 1 */}
          <div className='col w-[25vw] h-1/2'>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-1.webp' 
                alt='Gallery image 1' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
            <div className="row h-1/2 flex justify-end items-start"></div>
          </div>

          {/* Column 2 */}
          <div className='col w-[25vw] h-1/2'>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
            <div className="row h-[250px] img-container">
              <img 
                src='/images/img-2.webp' 
                alt='Gallery image 2' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
          </div>

          {/* Column 3 */}
          <div className='col w-[25vw] h-1/2'>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-3.webp' 
                alt='Gallery image 3' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
          </div>

          {/* Column 4 */}
          <div className='col w-[20vw] h-1/2'>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-4.webp' 
                alt='Gallery image 4' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
          </div>

          {/* Column 5 */}
          <div className='col w-[30vw] h-1/2'>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-6.webp' 
                alt='Gallery image 6' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
            <div className="row h-[300px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
          </div>

          {/* Column 6 */}
          <div className='col w-[35vw] h-1/2'>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-7.webp' 
                alt='Gallery image 7' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
          </div>

          {/* Column 7 */}
          <div className='col w-[30vw] h-1/2'>
            <div className="row h-[200px] img-container">
              <img 
                src='/images/img-8.webp' 
                alt='Gallery image 8' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
          </div>

          {/* Column 8 */}
          <div className='col w-[40vw] h-1/2'>
            <div className="row h-[200px]">
              <p className='font-masa'>14/2/2022</p>
            </div>
            <div className="row h-[400px] img-container">
              <img 
                src='/images/img-9.webp' 
                alt='Gallery image 9' 
                className='w-full h-full object-cover'
                loading="lazy"
                decoding="async"
              />
              <div className="reveal-mask"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
