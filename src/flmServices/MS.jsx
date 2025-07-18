import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaTools, FaWrench, FaCertificate } from "react-icons/fa";

const msGallery = [
  { type: "image", src: "https://8upload.com/image/685d94d771c24/IMG-20250625-WA0009.jpg" },
  { type: "video", src: "https://streamable.com/e/tb5vq0" },
  { type: "image", src: "https://8upload.com/image/685d94d730398/IMG-20250625-WA0008.jpg" },
  { type: "video", src: "https://streamable.com/e/ab3idq" },
  { type: "image", src: "https://8upload.com/image/685d94d6dc6a0/IMG-20250625-WA0007.jpg" },
  { type: "video", src: "https://streamable.com/e/9ag22m" },
];

Modal.setAppElement('#root');

const MS = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-100 bg-[#1E1E1E]">
      <PageTitle title="Steel Fabrication & Welding Qatar | MS Welding Experts" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685d94d7bd575/IMG-20250625-WA0012.jpg"
        title="MS Welding & Steel Fabrication"
        subTitle="Precision | Strength | Durability — Made in Qatar"
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFB703] mb-6">
          Engineered for Strength, Built to Last
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          From structural steel to custom metal works, we provide welding and fabrication solutions that meet Qatar’s toughest standards. Commercial, industrial or residential — your metal, our mastery.
        </p>
      </section>

      <section className="bg-[#2A2A2A] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaTools size={36} className="mx-auto mb-4 text-[#FFB703]" />,
              title: "Custom Steel Fabrication",
              desc: "Made-to-measure gates, frames, brackets, platforms and more — precision guaranteed.",
            },
            {
              icon: <FaWrench size={36} className="mx-auto mb-4 text-[#FFB703]" />,
              title: "Expert Welding",
              desc: "MIG, TIG, arc welding and beyond. Strong joins, clean finishes, dependable strength.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#FFB703]" />,
              title: "On-Site & Workshop Services",
              desc: "Whether on your premises or in our workshop, we get the job done — fast and right.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-[#1E1E1E] p-8 rounded-2xl shadow hover:shadow-lg transition border border-[#333]"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#FFB703] mb-8">
          Steel Work Projects Gallery
        </h3>
        <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
          Browse real installations by MS Welding — from fences to industrial steel structures.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {msGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`Open media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Steel fabrication image ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-black overflow-hidden">
                  <iframe
                    src={media.src}
                    title={`Steel work video ${index + 1}`}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        <Modal
          isOpen={!!modalMedia}
          onRequestClose={() => setModalMedia(null)}
          contentLabel="Media Preview"
          className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-[9998]"
        >
          <div className="relative bg-[#1E1E1E] rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
            <button
              onClick={() => setModalMedia(null)}
              className="absolute top-4 right-4 text-2xl z-[10000] text-white hover:text-[#FFB703] transition"
              aria-label="Close Modal"
            >
              ✕
            </button>
            {modalMedia && (
              modalMedia.type === "image" ? (
                <img
                  src={modalMedia.src}
                  alt="Media Preview"
                  className="max-w-full max-h-[80vh] mx-auto rounded"
                />
              ) : (
                <div className="w-full h-[80vh] overflow-hidden">
                  <iframe
                    src={modalMedia.src}
                    title="Video Preview"
                    className="w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )
            )}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      <section className="py-20 px-6 bg-[#2A2A2A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#FFB703] mb-6">
            Why MS Welding & Steel Works?
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            We’re trusted by businesses and builders across Qatar for our reliability, skill, and precision fabrication.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Time Delivery", desc: "We meet tight deadlines without sacrificing quality or safety." },
              { title: "Industrial-Grade Materials", desc: "We source only certified steel and alloy — durability guaranteed." },
              { title: "Fair Pricing", desc: "Transparent quotes, no hidden costs — engineered to fit your budget." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-[#1E1E1E] p-6 rounded-xl shadow border border-[#333]">
                <h3 className="font-semibold text-lg text-[#FFB703] mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-[#1E1E1E] p-6 rounded-xl shadow border border-[#333] flex items-center gap-3">
              <FaCertificate className="text-[#FFB703]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#FFB703]">Certified Workmanship</h3>
                <p className="text-sm text-gray-400">
                  ISO-compliant processes and skilled welders ensure every job meets top-tier standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFB703] text-black text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Your Next Steel Project
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us now for a site visit, design consultation, or urgent welding job anywhere in Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default MS;
