import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const venetianGallery = [
  "https://8upload.com/image/67ab12ac95de6/venetian1.jpg",
  "https://8upload.com/image/67ab12b1cdd1c/venetian2.jpg",
  "https://8upload.com/image/67ab12b6550ff/venetian3.jpg",
  "https://8upload.com/image/67ab12ba7c38a/venetian4.jpg",
  "https://8upload.com/image/67ab12bf4933e/venetian5.jpg",
  "https://8upload.com/image/67ab12c3c8235/venetian6.jpg",
];

const BlindsVenetian = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title */}
      <PageTitle title="Venetian Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab12d1c9a65/venetian-banner.jpg"
        title="Venetian Blinds"
        subTitle="Style Meets Light Control"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Transform Spaces with Venetian Blinds
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Add contemporary charm and superior control to your windows with our premium aluminum and wooden Venetian blinds. Ideal for both residential and commercial interiors, these blinds blend privacy, light control, and style.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Venetian Blinds Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {venetianGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Venetian blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Looking for Modern Venetian Blinds?
        </h2>
        <p className="text-lg mb-6">
          Contact us now for a tailored quotation, color samples, or free site visit anywhere in Qatar.
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

export default BlindsVenetian;
