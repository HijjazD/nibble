import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import lottie from "lottie-web";

import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Menu from "./pages/Menu";
import About from "./pages/About";
import About2 from "./pages/About2";
import About3 from "./pages/About3";
import Art from "./pages/Art";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const heroContainerRef = useRef(null);
  return (
    <main>
      <Navbar heroContainerRef={heroContainerRef} />
      <section id="hero1"></section>
      <Hero ref={heroContainerRef} />

      <Menu />
      <div className="relative h-screen z-[-1]">
        <h1 className="text-5xl">100</h1>
      </div>
      <div className="relative h-screen z-[-1]">
        <h1 className="text-5xl">200</h1>
      </div>
      <div className="relative h-screen">
        <h1 className="text-5xl">300</h1>
      </div>
      <About />
      <About2 />
      <About3 />
      <Art />
      <Blog />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;

// import {useEffect} from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger} from 'gsap/all'

// gsap.registerPlugin(ScrollTrigger)
// const App = () => {
//   useEffect(()=>{
//     document.querySelectorAll(".svg-row svg path").forEach
//       ((originalPath) => {
//         const borderPath = originalPath.cloneNode(true);
//         const originalWidth = parseInt(originalPath.getAttribute
//         ("stroke-width"));
//         borderPath.setAttribute("stroke", "#0f0f0f");
//         borderPath.setAttribute("stroke-width", originalWidth + 10);
//         borderPath.classList.add("border-path");
//         originalPath.parentElement.insertBefore(borderPath,
//         originalPath);
//       });

//     document.querySelectorAll(".svg-container-2 svg").forEach((svg) =>
//     {
//       const viewBox = svg.getAttribute("viewBox");
//       if (!viewBox) return;
//       const [x, y, width, height] = viewBox.split(" ").map(Number);
//       svg.setAttribute("viewBox", `${x} ${y - 10} ${width} ${height + 20}`);
//     });

//     document.querySelectorAll(".svg-row svg path").forEach((path) => {
//       const pathLength = path.getTotalLength();
//       console.log("path Length: ", pathLength)
//       path.style.strokeDasharray = pathLength ;
//       path.style.strokeDashoffset = pathLength ;
//     });

//     const introSection = document.querySelector(".intro");

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: introSection,
//           start: "top top",
//           end: `+=${window.innerHeight * 8}px`,
//           pin: true,
//           scrub: 1,
//           onUpdate: (self) => {
//             if (self.progress >= 0.5) {
//               introSection.classList.add("out");
//             } else {
//               introSection.classList.remove("out");
//             }
//           },
//         }
//       })

//       const strokeRevealOrder = [
//         "svg-top-1",
//         "svg-bottom-1",
//         "svg-middle-1",
//         "svg-top-2",
//         "svg-bottom-2",
//         "svg-middle-2",
//         "svg-top-3",
//         "svg-middle-3",
//         "svg-bottom-3",
//       ];

//       strokeRevealOrder.forEach((id, index) => {
//         const paths = document.querySelectorAll(`#${id} path`);
//         tl.to(
//           paths,
//           {
//             strokeDashoffset: 0,
//             duration: 1.5,
//             ease: "power2.out",
//           },
//           index * 0.3,
//         );
//       });

//       const curveStrokeOrder = ["svg-curve-1","svg-curve-2"]
//       const curveStartTime = 5 * 0.3 + 0.3

//       curveStrokeOrder.forEach((id, index) => {
//         const paths = document.querySelectorAll(`#${id} path`);
//         const pathLength = paths[0].getTotalLength();
//         const curveStartAt = curveStartTime + index * 1;

//         tl.to(
//           paths,
//           {
//             strokeDashoffset: 0,
//             duration: 1,
//             ease: "power2.out",
//           },
//           curveStartAt,
//         );

//         tl.to(
//           paths,
//           {
//             strokeDashoffset: -pathLength,
//             duration: 1.5,
//             ease: "power2.inOut",
//           },
//           curveStartAt + 1,
//         );
//       });

//       const svgRows = document.querySelectorAll(".svg-container .svg-row");

//       tl.to(
//         svgRows,
//         {
//           xPercent: 100,
//           duration: 2,
//           ease: "power3.inOut",
//           stagger: 0.15,
//         },
//         ">-0.5",
//       );
//     })

//     return () => {
//       ctx.revert()
//     }
//   },[])
//   return (
//     <>
//       <section className='intro relative w-screen h-svh bg-[#aeabaa] overflow-hidden'>
//         <h1 className='intro-header-in absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-center'>Scroll down dolor sit amet consectetur adipisicing elit. Libero mollitia ipsum blanditiis adipisci dolorem facilis.</h1>

//         <h1 className='intro-header-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-center hidden'>Welcome back dolor, sit amet consectetur adipisicing elit. Laudantium porro dolore, blanditiis distinctio inventore quaerat?</h1>

//         <div className="svg-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[calc(100svh-7.5px)] flex flex-col justify-center items-center">
//           {/* svg-top */}
//           <div className="svg-row">
//             {/* svg orange #EF8352 */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-top-1"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#EF8352"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg lime green #CBF380 */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-top-2"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#CBF380"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg purple #7A78FF */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-top-3"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#7A78FF"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>

//           {/* svg-middle */}
//           <div className="svg-row">
//             {/* svg purple #7A78FF */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-middle-1"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#7A78FF"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg light blue #C0DFFE */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-middle-2"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#C0DFFE"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg lime green #CBF380 */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-middle-3"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#CBF380"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>

//           {/* svg-bottom */}
//           <div className="svg-row">
//             {/* svg yellow #FBC353 */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-bottom-1"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#FBC353"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg orange #EF8352 */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-bottom-2"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#EF8352"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* svg light blue #C0DFFE */}
//             <svg
//               width="3360"
//               height="360"
//               viewBox="0 0 3360 360"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-bottom-3"
//             >
//               <path
//                 d="M180 180H3180"
//                 stroke="#C0DFFE"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="svg-container-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[calc(100svh-7.5px)] flex flex-col justify-center items-center">
//           <div className="svg-row"></div>
//           <div className="svg-row">

//             <svg
//               width="2248"
//               height="1112"
//               viewBox="0 0 2248 1112"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-curve-1"
//             >
//               <path
//                 d="M180 180.538C1512.01 180.54 1718.64 133.099 2067.5 931.594"
//                 stroke="#FBC353"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>

//             <svg
//               width="2248"
//               height="1112"
//               viewBox="0 0 2248 1112"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               id="svg-curve-2"
//             >
//               <path
//                 d="M180 180.538C1512.01 180.54 1718.64 133.099 2067.5 931.594"
//                 stroke="#FF6D38"
//                 strokeWidth="360"
//                 strokeMiterlimit="3.8637"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//           <div className="svg-row"></div>
//         </div>
//       </section>

//       <section className='outro relative w-screen h-svh bg-[#e3e3db] overflow-hidden'>
//         <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-center'>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt adipisci id eius? Voluptatibus aspernatur laboriosam exercitationem amet quis quo in fugit adipisci, voluptatem nobis perspiciatis corporis nesciunt maiores? Dicta, corrupti?
//         </h1>
//       </section>
//     </>

//   )
// }

// export default App
