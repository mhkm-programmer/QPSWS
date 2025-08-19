import React from "react";
import Slider from "react-slick";
import {
  FaTools,
  FaShieldAlt,
  FaClock,
  FaUserCheck,
  FaThumbsUp,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const strengths = [
  {
    title: "24/7 Emergency Service",
    description: "Always ready to respond quickly for urgent plumbing needs in Doha.",
    icon: <FaClock className="text-blue-600 text-4xl" />,
  },
  {
    title: "Certified Plumbers",
    description: "Skilled professionals ensuring reliable and high-quality service.",
    icon: <FaUserCheck className="text-cyan-600 text-4xl" />,
  },
  {
    title: "Trusted & Affordable",
    description: "Transparent pricing with guaranteed satisfaction for every project.",
    icon: <FaThumbsUp className="text-green-600 text-4xl" />,
  },
  {
    title: "Safety & Reliability",
    description: "We follow the highest standards for safety and durability.",
    icon: <FaShieldAlt className="text-indigo-600 text-4xl" />,
  },
  {
    title: "Modern Tools",
    description: "Advanced equipment for efficient repairs, maintenance, and installations.",
    icon: <FaTools className="text-blue-500 text-4xl" />,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const WhyChoose = () => {
  return (
    <section className="px-6 py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Logo & Title */}
      <div className="text-center mb-14">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3460/3460028.png"
          alt="Doha Plumbing Service Logo"
          className="h-24 w-24 rounded-2xl shadow-xl border-4 border-blue-500 bg-white mx-auto p-2"
        />
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-blue-800 dark:text-white">
          Why Choose{" "}
          <span className="text-cyan-600">Doha Plumbing Service</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
          Doha’s most reliable plumbing partner — delivering fast, affordable, and professional services you can trust.
        </p>
      </div>

      {/* Strengths Slider */}
      <div className="max-w-6xl mx-auto">
        <Slider {...sliderSettings}>
          {strengths.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 text-center">
                <div className="mb-5 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <a
          href="https://wa.me/97431394550"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Book a Plumber Now
        </a>
      </div>
    </section>
  );
};

export default WhyChoose;
