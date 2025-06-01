import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const galleryImages = [
  "https://8upload.com/image/67aaf1239939b/blackout1.jpg",
  "https://8upload.com/image/67aaf1284e738/blackout2.jpg",
  "https://8upload.com/image/67aaf12c09d43/blackout3.jpg",
  "https://8upload.com/image/67aaf132b7a6f/blackout4.jpg",
  "https://8upload.com/image/67aaf13662fcd/blackout5.jpg",
  "https://8upload.com/image/67aaf13abf5e2/blackout6.jpg",
];

const BlindsBlackout = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Title */}
      <PageTitle title="Blackout Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Parallax Header */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67aaf1409d9f7/blackout-banner.jpg"
        title="Blackout Blinds"
        subTitle="Block Light. Enhance Comfort."
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Experience Total Light Control
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our custom blackout blinds combine privacy and light-blocking functionality with elegant designs — perfect for bedrooms, offices, and hospitality spaces. Crafted from premium fabrics and installed professionally across Qatar.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Blackout Blinds Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Blackout blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Design Your Perfect Space
        </h2>
        <p className="text-lg mb-6">
          Reach out for a free consultation, material samples, or booking a site visit.
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

export default BlindsBlackout;
