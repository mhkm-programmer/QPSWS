import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    name: "Blackout Curtains",
    image: "/images/curtain1.jpg",
    link: "/curtains/blackout",
  },
  {
    id: 2,
    name: "Bedroom Curtains",
    image: "/images/curtain2.jpg",
    link: "/curtains/bedroom",
  },
  {
    id: 3,
    name: "Wave Style Curtains",
    image: "/images/curtain3.jpg",
    link: "/curtains/wave",
  },
  {
    id: 4,
    name: "Living Room Curtains",
    image: "/images/curtain4.jpg",
    link: "/curtains/livingroom",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-xl cursor-pointer hover:bg-gray-200 transition"
  >
    <FaArrowRight size={20} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-xl cursor-pointer hover:bg-gray-200 transition"
  >
    <FaArrowLeft size={20} />
  </div>
);

const Products_Blackout = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Blackout Collection
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-3">
            <div className="bg-white rounded-2xl shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5 flex flex-col h-44 justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                <div className="flex justify-between items-center mt-auto gap-2">
                  <Link
                    to={product.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition font-medium"
                  >
                    View Details
                  </Link>
                  <a
                    href="https://wa.me/97470373588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition font-medium"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products_Blackout;
