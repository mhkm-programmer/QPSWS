import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const verticalGallery = [
  "https://8upload.com/image/67ab15488268a/vertical1.jpg",
  "https://8upload.com/image/67ab154d0bb15/vertical2.jpg",
  "https://8upload.com/image/67ab1550a2781/vertical3.jpg",
  "https://8upload.com/image/67ab155423ddf/vertical4.jpg",
  "https://8upload.com/image/67ab155816a2a/vertical5.jpg",
  "https://8upload.com/image/67ab155ba8019/vertical6.jpg",
];

const BlindsVertical = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title */}
      <PageTitle title="Vertical Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Parallax Hero */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab157f81b1e/vertical-banner.jpg"
        title="Vertical Blinds"
        subTitle="Sleek. Functional. Elegant."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Vertical Blinds for Smart Interiors
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Perfect for wide windows and sliding doors, our vertical blinds offer precise light control and privacy. Choose from modern colors, textures, and fabrics for home and office settings in Qatar.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Vertical Blinds Installation
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {verticalGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Vertical blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Professional Vertical Blinds in Qatar?
        </h2>
        <p className="text-lg mb-6">
          Contact AZLAAN CONTRACTING for measurements, material samples, and full-service installation anywhere in Qatar.
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

export default BlindsVertical;
