import {
  FaCouch,
  FaTools,
  FaGem,
  FaHardHat,
  FaPrint,
  FaCar,
  FaDoorClosed,
  FaWrench,
} from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

import React from "react";
import Products_FLM from "../pages/Home/Products_FLM";
import CustomerReviews from "../pages/Home/CustomerReviews";

const Services = () => {
  return (
    <main className="font-sans text-gray-800 bg-[#f6f6f4] dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="F L M SUPER TRADING AND CONTRACTING | Interior & Fabrication Solutions" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/688809b2405b8/Services-min.png"
        title="Comprehensive Interior & Fabrication Services"
        subTitle="Quality You Can Trust – اف ال ام سوبر ترادينغ اند كونتراكتينغ"
      />

      {/* Introduction */}
      <section
        aria-labelledby="intro-title"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h1
          id="intro-title"
          className="text-4xl md:text-5xl font-bold mb-6 text-[#1b2e2c] dark:text-white"
        >
          One Stop Solution for Interiors, Fit-Out & Metal Works
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          F L M SUPER TRADING AND CONTRACTING (اف ال ام سوبر ترادينغ اند كونتراكتينغ) specializes in aluminium works, gypsum partitions, printing, UPVC doors & windows, welding, and high-quality furniture & upholstery across Qatar.
        </p>
      </section>

      {/* Services Grid */}
      <section className="bg-[#e5ece8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <FaTools size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Aluminium Fabrication",
              desc: "Custom aluminium windows, doors, cladding, and partitions — durable and expertly crafted.",
            },
            {
              icon: <FaGem size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Glass & Mirror Works",
              desc: "Installations of high-quality mirrors, tempered and frosted glass for interiors and exteriors.",
            },
            {
              icon: <FaHardHat size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Gypsum Partition & Ceiling",
              desc: "Professional gypsum works — ceilings, bulkheads, and office partitions with fire-rated systems.",
            },
            {
              icon: <FaPrint size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Digital Printing",
              desc: "Banners, stickers, roll-ups, wall branding, vehicle wraps and more — sharp, durable prints.",
            },
            {
              icon: <FaCar size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Parking Shades",
              desc: "UV-resistant car parking shades tailored for residential and commercial needs.",
            },
            {
              icon: <FaDoorClosed size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "UPVC Doors & Windows",
              desc: "Weatherproof, sound-insulated UPVC systems designed for durability and energy savings.",
            },
            {
              icon: <FaWrench size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "MS Welding & Steel Fabrication",
              desc: "Steel gates, grills, and frames — expertly welded with corrosion-resistant finishes.",
            },
            {
              icon: <FaCouch size={36} className="text-[#1b2e2c] mx-auto mb-3" />,
              title: "Furniture & Upholstery",
              desc: "Bespoke furniture, sofa sets, and reupholstery — crafted with elegance and comfort.",
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#1b2e2c] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <Products_FLM />

      <CustomerReviews />

      {/* Call To Action */}
      <section
        aria-label="Get in touch"
        className="py-20 bg-[#1b2e2c] text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Contact <strong>F L M SUPER TRADING AND CONTRACTING</strong> today for custom interiors, expert fabrication, and reliable service across Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#1b2e2c] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact Us on WhatsApp
        </a>
        
      </section>
    </main>
  );
};

export default Services;
