import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const glassMirrorGallery = [
    { type: "image", src: "https://8upload.com/image/688fe7b0c9aa5/new_Glass3.jpeg" },
 
  { type: "image", src: "https://8upload.com/image/68881ebef2736/IMG-20250630-WA0039.jpg" },
  { type: "image", src: "https://8upload.com/image/68881ebede837/IMG-20250630-WA0038.jpg" },
  { type: "image", src: "https://8upload.com/image/68881ebf2679a/IMG-20250630-WA0041.jpg" },
  { type: "image", src: "https://8upload.com/image/68881ebfd6e1c/IMG-20250630-WA0052.jpg" },
  { type: "image", src: "https://8upload.com/image/68881ebfaa093/IMG-20250630-WA0051.jpg" },
    { type: "image", src: "https://8upload.com/image/688fe7b077bec/new_Glass1.jpeg" },
  { type: "image", src: "https://8upload.com/image/688fe7b0affc5/new_Glass2.jpeg" },

];

Modal.setAppElement('#root');

const Glass = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#f4fbff] dark:bg-gray-900">
      <PageTitle title="Glass & Mirror Works Qatar | Custom Installations | Interior Elegance" />

      <ParallaxSection
        imagePath="https://8upload.com/image/68881e57d5b15/GlassServices-min.png"
        title="Glass & Mirror Installations"
        subTitle="Modern Designs with Precision & Elegance"
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a3c50] dark:text-white mb-6">
          Enhance Spaces with Reflective Beauty
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From decorative mirrors to glass partitions and railings, our premium glass and mirror solutions add depth, light, and luxury to any room.
        </p>
      </section>

      <section className="bg-[#e6f1f8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#1a3c50]" />,
              title: "Custom Sizing & Fit",
              desc: "Every piece is crafted to perfectly fit your space, enhancing functionality and aesthetics.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#1a3c50]" />,
              title: "Brighten & Expand Interiors",
              desc: "Strategic mirror placement and clear glass bring light and spaciousness to your interiors.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#1a3c50]" />,
              title: "Quality Finishes",
              desc: "Tempered, beveled, frosted or colored – we offer all styles with premium edge finishes.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#1a3c50] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#1a3c50] dark:text-white mb-8">
          Glass & Mirror Inspirations
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover our latest installations for homes, offices, and showrooms across Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {glassMirrorGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`View media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Glass and mirror work ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 overflow-hidden bg-black">
                  <iframe
                    src={media.src}
                    title={`Video ${index + 1}`}
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
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
            <button
              onClick={() => setModalMedia(null)}
              className="absolute top-4 right-4 text-2xl z-[10000] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
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

      <section className="py-20 px-6 bg-[#d7eaf7] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a3c50] dark:text-white mb-6">
            Why Choose Our Glass Works?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We serve all of Qatar with bespoke glass and mirror solutions that elevate interior and exterior spaces.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Site Consultation", desc: "We visit your location to measure and recommend suitable styles and finishes." },
              { title: "Swift Installation", desc: "From cutting to polish and installation, we complete most projects in under a week." },
              { title: "Elegant Affordability", desc: "We blend premium quality with fair pricing across our product lines." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#1a3c50] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#1a3c50]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#1a3c50] dark:text-white">Safety Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use tempered and laminated glass, ensuring safety and durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a3c50] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Reflective Elegance in Your Space
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us now to get started with your glass and mirror project.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#1a3c50] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Glass;
