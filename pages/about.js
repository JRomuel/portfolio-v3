import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const About = () => {
  let { t } = useTranslation();

  gsap.registerPlugin(ScrollTrigger);

  const refContainer = useRef(null);
  const refTextRoad = useRef(null);
  const ref2020 = useRef(null);
  const ref2021 = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  useEffect(() => {
    const delay = 1.5;
    const delaySection = 7;
    const durationScale = 10;
    const durationGlobal = 7;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: refContainer.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(refTextRoad.current, {
      duration: `${durationScale}`,
      ease: "none",
      scale: 2,
      opacity: 0,
    });

    tl.to(ref2020.current, {
      keyframes: [
        {
          opacity: 1,
          scale: 1.5,
          delay: `${delay}`,
          duration: `${durationScale}`,
        },
        { opacity: 0, duration: `${durationGlobal}`, scale: 2 },
      ],
    });

    tl.to(secondRef.current, {
      opacity: 1,
      delay: `${delay}`,
      duration: `${durationGlobal}`,
    });

    tl.to(firstRef.current, {
      keyframes: [
        { opacity: 1, duration: `${durationGlobal}` },
        { opacity: 0, duration: `${durationGlobal}`, delay: `${delaySection}` },
      ],
    });

    tl.to(secondRef.current, {
      opacity: 0,
      duration: `${durationGlobal}`,
    });

    tl.to(ref2021.current, {
      keyframes: [
        {
          opacity: 1,
          scale: 1.5,
          delay: `${delay}`,
          duration: `${durationScale}`,
        },
        { opacity: 0, duration: `${durationGlobal}`, scale: 2 },
      ],
    });

    tl.to(fourthRef.current, {
      opacity: 1,
      duration: `${durationGlobal}`,
      delay: `${delay}`,
    });

    tl.to(thirdRef.current, {
      keyframes: [
        { opacity: 1, duration: `${durationGlobal}` },
        { opacity: 0, duration: `${durationGlobal}` },
      ],
    });

    tl.to(fourthRef.current, {
      opacity: 0,
      duration: `${durationGlobal}`,
    });
  }, []);
  return (
    <>
      <Head>
        <title>{t("about:title")}</title>
        <meta
          name="description"
          content="Ivan Smiths, frontend web developer from Wiesbaden"
        />
      </Head>
      <header className="about__header">
        <div className="about-title-cnt">
          <h1 className="large-font impact">{t("about:title")}</h1>
        </div>
      </header>
      <main>
        <div ref={refContainer} className="about__container">
          <div className="about__roadmap">
            <div className="about__roadmap__first-text">
              <h2 ref={refTextRoad}>ROADMAP</h2>
              <h3 ref={ref2020}>2020</h3>
              <img
                ref={secondRef}
                className="about__absolute-right about__opacity"
                src="scholz-und-volkmer-website-1.png"
                alt=""
              />
              <div
                ref={firstRef}
                className="about__roadmap__copy about__absolute-left about__opacity"
              >
                <h4 className="small-font">01 / Heading</h4>
                <h5 className="medium-font">Lorem ipsum dolor sit amet.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  et fugit neque, ipsum unde, minima, aperiam tempora saepe nam
                  aspernatur sed magni placeat nesciunt voluptate ea voluptas
                  aliquid quibusdam veritatis?
                </p>
                <div className="about__roadmap__copy-link">
                  <Link href="/">
                    <a className="btn-small">See more</a>
                  </Link>
                </div>
              </div>
              <h3 ref={ref2021}>2021</h3>
              <div
                ref={fourthRef}
                className="about__roadmap__copy about__absolute-left about__opacity"
              >
                <h4 className="small-font">01 / Heading</h4>
                <h5 className="medium-font">Lorem ipsum dolor sit amet.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  et fugit neque, ipsum unde, minima, aperiam tempora saepe nam
                  aspernatur sed magni placeat nesciunt voluptate ea voluptas
                  aliquid quibusdam veritatis?
                </p>
                <div className="about__roadmap__copy-link">
                  <Link href="/">
                    <a className="btn-small">See more</a>
                  </Link>
                </div>
              </div>
              <img
                ref={thirdRef}
                className="about__absolute-right about__opacity"
                src="scholz-und-volkmer-website-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  await waitload(2);
  return {
    props: { load: "load" }, // will be passed to the page component as props
  };
}

function waitload(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec * 300));
}

export default About;
