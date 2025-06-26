import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const officeGallery = [
  { type: "image", src: "https://8upload.com/image/685d19705f43f/IMG-20250625-WA0012.jpg" },
  { type: "video", src: "https://streamable.com/e/0sbzav" },
  { type: "image", src: "https://8upload.com/image/685d1970aeea2/IMG-20250625-WA0013.jpg" },
    { type: "video", src: "https://streamable.com/e/f93t1w" },
  { type: "image", src: "https://8upload.com/image/685d19700de27/IMG-20250625-WA0010.jpg" },
    { type: "video", src: "https://streamable.com/e/cyezxn" },
];
Modal.setAppElement('#root');

const BlindsWindow = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <main className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Blinds Windows | Curtains Furniture Qatar | Office & Commercial Window Solutions" />

      {/* Hero Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685d1590c5f8c/IMG-20250625-WA0036.jpg"
        title="Blinds Windows"
        subTitle="Elegant, Functional & Durable Window Treatments"
      />

      {/* Introduction */}
      <section
        aria-labelledby="intro-heading"
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <h1 id="intro-heading" className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Premium Blinds Windows for Office & Commercial Spaces
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Enhance your workspace with our expertly crafted blinds windows designed to deliver superior light control, privacy, and aesthetic appeal. Whether you manage corporate offices, retail outlets, or healthcare facilities, our blinds combine functionality with sleek, modern design — tailored to fit windows of all sizes.
        </p>
      </section>

      {/* Features Section */}
      <section
        aria-label="Key product features"
        className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" aria-hidden="true" />,
              title: "Custom Measurements",
              desc: "On-site assessment ensures each blind fits perfectly, providing seamless operation and a clean finish.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" aria-hidden="true" />,
              title: "Adjustable Light Control",
              desc: "Efficiently regulate natural light and reduce glare to create a comfortable and productive environment.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" aria-hidden="true" />,
              title: "Robust & Low Maintenance",
              desc: "Durable materials resist fading, dust, and moisture—ensuring longevity with minimal upkeep.",
            },
          ].map(({ icon, title, desc }, i) => (
            <article
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h2 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </article>
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

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Choose Us Section */}
      <section
        aria-labelledby="why-choose-us"
        className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 id="why-choose-us" className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            As Qatar’s trusted supplier of commercial window treatments, we provide tailored blinds window solutions, fast project delivery, and outstanding after-sales support.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Comprehensive Site Assessment",
                desc: "Our experts visit your location to provide precise measurements and product recommendations.",
              },
              {
                title: "Fast & Professional Installation",
                desc: "Expert fitting completed within 48 hours after final approval to minimize downtime.",
              },
              {
                title: "Competitive Corporate Pricing",
                desc: "Flexible packages and discounts for businesses, government offices, and bulk orders.",
              },
              {
                title: "Certified Quality Assurance",
                desc: "We use only ISO and Qatari-approved materials that meet all safety and durability standards.",
                icon: <FaCertificate size={28} className="mb-3 text-[#6B4226]" aria-hidden="true" />,
              },
            ].map(({ title, desc, icon }, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex flex-col items-center"
              >
                {icon && icon}
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section
        className="py-20 bg-[#4A342E] text-white text-center px-6"
        aria-label="Contact call to action"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Office Windows?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact Curtains Furniture today for expert consultation, personalized solutions, and flawless installation services.
        </p>
        <a
           href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-white"
          aria-label="Contact Curtains Furniture via WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact via WhatsApp
        </a>
      </section>
    </main>
  );
};

export default BlindsWindow;
