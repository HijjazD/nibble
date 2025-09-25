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
          refreshPriority: 2, 
          markers: true,
          // Add these
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      })

      gsap.utils.toArray(".img-container").forEach((box) => {
        const mask = box.querySelector(".reveal-mask");

        gsap.to(mask, {
          xPercent: 100, // slide out to the right
          ease: "none",
          scrollTrigger: {
            containerAnimation: horizontalScroll,
            trigger: box,
            start: "left 30%",
            end: "right 60%",
            scrub: 2,
            refreshPriority: -1,
          },
        });
      });

      gsap.utils.toArray(".row p").forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y:20,
          scrollTrigger: {
            containerAnimation: horizontalScroll,
            trigger: text,
            start: "left 70%",
            toggleActions: "play none none reverse",
          }
        })
      })

      gsap.to(".batman", {
  ease: "none",
  immediateRender: false,
  motionPath: {
    path: ".batmanpath path",
    align: ".batmanpath path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
  scrollTrigger: {
    containerAnimation: horizontalScroll,
    trigger: ".batmanpath",
    start: "left center",
    end: "right center",
    scrub: true,
   
    markers: true,
  }
});



    })

    return () => {
      ctx.revert();
    };
  },[])

  return (
    <section id='whoweare'>     
        <div className="wrapper">
          <div className='absolute inset-0'>
            <img 
              src='/images/batman.svg'
              className='batman absolute w-[100px]'  
            />
            
            <svg 
              className='batmanpath'
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 -100 8600 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 411.5C129.667 278.667 435.9 10.7 627.5 1.49997C819.1 -7.70003 857 479 1031 387.5L1517 68.5001L1915.5 411.5C2048.33 274.833 2380.1 1.49997 2644.5 1.49997C2908.9 1.49997 3476.67 1.49997 3727.5 1.49997L4365.5 411.5L5152 92.4999L6348.5 503L7146.5 1.49997L7818.5 503L8650.5 1.49997" stroke="black"/>
            </svg>
          </div>
         
          <div className="slide pt-40">
             {/* first column */}
            <div className='col col-1 w-[30vw] h-1/2'>
              <div className="row h-[200px] img-container">
                <img src='/images/img-1.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-1/2 flex justify-end items-start">
                
              </div>
            </div>

            {/* second column */}
            <div className='col col-2 w-[30vw] h-1/2'>
              <div className="row h-[200px] ">
                <p className='font-masa'>14/2/2022</p>
              </div>
              <div className="row h-[250px] img-container">
                <img src='/images/img-2.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>

            {/* third column */}
            <div className='col col-1 w-[30vw] h-1/2'>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-3.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[200px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
            </div>
            {/* fourth column */}

            <div className='col col-1 w-[20vw] h-1/2'>
              <div className="row h-[200px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-4.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>
            {/* fifth column */}

            <div className='col col-1 w-[50vw] h-1/2'>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-6.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[300px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
            </div>
            {/* sixth column */}

            <div className='col col-1 w-[60vw] h-1/2'>
              <div className="row h-[200px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-7.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
            </div>
            {/* seventh column */}

            <div className='col col-1 w-[40vw] h-1/2'>
              <div className="row bg-blue-400 h-[200px] img-container">
                <img src='/images/img-8.webp' alt='' className='w-full h-full object-cover img-reveal'/>
                <div className="reveal-mask"></div>
              </div>
              <div className="row h-[200px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
            </div>
            {/* eigth column */}

            <div className='col col-1 w-[70vw] h-1/2'>
              <div className="row h-[200px]">
                <p className='font-masa'>14/2/2022</p>
              </div>
              <div className="row bg-blue-400 h-[400px] img-container">
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


