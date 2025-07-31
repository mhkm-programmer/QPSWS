import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaShieldAlt, FaRulerCombined, FaCertificate } from "react-icons/fa";

const upvcGallery = [
  { type: "image", src: "https://8upload.com/image/688ab7371ddc5/IMG-20250630-WA0061.jpg" },
  { type: "image", src: "https://8upload.com/image/688ab736d6140/IMG-20250630-WA0060.jpg" },
  { type: "image", src: "https://8upload.com/image/688ab736985fa/IMG-20250630-WA0059.jpg" },
  { type: "image", src: "https://8upload.com/image/688ab73616577/IMG-20250630-WA0057.jpg" },
  { type: "image", src: "https://8upload.com/image/688ab735a86b0/IMG-20250630-WA0055.jpg" },
  { type: "image", src: "https://8upload.com/image/688ab73598534/IMG-20250630-WA0054.jpg" },
];
Modal.setAppElement('#root');

const UPVC = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#f2f6f9] dark:bg-gray-900">
      <PageTitle title="UPVC Doors & Windows in Qatar | Premium Quality | Curtains Furniture" />

      <ParallaxSection
        imagePath="https://8upload.com/image/688aba6d5a6b2/UpVC1-min.png"
        title="UPVC Doors & Windows"
        subTitle="Energy Efficient. Secure. Elegant."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#20435c] dark:text-white mb-6">
          Premium UPVC Solutions for Residential & Commercial Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our high-performance UPVC doors and windows designed for thermal insulation, noise reduction, and unmatched durability. Custom-fitted for your space, manufactured to withstand Qatar’s climate.
        </p>
      </section>

      <section className="bg-[#e4edf3] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#1f4d6b]" />,
              title: "Custom Fit Precision",
              desc: "Exact measurements and expert fabrication ensure airtight and elegant installations for every frame.",
            },
            {
              icon: <FaShieldAlt size={36} className="mx-auto mb-4 text-[#1f4d6b]" />,
              title: "Superior Insulation & Security",
              desc: "Multi-chambered profiles offer excellent thermal insulation and reinforced locking systems provide top-tier security.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#1f4d6b]" />,
              title: "Weather & Sound Resistant",
              desc: "Built to resist extreme heat, humidity, and noise, ensuring year-round comfort and low maintenance.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#20435c] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#20435c] dark:text-white mb-8">
          Recent UPVC Installations
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Explore our project gallery of beautifully integrated UPVC windows and doors across villas, apartments, and offices in Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upvcGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`Open media ${index + 1}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`UPVC installation ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-black overflow-hidden relative">
                  <iframe
                    src={media.src}
                    title={`UPVC video ${index + 1}`}
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

      <section className="py-20 px-6 bg-[#e4edf3] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#20435c] dark:text-white mb-6">
            Why Choose Curtains Furniture for UPVC Installations?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Our certified UPVC specialists offer turnkey installation services using German-engineered profiles, modern fittings, and years of field experience.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Site Measuring & Advice", desc: "Free expert visits to ensure perfect dimensions and profile suggestions." },
              { title: "Fast Production & Installation", desc: "Average completion time within 3–5 working days." },
              { title: "10-Year Warranty", desc: "Coverage on UPVC profile color, shape, and insulation performance." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#1f4d6b] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#1f4d6b]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#1f4d6b] dark:text-white">Certified Installers</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All UPVC installations are performed by trained technicians with manufacturer accreditation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#20435c] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Install Energy Efficient UPVC Doors & Windows Today
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Schedule your free site survey and quotation anywhere in Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#20435c] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default UPVC;
