import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Slider from "react-slick";
import React from "react";

const HeroSlider = () => {
  const slides = [
    {
      image: "https://8upload.com/image/685c8fdacf7fb/IMG-20250625-WA0026.jpg",
      title: "Premium Curtains Collection",
      subtitle: "Custom-made solutions for elegant interiors.",
      buttonText: "View Collection",
      link: "/curtains",
    },
    {
      image: "https://8upload.com/image/685c8fdac5041/WhatsApp_Image_2025-06-24_at_22.51.32_7b72dace.jpg",
      title: "Blinds & Shutters",
      subtitle: "Modern blinds that offer style and privacy.",
      buttonText: "Explore Blinds",
      link: "/blinds",
    },
    {
      image: "https://8upload.com/image/685c91d8ee5a6/IMG-20250625-WA0005.jpg",
      title: "Upholstery & Repair",
      subtitle: "Restore and refresh your furniture with expert care.",
      buttonText: "Get a Quote",
      link: "/curtains",
    },
  ];

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
  };

  return (
    <div className="w-full">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl text-gray-200 mb-6">{slide.subtitle}</p>
              <a
                href={slide.link}
                className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-xl transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 px-4 text-center">
        <a
          href="https://g.co/kgs/s1RK9fh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition"
        >
          <FaMapMarkerAlt /> Visit Our Showroom
        </a>
        <a
          href="https://wa.me/+97466280037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebe5b] transition"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
