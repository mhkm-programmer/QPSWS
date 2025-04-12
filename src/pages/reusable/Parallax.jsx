import { Parallax } from "react-parallax";
import React from "react";

const ParallaxSection = ({ imagePath, title, subTitle }) => {
  return (
    <Parallax bgImage={imagePath} strength={400}>
      {/* Responsive height for mobile and desktop */}
      <div className="h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="flex items-center justify-center h-full text-center px-4">
          <div className="max-w-2xl mx-auto">
            {/* Responsive title and subtitle */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {title}
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;