import { FaCouch, FaRulerCombined, FaWarehouse } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Curtains from "../pages/Home/Products_Curtains";
import React from "react";

const Curtains = () => {
  return (
    <main className="font-sans text-gray-800 bg-white dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Curtains & Furniture Qatar | Custom Interiors" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685d004525996/IMG-20250625-WA0023.jpg"
        title="Custom Curtains & Elegant Furniture"
        subTitle="Style Meets Functionality – Tailored to Your Space"
      />

      {/* Introduction */}
      <section
        aria-labelledby="curtains-intro-title"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h1
          id="curtains-intro-title"
          className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E] dark:text-white"
        >
          Bespoke Curtains & Stylish Furniture for Every Interior
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At Curtains Furniture, we design and deliver high-quality curtains and furniture solutions across Qatar. From blackout and wave curtains to modern sofas and custom seating, we bring together craftsmanship and comfort to transform your space into something extraordinary.
        </p>
      </section>

      {/* Features & Benefits */}
      <section
        aria-label="Curtains and furniture features"
        className="bg-[#f9f7f4] py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRulerCombined size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Tailor-Made for You</h2>
            <p className="text-gray-600">
              Custom-fit curtains and made-to-order furniture designed to match your measurements and style preferences.
            </p>
          </article>
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCouch size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Elegant Fabrics & Designs</h2>
            <p className="text-gray-600">
              Explore luxurious materials and contemporary designs for curtains, sofas, chairs, and more – all crafted for comfort and aesthetics.
            </p>
          </article>
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaWarehouse size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Delivery & Installation Across Qatar</h2>
            <p className="text-gray-600">
              We provide expert delivery and professional installation anywhere in Qatar – fast, reliable, and stress-free.
            </p>
          </article>
        </div>
      </section>

      {/* Product Slider */}
      <Products_Curtains />

      {/* Call To Action */}
      <section
        aria-label="Get in touch for custom curtains and furniture"
        className="py-20 bg-[#4A342E] text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Home or Office?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Contact <strong>Curtains Furniture</strong> now for expert guidance, a free consultation, and premium interior solutions tailored to your taste.
        </p>
        <a
          href="https://wa.me/97466280037"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Curtains Furniture via WhatsApp"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white"
        >
          Get in Touch via WhatsApp
        </a>
        <p className="mt-6 text-sm text-white opacity-70">
          Or email us at{" "}
          <a href="mailto:info.curtainsfurniture@gmail.com" className="underline text-white">
            info.curtainsfurniture@gmail.com
          </a>
        </p>
        <p className="text-sm text-white opacity-70">
          Visit us in Mansoura, Doha
        </p>
        <div className="mt-4 flex justify-center gap-4 text-white">
          <a
            href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
};

export default Curtains;
