import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCouch, FaPalette, FaTools, FaCertificate } from "react-icons/fa";

const furnitureGallery = [
  { type: "image", src: "https://8upload.com/image/688819f26d341/IMG-20250630-WA0085.jpg" },
  { type: "image", src: "https://8upload.com/image/688819f2c6724/IMG-20250630-WA0086.jpg" },
  { type: "image", src: "https://8upload.com/image/688819f3691b8/IMG-20250630-WA0090.jpg" },
  { type: "image", src: "https://8upload.com/image/688819f404d4c/IMG-20250630-WA0099.jpg" },
   { type: "image", src: "https://8upload.com/image/688819f48ad2c/IMG-20250630-WA0102.jpg" },
  { type: "image", src: "https://8upload.com/image/688819f4a1c04/IMG-20250630-WA0103.jpg" },
];

Modal.setAppElement('#root');

const Furniture = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      <PageTitle title="Furniture & Upholstery | Bateely Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/68881431e83e0/Furniture1.png"
        title="Furniture & Upholstery"
        subTitle="Elegant. Custom. Comfortable."
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Crafting Comfort and Elegance for Every Home & Office
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our furniture and upholstery services breathe new life into your interiors. Whether it's a custom sofa, antique restoration, or full office furnishing, our work is detailed, durable, and design-focused.
        </p>
      </section>

      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaCouch size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Furniture Reupholstery",
              desc: "From torn or worn fabric to stylish new looks — we restore and refresh it all.",
            },
            {
              icon: <FaPalette size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom Upholstery",
              desc: "Choose from rich fabrics, leather, textures and patterns that fit your personality.",
            },
            {
              icon: <FaTools size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Wood & Foam Repair",
              desc: "Skilled repair of furniture structure, legs, arms and foam – for strength & comfort.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Gallery Showcase
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Explore our recent projects in residential reupholstery and commercial furniture renovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {furnitureGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              aria-label={`View media ${index + 1}`}
            >
              <img
                src={media.src}
                alt={`Furniture work ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
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
              <img
                src={modalMedia.src}
                alt="Media Preview"
                className="max-w-full max-h-[80vh] mx-auto rounded"
              />
            )}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Bateely for Furniture & Upholstery?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We combine style, durability, and affordability. From sofas to dining chairs, get the look you want and the comfort you deserve.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Measurement", desc: "We measure onsite to ensure perfect fitting and tailoring." },
              { title: "Color & Fabric Advice", desc: "Experts help you choose colors and textures for any interior theme." },
              { title: "Budget Options", desc: "Various material options to match both luxury and economical requirements." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Premium Materials</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  High-quality foam, fabrics and wood with lasting durability and feel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Refresh. Restore. Redesign.
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Reach out today to get a free quote or consultation for your upholstery needs in Qatar.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Furniture;
