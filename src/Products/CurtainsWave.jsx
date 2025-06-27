import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const waveCurtainsGallery = [
 { type: "image", src: "https://8upload.com/image/685f220a9a68b/IMG-20250625-WA0019.jpg" },
  { type: "video", src: "https://streamable.com/e/lzrkei" },
  { type: "image", src: "https://8upload.com/image/685f220ae5389/IMG-20250625-WA0021.jpg" },
  { type: "video", src: "https://streamable.com/e/kh6ojd" },
  { type: "image", src: "https://8upload.com/image/685f220b3636a/IMG-20250625-WA0022.jpg" },
  { type: "video", src: "https://streamable.com/e/rl9zye" },
];
Modal.setAppElement('#root');

const CurtainsWave = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Wave Curtains in Qatar | Elegant & Custom Drapes | Curtains Furniture" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Wave Curtains Collection"
        subTitle="Graceful Drapes for Stylish Interiors"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Stylish Wave Curtains for Homes and Offices
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Elevate your interior with our bespoke wave curtains, designed to create soft, elegant folds that flow seamlessly. Perfect for living rooms, executive offices, and luxury spaces, our wave curtains blend style with effortless operation.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Tailor-Made Precision",
              desc: "Every curtain is custom measured and crafted to perfectly fit your windows, ensuring a flawless wave effect.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Versatile Light Control",
              desc: "Select from a wide range of fabric opacities — from sheer light diffusion to full blackout options.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Smooth & Silent Operation",
              desc: "Advanced track and wave tape systems provide effortless, noise-free movement for daily use.",
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
    Recent Wave Curtain Installations
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
    Browse our portfolio showcasing sophisticated wave curtains installed in luxurious homes, corporate offices, and upscale hotels throughout Qatar.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {waveCurtainsGallery.map((media, index) => (
      <button
        key={index}
        onClick={() => setModalMedia(media)}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        aria-label={`Open media ${index + 1}`}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={`Wave curtain ${index + 1}`}
            className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-black overflow-hidden relative">
            <iframe
              src={media.src}
              title={`Wave curtain video ${index + 1}`}
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

  {/* Modal Preview */}
   <Modal
            isOpen={!!modalMedia}
            onRequestClose={() => setModalMedia(null)}
            contentLabel="Media Preview"
            // Ensure modal is above all elements
            className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
            overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setModalMedia(null)}
                className="absolute top-4 right-4 text-2xl z-[10000] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
                aria-label="Close Modal"
              >
                ✕
              </button>
          
              {/* Image or Video Preview */}
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


      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Curtains Furniture */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Curtains Furniture for Wave Curtains?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We are Qatar’s trusted experts in wave curtain design, offering tailored solutions, premium materials, and professional installation.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Complimentary Consultation & Measuring", desc: "Our specialists visit your location to recommend fabrics, styles, and provide precise measurements." },
              { title: "Efficient Turnaround", desc: "Expert craftsmanship and installation completed within 3–4 working days." },
              { title: "Extensive Fabric Range", desc: "Luxurious silks, durable blends, and custom colors to complement any décor." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Premium Track Systems</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Durable, silent tracks ensuring effortless movement and long-lasting performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Space with Elegant Wave Curtains
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Book your free consultation today and experience expert installation anywhere in Qatar.
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

export default CurtainsWave;
