import { useEffect, useRef, forwardRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = forwardRef((props, heroContainerRef) => {
  useEffect(() => {
    const setHeight = () => {
      const currentHeight = window.innerHeight;
      document.body.style.height = `${currentHeight}px`;
    };
    window.addEventListener("resize", setHeight);
    setHeight();

    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".svg-row svg path").forEach((originalPath) => {
        const borderPath = originalPath.cloneNode(true);
        const originalWidth = parseInt(
          originalPath.getAttribute("stroke-width"),
        );
        borderPath.setAttribute("stroke", "#0f0f0f");
        borderPath.setAttribute("stroke-width", originalWidth + 10);
        borderPath.classList.add("border-path");
        originalPath.parentElement.insertBefore(borderPath, originalPath);
      });

      document.querySelectorAll(".svg-container-2 svg").forEach((svg) => {
        const viewBox = svg.getAttribute("viewBox");
        if (!viewBox) return;
        const [x, y, width, height] = viewBox.split(" ").map(Number);
        svg.setAttribute("viewBox", `${x} ${y - 10} ${width} ${height + 20}`);
      });

      document.querySelectorAll(".svg-row svg path").forEach((path) => {
        const pathLength = path.getTotalLength();
        console.log("path Length: ", pathLength);
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;
      });

      const playhead = { frame: 0 };
      const target = gsap.utils.toArray(heroContainerRef.current)[0];
      const LOTTIE_DURATION = 5;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: true,
          markers: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 3,
          onUpdate: (self) => {
            const introMenu = document.querySelector(".intro-menu");

            if (self.progress >= 0.5) {
              introMenu.classList.remove("hidden");
            } else {
              introMenu.classList.add("hidden");
            }
          },
        },
      });

      const animation = lottie.loadAnimation({
        container: target,
        path: "/videos/nibblehero.json",
        renderer: "svg",
        autoplay: false,
        loop: false,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });

      const strokeRevealOrder = [
        "svg-top-1",
        "svg-bottom-1",
        "svg-middle-1",
        "svg-top-2",
        "svg-bottom-2",
        "svg-middle-2",
        "svg-top-3",
        "svg-middle-3",
        "svg-bottom-3",
      ];

      const curveStrokeOrder = ["svg-curve-1", "svg-curve-2"];

      animation.addEventListener("DOMLoaded", () => {
        ScrollTrigger.refresh();
        tl.to(
          playhead,
          {
            frame: animation.totalFrames - 1,
            ease: "none",
            duration: LOTTIE_DURATION,
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
          },
          0,
        );

        strokeRevealOrder.forEach((id, index) => {
          const paths = document.querySelectorAll(`#${id} path`);
          tl.to(
            paths,
            {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.out",
            },
            LOTTIE_DURATION + index * 0.3, // ← offset by lottie duration
          );
        });

        const curveStartTime = LOTTIE_DURATION + 5 * 0.3 + 0.3;
        curveStrokeOrder.forEach((id, index) => {
          const paths = document.querySelectorAll(`#${id} path`);
          const pathLength = paths[0].getTotalLength();
          const curveStartAt = curveStartTime + index * 1;

          tl.to(
            paths,
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.out",
            },
            curveStartAt,
          );

          tl.to(
            paths,
            {
              strokeDashoffset: -pathLength,
              duration: 1.5,
              ease: "power2.inOut",
            },
            curveStartAt + 1,
          );
        });

        const svgRows = document.querySelectorAll(".svg-container .svg-row");

        tl.to(
          svgRows,
          {
            xPercent: 100,
            duration: 2,
            ease: "power3.inOut",
            stagger: 0.15,
          },
          ">-0.5",
        );

        tl.to(".img-holder", {
          rotation: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power3.inOut",
        });

        tl.to(".header .letters:first-child", {
          x: () => -window.innerWidth * 1.5,
          scale: 5,
          transformOrigin: "center center",
          ease: "power2.inOut",
        });

        tl.to(".header .letters:last-child", {
          x: () => window.innerWidth * 1.5,
          scale: 5,
          transformOrigin: "center center",
          ease: "power2.inOut",
        });
      });
    });

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", setHeight);
    };
  }, []);
  return (
    <section
      id="hero"
      className="intro relative w-screen bg-[#aeabaa] overflow-hidden"
    >
      <div
        className="hero-video-lottie w-full h-svh relative z-[-1]"
        ref={heroContainerRef}
      ></div>
      <div className="noisy absolute inset-0 bg-[url('/images/noise.png')] " />

      <div className="title absolute top-65 md:top-70 left-10">
        <div>
          <h1 className="font-kiwi text-5xl md:text-7xl text-[rgb(255,230,173)]">
            WELCOME TO,
          </h1>
          <h1 className="font-kiwi text-5xl md:text-7xl text-[rgb(255,230,173)]">
            NIBBLES
          </h1>
        </div>

        <div className="hours">
          <h1 className="open text-white font-gameboy">Open:</h1>
          <p className="days text-white font-gameboy">Tuesday – Saturday,</p>
          <p className="time text-white font-gameboy">9:30 AM – 6:30 PM</p>
        </div>
      </div>

      <div className="intro-menu absolute h-svh w-screen bg-[#3c3a36] inset-0 hidden">
        <div className="menu-content h-svh w-full">
          <div className="img-holder">
            <img src="/images/menu.png" alt="" />
          </div>
        </div>

        <div className="header flex text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="letters flex flex-1 justify-center">
            <div className="flex-1 font-alagard text-8xl text-[#fff4dc]">M</div>
            <div className="flex-1 font-alagard text-8xl text-[#fff4dc]">E</div>
          </div>
          <div className="letters flex flex-1">
            <div className="flex-1 font-alagard text-8xl text-[#fff4dc]">N</div>
            <div className="flex-1 font-alagard text-8xl text-[#fff4dc]">U</div>
          </div>
        </div>
      </div>

      <div className="location absolute bottom-10 w-full flex justify-center">
        <a
          href="https://maps.app.goo.gl/wZ5JgthkG2HpuyMz5"
          target="_blank"
          rel="noopener noreferrer"
          className="location-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[rgb(255,230,173)] text-black text-lg font-semibold font-gameboy shadow-lg transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 h-15 min-w-45"
        >
          📍 Find Us
        </a>
      </div>

      <div className="svg-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[calc(100svh-7.5px)] flex flex-col justify-center items-center pointer-events-none">
        {/* svg-top */}
        <div className="svg-row">
          {/* svg Velvet Cream #FDF5E6 */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-top-1"
          >
            <path
              d="M180 180H3180"
              stroke="#FDF5E6"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Nibbles Green #3B823E */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-top-2"
          >
            <path
              d="M180 180H3180"
              stroke="#3B823E"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Mustard Yellow #F1C40F */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-top-3"
          >
            <path
              d="M180 180H3180"
              stroke="#F1C40F"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* svg-middle */}
        <div className="svg-row">
          {/* svg Mustard Yellow #F1C40F */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-middle-1"
          >
            <path
              d="M180 180H3180"
              stroke="#7A78FF"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Burnt Orange #D35400 */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-middle-2"
          >
            <path
              d="M180 180H3180"
              stroke="#C0DFFE"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Warm Terracotta #A0522D */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-middle-3"
          >
            <path
              d="M180 180H3180"
              stroke="#CBF380"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* svg-bottom */}
        <div className="svg-row">
          {/* svg Acid Pink #FF1493 */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-bottom-1"
          >
            <path
              d="M180 180H3180"
              stroke="#FF1493"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Dreamy Lavender #B5A6D9 */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-bottom-2"
          >
            <path
              d="M180 180H3180"
              stroke="#EF8352"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          {/* svg Electric Cyan #00FFFF */}
          <svg
            width="3360"
            height="360"
            viewBox="0 0 3360 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-bottom-3"
          >
            <path
              d="M180 180H3180"
              stroke="#00FFFF"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="svg-container-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[calc(100svh-7.5px)] flex flex-col justify-center items-center pointer-events-none">
        <div className="svg-row"></div>
        <div className="svg-row">
          <svg
            width="2248"
            height="1112"
            viewBox="0 0 2248 1112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-curve-1"
          >
            <path
              d="M180 180.538C1512.01 180.54 1718.64 133.099 2067.5 931.594"
              stroke="#FBC353"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>

          <svg
            width="2248"
            height="1112"
            viewBox="0 0 2248 1112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-curve-2"
          >
            <path
              d="M180 180.538C1512.01 180.54 1718.64 133.099 2067.5 931.594"
              stroke="#FF6D38"
              strokeWidth="360"
              strokeMiterlimit="3.8637"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="svg-row"></div>
      </div>
    </section>
  );
});

export default Hero;
