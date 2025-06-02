import { FaCouch, FaRulerCombined, FaWarehouse } from "react-icons/fa";

import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Curtains from "../pages/Home/Products_Curtains";
import React from "react";

const Curtains = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Curtains | Curtains Furniture | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Curtains & Blinds Solutions"
        subTitle="Elegance. Privacy. Functionality."
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A342E]">
          Discover Custom Curtains That Reflect Your Style
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Whether it’s blackout curtains for your bedroom, sheer curtains for your living room, or premium drapes for your hotel — AZLAAN CONTRACTING W.L.L delivers tailored curtain and blinds solutions across Qatar.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="bg-[#f9f7f4] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRulerCombined size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
            <p className="text-gray-600">
              Tailor-made curtain styles to match your décor and preferences.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaCouch size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
            <p className="text-gray-600">
              A wide range of luxurious and durable curtain fabrics including velvet, linen, and blackout.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaWarehouse size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nationwide Installation</h3>
            <p className="text-gray-600">
              Expert fitting and installation for homes, offices, and hotels across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <Products_Curtains />

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Interiors?
        </h2>
        <p className="text-lg mb-6">
          Get in touch for custom curtain ideas, free consultations, and installation bookings.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Curtains;
