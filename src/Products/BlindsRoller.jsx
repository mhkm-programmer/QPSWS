import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const rollerGallery = [
  "https://8upload.com/image/67ab1259e34b1/roller1.jpg",
  "https://8upload.com/image/67ab1261958ed/roller2.jpg",
  "https://8upload.com/image/67ab12656c1ed/roller3.jpg",
  "https://8upload.com/image/67ab1269dbd7d/roller4.jpg",
  "https://8upload.com/image/67ab126eaf6cc/roller5.jpg",
  "https://8upload.com/image/67ab12739b40f/roller6.jpg",
];

const BlindsRoller = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title */}
      <PageTitle title="Roller Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab124cd2cfc/roller-banner.jpg"
        title="Roller Blinds"
        subTitle="Minimal Design, Maximum Comfort"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Elegant Roller Blinds for Every Space
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our high-quality roller blinds provide excellent light control, privacy, and a sleek finish for homes, offices, and commercial interiors. Choose from sunscreen, blackout, or dual options — all custom-made and professionally installed.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Roller Blinds Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rollerGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Roller blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Custom Roller Blinds?
        </h2>
        <p className="text-lg mb-6">
          Contact us today for a free consultation, fabric samples, or installation schedule across Qatar.
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

export default BlindsRoller;
