import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    title: "Aluminium Fabrication",
    description: "Precision aluminium structures and installations, combining strength with sleek design for residential and commercial projects.",
    image: "https://8upload.com/image/6886c100e5eab/IMG-20250630-WA0008.jpg",
  },
  {
    title: "Glass & Mirror Works",
    description: "Stylish glass panels and custom mirrors to elevate interiors with clarity, modern appeal, and lasting durability.",
    image: "https://8upload.com/image/6886c3b55931a/IMG-20250630-WA0040.jpg",
  },
  {
    title: "Gypsum Partition & Ceiling",
    description: "Innovative false ceilings and space-defining partitions, designed to enhance acoustics, aesthetics, and flexibility.",
    image: "https://8upload.com/image/6886c41c28e59/IMG-20250630-WA0075.jpg",
  },
  {
    title: "Printing Services",
    description: "From business signage to promotional materials, our custom printing delivers bold, high-quality results.",
    image: "https://8upload.com/image/6886c52ae53e6/IMG-20250630-WA0080.jpg",
  },
  {
    title: "Parking Shade Structures",
    description: "UV-protected, heat-resistant shade solutions engineered for residential, commercial, and industrial parking zones.",
    image: "https://8upload.com/image/6886c5b74c017/IMG-20250630-WA0110.jpg",
  },
  {
    title: "UPVC Doors & Windows",
    description: "Energy-efficient, weatherproof, and stylish UPVC systems designed to enhance comfort and modern living.",
    image: "https://8upload.com/image/6886c5ea578f5/IMG-20250630-WA0055.jpg",
  },
  {
    title: "MS Welding & Furniture Upholstery",
    description: "From strong steel fabrication to plush furniture finishes—F L M delivers craftsmanship across industries.",
    image: "https://8upload.com/image/6886c6120d9d1/IMG-20250630-WA0073.jpg",
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
    <section className="px-6 py-12 lg:py-20 bg-[#F3FDF8] dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src="https://8upload.com/image/6886bfe4749c0/Screenshot_at_Jul_28_02-58-35.png"
          alt="F L M Logo"
          className="h-24 w-24 rounded-xl shadow-xl border-4 border-emerald-600"
        />
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 text-emerald-800 dark:text-white">
          Why Choose <span className="text-emerald-600">F L M SUPER TRADING AND CONTRACTING</span>?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          We provide versatile solutions for aluminium, glass, gypsum, printing, shade, UPVC, welding, and upholstery—combining innovation, quality, and reliability.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-24 h-24 rounded-full bg-[#E6F7F1] dark:bg-emerald-800 flex items-center justify-center shadow-inner">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 dark:text-white mb-2">
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
