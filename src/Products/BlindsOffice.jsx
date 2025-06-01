import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const officeGallery = [
  "https://8upload.com/image/67ab0bce5e3e5/office1.jpg",
  "https://8upload.com/image/67ab0bd2011aa/office2.jpg",
  "https://8upload.com/image/67ab0bd57aaae/office3.jpg",
  "https://8upload.com/image/67ab0bdb0ea7e/office4.jpg",
  "https://8upload.com/image/67ab0be06d35b/office5.jpg",
  "https://8upload.com/image/67ab0be4cf914/office6.jpg",
];

const BlindsOffice = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Title */}
      <PageTitle title="Office Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab0ba8e2452/office-banner.jpg"
        title="Office Blinds Solutions"
        subTitle="Professional. Minimal. Productive."
      />

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Smart Blinds for Smarter Workspaces
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Enhance your office aesthetics and improve functionality with our range of commercial blinds. From blackout roller blinds to sleek verticals, AZLAAN CONTRACTING W.L.L brings premium window solutions for boardrooms, cubicles, and corporate spaces across Qatar.
        </p>
      </section>

      {/* Office Blinds Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Office Blinds Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {officeGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Office blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Workspace?
        </h2>
        <p className="text-lg mb-6">
          Connect with us for custom design, product demo, and corporate pricing.
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

export default BlindsOffice;
