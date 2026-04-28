import "../css/art.css";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Art = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#art",
        start: "top top",
        end: "+=2000",
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        markers: true,
      });

      gsap.fromTo(
        ".first-img",
        { y: 1400 },
        {
          y: -600,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=900",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".second-img",
        { y: 1600 },
        {
          y: -800,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=400",
            end: "+=900",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".third-img",
        { y: 1900 },
        {
          y: -1200,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=1100",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".fourth-img",
        { y: 1900 },
        {
          y: -1600,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=1100",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".r1",
        { y: 1400 },
        {
          y: -600,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=900",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".r2",
        { y: 1600 },
        {
          y: -800,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=400",
            end: "+=900",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".r3",
        { y: 1900 },
        {
          y: -1200,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=1100",
            scrub: 1,
            markers: false,
          },
        },
      );

      gsap.fromTo(
        ".r4",
        { y: 1900 },
        {
          y: -1600,
          ease: "none",
          scrollTrigger: {
            trigger: "#art",
            start: "top top+=500",
            end: "+=1100",
            scrub: 1,
            markers: false,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="art">
      <div className="art-parent">
        <div className="customer-art">
          {/* LEFT SIDE */}
          <div className="art-left">
            <div className="first-img">
              <img src="/images/img-1.webp" />
            </div>

            <div className="second-img">
              <img src="/images/img-2.webp" />
            </div>

            <div className="third-img">
              <img src="/images/img-3.webp" />
            </div>

            <div className="fourth-img">
              <img src="/images/img-4.webp" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="art-right">
            <div className="r-img r1">
              <img src="/images/img-5.webp" />
            </div>

            <div className="r-img r2">
              <img src="/images/img-6.webp" />
            </div>

            <div className="r-img r3">
              <img src="/images/img-7.webp" />
            </div>

            <div className="r-img r4">
              <img src="/images/img-8.webp" />
            </div>
          </div>
        </div>
      </div>

      <div className="customer-art-text">
        <p>Customer</p>
        <p>Art</p>
        <button>more</button>
      </div>
    </section>
  );
};

export default Art;
