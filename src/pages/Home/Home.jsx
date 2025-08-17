import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";
import Products_FLM from "./Products_FLM";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: custom * 0.1,
    },
  }),
};

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="home-page px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-gray-800">
      <PageTitle title="F L M Super Trading and Contracting | Aluminium, Gypsum, Upholstery, and More" />

      {/* Hero */}
      <motion.section
        aria-label="Hero banner"
        className="hero-slider"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : fadeUp}
      >
        <HeroSlider />
      </motion.section>

      {/* Core Services */}
      <motion.section
        className="services-section my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Core services offered"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-emerald-700"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed px-2 sm:px-0"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          F L M Super Trading and Contracting delivers comprehensive contracting solutions across Qatar: aluminium fabrication & installation, glass & mirror works, gypsum partitioning & ceilings, printing, parking shade structures, UPVC doors & windows, MS welding & steel fabrication, and furniture & upholstery. Tailored. Reliable. Professional.
        </motion.p>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <Products_FLM />
        </motion.div>
      </motion.section>

      {/* Why Choose */}
      <motion.section
        className="why-choose-us my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Why choose us"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-emerald-700"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Why Choose F L M Super Trading and Contracting?
        </motion.h2>
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed px-4 sm:px-0"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Backed by experienced professionals, industry-grade materials, and a commitment to timely delivery, we craft solutions that stand the test of time and delight clients across residential, commercial, and industrial sectors.
        </motion.p>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <WhyChoose />
        </motion.div>
      </motion.section>

      {/* Clients */}
      <motion.section
        className="our-clients my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Our clients"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          Trusted by Leading Clients
        </motion.h2>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <OurClient />
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="customer-reviews my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : container}
        aria-label="Customer reviews"
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-6 text-emerald-700"
          variants={shouldReduceMotion ? {} : fadeUp}
        >
          What Our Clients Say
        </motion.h2>
        <motion.div variants={shouldReduceMotion ? {} : fadeUp}>
          <CustomerReviews />
        </motion.div>
      </motion.section>

      {/* Contact / Newsletter */}
      <motion.section
        className="subscribe-contact my-16 sm:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={shouldReduceMotion ? {} : fadeUp}
        aria-label="Contact and newsletter"
      >
        <SubscreibeContact />
      </motion.section>
    </div>
  );
};

export default Home;
