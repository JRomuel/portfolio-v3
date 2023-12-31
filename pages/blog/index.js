/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import BlogPost from "../../components/Blog/BlogPost";
import Footer from "../../components/Footer";
import FooterSimple from "../../components/FooterSimple";
import {gsap} from "gsap";
import {useHoverStore} from "../../utils/store";

function Blog() {

    const {setHover} = useHoverStore();
  const handleMouseEnter = () => {
    setHover("medium");
  };
  const handleMouseLeave = () => {
    setHover("small");
  };

  const [showAll, setShowAll] = useState(true);
  const [showSnippets, setShowSnippets] = useState(false);
  const [showTutorials, setShowTutorials] = useState(false);

  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 500) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

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
        })
        return () => ctx.revert();
    }, []);

  return (
    <>
      <Head>
        <title>Ivan Smiths`s Blog. I usually write about Next.js.</title>
        <meta
          name="description"
          content="From tutorials to snippets, i publish all my contant in this page"
        />
      </Head>
      <div style={{opacity: 0}} ref={opacityRef} className="blog">
        <div className="blog__filters">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => [
              setShowAll(true),
              setShowSnippets(false),
              setShowTutorials(false),
            ]}
          >
            All
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => [
              setShowAll(false),
              setShowTutorials(true),
              setShowSnippets(false),
            ]}
          >
            Tutorials
          </button>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => [
              setShowSnippets(true),
              setShowAll(false),
              setShowTutorials(false),
            ]}
          >
            Snippets
          </button>
        </div>
        <main className="blog__posts">
          {showAll === true ? (
            <>
              <BlogPost
                link="/blog/3d-model-react-nextjs"
                image="/nextjs-3d-model-2.jpg"
                title="How to put a 3d model on a Next.js website"
                excerpt="Today, i want to write about my method to display a 3D model in a React/Next.js website, and make it visibile in your space thanks to the Augmented reality."
                date="20 September, 2022"
              />
              <BlogPost
                link="/blog/scrolltrigger-timeline-react"
                image="/gsap-react.png"
                title="How to use Scrolltrigger with timeline in React"
                excerpt="The following snippets allows you to use Gsap timelines with Scrolltrigger in React (Next.js)"
                date="20 September, 2022"
              />
            </>
          ) : null}
          {showSnippets === true ? (
            <>
              <BlogPost
                link="/blog/scrolltrigger-timeline-react"
                image="/gsap-react.png"
                title="How to use Scrolltrigger with timeline in React"
                excerpt="The following snippets allows you to use Gsap timelines with Scrolltrigger in React (Next.js)"
                date="20 September, 2022"
              />
            </>
          ) : null}
          {showTutorials === true ? (
            <>
              <BlogPost
                link="/blog/3d-model-react-nextjs"
                image="/nextjs-3d-model-2.jpg"
                title="How to put a 3d model on a Next.js website"
                excerpt="Today, i want to write about my method to display a 3D model in a React/Next.js website, and make it visibile in your space thanks to the Augmented reality."
                date="20 September, 2022"
              />
            </>
          ) : null}
        </main>
      </div>
      {isDesktop ? <Footer link="" /> : <FooterSimple text="Home" link="/" />}
    </>
  );
}

export default Blog;
