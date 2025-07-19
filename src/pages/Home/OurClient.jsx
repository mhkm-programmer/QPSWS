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
        className="w-36 h-20 object-contain rounded-md shadow hover:scale-105 transition-transform duration-300"
      />
    </div>
  ));

  return (
    <section className="py-14 bg-[#FDF9F2] dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container px-6 mx-auto text-center max-w-7xl">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#1E2A3A] dark:text-white mb-4">
          Our Esteemed Clients
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
           F L M SUPER TRADING AND CONTRACTING – Delivering expert solutions across Qatar.
        </p>

        {/* Carousel */}
        <div className="mt-10">
          <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            infinite
            mouseTracking
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={{
              0: { items: 2 },
              640: { items: 3 },
              768: { items: 4 },
              1024: { items: 5 },
              1280: { items: 6 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
