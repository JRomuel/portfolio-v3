import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Innovation = () => {
  const innovationRef = useRef(null);
  const innovationTriggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const innHero = gsap.fromTo(
      innovationRef.current,
      {
        scale: 1,
      },
      {
        scale: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: innovationTriggerRef.current,
          start: "top top",
          end: "+=2900px top",
          scrub: true,
          ease: "expo.inOut",
          pin: true,
        },
      }
    );
    return () => {
      innHero.kill();
    };
  }, []);

  return (
    <div>
      <div className="home__innnovation-outer" ref={innovationTriggerRef}>
        <div className="home__innnovation-inner" ref={innovationRef}>
          <h2 className="home__innnovation extreme-font">INNOVATION</h2>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
