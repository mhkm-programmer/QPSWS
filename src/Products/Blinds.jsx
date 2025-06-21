import { FaHome, FaRulerCombined, FaSun, FaVideo, FaVolumeUp, FaStar, FaCertificate } from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Blackout from "../pages/Home/Products_Blackout";
import CustomerReviews from "../pages/Home/CustomerReviews";

const Blinds = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* Meta Title for SEO */}
      <PageTitle title="Blinds Curtains Qatar | Curtains Furniture | Premium Window Solutions" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Premium Blinds & Curtains"
        subTitle="Privacy. Comfort. Design."
      />

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E] dark:text-white">
          Custom Window Blinds for Every Interior
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At Curtains Furniture, we offer a complete range of blinds and curtain solutions crafted to your window sizes, preferences, and performance needs — all delivered and installed across Qatar.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#f2ede8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[{
            icon: <FaRulerCombined size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Precision Tailoring",
            desc: "Expert measurements and fit for all window types."
          }, {
            icon: <FaSun size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Daylight & Privacy Control",
            desc: "Blackout, screen, or sheer fabrics to suit every light preference."
          }, {
            icon: <FaVolumeUp size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Noise Reduction",
            desc: "Reduce outside noise with blinds that insulate acoustically."
          }, {
            icon: <FaVideo size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Interactive Product Demo",
            desc: "View textures and operations through our virtual preview."
          }, {
            icon: <FaStar size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Long-Lasting Quality",
            desc: "Premium stitching and UV-resistant fabrics made to last."
          }, {
            icon: <FaHome size={40} className="mx-auto mb-4 text-[#6B4226]" />, 
            title: "Elegant Styling",
            desc: "Modern, classic, and contemporary options to elevate your décor."
          }].map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery with Product Preview */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#4A342E] dark:text-white">
            Blinds & Curtains Collection
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Choose from Blackout Blinds, Vertical, Office, Roller, Vietnam Blinds and elegant curtain styles.
          </p>
          <Products_Blackout />
        </div>
      </section>

      {/* Testimonials */}
      <CustomerReviews />

      {/* Service Benefits */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#4A342E] dark:text-white">Why Curtains Furniture Qatar?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            We combine premium materials, free consultations, and fast delivery to ensure your space is stylish, comfortable, and protected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">Free Site Consultation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">We assess your needs at your location and suggest ideal solutions.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">Customized Fabrication</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Made-to-order blinds with precision stitching and expert tailoring.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">Rapid Installation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">From measurement to mounting — our team delivers in 48 hours.</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">Certified & Guaranteed</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Our products meet international quality, safety, and sustainability standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Free Site Visit in Qatar
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact Curtains Furniture for expert consultation, custom solutions, and professional installation.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Start Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Blinds;