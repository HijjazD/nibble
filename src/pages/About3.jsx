import { useEffect } from "react";
import gsap from "gsap";

import "../css/about3.css";
//laptop flex 0.3, tab 1.5,
//phone width less than 500, and height less than 980, flex = 1.4, height = 250
const About3 = () => {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    console.log("window width: ", windowWidth);
    console.log("window height: ", windowHeight);
    let flex = 1.2;
    let height = 200;
    if (windowHeight < 980 && windowWidth < 550) {
      flex = 1.0;
    } else if (windowHeight < 1400 && windowWidth < 980) {
      flex = 0.5;
    } else if (
      windowHeight < 1400 &&
      windowHeight > 1200 &&
      windowWidth > 980
    ) {
      flex = 0.7;
    } else if (
      windowHeight < 1400 &&
      windowHeight < 1200 &&
      windowWidth < 1700
    ) {
      flex = 0.3;
    }

    console.log("flex: ", flex);

    gsap.set(".img-about3-first", { height: 80 });
    gsap.set(".img-about3-second", { height: 80 });
    gsap.set(".img-about3-third", { height: 80 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-trigger",
        start: "top center+=200",
        end: "+=250",
        markers: false,
        scrub: true,
      },
    });

    tl.to(".img-about3-first", {
      flex: flex,
      height: height,
    });
    tl.to(".img-about3-first", {
      flex: 0,
      height: 80,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-trigger",
        start: "top+=150 center",
        end: "+=200",
        markers: false,
        scrub: true,
      },
    });

    tl2.to(".img-about3-second", {
      flex: flex,
      height: height,
    });
    tl2.to(".img-about3-second", {
      flex: 0,
      height: 80,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".img-trigger",
        start: "top+=320 center",
        end: "+=150",
        markers: false,
        scrub: true,
      },
    });

    tl3.to(".img-about3-third", {
      flex: flex,
      height: height,
    });
    tl3.to(".img-about3-third", {
      flex: 0,
      height: 80,
    });

    

    // gsap.fromTo('.img-about4-first',
    // {
    //     flex:0,
    // },
    // {
    //     flex: 0.5,
    //     scrollTrigger: {
    //         trigger:'.img-trigger',
    //         start: 'top center',
    //         end: '+=300',
    //         markers: true,
    //         scrub: true,
    //     }
    // })

    // gsap.to('.img-about4',{
    //     flex: 0.5,
    //     scrollTrigger: {
    //         trigger:'.img-trigger',
    //         start: 'top center',
    //         end: '+=300',
    //         markers: true,
    //         scrub: true,
    //     }
    // })
  }, []);

  return (
    <section className="about3 min-h-screen z-50 relative">
      <h1 className="text-5xl md:text-8xl font-medium text-center mb-15 font-alagard">
        Our Team
      </h1>
      <div className="img-trigger"></div>
      <div className="team-container">
        <div className="item item-1">
          <div className="word w1">Mysara</div>
          <img
            src="/images/ourteam/Mysara.jpg"
            className="img-about3-first bg-black overflow-hidden flex-0 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]"
          />

          <div className="word w2">Elysha</div>
        </div>

        <div className="item item-2">
          <div className="word w1">Wan</div>
          <img
            src="/images/ourteam/Wan.jpg"
            className="img-about3-second bg-black overflow-hidden flex-0 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]"
          />
          <div className="word w2">Muhd</div>
        </div>

        <div className="item item-3">
          <div className="word w1">Haikal</div>
          <img
            src="/images/menu.png"
            className="img-about3-third bg-black overflow-hidden flex-0 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]"
          />
          <div className="word w2">Iman</div>
        </div>

        {/* <div className="item item-4">
          <div className="word w1">Veryyy</div>
          <img
            src="/images/menu.png"
            className="img-about3-fourth bg-black overflow-hidden flex-0 transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)]"
          />
          <div className="word w2">Gooddd</div>
        </div> */}
      </div>
    </section>
  );
};

export default About3;
