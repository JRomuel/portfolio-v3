import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import SrcImage from "../SrcImage";

function SuvHero() {
    gsap.registerPlugin(ScrollTrigger);

    const videoTriggerRef = useRef(null);
    const videoRef = useRef(null);
    const companyRef = useRef(null);
    const opacityRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(opacityRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                delay: 0.5,
                duration: 1
            })
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: videoTriggerRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(
                videoRef.current,
                {
                    scale: 0.4,
                    duration: 1,
                    ease: "power4",
                },
                1
            );
            tl.to(
                videoRef.current,
                {
                    filter: "brightness(1)",
                    duration: 0.3,
                },
                0.3
            );
            tl.to(
                companyRef.current,
                {
                    opacity: 0,
                    translateY: -20,
                    duration: 0.1,
                },
                0.3
            );
        })
        return () => ctx.revert();
    }, []);

    return (
        <header ref={opacityRef}>
            <div ref={videoTriggerRef} className="cs__video-outer">
                <div className="cs__video-inner">
                    <div ref={companyRef} className="cs__video-h1">
                        <h1 className="big-font impact">Scholz & Volkmer</h1>
                    </div>
                    <div className="cs__video-cnt" ref={videoRef}>
                        <div className="desktop">
                            <SrcImage
                                classDiv="flex-center"
                                src="//scholz-und-volkmer-website-2.jpg"
                                webp="/scholz-und-volkmer-website-2.webp"
                                height="929px"
                                width="1902px"
                                alt="image of a website"
                                lazyOff={true}
                            />
                        </div>
                        <div className="mobile">
                            <div className="cs__image-mask"></div>
                            <SrcImage
                                classDiv="flex-center"
                                src="/scholz-und-volkmer-website-1.jpg"
                                webp="/scholz-und-volkmer-website-1.webp"
                                height="929px"
                                width="1902px"
                                alt="image of a website"
                                lazyOff={true}
                            />
                        </div>
                    </div>
                    <div className="cs__video-h1 cs__video-h2">
                        <h2 className="big-font impact">Frontend Developer</h2>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SuvHero;
