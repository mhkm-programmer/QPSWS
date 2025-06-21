import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import { FaRulerCombined, FaSun, FaStar, FaCertificate } from "react-icons/fa";

const galleryImages = [
  "https://8upload.com/image/67aaf1239939b/blackout1.jpg",
  "https://8upload.com/image/67aaf1284e738/blackout2.jpg",
  "https://8upload.com/image/67aaf12c09d43/blackout3.jpg",
  "https://8upload.com/image/67aaf132b7a6f/blackout4.jpg",
  "https://8upload.com/image/67aaf13662fcd/blackout5.jpg",
  "https://8upload.com/image/67aaf13abf5e2/blackout6.jpg",
];

const CurtainsRoller = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Blackout Blinds | Curtains Furniture Qatar" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67aaf1409d9f7/blackout-banner.jpg"
        title="Blackout Blinds"
        subTitle="Block Light. Enhance Comfort."
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Experience Total Light Control
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Premium blackout blinds from Curtains Furniture combine contemporary aesthetics with superior functionality — delivering complete privacy and light exclusion. Ideal for bedrooms, offices, and media rooms across Qatar.
        </p>
      </section>

      {/* Product Features */}
      <section className="bg-[#f2ede8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[{
            icon: <FaRulerCombined size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Precision Fitting",
            desc: "Custom measured and professionally installed for flawless window coverage."
          }, {
            icon: <FaSun size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Light & UV Blocking",
            desc: "Complete blackout and thermal insulation for restful interiors."
          }, {
            icon: <FaStar size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Modern Design",
            desc: "Stylish, clean-lined options in neutral and bold tones to suit any room."
          }].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-10">
          Blackout Blinds Showcase
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
          Explore installations completed by Curtains Furniture — a testament to our craftsmanship and attention to detail.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Blackout blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <CustomerReviews />

      {/* Why Choose Us */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#4A342E] dark:text-white">Why Choose Curtains Furniture?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            From design consultation to final fitting — Curtains Furniture ensures reliable service, certified quality, and unmatched customization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Free Site Visit", "Premium Fabric Options", "Rapid Turnaround", "Warranty & Support"].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">{item}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Professional service with a focus on satisfaction and results.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="bg-white dark:bg-gray-900 py-16 px-6 text-center">
        <FaCertificate className="text-[#6B4226] mx-auto mb-4" size={50} />
        <h3 className="text-2xl font-bold text-[#4A342E] dark:text-white mb-2">Certified Materials</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our blackout blinds are produced using ISO-compliant, flame-retardant, and eco-conscious components.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a Darker, Quieter Space?
        </h2>
        <p className="text-lg mb-6">
          Get in touch for tailored recommendations, product demos, or a site assessment anywhere in Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default CurtainsRoller;
