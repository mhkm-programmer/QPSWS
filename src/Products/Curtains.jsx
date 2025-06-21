import { FaCouch, FaRulerCombined, FaWarehouse } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Curtains from "../pages/Home/Products_Curtains";
import React from "react";

const Curtains = () => {
  return (
    <main className="font-sans text-gray-800 bg-white dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Custom Curtains Qatar | Premium Window Treatments | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Custom Curtains & Window Treatments"
        subTitle="Enhance Your Space with Style and Functionality"
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
          Beautiful Curtains Crafted for Every Interior
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          AZLAAN CONTRACTING W.L.L offers a comprehensive range of bespoke curtains designed to elevate your home, office, or commercial space in Qatar. From luxurious blackout curtains to elegant sheers and durable drapes, our expert craftsmanship ensures perfect fit, style, and lasting quality tailored to your unique needs.
        </p>
      </section>

      {/* Features & Benefits */}
      <section
        aria-label="Curtain service features"
        className="bg-[#f9f7f4] py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRulerCombined size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Precision Customization</h2>
            <p className="text-gray-600">
              We provide exact measurements and tailor every curtain to ensure flawless fit and function.
            </p>
          </article>
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCouch size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Premium Fabrics & Styles</h2>
            <p className="text-gray-600">
              Choose from an extensive selection of high-quality fabrics, including blackout, velvet, linen, and sheer options, to perfectly complement your décor.
            </p>
          </article>
          <article className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaWarehouse size={40} className="text-[#4A342E] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">Professional Installation Across Qatar</h2>
            <p className="text-gray-600">
              Our skilled installation team ensures your curtains are fitted precisely and efficiently, whether at home, office, or commercial properties.
            </p>
          </article>
        </div>
      </section>

      {/* Product Slider */}
      <Products_Curtains />

      {/* Call To Action */}
      <section
        aria-label="Contact AZLAAN CONTRACTING for curtains"
        className="py-20 bg-[#4A342E] text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Interiors with Custom Curtains?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Contact AZLAAN CONTRACTING W.L.L today for personalized consultations, expert advice, and hassle-free installation services.
        </p>
        <a
          href="https://wa.me/97470373588"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact AZLAAN CONTRACTING via WhatsApp"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-4 focus:ring-white"
        >
          Contact via WhatsApp
        </a>
      </section>
    </main>
  );
};

export default Curtains;
