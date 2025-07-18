import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaUmbrellaBeach, FaRulerCombined, FaCertificate } from "react-icons/fa";

const parkingShadeGallery = [
  { type: "image", src: "https://8upload.com/image/685d92a9cc5e6/IMG-20250625-WA0027.jpg" },
  { type: "video", src: "https://streamable.com/e/rw7urq" },
  { type: "image", src: "https://8upload.com/image/685d92aa09581/IMG-20250625-WA0028.jpg" },
  { type: "video", src: "https://streamable.com/e/w35dgp" },
  { type: "image", src: "https://8upload.com/image/685d92aa822d0/IMG-20250625-WA0029.jpg" },
  { type: "video", src: "https://streamable.com/e/gxpb4o" },
];
Modal.setAppElement('#root');

const Parking = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#f8faf9] dark:bg-gray-900">
      <PageTitle title="Parking Shade in Qatar | UV Protection & Stylish Canopies | Curtains Furniture" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685d92600dd4c/IMG-20250625-WA0025.jpg"
        title="Parking Shade Solutions"
        subTitle="Reliable Coverage. Heat-Resistant Designs."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2E4D3B] dark:text-white mb-6">
          Shade That Protects & Lasts
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our parking shades offer UV-resistant, weatherproof protection for residential, commercial, and public spaces. Custom fabricated in Qatar with premium steel, HDPE, and PVC materials.
        </p>
      </section>

      <section className="bg-[#eef5f1] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#3B6D52]" />,
              title: "Custom Fit Structures",
              desc: "We tailor each shade structure to your exact site measurements and layout.",
            },
            {
              icon: <FaUmbrellaBeach size={36} className="mx-auto mb-4 text-[#3B6D52]" />,
              title: "UV & Rain Protection",
              desc: "Block harsh sunlight, reduce heat, and prevent water buildup with durable covers.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#3B6D52]" />,
              title: "Built to Endure",
              desc: "Rust-resistant steel, reinforced stitching, and wind-tolerant designs for Qatar’s climate.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#2E4D3B] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#2E4D3B] dark:text-white mb-8">
          Recent Parking Shade Projects
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          See how our parking solutions combine utility and modern design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {parkingShadeGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`Open media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Parking shade ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-black overflow-hidden">
                  <iframe
                    src={media.src}
                    title={`Parking shade video ${index + 1}`}
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

      <section className="py-20 px-6 bg-[#e5f0ea] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2E4D3B] dark:text-white mb-6">
            Why Choose Our Parking Shades?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Trusted across Qatar for smart design, durable materials, and expert installation.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Visit", desc: "We assess your site for optimal shade placement and coverage." },
              { title: "Qatar-Ready Materials", desc: "Made for high heat, dust, and UV conditions using tested fabrics." },
              { title: "Steel Fabrication Experts", desc: "Our welders and engineers custom build each frame in-house." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#3B6D52] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#3B6D52]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#3B6D52] dark:text-white">Warranty & Standards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Our structures comply with GCC shading standards and come with material warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2E4D3B] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Reliable Shade for Your Parking Area?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Message us now to get a site survey, design proposal, and quote anywhere in Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#2E4D3B] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Parking;
