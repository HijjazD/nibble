import {useEffect,useRef} from 'react'
import { SplitText, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { motion } from "motion/react";
import Meditating from '../components/Meditating';
import YinYang from '../components/YinYang';

import Whale from '../components/Whale';
import FlowerGirl from '../components/FlowerGirl';

import { drawSVG } from '../utils/drawSVG';

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
const About = () => {

  const meditating = useRef()
  const whale = useRef()
  const flowerGirl = useRef()
  useEffect(() => {
    const paths = meditating.current.querySelectorAll("path");

    //text animation
    const initAnimation = () => {
      const split = new SplitText(".para", {
        type: "chars, words",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
          end: "top 20%",
          ease: "power1.out.",
          scrub: true
        },
        opacity: 0.2,
        stagger: 0.1
      })
    }

    document.fonts.ready.then(() => {
      console.log("Fonts loaded, running animation!");
      initAnimation();
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top+=200 top ",
        end: "top+=600 top ",
        scrub: true,
        markers:false
      }
    })
    .fromTo(".yin", 
        { x: -600}, // FROM: Start position (left and rotated)
        { x: 0, ease: "power1.inOut" } // TO: End position (original spot)
    )
    .fromTo(".yang", 
        { x: 600}, // FROM: Start position (right and rotated)
        { x: 0, ease: "power1.inOut" }, // TO: End position (original spot)
        "<" // The "<" position parameter makes this animation start at the same time as the previous one
    )// Now morph *after* they've joined
    .to([".yin", ".yang"], {
        y: 300,
        ease: "power2.inOut"
    })
    .to([".yin", ".yang"], {
        morphSVG: ".heart",
        scale: 4,
        ease: "power2.inOut"
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top+=950 top ",
        end: "top+=1000 top ",
        scrub: true,
        markers:false,
      }
    })
    .to(".circle1", {
        morphSVG: ".blob1",
        ease: "power2.inOut"
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top+=1000 top ",
        end: "top+=1200 top ",
        scrub: true,
        markers:false,
      }
    })
    .to(".circle2", {
        morphSVG: ".blob2",
        ease: "power1.inOut"
    });

    const drawMeditation = drawSVG(meditating.current)
    const cleanupWhale = drawSVG(whale.current);
    const drawFlowerGirl = drawSVG(flowerGirl.current)

    // A cleanup function is good practice, though not strictly necessary here
    return () => {
      // Kill ScrollTriggers and SplitText instances on component unmount
      ScrollTrigger.getAll().forEach(st => st.kill());
     

      if (cleanupWhale) cleanupWhale(); // cleanup scroll listener
      if (drawFlowerGirl) drawFlowerGirl()
      if (drawMeditation) drawMeditation()
    };
  },[])
  return (
    <section id='about'>


      <div className='relative ml-5'>
        <h1 className='font-jember text-7xl'>About Us</h1>
        <p className='para font-cute text-5xl'>
          At Nibbles, food is more than eating, its nourishment for{" "}
          <span className="relative inline-block">
            body and mind.
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute inset-0 w-full h-full"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
            We believe mental health and body health are connected, so our cafe focuses on health with wholesome flavours...
        </p>
      </div>

      <div className='flex h-[100px] justify-center items-center'>
        <p className='font-cute text-4xl'>body</p>
        <div className='mx-20'></div>
        <p className='font-cute text-4xl'>+</p>
        <div className='mx-20'></div>
        <p className='font-cute text-4xl'>mind</p>
      </div>


      <div className='flex justify-center items-center gap-12 mt-10'>
        <svg 
          className="block" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="134 110 220 290"
          width="80"
          height="40"
          transform="rotate(-45)matrix(1, 0, 0, -1, 0, 0)"
          style={{
            display: 'block',
            margin: 0,
            padding: 0
          }}
        >
          <path d="M334.938,154.688c-5.508-4.896-12.853,0-11.628,6.732c2.448,12.24-0.612,24.48-0.612,36.72 c-22.032,0.612-44.063,2.448-66.096,3.06c9.792-23.868,8.567-52.02-10.404-72.216c-26.315-28.152-74.664-34.272-110.16-23.256 c-43.452,14.076-48.348,57.528-28.764,93.636c0.612,1.225,1.224,1.836,2.448,2.448c0.612,0.612,1.224,1.836,1.836,2.448 c1.836,3.06,4.284,6.12,6.732,7.956c-36.72,3.672-80.172-5.509-108.936-11.017c-4.284-0.611-7.344,1.836-7.956,6.12 c-2.448,18.36-1.836,36.108,3.06,53.856c1.224,4.284,7.344,2.448,6.732-1.836c0-1.225,0-1.836-0.612-3.061 c59.364,6.12,133.416,20.196,190.944-3.672c38.556,7.344,80.172-4.284,118.116-12.852c-1.836,12.239-0.612,24.479-0.612,36.72 c0,4.896,5.508,7.956,9.792,5.508c23.256-12.24,52.632-28.764,54.468-58.14C385.734,197.528,352.687,171.212,334.938,154.688z M191.73,240.98c-1.224,0-2.448,0-3.06-0.612c-3.06-0.611-4.896,1.225-5.508,3.672c-55.692,16.524-116.28,1.225-173.196,4.896 c-0.612-11.016,0-22.032,2.448-33.66c41.616,7.956,85.068,13.464,127.296,5.508c26.928-4.896,61.2-28.152,53.856-59.976 c-9.18-36.72-100.98,0.612-51.408,47.124c-3.672,1.224-7.956,2.448-12.24,3.06c0-0.611-0.612-1.224-0.612-1.836 c-3.06-3.672-6.12-6.731-9.792-9.792c1.224-1.836,1.836-4.284,0.612-7.344c-15.912-35.496-9.792-66.708,31.212-75.888 c29.988-6.732,66.708,1.836,87.516,24.48C272.515,178.557,226.614,226.292,191.73,240.98z M159.906,160.809 c30.6-9.792,18.36,25.704,3.672,36.72c-3.06,2.448-7.344,4.896-11.016,6.732c0-1.225,0-1.836-0.612-3.061 C140.935,184.676,137.262,168.152,159.906,160.809z M331.267,267.297c-1.225-9.792-2.448-19.584-1.225-29.376 c4.896-3.061,1.225-12.853-5.508-11.017c-33.66,6.732-67.932,15.912-102.204,16.524c1.225-1.225,3.061-1.836,4.284-3.061 c9.18-6.731,17.748-15.3,23.868-25.092c0.612,0,1.836,0.612,2.448,0.612c25.704-0.612,51.407-4.284,77.724-4.896 c3.06,0,7.344-3.06,6.732-6.731c-1.225-9.792,0-19.584,0.611-28.764c12.853,11.628,25.092,25.092,31.212,40.392 C377.778,239.145,350.851,256.28,331.267,267.297z"/>
        </svg>
        <div className="mx-40"></div>
        <svg 
          className="block"
          xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="134 110 220 290"
          width="80"
          height="40"
          transform="rotate(45)matrix(-1, 0, 0, 1, 0, 0)"
          style={{
            display: 'block',
            margin: 0,
            padding: 0
          }}
        >
          <path d="M334.938,154.688c-5.508-4.896-12.853,0-11.628,6.732c2.448,12.24-0.612,24.48-0.612,36.72 c-22.032,0.612-44.063,2.448-66.096,3.06c9.792-23.868,8.567-52.02-10.404-72.216c-26.315-28.152-74.664-34.272-110.16-23.256 c-43.452,14.076-48.348,57.528-28.764,93.636c0.612,1.225,1.224,1.836,2.448,2.448c0.612,0.612,1.224,1.836,1.836,2.448 c1.836,3.06,4.284,6.12,6.732,7.956c-36.72,3.672-80.172-5.509-108.936-11.017c-4.284-0.611-7.344,1.836-7.956,6.12 c-2.448,18.36-1.836,36.108,3.06,53.856c1.224,4.284,7.344,2.448,6.732-1.836c0-1.225,0-1.836-0.612-3.061 c59.364,6.12,133.416,20.196,190.944-3.672c38.556,7.344,80.172-4.284,118.116-12.852c-1.836,12.239-0.612,24.479-0.612,36.72 c0,4.896,5.508,7.956,9.792,5.508c23.256-12.24,52.632-28.764,54.468-58.14C385.734,197.528,352.687,171.212,334.938,154.688z M191.73,240.98c-1.224,0-2.448,0-3.06-0.612c-3.06-0.611-4.896,1.225-5.508,3.672c-55.692,16.524-116.28,1.225-173.196,4.896 c-0.612-11.016,0-22.032,2.448-33.66c41.616,7.956,85.068,13.464,127.296,5.508c26.928-4.896,61.2-28.152,53.856-59.976 c-9.18-36.72-100.98,0.612-51.408,47.124c-3.672,1.224-7.956,2.448-12.24,3.06c0-0.611-0.612-1.224-0.612-1.836 c-3.06-3.672-6.12-6.731-9.792-9.792c1.224-1.836,1.836-4.284,0.612-7.344c-15.912-35.496-9.792-66.708,31.212-75.888 c29.988-6.732,66.708,1.836,87.516,24.48C272.515,178.557,226.614,226.292,191.73,240.98z M159.906,160.809 c30.6-9.792,18.36,25.704,3.672,36.72c-3.06,2.448-7.344,4.896-11.016,6.732c0-1.225,0-1.836-0.612-3.061 C140.935,184.676,137.262,168.152,159.906,160.809z M331.267,267.297c-1.225-9.792-2.448-19.584-1.225-29.376 c4.896-3.061,1.225-12.853-5.508-11.017c-33.66,6.732-67.932,15.912-102.204,16.524c1.225-1.225,3.061-1.836,4.284-3.061 c9.18-6.731,17.748-15.3,23.868-25.092c0.612,0,1.836,0.612,2.448,0.612c25.704-0.612,51.407-4.284,77.724-4.896 c3.06,0,7.344-3.06,6.732-6.731c-1.225-9.792,0-19.584,0.611-28.764c12.853,11.628,25.092,25.092,31.212,40.392 C377.778,239.145,350.851,256.28,331.267,267.297z"/> 
        </svg>
      </div>

      <div className='relative w-full h-[500px] flex justify-center items-center'>
        <div className='w-[150px] h-[300px] relative z-10 '>

          <svg 
            viewBox= "20 350 800 300" 
            xmlns="http://www.w3.org/2000/svg" 
            className="yinheart"
            preserveAspectRatio="xMidYMid meet"
            overflow="visible"
          >
           
           
            <path className='heart hidden' d="M411.043 117.483C364.769 -36.9558 338.824 -26.7286 292.55 117.483C254.399 -28.5855 231.989 -46.8031 188.868 117.483C81.5389 41.0859 74.7734 69.172 109.323 181.167C-26.5892 154.611 -31.0456 179.835 75.9971 289.115C-4.34527 341.887 12.4948 369.307 99.9975 416.196C62.1658 492.63 88.4916 498.478 170.353 481.736C141.622 594.348 167.956 591.227 248.115 533.854C283.659 605.16 306.863 612.189 357.282 533.854C417.138 610.432 440.045 610.965 455.478 510.722C533.831 542.395 575.334 472.898 568.349 377.786C559.371 255.528 620.268 282.744 551.755 260.129C648.094 143.65 628.476 129.717 509.102 163.747C545.974 0.63339 515.073 8.70114 411.043 117.483Z" stroke="black"/>

            <path className="yin" d="M360.471 179.038C395.765 179.038 429.613 192.52 454.57 216.517C479.525 240.515 493.546 273.062 493.546 307C493.546 340.938 479.525 373.486 454.57 397.484C429.613 421.481 395.765 434.963 360.471 434.963C342.825 434.963 325.9 428.222 313.423 416.223C300.945 404.225 293.934 387.951 293.934 370.981C293.934 354.012 300.945 337.738 313.423 325.74C325.9 313.741 342.825 307 360.471 307C378.118 307 395.043 300.259 407.52 288.26C419.998 276.262 427.009 259.988 427.009 243.019C427.009 226.05 419.998 209.775 407.52 197.778C395.043 185.779 378.118 179.038 360.471 179.038Z" fill="#FFFF00"/>
            <path className="yang" d="M360.472 179.038C325.178 179.038 291.33 192.52 266.373 216.517C241.418 240.515 227.397 273.062 227.397 307C227.397 340.938 241.418 373.486 266.373 397.484C291.33 421.481 325.178 434.963 360.472 434.963C378.119 434.963 395.043 428.222 407.52 416.223C419.998 404.225 427.009 387.951 427.009 370.981C427.009 354.012 419.998 337.738 407.52 325.74C395.043 313.741 378.119 307 360.472 307C342.825 307 325.9 300.259 313.423 288.26C300.945 276.262 293.934 259.988 293.934 243.019C293.934 226.05 300.945 209.775 313.423 197.778C325.9 185.779 342.825 179.038 360.472 179.038Z" fill="black"/>
          </svg>

        </div>
        <div 
          ref={meditating}
          className='absolute z-30 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 h-[300px]'
        >
          <Meditating />
        </div>
      </div>

      <h1 className='relative h-[100px] w-full font-jember text-5xl mb-20'>BUT... We are more than just a cafe..</h1>
        
      <div className='relative w-full h-[2000px]'>
        
        <div className='relative z-10'>
          <div className='relative w-full h-auto flex flex-col md:flex-row justify-center items-center'>
            <div className='relative flex-1 w-1/2'>
              <div className='relative w-1/2'>
                <svg 
                  viewBox="-80 0 415 340" 
                  width="300px"
                  height="250px"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  overflow="visible"
                >
                  <path className="blob1 hidden" d="M299.5 14.5C235.473 -3.84197 198.198 -2.46393 130 14.5C109.133 1.87672 95.7208 -2.06772 63 7C48.1667 16.5 15.6 42 4 68C-7.6 94 20.5 149.5 36 174V212C37.9133 230.466 39.9136 240.65 53.5 257C83.5804 280.393 62.5077 316.682 103 292C103.533 349.719 168.949 323.651 214 339C259.343 334.284 287.09 344.977 325.5 300.5C363.164 284.319 382.767 270.664 413.5 233.5C405.228 201.634 395.557 188.758 370 174C406.127 157.098 414.313 138.08 407 86.5C401.861 60.0994 402.623 43.5439 363.5 33.5C350.777 41.9611 344.311 35.5805 333 20.5C313.595 6.47063 305.871 4.43791 299.5 14.5Z" fill="#CFCCCC" stroke="black"/>
                  <path d="M 273,155 A 51,48 0 1,0 171,155A 51,48 0 1,0 273,155" 
                    fill="#676464" className="circle1" />

                </svg>
              </div>

              <div className='absolute w-1/2 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' ref={whale}>
                <Whale/>
              </div>
            </div>

            <div className='relative flex-1 w-full flex justify-center items-center'>
              <p className='text-center font-cute text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere officiis sit quis ad recusandae, quae perspiciatis ratione nobis expedita.</p>
            </div>

          </div>

          <div className='relative w-full h-auto flex flex-col md:flex-row ' ref={flowerGirl}>
            <div className='relative w-full flex-1 flex justify-center items-center order-2 md:order-1'>
              <p className='text-center font-cute text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil repudiandae veniam accusamus sed, maiores quasi! Velit doloribus provident cumque?</p>
            </div>

            <div className='relative w-full flex-1 order-1 md:order-2'>
              <div className='relative w-full'>
                <svg 
                  viewBox="-100 -200 752 671" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  overflow="visible"
                >
                  <path className='blob2 hidden' d="M386.759 72.0514L272.808 52.0023H191.039L73.4764 1L5.5 88.5832L73.4764 205.361L29.4724 325.656L105.987 422.384L254.09 466L386.759 442.433L492.5 380.176V267.267L458.348 174.408L386.759 72.0514Z" stroke="black" fill="#FFCECE"/>
                  <path d="M 273,155 A 51,48 0 1,0 171,155A 51,48 0 1,0 273,155" 
                  fill="#FFCECE" className="circle2" />
                </svg>
              </div>
              <div className='absolute w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <FlowerGirl/>
              </div>
            </div>
          </div>

        </div>

      </div>

  
    </section>
  )
}

export default About