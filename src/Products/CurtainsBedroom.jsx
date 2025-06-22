import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const bedroomCurtainsGallery = [
 { type: "image", src: "https://8upload.com/image/6848e1a965718/K_Cabinet1.jpg" },
  { type: "video", src: "https://streamable.com/e/r9p50t" },
  { type: "image", src: "https://8upload.com/image/6848e1a9affad/K_Cabinet2.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1a9e8e10/K_Cabinet3.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa3011f/K_Cabinet4.jpg" },
  { type: "image", src: "https://8upload.com/image/6848e1aa6f893/K_Cabinet5.jpg" },
];

Modal.setAppElement('#root');

const CurtainsBedroom = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Bedroom Curtains Qatar | Blackout & Luxury Styles | Curtains Furniture" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab0ba8e2452/office-banner.jpg"
        title="Bedroom Curtains Collection"
        subTitle="Elegant, Private & Sleep-Friendly Designs"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Better Sleep Begins with the Right Curtains
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our curated collection of bedroom curtains at Curtains Furniture brings together blackout functionality, luxurious fabrics, and aesthetic designs. Create the perfect ambiance for rest, relaxation, and style.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Perfectly Fitted Curtains",
              desc: "Each set is tailored to your exact bedroom window size, ensuring full coverage and symmetry.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Blackout & Noise Reduction",
              desc: "Block harsh light and outside noise for deeper, uninterrupted sleep.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Premium Material Selection",
              desc: "Choose from velvet, cotton, linen, sheer, or layered options with decorative headings and trims.",
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

     {/* Gallery Section */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
    Bedroom Curtain Inspirations
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
    Take a look at our recent bedroom curtain installations and find your dream setup.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {bedroomCurtainsGallery.map((media, index) => (
      <button
        key={index}
        onClick={() => setModalMedia(media)}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        aria-label={`View media ${index + 1}`}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={`Bedroom curtain ${index + 1}`}
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
      {modalMedia && (
        modalMedia.type === "image" ? (
          <img
            src={modalMedia.src}
            alt="Preview"
            className="max-w-full max-h-[80vh] rounded-xl"
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
            Why Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Serving customers across Qatar with tailored solutions, fast delivery, and lasting comfort.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Bedroom Visit", desc: "We assess your space and help you choose the perfect curtain style and fabric." },
              { title: "Same-Week Installation", desc: "We cut, stitch, deliver, and install — often within just a few days." },
              { title: "Affordable Luxury", desc: "Stylish curtain solutions that match both your taste and budget." },
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
                  Fade-resistant and durable materials trusted by homes and hotels alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Bedroom into a Restful Retreat
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us today to explore blackout, layered, and designer curtains for your bedroom.
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

export default CurtainsBedroom;
