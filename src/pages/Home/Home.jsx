import React from "react";
import { motion } from "framer-motion";

// Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";
import Products_FLM from "./Products_FLM";

const sectionFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="home-page px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-gray-800">
      {/* Meta */}
      <PageTitle title="F L M Super Trading and Contracting | Aluminium, Gypsum, Upholstery, and More" />

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

      {/* Services Section (using Products_FLM) */}
      <motion.section
        className="services-section my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700">
          Our Core Services
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed px-2 sm:px-0">
          At F L M Super Trading and Contracting, we provide a wide range of expert services including aluminium fabrication, glass & mirror works, gypsum partitions, UPVC doors, parking shades, and much more.
        </p>
        <Products_FLM />
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="why-choose-us my-16 sm:my-20 px-2 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700">
          Why Choose F L M Super Trading and Contracting?
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed px-4 sm:px-0">
          Backed by skilled professionals, cutting-edge tools, and years of industry experience — we deliver tailor-made interior and exterior solutions with unmatched precision and quality.
        </p>
        <WhyChoose />
      </motion.section>

      {/* Our Clients */}
      <motion.section
        className="our-clients my-16 sm:my-20 px-2 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700">
          Clients Who Trust Us
        </h2>
        <OurClient />
      </motion.section>

      {/* Customer Testimonials */}
      <motion.section
        className="customer-reviews my-16 sm:my-20 px-2 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={sectionFadeUp}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700">
          What Our Clients Say
        </h2>
        <CustomerReviews />
      </motion.section>

      {/* Contact & Newsletter */}
      <motion.section
        className="subscribe-contact my-16 sm:my-20 px-2 sm:px-0"
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
