import React from "react";
import Slider from "react-slick";
import { FaWhatsapp, FaPhoneAlt, FaTools } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const slides = [
    {
      image: "https://8upload.com/image/68a772ab1f371/Plumber_8.jpg",
      title: "Reliable Plumbing & Maintenance",
      subtitle:
        "Expert plumbing solutions for homes and businesses across Doha. Fast, certified, and affordable services.",
      phone: "31394550",
      whatsapp: "https://wa.me/97431394550",
      badge: "Plumber",
    },
    {
      image: "https://8upload.com/image/68a772ae07d73/Plumber_10.jpg",
      title: "24/7 Emergency Services",
      subtitle:
        "Immediate response to leaks, burst pipes, and urgent plumbing issues anywhere in Doha.",
      phone: "31394550",
      whatsapp: "https://wa.me/97431394550",
      badge: "Emergency",
    },
    {
      image: "https://8upload.com/image/68a772adb437a/Plumber_9.jpg",
      title: "Home & Commercial Maintenance",
      subtitle:
        "Comprehensive maintenance solutions including water heaters, drainage systems, and routine inspections.",
      phone: "31394550",
      whatsapp: "https://wa.me/97431394550",
      badge: "Maintenance",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // slide changes every 5 seconds
    arrows: false,
    fade: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[70vh] md:h-[80vh] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16">
              
              <span className="bg-[#0077b6] text-white px-4 py-2 rounded-full uppercase text-sm font-bold mb-4 inline-flex items-center gap-2 shadow-lg">
                <FaTools /> {slide.badge}
              </span>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-gray-200 text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href={`tel:+974${slide.phone}`}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0077b6] text-white rounded-lg font-semibold shadow-lg hover:bg-[#005f8f] transition text-sm sm:text-base"
                >
                  <FaPhoneAlt /> Call Now
                </a>
                <a
                  href={slide.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold shadow-lg hover:bg-[#1ebe5b] transition text-sm sm:text-base"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>

              <p className="mt-6 text-gray-300 text-sm sm:text-base italic">
                الشركة بالعربية: الدوحة لخدمات السباكة والكهرباء والصيانة
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
