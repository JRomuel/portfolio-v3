/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import IdHero from "../../components/Ideology/IdHero";
import Footer from "../../components/Footer";
import IdDesc from "../../components/Ideology/IdDesc";
import IdTextImage from "../../components/Ideology/IdTextImage";
import IdImageText from "../../components/Ideology/IdImageText";
import IdMobile from "../../components/Ideology/IdMobile";
import IdTextBlock from "../../components/Ideology/IdTextBlock";

const Ideology = () => {
  return (
    <>
      <Head>
        <title>Ivan Smiths | Ideology case studio</title>
        <meta
          name="description"
          content="Ivan Smiths | Ideology case studio. UI/UX Designer using Adobe XD for two years"
        />
        <meta
          property="og:description"
          content="Ideology case studio. UI/UX Designer using Adobe XD for two years"
        />
        <meta
          property="og:image"
          content="https://www.ivansmiths.com/ideology.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IvanSmiths" />
        <meta
          name="twitter:title"
          content="Ivan Smiths | Ideology case studio"
        />
        <meta
          name="twitter:description"
          content="Ideology case studio. UI/UX Designer using Adobe XD for two years"
        />
        <meta
          name="twitter:image"
          content="https://www.ivansmiths.com/ideology.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="preview of Ideology case studio"
        />
      </Head>
      <IdHero />
      <IdDesc />
      <IdTextBlock />
      <IdTextImage />
      <IdImageText />
      <IdMobile />
      <Footer link="stuff/scholz-und-volkmer" />
    </>
  );
};

export default Ideology;
