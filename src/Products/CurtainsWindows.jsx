import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const galleryImages = [
  "/images/windows1.jpg",
  "/images/windows2.jpg",
  "/images/windows3.jpg",
  "/images/windows4.jpg",
  "/images/windows5.jpg",
  "/images/windows6.jpg",
];

const CurtainsWindows = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Window Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fc1234/windows-hero.jpg"
        title="Elegant Curtains for Every Window"
        subTitle="Perfect Fit, Style, and Privacy"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E]">
          Tailored Curtains to Enhance Your Window Spaces
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover a wide selection of custom-made curtains designed to fit
          every window style. From sheer drapes to blackout options, we provide
          stylish solutions that elevate your interiors while ensuring privacy
          and light control.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Window Curtain ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Window Décor?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact AZLAAN CONTRACTING W.L.L today for expert consultations, custom curtain designs, and professional installation across Qatar.
        </p>
        <a
          href="https://wa.me/97470373588"
          className="inline-block bg-white text-[#4A342E] font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default CurtainsWindows;
