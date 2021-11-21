/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Marquee from '../components/Marquee';
import { pageData } from '../utils/sampleData';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import Loader from '../components/HomePage/Loader';
import { CursorContext } from '../components/CursorManager';
import GalleryWorks from '../components/GalleryWorks';
import SrcImage from '../components/SrcImage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Test2() {
  // SKEW ON SCROLL //
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter('.skewElem', 'skewY', 'deg'),
      clamp = gsap.utils.clamp(-1, 1);

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -2);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
    gsap.set('.skewElem', { transformOrigin: 'right center', force3D: true });
  }, []);

  // MOUSE ZOOM HANDLER //
  const { setSize } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setSize('medium');
  };
  const handleMouseLeave = () => {
    setSize('small');
  };

  // LOADER & ANIMATION //
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading');
  }, [loading]);

  // HASVISITED //
  const [hasVisited, setHasVisited] = useState(false);
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    if (!hasVisitedBefore) {
      setHasVisited({ hasVisitedBefore: false });
      localStorage.setItem('hasVisitedBefore', true);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && hasVisited ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main data-scroll-section id="container">
            <motion.img
              layoutId="main-image-1"
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />

            <motion.h1
              className="skewElem"
              id="heading-text"
              layoutId="main-title"
            >
              Web
            </motion.h1>
            <div className="works-cnt skewElem">
              <motion.h1 layoutId="works-title">Title</motion.h1>
              <Link href="/works/ideology">
                <a>
                  <motion.img
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    layoutId="ideology"
                    loading="lazy"
                    src="/id-icon.svg"
                    height="500px"
                    width="500px"
                    alt="logo of ideology"
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.1 }}
                  />
                </a>
              </Link>
            </div>
            <Marquee />
          </main>
          <div className="gallery-container" id="gallery-container"></div>
          <div>
            <div className="main-container" id="main-container">
              <ul>
                {pageData.map((project, index) => (
                  <ProjectItem
                    key={index}
                    project={project}
                    itemIndex={index}
                  />
                ))}
              </ul>
            </div>
          </div>
          <SrcImage
            src={'/image.jpg'}
            webp={'/image.webp'}
            height={400}
            width={400}
            alt={'image'}
          />
          <SrcImage
            src={'/image.jpg'}
            webp={'/image.webp'}
            height={900}
            width={400}
            alt={'image'}
          />
          <GalleryWorks />
        </>
      )}
    </AnimatePresence>
  );
}
