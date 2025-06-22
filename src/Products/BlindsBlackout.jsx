import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import {
  FaCogs,
  FaLightbulb,
  FaRulerCombined,
  FaCertificate,
} from "react-icons/fa";

const mediaGallery = [
  { type: "image", src: "https://8upload.com/image/6848e1a965718/K_Cabinet1.jpg" },
  { type: "video", src: "https://streamable.com/e/r9p50t" },
  { type: "image", src: "https://8upload.com/image/6848e1a9affad/K_Cabinet2.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1a9e8e10/K_Cabinet3.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa3011f/K_Cabinet4.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa6f893/K_Cabinet5.jpg" },
];

Modal.setAppElement('#root');

const BlindsBlackout = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      <PageTitle title="Blackout Blinds Qatar | Curtains & Furniture | Custom Window Coverings" />

      <ParallaxSection
        imagePath="https://8upload.com/image/67ab0ba8e2452/office-banner.jpg"
        title="Premium Blackout Blinds"
        subTitle="Functional, Stylish & Light-Blocking Solutions"
      />

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Complete Darkness, Uncompromised Design
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover blackout blinds by Curtains & Furniture – the perfect balance between privacy, style, and total light control. Ideal for bedrooms, offices, hotels, and home theaters across Qatar.
        </p>
      </section>

      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Tailored for Every Window",
              desc: "Custom measurements to guarantee precise installation and perfect coverage.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Block Light, Enhance Sleep",
              desc: "Effective light reduction for restful sleep, improved focus, or ultimate privacy.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Seamless Interior Integration",
              desc: "Minimalist and modern designs that blend effortlessly with your décor.",
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

      {/* Media Gallery (Image + Video Support) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Our Blackout Blinds in Action
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Browse recent installations across homes, offices, and commercial settings in Qatar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaGallery.map((media, index) => (
            <button
              key={index}
              onClick={() => setModalMedia(media)}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={`Media ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-64 overflow-hidden">
                  <iframe
                    src={media.src}
                    title={`Video ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Modal Preview */}
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
            {modalMedia && mediaGallery.includes(modalMedia) && (
              <>
                {modalMedia.type === "image" ? (
                  <img src={modalMedia.src} alt="Preview" className="max-w-full max-h-[80vh] rounded-xl" />
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
                )}
              </>
            )}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Curtains & Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Known for precision craftsmanship, premium materials, and exceptional service throughout Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Assessment", desc: "We visit your space to take accurate measurements & offer expert suggestions." },
              { title: "Fast Turnaround", desc: "Production & installation within 48–72 hours for most orders." },
              { title: "Competitive Packages", desc: "Special discounts for commercial clients and bulk orders." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Trusted Quality</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use international-grade blackout fabrics and certified safe materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for Blackout Blinds That Work as Good as They Look?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Message us for a free consultation, quotation, or to schedule your site visit today.
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

export default BlindsBlackout;
