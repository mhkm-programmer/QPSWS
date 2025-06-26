import {
  FaHome,
  FaRulerCombined,
  FaSun,
  FaVideo,
  FaVolumeUp,
  FaStar,
  FaCertificate,
} from "react-icons/fa";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Blackout from "../pages/Home/Products_Blackout";
import CustomerReviews from "../pages/Home/CustomerReviews";

const Blinds = () => {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Blinds Curtains Qatar | Curtains Furniture | Premium Window Solutions" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Premium Blinds & Curtains"
        subTitle="Privacy. Comfort. Design."
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A342E] dark:text-white">
          Custom Window Blinds for Every Interior
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Curtains Furniture delivers a complete range of high-quality blinds
          and curtain solutions in Qatar — crafted to fit your space, style, and
          comfort needs. From blackout to vertical, office to roller blinds,
          we’ve got it all.
        </p>
      </section>

      {/* Key Features */}
      <section className="bg-[#f2ede8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Precision Tailoring",
              desc: "Expert measurements and perfect fit for every window.",
            },
            {
              icon: <FaSun size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Daylight & Privacy Control",
              desc: "Choose blackout, screen, or sheer fabrics for your needs.",
            },
            {
              icon: <FaVolumeUp size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Noise Reduction",
              desc: "Our blinds insulate acoustically and block external noise.",
            },
            {
              icon: <FaVideo size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Interactive Product Demo",
              desc: "Explore our designs with videos and virtual previews.",
            },
            {
              icon: <FaStar size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Durable Quality",
              desc: "UV-resistant fabrics with top-quality finishes.",
            },
            {
              icon: <FaHome size={40} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Stylish Options",
              desc: "Contemporary to classic styles tailored to your décor.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#4A342E] dark:text-white">
            Blinds & Curtains Collection
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Explore blackout blinds, vertical blinds, office solutions, roller blinds, Vietnam blinds,
            and elegant fabric curtain options.
          </p>
          <Products_Blackout />
        </div>
      </section>

      {/* Reviews */}
      <CustomerReviews />

      {/* Service Benefits */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#4A342E] dark:text-white">
            Why Choose Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            We combine craftsmanship, top-quality materials, free consultations, and fast delivery to
            transform your windows and interiors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">
                Free Site Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We assess your location, light, and layout to recommend the perfect solution.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">
                Custom Fabrication
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Made-to-order blinds stitched and finished to perfection.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">
                Fast Installation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                From quote to fitting – we deliver in as fast as 48 hours.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#6B4226] dark:text-white">
                Certified Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All materials meet international safety and durability standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Free Site Visit in Qatar
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact <strong>Curtains Furniture</strong> for expert consultation, custom designs, and professional installations.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Start Chat on WhatsApp
        </a>
        <p className="mt-4 text-sm opacity-80">
          Or email us at:{" "}
          <a
            href="mailto:info.curtainsfurniture@gmail.com"
            className="underline text-white"
          >
            info.curtainsfurniture@gmail.com
          </a>
        </p>
        <p className="text-sm">Location: Mansoura, Doha</p>
        <div className="mt-4 flex justify-center gap-5 text-white">
          <a
            href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-300 transition"
          >
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blinds;
