import React from "react";

// Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import WhyChoose from "./WhyChoose";

import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";
import Products_FLM from "./Products_FLM";

const Home = () => {
  return (
    <div className="home-page font-['Roboto'] text-gray-800 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

      <PageTitle title="Doha Plumbing Service | الدوحة لخدمات السباكة والكهرباء والصيانة" />

      {/* Hero Section */}
      <section aria-label="Hero Banner" className="mb-16">
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section className="services-section my-16 sm:my-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#00B4D8] mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed px-2 sm:px-0">
          We provide professional plumbing, electrical, and home maintenance solutions across Qatar. 
          Our team ensures fast, reliable, and affordable service for residential, commercial, and industrial clients.
        </p>
        <div>
          <Products_FLM />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us my-16 sm:my-20 bg-[#f5f8fa] py-12 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#0077b6] mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed px-4 sm:px-0">
          24/7 availability, certified professionals, transparent pricing, and fast emergency response. 
          We guarantee quality service and satisfaction for every project, big or small.
        </p>
        <div>
          <WhyChoose />
        </div>
      </section>

      {/* Testimonials */}
      <section className="customer-reviews my-16 sm:my-20 bg-[#f5f8fa] py-12 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#00B4D8] mb-6">
          What Our Clients Say
        </h2>
        <div>
          <CustomerReviews />
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="cta-section my-20 text-center bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 py-16 px-6 rounded-2xl shadow-2xl text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            🚰 Need a <span className="text-cyan-300">Plumber</span> Urgently?
          </h2>
          <p className="mb-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            Fast, reliable, and affordable plumbing solutions available <span className="font-semibold">24/7 across Doha</span>.
            Don’t wait — we’re just a call or message away.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <a
              href="tel:+97431394550"
              className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-cyan-100 hover:scale-105 transition-transform duration-300"
            >
              📞 Call Now: 3139 4550
            </a>
            <a
              href="https://wa.me/97431394550"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Embed contact form */}
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Send Us a Quick Message
            </h3>
            <SubscreibeContact />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
