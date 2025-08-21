import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import { FaWhatsapp, FaPhoneAlt, FaSearchPlus, FaMapMarkerAlt } from "react-icons/fa";

Modal.setAppElement("#root");

const services = [
  {
    id: 1,
    name: "Professional Plumbing Service",
    image: "https://8upload.com/image/68a772a9e65c3/Plumber_4.jpg",
    subtitle: "Fast, certified, and reliable plumbing solutions for homes and businesses across Doha.",
    link: "tel:+97431394550",
    whatsapp: "https://wa.me/97431394550",
  },
  {
    id: 2,
    name: "Emergency Plumbing",
    image: "https://8upload.com/image/68a772aa350df/Plumber_5.jpg",
    subtitle: "24/7 emergency plumbing services to handle leaks, burst pipes, and urgent repairs.",
    link: "tel:+97431394550",
    whatsapp: "https://wa.me/97431394550",
  },
  {
    id: 3,
    name: "Maintenance & Repairs",
    image: "https://8upload.com/image/68a772aac2e24/Plumber_7.jpg",
    subtitle: "Routine maintenance, water heater servicing, and drain cleaning for residential and commercial spaces.",
    link: "tel:+97431394550",
    whatsapp: "https://wa.me/97431394550",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Next slide"
  >
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
    aria-label="Previous slide"
  >
    &lt;
  </button>
);

const Products_FLM = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalImage("");
    setModalIsOpen(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
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
      <div className="max-w-screen-xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0077b6]">
          Our Plumbing Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Doha Plumbing Service provides professional plumbing solutions for residential and commercial properties. Call or WhatsApp us to book your service today.
        </p>
      </div>

      <Slider {...sliderSettings}>
        {services.map((service) => (
          <div key={service.id} className="px-3">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => openModal(service.image)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition"
                  aria-label="Preview image"
                >
                  <FaSearchPlus className="text-white text-2xl" />
                </button>
              </div>

              <div className="p-6 flex flex-col justify-between h-56">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{service.subtitle}</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
                  <a
                    href={service.link}
                    className="flex-1 px-4 py-2 bg-[#0077b6] text-white rounded-lg font-semibold hover:bg-[#005f8f] transition text-sm flex items-center justify-center gap-2"
                  >
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a
                    href={service.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#1ebe5b] transition text-sm flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={modalIsOpen}
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
            alt="Preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Products_FLM;
