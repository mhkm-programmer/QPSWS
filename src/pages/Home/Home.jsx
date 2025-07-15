import React from "react";

// Page & Section Components
import PageTitle from "../reusable/PageTitle";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import Products_Curtains from "./Products_Curtains";
import Products_Blackout from "./Products_Blackout";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscreibeContact from "../contact/SubscreibeContact";

const Home = () => {
  return (
    <div className="home-page">
      {/* SEO Title */}
      <PageTitle title="Curtains Furniture | Home" />

      {/* Hero Section */}
      <section className="hero-slider">
        <HeroSlider />
      </section>

      {/* Curtains Collection */}
      <section className="products-curtains my-16">
        <Products_Curtains />
      </section>

      {/* Blackout Curtains Showcase */}
      <section className="products-blackout my-16">
        <Products_Blackout />
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us my-16">
        <WhyChoose />
      </section>

      {/* Our Clients */}
      <section className="our-clients my-16">
        <OurClient />
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews my-16">
        <CustomerReviews />
      </section>

      {/* Subscription / Contact Section */}
      <section className="subscribe-contact my-16">
        <SubscreibeContact />
      </section>
    </div>
  );
};

export default Home;
