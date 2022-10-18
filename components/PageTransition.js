import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const transitionRef = useRef(null);
  useEffect(() => {
    let timer;
    const aniStart = async () => {
      timer = setTimeout(() => {
        setIsActive(true);
        const tl = gsap.timeline();
        tl.to(transitionRef.current, {
          yPercent: 100,
          duration: 0.4,
          ease: "Expo.e5aseInOut",
        });
      }, 10);
    };
    const aniEnd = () => {
      if (timer) {
        clearTimeout(timer);
      }
      const tl = gsap.timeline();
      if (isActive) {
        tl.to(transitionRef.current, {
          yPercent: 200,
          duration: 0.5,
          ease: "Expo.easeInOut",
        });
        setIsActive(false);
      }

      tl.set(transitionRef.current, { yPercent: 0 });
      clearTimeout(timer);
    };

    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router.events, isActive]);
  return (
    <>
      <div className="page-change-cnt">
        <div
          ref={transitionRef}
          id="cover"
          className="cover-strip page-change-col"
        ></div>
      </div>
    </>
  );
};
export default PageTransition;
