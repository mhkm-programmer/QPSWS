import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import Slider from "react-slick";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [activeTheme] = useThemeSwitcher();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(true);
  };

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  const images = [
    "https://8upload.com/image/679ab81322a48/IMG-20250113-WA0033.jpg",
    "https://8upload.com/image/679abe281ed2b/office-furniture__1_.jpg",
    "https://8upload.com/image/679ab8ae708ea/IMG-20250112-WA0458.jpg",
    "https://8upload.com/image/679abd057b34e/1-d9398590-min-768x512__1_.jpg",
    "https://8upload.com/image/679abd2e7fd99/61545f46eb42c40020cbb6c2_America__1_.jpg",
  ];

  return (
    <div
      className={` bg-[#F5F5DC] mx-auto gap-x-10 items-center justify-between overflow-hidden pt-4 md:flex md:px-8 ${
        activeTheme === "dark" ? "text-white" : ""
      }`}
    >
      {/* Left Section */}
      <div
        className={`flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl ${
          activeTheme === "dark" ? "dark:bg-primary-dark" : "bg-[#F5F5DC]"
        }`}
      >
        {/* Hero Text Section */}
        <div className="text-center space-y-4">
          <h2 className="text-xl md:text-3xl text-[#6B4226] font-semibold">
            Transforming Spaces with Style and Comfort
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            At LuxeFurnish, we specialize in crafting custom furniture, offering
            expert upholstery services, and creating stunning interior designs.
            Let us bring elegance and functionality to your home or office.
          </p>
        </div>
        

        {/* Action Buttons */}
        <div className="mt-6 flex justify-center">
  <a
    href="https://wa.me/97470373588"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-sm hover:bg-green-700 transition font-semibold shadow-lg"
  >
    <FaWhatsapp className="text-lg" /> WhatsApp Us Now
  </a>
          {/* {!showOptions && (
            <button
              className={`btn-hero bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300 ${
                activeTheme === "dark" ? "dark-mode-text" : ""
              }`}
              onClick={handleShowOptions}
            >
              Shop or Book Appointment Now
            </button>
          )}

          {showOptions && (
            <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              Visit Showroom */}
              {/* <a
                href="https://www.google.com/maps/place/25%C2%B016'10.9%22N+51%C2%B032'24.2%22E/@25.2698486,51.5399093,19.75z/data=!4m4!3m3!8m2!3d25.2696943!4d51.5400557?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300"
              >
                <FaMapMarkerAlt className="mr-2" />
                Visit Our Showroom
              </a> */}

              {/* Book an Appointment */}
              {/* <a
                href="https://wa.me/+97455760872"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center bg-[#27ae60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300"
              >
                <FaWhatsapp className="mr-2" />
                Book an Appointment
              </a>
            </div>
          )} */}
        </div>
      </div>

      {/* Right Section (Carousel) */}
      <div className="flex-none justify-center items-center lg:pt-12 mt-14 md:mt-0 md:max-w-xl w-full">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center items-center overflow-hidden">
              <img
                src={src}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;