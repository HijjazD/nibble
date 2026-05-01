import "../css/about2.css";

import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About2 = () => {
  useEffect(() => {
    const textAnimation = () => {
      const split = new SplitText(".about2-paragraph", {
        type: "chars",
      });

      gsap.from(split.chars, {
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about2",
          start: "top center",
          end: "top+=200 top",
          ease: "power1.out",
          scrub: true,
        },
      });
    };

    document.fonts.ready.then(() => {
      console.log("Fonts loaded, running animation!");
      textAnimation();
    });
  }, []);

  return (
    <section id="about2" className="relative h-screen w-screen z-50">
      <div className="about2-paragraph-wrapper w-full box-border">
        <p className="about2-paragraph font-remington mt-10 text-4xl md:text-7xl text-amber-50 pl-5 pr-5 md:pl-15 md:pr-15 text-justify">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quae,
          sequi distinctio modi dicta delectus repellat repellendus nobis
          veritatis qui et beatae doloribus aliquid expedita tempore. nobis
          veritatis qui et beatae doloribus aliquid expedita tempore
        </p>
      </div>
    </section>
  );
};

export default About2;
