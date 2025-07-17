import React from "react";
import { motion } from "framer-motion";

// Page & Section Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import Products_Curtains from "./Products_Curtains";
import Products_Blackout from "./Products_Blackout";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesSection = () => {
  const services = [
    "Expert Aluminium Fabrication & Precision Installation",
    "Innovative Glass Solutions & Custom Mirror Works",
    "Quality Gypsum Partitions & Professional Printing Services",
    "Durable Parking Shade Structures for Long-Term Protection",
    "Energy-Saving UPVC Doors & Windows with Superior Finish",
    "Robust MS Welding & Steel Fabrication Tailored to Your Needs",
  ];

  return (
    <section className="services-section my-16 max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-3xl font-semibold text-center mb-8 text-[#C69425]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        Our Specialized Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 cursor-default"
            variants={fadeUpVariant}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(198, 148, 37, 0.5)" }}
          >
            <h3 className="text-xl font-medium text-gray-800">{service}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Home = () => {
  const sectionFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="home-page">
      {/* SEO Title */}
      <PageTitle title="F L M Super Trading and Contracting | Premium Trading & Contracting Solutions" />

      {/* Hero Section */}
      <motion.section
        className="hero-slider"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <HeroSlider />
      </motion.section>

      {/* Curtains Collection */}
      <motion.section
        className="products-curtains my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#6B4226]">
          Exquisite Curtains Collection
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
          Explore our elegant range of curtains crafted with premium materials and designed to elevate any living or working space with timeless style.
        </p>
        <Products_Curtains />
      </motion.section>

      {/* Blackout Curtains Showcase */}
      <motion.section
        className="products-blackout my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#6B4226]">
          Advanced Blackout Curtains
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
          Experience total privacy and light control with our premium blackout curtains, expertly tailored for homes, offices, and hospitality environments.
        </p>
        <Products_Blackout />
      </motion.section>

      {/* Our Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <motion.section
        className="why-choose-us my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#6B4226]">
          Why Choose F L M Super Trading and Contracting?
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-8">
          With proven expertise and a commitment to excellence, we deliver durable, high-quality trading and contracting services that exceed expectations and drive success.
        </p>
        <WhyChoose />
      </motion.section>

      {/* Our Clients */}
      <motion.section
        className="our-clients my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#6B4226]">
          Trusted by Industry Leaders
        </h2>
        <OurClient />
      </motion.section>

      {/* Customer Reviews */}
      <motion.section
        className="customer-reviews my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#6B4226]">
          Hear from Our Valued Customers
        </h2>
        <CustomerReviews />
      </motion.section>

      {/* Subscription / Contact Section */}
      <motion.section
        className="subscribe-contact my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <SubscreibeContact />
      </motion.section>
    </div>
  );
};

export default Home;
