import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import React, { useState } from "react";

import Slider from "react-slick";
import useThemeSwitcher from "../../../hooks/useThemeSwitcher";

const HeroSlider = () => {
  const [, setTheme] = useThemeSwitcher();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => setShowOptions(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  };

  const slides = [
    {
      type: "image",
      src: "https://8upload.com/image/68337d45aa60e/IMG-20250518-WA0039.jpg",
    },
    {
      type: "video",
      videoType: "streamable",
      src: "https://streamable.com/e/md5pe4",
    },
    {
      type: "video",
      videoType: "streamable",
      src: "https://streamable.com/e/cxrr13",
    },
    {
      type: "video",
      videoType: "streamable",
      src: "https://streamable.com/e/a82dgf",
    },
    {
      type: "image",
      src: "https://8upload.com/image/68337cbb8461d/IMG-20250518-WA0006.jpg",
    },
  ];

  const colors = {
    background: "#F2EDE6",
    primaryText: "#2E2E2E",
    accent: "#8C6239",
    buttonBase: "#4A342E",
    buttonHover: "#5A4035",
    subtitle: "#6B6B6B",
  };

  return (
    <div
      className="mx-auto overflow-hidden py-16 px-5 md:px-12 lg:flex items-center justify-between gap-12"
      style={{
        backgroundColor: colors.background,
        color: colors.primaryText,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Elegant Curtains & Blinds for Every Space
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: colors.subtitle }}>
          <strong>AZLAAN CONTRACTING W.L.L</strong> offers premium <strong>curtains</strong> and
          <strong> blinds</strong> that combine elegance and functionality. Whether for your
          <strong> home</strong> or <strong>office</strong>, our customized solutions enhance every interior.
        </p>

        {/* Action Buttons */}
        <div className="mt-6">
          {!showOptions ? (
            <button
              onClick={handleShowOptions}
              className="bg-[#4A342E] hover:bg-[#5A4035] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Get a Free Measurement
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://www.google.com/maps?q=Azlaan+Contracting+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#4A342E] hover:bg-[#5A4035] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaMapMarkerAlt /> Visit Our Showroom
              </a>
              <a
                href="https://wa.me/+97455760872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-5 py-3 rounded-lg font-medium transition duration-300"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right Slider */}
      <div className="flex-1 mt-12 lg:mt-0 max-w-xl w-full">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex justify-center items-center">
              {slide.type === "image" && (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.01]"
                />
              )}

              {slide.type === "video" && slide.videoType === "streamable" && (
                <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={`${slide.src}?autoplay=1&muted=1`}
                    allow="fullscreen; autoplay"
                    allowFullScreen
                    title={`Streamable Video ${index + 1}`}
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              )}

              {slide.type === "video" && slide.videoType === "youtube" && (
                <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src={slide.src}
                    title={`YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlider;
