import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Slider from "react-slick";
import React from "react";

const HeroSlider = () => {
  const slides = [
  {
    image: "https://8upload.com/image/687c202484185/IMG-20250630-WA0003.jpg",
    title: "Aluminium Fabrication & Installation",
    subtitle: "Durable and precise aluminium solutions tailored for modern architecture.",
    buttonText: "Explore Services",
    link: "/services/aluminium",
  },
  {
    image: "https://8upload.com/image/687c202501570/IMG-20250630-WA0038.jpg",
    title: "Glass & Mirror Works",
    subtitle: "Custom glass designs, partitions, and mirrors for stylish interiors.",
    buttonText: "Discover More",
    link: "/services/glass",
  },
  {
    image: "https://8upload.com/image/687c29968826c/IMG-20250630-WA0075.jpg",
    title: "Gypsum Partition & Ceiling",
    subtitle: "Innovative ceiling and partition designs to enhance your space.",
    buttonText: "View Projects",
    link: "/services/gypsumCeilings",
  },
  {
    image: "https://8upload.com/image/687c2996d1189/IMG-20250630-WA0080.jpg",
    title: "Printing Solutions",
    subtitle: "Professional printing services for all branding and business needs.",
    buttonText: "See Services",
    link: "/services/printing",
  },
  {
    image: "https://8upload.com/image/687c20259eac6/IMG-20250630-WA0115.jpg",
    title: "Parking Shade Solutions",
    subtitle: "Weather-resistant and stylish shades for all parking areas.",
    buttonText: "Learn More",
    link: "/services/parking",
  },
  {
    image: "https://8upload.com/image/687c20252fef3/IMG-20250630-WA0053.jpg",
    title: "UPVC Doors & Windows",
    subtitle: "Energy-efficient and secure UPVC doors and windows installations.",
    buttonText: "Browse Designs",
    link: "/services/upvc",
  },
  {
    image: "https://8upload.com/image/687c202540a83/IMG-20250630-WA0063.jpg",
    title: "MS Welding & Steel Fabrication",
    subtitle: "Heavy-duty metal fabrication solutions for industrial and commercial needs.",
    buttonText: "Get a Quote",
    link: "/services/ms_fabrication",
  },
  {
    image: "https://8upload.com/image/687c2aba7a3f9/IMG-20250630-WA0103.jpg",
    title: "Furniture & Upholstery",
    subtitle: "Custom furniture, repairs, and premium upholstery craftsmanship.",
    buttonText: "Contact Now",
    link: "/furniture",
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
          <div key={index} className="relative h-[75vh] md:h-[85vh] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-5 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-5 sm:mb-6 max-w-2xl drop-shadow">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg transition shadow-md"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-10 px-4 text-center">
        <a
          href="https://g.co/kgs/s1RK9fh"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 bg-emerald-800 text-white rounded-xl hover:bg-emerald-700 transition text-sm sm:text-base"
        >
          <FaMapMarkerAlt /> Visit Our Location
        </a>
        <a
          href="https://wa.me/97431602956"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1ebe5b] transition text-sm sm:text-base"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
