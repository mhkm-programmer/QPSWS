import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaTools, FaPaintRoller, FaCogs, FaCertificate } from "react-icons/fa";

const gypsumGallery = [
  { type: "image", src: "https://8upload.com/image/685f24621688c/IMG-20250625-WA0022.jpg" },
  { type: "video", src: "https://streamable.com/e/t2nkyv" },
  { type: "image", src: "https://8upload.com/image/685f246287121/IMG-20250625-WA0023.jpg" },
  { type: "video", src: "https://streamable.com/e/f1xvgq" },
  { type: "image", src: "https://8upload.com/image/685f2462d6bbb/IMG-20250625-WA0024.jpg" },
  { type: "video", src: "https://streamable.com/e/3er68t" },
];
Modal.setAppElement('#root');

const Gypsum = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-[#f9fafa] dark:bg-gray-900">
      <PageTitle title="Gypsum Partition & Ceiling Works in Qatar | Custom Designs | Curtains Furniture" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685f23afa26f2/IMG-20250625-WA0012.jpg"
        title="Expert Gypsum Works"
        subTitle="Stylish Partitions & Ceilings that Define Your Space"
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2e3a59] dark:text-white mb-6">
          Transform Your Interiors with Elegant Gypsum Work
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From intricate ceilings to practical partitions, our gypsum solutions blend style and durability, enhancing homes, offices, and commercial environments across Qatar.
        </p>
      </section>

      <section className="bg-[#edf1f7] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaTools size={36} className="mx-auto mb-4 text-[#2e3a59]" />,
              title: "Custom Designs",
              desc: "From simple lines to luxurious layered patterns, every ceiling or partition is tailored to your aesthetic.",
            },
            {
              icon: <FaPaintRoller size={36} className="mx-auto mb-4 text-[#2e3a59]" />,
              title: "Smooth Finishes",
              desc: "We deliver polished surfaces ready for paint or wallpaper, elevating your space effortlessly.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#2e3a59]" />,
              title: "Durability & Precision",
              desc: "Sturdy frame systems with seamless joinery built to last through Qatar’s climate conditions.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#2e3a59] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#2e3a59] dark:text-white mb-8">
          Recent Gypsum Ceiling & Partition Projects
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Discover how we’ve enhanced interiors across Qatar with functional and aesthetic gypsum solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gypsumGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`Open media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Gypsum project ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-black overflow-hidden relative">
                  <iframe
                    src={media.src}
                    title={`Gypsum video ${index + 1}`}
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

      <section className="py-20 px-6 bg-[#e7edf5] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2e3a59] dark:text-white mb-6">
            Why Trust Curtains Furniture for Gypsum Works?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We deliver functional, stylish gypsum partitions and ceilings with unmatched precision and professional craftsmanship across Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Site Assessment", desc: "Free site visits to assess space, suggest design options, and take accurate measurements." },
              { title: "Quick Turnaround", desc: "From design to delivery, we complete most gypsum projects in 3–5 working days." },
              { title: "Design Flexibility", desc: "Whether modern, classic, or minimal — we shape ceilings and partitions to fit your space." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#2e3a59] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#2e3a59]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#2e3a59] dark:text-white">Premium Material Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use moisture-resistant boards and metal framing for safe, long-lasting installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2e3a59] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Custom Gypsum Work in Qatar?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact our expert team for a free design consultation and quote.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#2e3a59] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Gypsum;
