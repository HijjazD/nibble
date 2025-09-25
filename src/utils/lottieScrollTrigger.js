
import lottie from "lottie-web";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export function LottieScrollTrigger(vars) {
    const playhead = { frame: 0 }
    const target = gsap.utils.toArray(vars.container)[0]

  
    const animation = lottie.loadAnimation({
        container: target,
        path: vars.path,
        renderer: 'svg',
        autoplay: false,
        loop: false,
        rendererSettings: vars.rendererSettings || {
            preserveAspectRatio: "xMidYMid slice",
        },
    })


    animation.addEventListener("DOMLoaded", () => {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: {
                ...vars.scrollTrigger,
            },
        });

        ScrollTrigger.refresh()
    });
    return animation
}