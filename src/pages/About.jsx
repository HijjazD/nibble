import "../css/about.css";

import gsap from "gsap";

import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    let about_left_start = 100;
    let about_right_start = 150;

    if (window.innerWidth < 400) {
      about_left_start = 70;
      about_right_start = 100;
    }
    gsap.fromTo(
      ".about-img",
      {
        clipPath: "inset(0 0 0 100%)", // fully hidden
      },
      {
        clipPath: "inset(0 0 0 0%)", // fully visible
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top center+=300", // 👈 when section hits center
          end: "+=500", // 👈 completes as it reaches top
          scrub: true, // 👈 smooth + reversible
        },
      },
    );

    gsap.fromTo(
      ".about-left",
      { clipPath: "inset(0 100% 0 0)", scale: 2 },

      {
        clipPath: "inset(0 0% 0 0)",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: `top+=${about_left_start} center`,
          end: "+=300",
          scrub: true,
          markers: false,
        },
      },
    );

    // RIGHT IMAGE (right → left)
    gsap.fromTo(
      ".about-right",
      { clipPath: "inset(0 100% 0 0)", scale: 2.1 },
      {
        clipPath: "inset(0 0% 0 0)",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: `top+=${about_right_start} center`,
          end: "+=300",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <section id="about" className="relative h-screen">
      <img src="/images/img-1.webp" className="about-left" />
      <img src="/images/menu.png" className="about-img" />
      <img src="/images/img-2.webp" className="about-right" />
    </section>
  );
};

export default About;
