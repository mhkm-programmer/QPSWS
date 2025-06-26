import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const officeGallery = [

  { type: "image", src: "https://8upload.com/image/685d1247a31d1/IMG-20250625-WA0040.jpg" },
  { type: "video", src: "https://streamable.com/e/fo0rn5" },
  { type: "image", src: "https://8upload.com/image/685d1247a9089/IMG-20250625-WA0041.jpg" },
{ type: "video", src: "https://streamable.com/e/o8imcm" },
  { type: "image", src: "https://8upload.com/image/685d12480a304/IMG-20250625-WA0045.jpg" },
{ type: "video", src: "https://streamable.com/e/yeehf7" },
];

Modal.setAppElement('#root');

const BlindsRoller = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      <PageTitle title="Roller Blinds Qatar | Modern Window Solutions | Curtains Furniture" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685d124796abe/IMG-20250625-WA0039.jpg"
        title="Roller Blinds for Offices & Commercial Spaces"
        subTitle="Sleek, Functional, and Easy to Operate"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          High-Quality Roller Blinds for Productive Work Environments
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Enhance your office or commercial space with our premium roller blinds, designed for optimal light control, privacy, and aesthetics. Trusted by businesses across Qatar for durability and style.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom-Fit Precision",
              desc: "Tailored measurements and professional installation for a perfect fit on every window.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Effective Light Management",
              desc: "Choose from sheer to blackout fabrics to create the ideal ambiance and reduce glare.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Smooth & Reliable Operation",
              desc: "Durable mechanisms ensure quiet, effortless rolling for daily convenience.",
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

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
          Roller Blinds Gallery
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          See examples of our recent roller blinds installations in offices and commercial buildings throughout Qatar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {officeGallery.map((media, index) => {
            const isObject = typeof media === "object";
            const type = isObject ? media.type : "image";
            const src = isObject ? media.src : media;

            return (
              <button
                key={index}
                onClick={() => setModalMedia({ type, src })}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {type === "image" ? (
                  <img
                    src={src}
                    alt={`Media ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-64 overflow-hidden">
                    <iframe
                      src={src}
                      title={`Video ${index + 1}`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal */}
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
              modalMedia.type === "image" ? (
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
              )
            )}
          </div>
        </Modal>
      </section>

      <CustomerReviews />

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Curtains Furniture for Roller Blinds?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We offer personalized consultations, expert installation, and premium materials to bring your office blinds vision to life with unmatched quality.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "On-Site Measurement", desc: "Precise measurements by our trained professionals ensure a perfect fit." },
              { title: "Fast & Professional Installation", desc: "Efficient setup minimizing disruption to your workspace." },
              { title: "Corporate & Bulk Discounts", desc: "Attractive pricing for large projects and repeat clients." },
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
                  Only premium fabrics and components meeting international standards and safety compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Workspace with Roller Blinds Today
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us now for a free consultation, measurement, and custom quote anywhere in Qatar.
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

export default BlindsRoller;
