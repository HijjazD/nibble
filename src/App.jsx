  import Navbar from './pages/Navbar'
  import Hero from './pages/Hero'
  import About from './pages/About'
  import Menu from './pages/Menu'
  import WhoWeAre from './pages/WhoWeAre'
  import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

  import gsap from 'gsap'
  import { ScrollTrigger,MorphSVGPlugin,SplitText } from 'gsap/all'

  import { useEffect } from 'react'

  import { pinAndAnimateLogo } from './utils/pinAndAnimateLogo'

  import Lenis from 'lenis'

import MenuThird from './pages/MenuThird'


  gsap.registerPlugin(ScrollTrigger,MorphSVGPlugin, SplitText)

  const App = () => {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 4.0,
        wheelMultiplier: 0.8, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
        smoothWheel: true,
        smoothTouch: true,
      })

      // 2. RAF loop for Lenis
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      lenis.on('scroll', ScrollTrigger.update)
      const header = document.querySelector("#navbar");
      const headerOffset = header.offsetHeight;

      // const timelines = [
      //   pinAndAnimateLogo({
      //     trigger: "#navbar",
      //     start: `top+=${headerOffset} top`,
      //     end: "+=400",
      //     headerOffset,
      //     animations: [
      //       {target:".logo", vars: { y: 300, scale: 2, ease: "power2.inOut" }},

            
      //     ]
      //   }),
      //   pinAndAnimateLogo({
      //     trigger: "#about",
      //     start: "top top",
      //     end: "+=500",
      //     headerOffset,
      //     animations: [
      //       {target:".logo", vars: { scale:3, ease: "power2.inOut" }}
      //     ]
      //   }),
  


      // ]

      return () => {
        // Kills the timeline and its associated ScrollTrigger instance
        // timelines.forEach((tl) => tl.revert())
        lenis.destroy()
      };
    },[])
    return (
      <main>
         {/* Logo positioned globally*/}
        {/* <div className='logo-wrapper fixed top-4 left-4 z-[100] h-[50px]'>
          <img 
            src='/images/logo.png'
            className='logo h-[40px]'
            alt="Logo"
          />
        </div> */}
        <Navbar/>
        <Hero/>
        <Menu/>
        <MenuThird/>
        <About/>
        <WhoWeAre/>
        <Blog/>
        <ContactUs/>
        <Footer/>
      </main>
    )
  }

  export default App
