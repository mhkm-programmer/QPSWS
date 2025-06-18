import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaArrowLeft,
  FaArrowRight,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";

// Modal accessibility root
Modal.setAppElement("#root");

const products = [
  {
    id: 1,
    name: "Blackout Curtains",
    subtitle: "Blocks 100% sunlight – perfect for bedrooms and media rooms.",
    image: "/images/curtain1.jpg",
    link: "/curtains/blackout",
    discount: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bedroom Curtains",
    subtitle: "Soft blackout fabric with a cozy, relaxing aesthetic.",
    image: "/images/curtain2.jpg",
    link: "/curtains/bedroom",
    discount: false,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Wave Style Curtains",
    subtitle: "Modern blackout waves for clean, sleek interiors.",
    image: "/images/curtain3.jpg",
    link: "/curtains/wave",
    discount: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Living Room Curtains",
    subtitle: "Elegant blackout solutions for privacy and ambiance.",
    image: "/images/curtain4.jpg",
    link: "/curtains/livingroom",
    discount: false,
    rating: 4.3,
  },
];

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 cursor-pointer"
  >
    <FaArrowRight className="text-gray-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 cursor-pointer"
  >
    <FaArrowLeft className="text-gray-700" />
  </div>
);

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex gap-1 text-yellow-400 text-sm mt-2">
      {[...Array(full)].map((_, i) => <FaStar key={`full-${i}`} />)}
      {half && <FaStarHalfAlt />}
      {[...Array(empty)].map((_, i) => <FaRegStar key={`empty-${i}`} />)}
    </div>
  );
};

const Products_Blackout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
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
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Our Blackout Curtain Collection
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Designed for elegance and maximum light control – ideal for modern homes, offices, and hotel spaces.
        </p>

        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 relative group">
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold z-10 shadow">
                    -20% OFF
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onClick={() => openModal(product.image)}
                  className="w-full h-56 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex flex-col h-56 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{product.subtitle}</p>
                    {renderStars(product.rating)}
                  </div>
                  <div className="flex justify-between items-center mt-4 gap-2">
                    <Link
                      to={product.link}
                      className="px-5 py-2 text-sm rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                    <a
                      href="https://wa.me/97470373588"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 text-sm rounded-full font-medium bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      <FaWhatsapp className="text-base" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50"
          className="relative bg-white rounded-xl max-w-3xl mx-auto p-4 shadow-2xl flex items-center justify-center mt-10 outline-none"
        >
          <div className="relative w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black bg-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold shadow hover:bg-gray-200 transition"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Curtain Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Products_Blackout;
