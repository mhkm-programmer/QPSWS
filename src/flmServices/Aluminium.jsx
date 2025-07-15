import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const blackoutCurtainsGallery = [
  { type: "image", src: "https://8upload.com/image/685d8acf5c24e/IMG-20250625-WA0019.jpg" },
  { type: "video", src: "https://streamable.com/e/f1xvgq" },
  { type: "image", src: "https://8upload.com/image/685d8acf17931/IMG-20250625-WA0018.jpg" },
 { type: "video", src: "https://streamable.com/e/58pvqz" },
  { type: "image", src: "https://8upload.com/image/685d8acecbe70/IMG-20250625-WA0016.jpg" },
   { type: "video", src: "https://streamable.com/e/gwnjk2" },
];

Modal.setAppElement('#root');

const Aluminium = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Blackout Curtains Qatar | Total Light Control | Curtains Furniture" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685d8acfa5cd1/IMG-20250625-WA0022.jpg"
        title="Blackout Curtains"
        subTitle="Block Light. Maximize Comfort."
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Darkness You Control, Style You’ll Love
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the ultimate blackout curtain solutions from Curtains Furniture. Perfect for bedrooms, nurseries, home theaters, or any space where light control and peace of mind matter. Our blackout curtains blend functionality with elegance to elevate your interior.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Tailored Fit",
              desc: "Custom-sized blackout curtains for a seamless, gap-free installation.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "100% Light Block",
              desc: "Sleep better, protect furniture, and enjoy private moments day or night.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Smooth Operation",
              desc: "Choose from manual draw, cord, or motorized options for modern living.",
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
    Blackout Curtain Showcase
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
    See how our blackout curtains enhance interiors across Qatar — from homes to offices.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {blackoutCurtainsGallery.map((media, index) => (
      <button
        key={index}
        onClick={() => setModalMedia(media)}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        aria-label={`View media ${index + 1}`}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={`Blackout curtain ${index + 1}`}
            className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-black overflow-hidden">
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

  {/* Modal */}
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
            Why Choose Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            From consultation to installation, we provide Qatar’s most trusted blackout curtain service.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Site Visit", desc: "We visit your home or business for measurement and guidance." },
              { title: "Quick Delivery", desc: "Curtains stitched and installed within 48–72 hours in most cases." },
              { title: "Competitive Pricing", desc: "Affordable rates with unmatched value for quality and service." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Premium Fabric Guarantee</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We use fade-resistant, international-standard blackout fabrics for lasting satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Block the Light & Upgrade Your Space?
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact our team now for a free quote, design consultation, or site visit across Qatar.
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

export default Aluminium;
