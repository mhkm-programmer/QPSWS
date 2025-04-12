import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const OurClient = () => {
  const logos = [
    { src: "https://8upload.com/image/67a012759526a/logo1.png", alt: "Client 1" },
    { src: "https://8upload.com/image/67a0127588f6f/logo2.png", alt: "Client 2" },
    { src: "https://8upload.com/image/67a012757822f/logo3.png", alt: "Client 3" },
    { src: "https://8upload.com/image/67a01275685b3/logo4.png", alt: "Client 4" },
    { src: "https://8upload.com/image/67a012755c112/logo5.png", alt: "Client 5" },
    { src: "https://8upload.com/image/67a012754d00c/logo6.png", alt: "Client 6" },
    { src: "https://8upload.com/image/67a01275404f1/logo7.png", alt: "Client 7" },
    { src: "https://8upload.com/image/67a012752aa7e/logo8.png", alt: "Client 8" },
    { src: "https://8upload.com/image/67a012751e270/logo9.png", alt: "Client 9" },
    { src: "https://8upload.com/image/67a012750d508/logo10.png", alt: "Client 10" },
    { src: "https://8upload.com/image/67a013aaa8575/logo11.png", alt: "Client 11" },
    { src: "https://8upload.com/image/67a013aa913da/logo12.png", alt: "Client 12" },
    { src: "https://8upload.com/image/67a013aa84ff4/logo13.png", alt: "Client 13" },
    { src: "https://8upload.com/image/67a013aa7a8ce/logo14.png", alt: "Client 14" },
    { src: "https://8upload.com/image/67a013aa6d86e/logo15.png", alt: "Client 15" },
  ];

  const items = logos.map((logo, index) => (
    <div key={index} className="flex justify-center items-center p-2">
      <img
        src={logo.src}
        alt={logo.alt}
        className="w-40 h-20 object-contain rounded-md shadow-md hover:scale-105 transition-transform duration-300"
      />
    </div>
  ));

  return (
    <section className="py-8 bg-[#F5F5DC] dark:bg-gray-800">
      <div className="container px-6 mx-auto space-y-6 text-center lg:px-8 lg:space-y-8">
        <h2 className="text-3xl font-bold text-[#6B4226] mb-4">Our Valued Clients</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Trusted by leading companies in the furniture, interior design, and upholstery industries.
        </p>

        <div className="carousel-container mt-6">
          <AliceCarousel
            autoPlay
            autoPlayInterval={1500}
            infinite
            disableButtonsControls
            disableDotsControls
            items={items}
            mouseTracking
            responsive={{
              0: { items: 2 },
              640: { items: 3 },
              768: { items: 4 },
              1024: { items: 5 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurClient;