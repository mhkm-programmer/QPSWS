import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const waveCurtainsGallery = [
  "https://8upload.com/image/67a7f51fc1234/wave1.jpg",
  "https://8upload.com/image/67a7f51fc1234/wave2.jpg",
  "https://8upload.com/image/67a7f51fc1234/wave3.jpg",
  "https://8upload.com/image/67a7f51fc1234/wave4.jpg",
  "https://8upload.com/image/67a7f51fc1234/wave5.jpg",
  "https://8upload.com/image/67a7f51fc1234/wave6.jpg",
];

const CurtainsWave = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Wave Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fc1234/wave-hero.jpg"
        title="Elegant Wave Curtains"
        subTitle="Smooth Flowing Style and Function"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E]">
          Stylish Wave Curtains for a Modern Look
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Wave curtains combine smooth, uniform folds with contemporary aesthetics, delivering a soft, flowing look that enhances any room’s ambiance.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold mb-10 text-center text-[#4A342E]">
          Wave Curtains Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {waveCurtainsGallery.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt={`Wave curtain ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Space with Wave Curtains
        </h2>
        <p className="text-lg mb-6">
          Contact AZLAAN CONTRACTING W.L.L for personalized wave curtain solutions, free consultation, and expert installation in Qatar.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default CurtainsWave;
