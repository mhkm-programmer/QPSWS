import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";

const windowGallery = [
  "https://8upload.com/image/67ab160f6d8f7/window1.jpg",
  "https://8upload.com/image/67ab1613b36c0/window2.jpg",
  "https://8upload.com/image/67ab16182db54/window3.jpg",
  "https://8upload.com/image/67ab161d0c347/window4.jpg",
  "https://8upload.com/image/67ab162170e4b/window5.jpg",
  "https://8upload.com/image/67ab1625e5e09/window6.jpg",
];

const BlindsWindow = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Meta Title */}
      <PageTitle title="Window Blinds | AZLAAN CONTRACTING W.L.L" />

      {/* Parallax Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67ab16527b8e1/window-banner.jpg"
        title="Window Blinds"
        subTitle="Style, Comfort & Light Control"
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] mb-6">
          Window Blinds Designed for Every Room
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From minimalist roller blinds to elegant wooden blinds, AZLAAN CONTRACTING W.L.L offers a wide selection of window blinds tailored to fit modern homes, villas, and commercial spaces in Qatar.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#4A342E] mb-10">
          Gallery: Elegant Window Blind Designs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {windowGallery.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={`Window blind ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Elevate Your Interiors
        </h2>
        <p className="text-lg mb-6">
          Get personalized advice, product samples, and expert fitting across Qatar. Contact us now!
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

export default BlindsWindow;
