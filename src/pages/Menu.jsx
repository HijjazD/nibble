import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)
const Menu = () => {
  

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.img-holder', {
            rotation: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#menu",
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    markers: false,
                    pin: true,
                    anticipatePin: 1,        
                    invalidateOnRefresh: true,
                    refreshPriority: 1,   
                    
                }
            })

            gsap.to(".header .letters:first-child", {
                x: () => -window.innerWidth,
                scale: 5,
                transformOrigin: "center center",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#menu",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1,
                    markers: false
                }
            });

            gsap.to(".header .letters:last-child", {
                x: () => window.innerWidth,
                scale: 5,
                transformOrigin: "center center",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#menu",
                    start: "top top",
                    end: "bottom center",
                    scrub: 1,
                    
                }
            });

            console.log("Created trigger:", ScrollTrigger.getAll());
        })

        

        return () => {
            ctx.revert();
            console.log("After cleanup:", ScrollTrigger.getAll());
        };
    }, [])

  return (
    <section id='menu' >
         <div className='header flex text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <div className='letters flex flex-1 justify-center'>
                <div className='flex-1 font-cute text-4xl'>M</div>
                <div className='flex-1 font-cute text-4xl'>E</div>
            </div>
            <div className='letters flex flex-1'>
                <div className='flex-1 font-cute text-4xl'>N</div>
                <div className='flex-1 font-cute text-4xl'>U</div>
            </div>
        </div>
        
        <div className="menu-content h-screen w-full">
            <div className="img-holder">
                <img src='/images/menu.jpg' alt=''/>
            </div>
        </div>
       
        
    </section>
  )
}

export default Menu