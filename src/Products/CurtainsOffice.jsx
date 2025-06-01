import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const officeCurtainsGallery = [
  "https://8upload.com/image/67ab4566dc49e/office1.jpg",
  "https://8upload.com/image/67ab4573ab52f/office2.jpg",
  "https://8upload.com/image/67ab45796e601/office3.jpg",
  "https://8upload.com/image/67ab45801baeb/office4.jpg",
  "https://8upload.com/image/67ab45865e86b/office5.jpg",
  "https://8upload.com/image/67ab458c4c542/office6.jpg",
];

const CurtainsOffice = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title for SEO */}
      <PageTitle title="Office Curtains | AZLAAN CONTRACTING W.L.L" />

      {/* Parallax Hero Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab4598a72eb/office-hero.jpg"
        title="Modern Office Curtains"
        subTitle="Professional Appeal. Light Control. Acoustic Comfort."
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Enhance Your Office Aesthetics and Privacy
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide premium curtain solutions for corporate offices, boardrooms, clinics, and commercial interiors. From blackout panels to elegant sheers — our products combine design with functionality.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Office Curtain Styles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {officeCurtainsGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Office curtain ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Curtains for Your Office?
        </h2>
        <p className="text-lg mb-6">
          We offer onsite visits, design consultation, and installation for all business types across Qatar.
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

export default CurtainsOffice;
