import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const hotelGallery = [
  "https://8upload.com/image/67ab35092d705/hotel1.jpg",
  "https://8upload.com/image/67ab350ebcf8f/hotel2.jpg",
  "https://8upload.com/image/67ab3514632ec/hotel3.jpg",
  "https://8upload.com/image/67ab351a9844d/hotel4.jpg",
  "https://8upload.com/image/67ab3520c6f5d/hotel5.jpg",
  "https://8upload.com/image/67ab3526522fa/hotel6.jpg",
];

const CurtainsHotel = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Hotel Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab352cbd0c7/hotel-banner.jpg"
        title="Hotel Curtains & Drapery"
        subTitle="Luxury and Function, Tailored for Hospitality"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Curtains That Match Your Hotel’s Elegance
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          AZLAAN CONTRACTING W.L.L offers custom hotel curtain solutions that enhance comfort, elegance, and privacy for your guests. From blackout to sheer layered styles — we deliver across Qatar with expert fitting and styling services.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Hotel Curtain Designs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotelGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Hotel curtain ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Hotel Interiors?
        </h2>
        <p className="text-lg mb-6">
          Request a site visit, browse fabric samples, or schedule installation. We’re ready to assist you across Qatar.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default CurtainsHotel;
