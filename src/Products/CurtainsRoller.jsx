import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const rollerCurtainsGallery = [
  "https://8upload.com/image/67ac1234roller1.jpg",
  "https://8upload.com/image/67ac1234roller2.jpg",
  "https://8upload.com/image/67ac1234roller3.jpg",
  "https://8upload.com/image/67ac1234roller4.jpg",
  "https://8upload.com/image/67ac1234roller5.jpg",
  "https://8upload.com/image/67ac1234roller6.jpg",
];

const CurtainsRoller = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Roller Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ac1234roller-hero.jpg"
        title="Sleek Roller Curtains"
        subTitle="Simplicity Meets Functionality"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Modern Roller Curtains for Every Space
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Roller curtains offer minimalistic elegance and excellent light control. Perfect for homes, offices, and commercial spaces, with customizable fabrics and finishes.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Roller Curtains Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rollerCurtainsGallery.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Roller curtain ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Upgrade Your Interiors with Roller Curtains
        </h2>
        <p className="text-lg mb-6">
          Contact us for tailored solutions, free consultation, and professional installation across Qatar.
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

export default CurtainsRoller;
