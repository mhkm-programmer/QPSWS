import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const officeGallery = [
  "https://8upload.com/image/67ab0bce5e3e5/office1.jpg",
  "https://8upload.com/image/67ab0bd2011aa/office2.jpg",
  "https://8upload.com/image/67ab0bd57aaae/office3.jpg",
  "https://8upload.com/image/67ab0bdb0ea7e/office4.jpg",
  "https://8upload.com/image/67ab0be06d35b/office5.jpg",
  "https://8upload.com/image/67ab0be4cf914/office6.jpg",
];

Modal.setAppElement('#root');

const BlindsRoller = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Office Blinds | Curtains Furniture Qatar | Professional Window Solutions" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab0ba8e2452/office-banner.jpg"
        title="Office Blinds Solutions"
        subTitle="Professional. Minimal. Productive."
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Smart Blinds for Smarter Workspaces
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Elevate office performance and visual appeal with premium blinds from Curtains Furniture. Designed for boardrooms, coworking spaces, and commercial offices across Qatar.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Precision Fit",
              desc: "Accurate on-site measurement for flawless, professional installation.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Light & Glare Control",
              desc: "Boost productivity with blinds that filter sunlight and reduce screen glare.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Corporate Look",
              desc: "Functional designs that complement modern work environments.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Office Blinds Gallery
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Explore recent installations completed by our expert team for offices across Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {officeGallery.map((src, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(src)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Office blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </button>
          ))}
        </div>
        <Modal
          isOpen={!!modalMedia}
          onRequestClose={() => setModalMedia(null)}
          contentLabel="Media Preview"
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-60"
        >
          <div className="bg-white dark:bg-gray-900 rounded-xl p-4 max-w-3xl max-h-[90vh] overflow-auto relative">
            <button
              className="absolute top-4 right-4 text-black dark:text-white text-xl"
              onClick={() => setModalMedia(null)}
            >
              ✕
            </button>
            {modalMedia && (
              <img src={modalMedia} alt="Preview" className="max-w-full max-h-[80vh] rounded-xl" />
            )}
          </div>
        </Modal>
      </section>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Curtains Furniture */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Recognized across Qatar for our commercial-grade solutions and hassle-free project execution.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Site Assessment", desc: "Expert evaluation and guidance tailored to your workspace." },
              { title: "Fast Delivery & Setup", desc: "Quick production and installation within 48 hours." },
              { title: "Corporate Packages", desc: "Specialized pricing for businesses, offices, and large orders." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Certified Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  International-grade fabrics and safety-compliant mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Workspace?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Connect with us for a no-obligation quote, expert design advice, or site visit scheduling.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default BlindsRoller;
