import {useEffect} from 'react'
import gsap from 'gsap'

const WhoWeAre = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper")
    
    function getScrollAmount() {
      let wrapperWidth = wrapper.scrollWidth;
      return -(wrapperWidth - window.innerWidth)
    }



    const ctx = gsap.context(() => {
      const horizontalScroll = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: "#whoweare",
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,        
          invalidateOnRefresh: true,
          refreshPriority: 1, 
          markers: true,
          // Add these
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      })
      const textElements = gsap.utils.toArray(".row p")

      gsap.utils.toArray(".img-container").forEach((box) => {
        const mask = box.querySelector(".reveal-mask");

        gsap.to(mask, {
          xPercent: 100, // slide out to the right
          ease: "none",
          scrollTrigger: {
            containerAnimation: horizontalScroll,
            trigger: box,
            start: "left 90%",
            end: "leff 30%",
            scrub: 2,
            refreshPriority: -1,
          },
        });
      });

      textElements.forEach((text) => {
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

    })

    return () => {
      ctx.revert();
    };
  },[])

  return (
    <section id='whoweare'>     
        <div className="wrapper">
          <div className="slide pl-20 pt-20 md:pt-20 lg:pt-10">
             {/* first column */}
            <div className='col col-1 w-[50vw] h-1/2
            lg:w-70'>

              <div className="row h-[250px] img-container 
                lg:h-60 ">
                <img src='/images/img-1.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>

              <div className="row h-[200px]">
                
              </div>
            </div>

            {/* second column */}
            <div className='col col-2 w-[50vw] h-1/2
              lg:w-60'>
              <div className="row h-[250px]
                lg:h-60">
                <p className='font-alagard'>14/2/2022</p>
              </div>
              <div className="row h-[250px] img-container
                lg:h-50">
                <img src='/images/img-2.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>

            {/* third column */}
            <div className='col col-1 w-[55vw] h-1/2 lg:w-70'>
              <div className="row bg-blue-400 h-[250px] img-container lg:h-60">
                <img src='/images/img-3.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[200px] ">
                <p className='font-alagard'>14/2/2022</p>
              </div>
            </div>
            {/* fourth column */}

            <div className='col col-1 w-[80vw] h-1/2 lg:w-90'>
              <div className="row h-[250px] lg:h-60">
                <p className='font-alagard'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[400px] img-container lg:h-85">
                <img src='/images/img-4.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>
            {/* fifth column */}

            <div className='col col-1 w-[75vw] h-1/2 lg:w-80'>
              <div className="row bg-blue-400 h-[250px] img-container lg:h-60">
                <img src='/images/img-6.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[300px]">
                <p className='font-alagard'>14/2/2022</p>
              </div>
            </div>
            {/* sixth column */}

            <div className='col col-1 w-[60vw] h-1/2 lg:w-80'>
              <div className="row h-[250px] lg:h-60">
                <p className='font-alagard'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-7.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>
            {/* seventh column */}

            <div className='col col-1 w-[60vw] h-1/2 lg:w-80'>
              <div className="row bg-blue-400 h-[250px] img-container">
                <img src='/images/img-8.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[200px]">
                <p className='font-alagard'>14/2/2022</p>
              </div>
            </div>
            {/* eigth column */}

            <div className='col col-1 w-[70vw] h-1/2 lg:w-80'>
              <div className="row h-[250px]">
                <p className='font-alagard'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-9.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>
           

          </div>

        </div>
    </section>
  )
}

export default WhoWeAre


