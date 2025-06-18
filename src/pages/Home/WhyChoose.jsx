import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    title: "Luxury Curtains",
    description: "Elegant, custom-tailored curtains made with premium fabrics to match Qatari tastes and interiors.",
    image: "https://8upload.com/image/67a9e061c372b/Luxury_Curtains.jpg",
  },
  {
    title: "Modern Furniture",
    description: "Stylish and functional furniture designed to complement contemporary homes and offices in Qatar.",
    image: "https://8upload.com/image/67a000235804f/Premium_Furniture.jpg",
  },
  {
    title: "Custom Interior Solutions",
    description: "From design to installation, we transform spaces with bespoke curtain and furniture arrangements.",
    image: "https://8upload.com/image/67a0002314733/Modern_Interior_Design.jpg",
  },
  {
    title: "Affordable Elegance",
    description: "Enjoy top-tier products and services at prices designed to fit your budget without compromise.",
    image: "https://8upload.com/image/67a00022e0e7f/Affordable_Pricing.jpg",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const WhyChoose = () => {
  return (
    <section className="px-6 py-12 lg:py-20 bg-[#FDF9F2] dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="https://8upload.com/image/67a01c3b4ad22/Al-FWZ.jpg"
          alt="Curtains Furniture Qatar Logo"
          className="h-24 w-24 rounded-full shadow-xl border-4 border-[#B88A44]"
        />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#1E2A3A] dark:text-white">
          Why Choose <span className="text-[#B88A44]">Our Curtains & Furniture</span> in Qatar?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Discover the perfect blend of tradition and modern style. Whether for your home, hotel, or office – we deliver quality, elegance, and comfort in every detail.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-24 h-24 rounded-full bg-[#FFF5E0] dark:bg-[#B88A44] flex items-center justify-center shadow-inner">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1E2A3A] dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WhyChoose;
