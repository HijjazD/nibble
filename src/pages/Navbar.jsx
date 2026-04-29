import "../css/navbar.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = ({ heroContainerRef }) => {
  const logoRef = useRef(null);
  const menuTextRef = useRef(null);

  const menuToggleRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const menuPreviewRef = useRef(null);
  const menuLinksContainerRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const resetPreviewImage = () => {
    // Exact 1:1 rewrite using your ref
    menuPreviewRef.current.innerHTML = "";

    const defaultPreviewImg = document.createElement("img");
    defaultPreviewImg.src = "/images/logo.png";

    menuPreviewRef.current.appendChild(defaultPreviewImg);
  };

  const animateMenuToggle = (isOpening) => {
    const open = menuToggleRef.current.querySelector("p#menu-open");
    const close = menuToggleRef.current.querySelector("p#menu-close");

    gsap.to(isOpening ? open : close, {
      x: isOpening ? -5 : 5,
      y: isOpening ? -10 : 10,
      rotation: isOpening ? -5 : 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(isOpening ? close : open, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const openMenu = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    gsap.set([".link a", ".social a"], { y: "120%", opacity: 0.25 });

    gsap.to(heroContainerRef.current, {
      rotation: 10,
      x: 300,
      y: 450,
      scale: 1.5,
      duration: 1.25,
      ease: "power4.inOut",
    });

    animateMenuToggle(true);

    gsap.to(menuContentRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to([".link a", ".social a"], {
      y: "0%",
      opacity: 1,
      duration: 1,
      delay: 0.75,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      },
    });
  };

  const closeMenu = () => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);

    gsap.to(heroContainerRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.25,
      ease: "power4.inOut",
    });

    animateMenuToggle(false);

    gsap.to(menuContentRef.current, {
      rotation: -15,
      x: -100,
      y: -100,
      scale: 1.5,
      opacity: 0.25,
      duration: 1.25,
      ease: "power4.inOut",
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1.25,
      ease: "power4.inOut",
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        gsap.set([".link a", ".social a"], { y: "120%" });
        resetPreviewImage();
      },
    });
  };

  const handlePreviewChange = (imgSrc) => {
    if (!isOpen) return;
    if (!menuPreviewRef.current) return;
    console.log("u r hovering or clicking on handlePreviewChange...");

    const previewImages = menuPreviewRef.current.querySelectorAll("img");

    if (
      previewImages.length > 0 &&
      previewImages[previewImages.length - 1].src.endsWith(imgSrc)
    ) {
      return;
    }

    const newPreviewImg = document.createElement("img");
    newPreviewImg.src = imgSrc;
    newPreviewImg.style.opacity = "0";
    newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

    menuPreviewRef.current.innerHTML = "";
    menuPreviewRef.current.appendChild(newPreviewImg);

    // cleanup
    if (previewImages.length >= 3) {
      menuPreviewRef.current.removeChild(previewImages[0]);
    }

    gsap.to(newPreviewImg, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.75,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    if (!heroContainerRef?.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade out + move "Nibbles"
    tl.to(
      logoRef.current,
      {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      0,
    );

    tl.to(
      menuToggleRef.current.querySelectorAll("p"),
      {
        color: "#f97316",
        scale: 1.1,
        letterSpacing: "1px",
        duration: 1,
        ease: "power2.out",
      },
      0,
    );
    tl.to(
      menuToggleRef.current.querySelectorAll(".underline"),
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
      },
      0,
    );
  }, []);

  return (
    <section id="navbar">
      <nav>
        <div className="logo">
          <a
            ref={logoRef}
            href="#"
            className="text-3xl md:text-5xl font-kiwi text-[#fff4dc]"
          >
            Nibbles
          </a>
        </div>

        <div
          className="menu-toggle"
          ref={menuToggleRef}
          onClick={() => {
            if (isAnimating) return;
            isOpen ? closeMenu() : openMenu();
          }}
        >
          <div className="menu-text">
            <p
              id="menu-open"
              className="text-2xl md:text-4xl font-kiwi text-[#fff4dc]"
            >
              Menu
            </p>
            <span className="underline"></span>
          </div>

          <div className="menu-text">
            <p
              id="menu-close"
              className="text-2xl md:text-4xl font-kiwi text-[#fff4dc]"
            >
              Close
            </p>
            <span className="underline"></span>
          </div>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-content-nav" ref={menuContentRef}>
          <div className="menu-items">
            <div className="col-lg">
              <div className="menu-preview-img" ref={menuPreviewRef}>
                <img src="/images/logo.png" />
              </div>
            </div>

            <div className="col-sm">
              <div className="menu-links" ref={menuLinksContainerRef}>
                <div className="link">
                  <a
                    href="#hero"
                    data-img="/images/food1.png"
                    onMouseMove={() => {
                      console.log("🔵 A TAG HOVER DETECTED");
                      handlePreviewChange(
                        "/images/food/croissant/Croissant.webp",
                      );
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#hero1")
                        .scrollIntoView({ behavior: "smooth" });
                      closeMenu();
                    }}
                  >
                    Home
                  </a>
                </div>
                <div className="link">
                  <a
                    href="#menu"
                    data-img="/images/food2.png"
                    onMouseMove={() =>
                      handlePreviewChange("/images/food/fries/Nuggets.webp")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#menu")
                        .scrollIntoView({ behavior: "smooth" });
                      closeMenu();
                    }}
                  >
                    Menu
                  </a>
                </div>
                <div className="link">
                  <a
                    href="#"
                    data-img="/images/food3.png"
                    onMouseMove={() =>
                      handlePreviewChange("/images/food/fries/Poppers.webp")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#about")
                        .scrollIntoView({ behavior: "smooth" });
                      closeMenu();
                    }}
                  >
                    About
                  </a>
                </div>
                <div className="link">
                  <a
                    href="#"
                    data-img="/images/food1.png"
                    onMouseMove={() =>
                      handlePreviewChange("/images/food/fries/Combo-A.webp")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#contact")
                        .scrollIntoView({ behavior: "smooth" });
                      closeMenu();
                    }}
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="menu-socials">
                <div className="social">
                  <a
                    href="https://www.instagram.com/n.ibblesmy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.tiktok.com/@n.ibblesmy?_r=1&_t=ZS-95tSdhMFI29"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tiktok
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.facebook.com/share/1JMZrNmTiB/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
                <div
                  href="https://g.page/r/CWjlma5Yn_NvEBE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <a href="#">Google Review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-footer h-20 bg-gray-300">
            <div className="col-lg">
              <a href="#" className="text-4xl">
                Run Sequence
              </a>
            </div>
            <div className="col-sm">
              <a href="#" className="text-4xl">
                Origin
              </a>
              <a href="#" className="text-4xl">
                Join Signal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
