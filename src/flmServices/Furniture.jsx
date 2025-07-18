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

const Furniture = () => {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-[#f4f7f9] dark:bg-gray-900">
      <PageTitle title="Blinds & Curtains Qatar | Curtains Furniture | Stylish Window Solutions" />
      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Modern Blinds & Curtains"
        subTitle="Elegant Light & Privacy Control"
      />
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2e2e2e] dark:text-white">
          Customized Blinds and Curtains Tailored for You
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At Curtains Furniture Qatar, we offer high-performance blinds and curtains made with
          premium fabrics and modern track systems. Designed for functionality and aesthetic appeal
          in both residential and commercial spaces.
        </p>
      </section>
      <section className="bg-[#e8eff4] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Tailored Fit",
              desc: "Precision-made blinds for every window dimension and shape.",
            },
            {
              icon: <FaSun size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Smart Light Control",
              desc: "From sheer to blackout, select fabrics to manage natural lighting effortlessly.",
            },
            {
              icon: <FaVolumeUp size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Sound Insulation",
              desc: "Helps minimize external noise for peaceful indoor environments.",
            },
            {
              icon: <FaVideo size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Digital Demo Access",
              desc: "View products via video previews or remote walkthroughs.",
            },
            {
              icon: <FaStar size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Lasting Performance",
              desc: "UV-resistant, easy-to-clean, and highly durable materials.",
            },
            {
              icon: <FaHome size={40} className="mx-auto mb-4 text-[#1e3a5f]" />,
              title: "Design Variety",
              desc: "From minimalist office looks to ornate luxury curtain styles.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#2e2e2e] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#2e2e2e] dark:text-white">
            Explore Our Window Solutions
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Discover modern blackout blinds, vertical and roller styles, and soft fabric curtains designed
            for luxury and function.
          </p>
          <Products_Blackout />
        </div>
      </section>
      <CustomerReviews />
      <section className="bg-[#dde7ef] dark:bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2e2e2e] dark:text-white">
            What Makes Curtains Furniture Stand Out
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            Enjoy top-tier customer service, high-quality products, and quick project execution — from
            measurement to installation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#1e3a5f] dark:text-white">
                Complimentary Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                On-site advice with design guidance and accurate measurements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#1e3a5f] dark:text-white">
                Bespoke Fabrication
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Custom-built for each order using durable and aesthetic materials.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#1e3a5f] dark:text-white">
                Swift Turnaround
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Enjoy installation within 48–72 hours from final quote approval.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-[#1e3a5f] dark:text-white">
                Quality Assurance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All products meet international quality, safety, and fire resistance benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#1e3a5f] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Free Design Visit in Qatar
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact <strong>Curtains Furniture</strong> for tailored window treatments with fast turnaround and expert installation.
        </p>
        <a
          href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#1e3a5f] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Chat with Us on WhatsApp
        </a>
       
      </section>
    </div>
  );
};

export default Furniture;
