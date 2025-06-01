import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const livingroomGallery = [
  "https://8upload.com/image/67ab3fda926f3/living1.jpg",
  "https://8upload.com/image/67ab3fdf4e1b1/living2.jpg",
  "https://8upload.com/image/67ab3fe3c26b5/living3.jpg",
  "https://8upload.com/image/67ab3fe99de48/living4.jpg",
  "https://8upload.com/image/67ab3ff0137de/living5.jpg",
  "https://8upload.com/image/67ab3ff52a55a/living6.jpg",
];

const CurtainsLivingroom = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Living Room Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab3ffa72b0d/living-hero.jpg"
        title="Elegant Living Room Curtains"
        subTitle="Soft Light. Elegant Draping. Perfect Comfort."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Make Every Living Room Memorable
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From soft sheers to premium layered curtains — we bring tailor-made designs that enhance your home’s comfort and style. AZLAAN CONTRACTING W.L.L serves residential interiors all across Qatar.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Living Room Curtain Ideas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {livingroomGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Living room curtain ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance Your Living Room Today
        </h2>
        <p className="text-lg mb-6">
          Schedule a design consultation and get expert curtain fitting for your home in Qatar.
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

export default CurtainsLivingroom;
