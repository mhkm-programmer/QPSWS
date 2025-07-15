import AboutMe from "./AboutMe";
import PageTitle from "../reusable/PageTitle";
import Parallax from "../reusable/Parallax";
import ParallaxSection from "../reusable/Parallax";
import React from "react";

const AboutMePage = () => {
  return (
    <div>
     <PageTitle title="Portfolio | Curtains Furniture" />
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title=""
        subTitle=""
      />

      <AboutMe />
    </div>
  );
};

export default AboutMePage;
