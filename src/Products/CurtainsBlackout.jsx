import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const blackoutGallery = [
  "https://8upload.com/image/67ab31257f5a3/blackout1.jpg",
  "https://8upload.com/image/67ab312bc3dc4/blackout2.jpg",
  "https://8upload.com/image/67ab3131d9f53/blackout3.jpg",
  "https://8upload.com/image/67ab313866b5c/blackout4.jpg",
  "https://8upload.com/image/67ab313eb272b/blackout5.jpg",
  "https://8upload.com/image/67ab3145cd39a/blackout6.jpg",
];

const CurtainsBlackout = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Blackout Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab3191955aa/blackout-banner.jpg"
        title="Blackout Curtains"
        subTitle="Ultimate Darkness. Total Comfort."
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Block the Light, Sleep Right
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Designed for total privacy and restful sleep, our blackout curtains are perfect for bedrooms, home theaters, nurseries, and hotels. Enjoy premium designs and professional fitting across Qatar.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Blackout Curtain Styles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blackoutGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Blackout curtain ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Perfect Darkness in Your Room?
        </h2>
        <p className="text-lg mb-6">
          Explore custom blackout solutions, free consultations, and quick installation services anywhere in Qatar.
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

export default CurtainsBlackout;
