import {
  FaHome,
  FaCouch,
  FaTools,
  FaRecycle,
  FaStar,
  FaCertificate,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import Products_Blackout from "../pages/Home/Products_Blackout";
import CustomerReviews from "../pages/Home/CustomerReviews";

const Furniture = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const upholsteryFeatures = [
    {
      icon: <FaCouch size={42} className="text-emerald-600 mb-4" />,
      title: "Custom Upholstery",
      desc: "Tailored designs with high-quality fabrics and foam for sofas, chairs, beds, and more.",
    },
    {
      icon: <FaTools size={42} className="text-emerald-600 mb-4" />,
      title: "Furniture Repair",
      desc: "Revive broken, loose, or worn furniture with durable, professional restoration.",
    },
    {
      icon: <FaRecycle size={42} className="text-emerald-600 mb-4" />,
      title: "Refinishing & Polishing",
      desc: "Give your furniture a refreshed look with surface treatments, stain or lacquer.",
    },
    {
      icon: <FaHome size={42} className="text-emerald-600 mb-4" />,
      title: "Residential & Commercial",
      desc: "Interior upholstery for villas, hotels, event halls, and corporate offices.",
    },
    {
      icon: <FaStar size={42} className="text-emerald-600 mb-4" />,
      title: "Premium Materials",
      desc: "Choose leather, suede, velvet, or imported designer fabrics from our catalog.",
    },
    {
      icon: <FaCertificate size={42} className="text-emerald-600 mb-4" />,
      title: "Skilled Artisans",
      desc: "Experienced Qatari & international craftsmen ensure top-quality outcomes.",
    },
  ];

  const uniqueServices = [
    {
      title: "Free Site Visit",
      desc: "Our team visits your location for a no-obligation consultation and fabric selection.",
    },
    {
      title: "3–5 Day Turnaround",
      desc: "Rapid delivery of finished jobs with quality assurance, even on custom pieces.",
    },
    {
      title: "Fabric Book On-Site",
      desc: "Browse real fabric swatches during your appointment — no showroom trip needed.",
    },
    {
      title: "Workmanship Warranty",
      desc: "Each service comes with aftercare and a warranty for your peace of mind.",
    },
  ];

  return (
    <div className="font-sans bg-[#f7fdfc] dark:bg-gray-900 dark:text-white text-gray-800">
      <PageTitle title="Furniture & Upholstery | F L M Super Trading and Contracting" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685c9a9746ecf/IMG-20250625-WA0038.jpg"
        title="Expert Furniture & Upholstery"
        subTitle="Craftsmanship. Comfort. Custom Solutions."
      />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-emerald-700">
          Custom Furniture & Reupholstery That Speaks Luxury
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          F L M Super Trading and Contracting delivers stunning custom furniture and upholstery services — from restoration to complete transformation.
        </p>
      </section>

      {/* Auto Slider: Upholstery Features */}
      <section className="bg-white dark:bg-gray-800 py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Slider {...sliderSettings}>
            {upholsteryFeatures.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-10 min-h-[300px] bg-emerald-50 dark:bg-gray-900 rounded-xl shadow-md">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-emerald-800 dark:text-white">{item.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-300 max-w-md">{item.desc}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
            Explore Our Upholstery Projects
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            From modern lounge sets to vintage restorations, see how F L M transforms furniture with elegance and functionality.
          </p>
          <Products_Blackout />
        </div>
      </section>

      <CustomerReviews />

      {/* Unique Services Slider */}
      <section className="bg-emerald-100 dark:bg-gray-800 py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-900 dark:text-white">
            What Makes Our Services Unique
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl mx-auto">
            Personalized, fast, and guaranteed — our approach to furniture is designed around your lifestyle and taste.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {uniqueServices.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-10 min-h-[240px] bg-white dark:bg-gray-900 rounded-xl shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2 text-emerald-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">{service.desc}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-emerald-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Book Your Free Upholstery Visit in Qatar
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Let our team visit your space with fabric samples and ideas — completely free. Custom comfort is one call away.
        </p>
        <a
          href="https://wa.me/97466280037"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-emerald-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Chat With Us on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default Furniture;
