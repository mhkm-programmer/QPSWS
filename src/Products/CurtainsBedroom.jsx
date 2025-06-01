import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const bedroomCurtainGallery = [
  "https://8upload.com/image/67ab2ed5dded0/bedroom1.jpg",
  "https://8upload.com/image/67ab2ed9d4d45/bedroom2.jpg",
  "https://8upload.com/image/67ab2ee13d327/bedroom3.jpg",
  "https://8upload.com/image/67ab2ee83cf35/bedroom4.jpg",
  "https://8upload.com/image/67ab2eefa7ed6/bedroom5.jpg",
  "https://8upload.com/image/67ab2ef661bc4/bedroom6.jpg",
];

const CurtainsBedroom = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Title */}
      <PageTitle title="Bedroom Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab2f2233e5b/bedroom-banner.jpg"
        title="Bedroom Curtains"
        subTitle="Comfort. Darkness. Style."
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Sleep in Style & Serenity
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our premium blackout and sheer bedroom curtain solutions crafted for elegance and better sleep. Available in custom designs to complement your interior décor.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Bedroom Curtain Inspiration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bedroomCurtainGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Bedroom curtain ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Custom Curtains for Better Sleep
        </h2>
        <p className="text-lg mb-6">
          Book a consultation and explore color palettes, fabric samples, and full installation services across Qatar.
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

export default CurtainsBedroom;
