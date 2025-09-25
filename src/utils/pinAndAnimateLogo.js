import gsap from 'gsap'



export function pinAndAnimateLogo({
    trigger,
    start,
    end,
    animations
})
{
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger,
            start,
            end,
            scrub: 1,
            invalidateOnRefresh: true,
            markers: false,

        }
    })

    animations.forEach(({target, vars}) => {
        tl.to(target, vars)
    });

    return tl
}