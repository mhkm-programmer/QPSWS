import { FaHome, FaRuler, FaSun } from "react-icons/fa";

import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Blackout from "../pages/Home/Products_Blackout";

const Blinds = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Blinds Curtains | Window Blinds Qatar | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Blinds Curtains Solutions"
        subTitle="Privacy. Style. Performance."
      />

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4A342E]">
          Modern Blinds for Stylish Spaces
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From blackout roller blinds to elegant zebra and vertical styles — AZLAAN CONTRACTING W.L.L offers tailor-made blind curtain solutions for homes, offices, and commercial interiors across Qatar.
        </p>
      </section>

      {/* Services Highlights */}
      <section className="bg-[#f9f7f4] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaRuler size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Precision Fitting</h3>
            <p className="text-gray-600">
              Expert measurement and installation tailored to your window dimensions.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaSun size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Light & Privacy Control</h3>
            <p className="text-gray-600">
              Enjoy perfect light filtration and privacy with options like zebra, blackout, and screen blinds.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-xl hover:shadow-xl transition">
            <FaHome size={40} className="text-[#4A342E] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Finishes</h3>
            <p className="text-gray-600">
              Add elegance with contemporary styles, textures, and color palettes to match any interior.
            </p>
          </div>
        </div>
      </section>

      {/* Product Slider Section */}
      <Products_Blackout />

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Blinds Curtains for Your Space?
        </h2>
        <p className="text-lg mb-6">
          Contact us now for free consultation, custom quotes, and professional installation anywhere in Qatar.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Blinds;
