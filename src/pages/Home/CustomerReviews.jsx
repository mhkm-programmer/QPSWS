import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote: "LuxeFurnish exceeded my expectations with their custom furniture and professional service.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote: "Their expertise in interior design transformed our home into a modern masterpiece.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote: "Reliable, efficient, and high-quality craftsmanship. Highly recommend LuxeFurnish.",
      name: "Mohammed Khalifa",
      title: "CEO, Khalifa Enterprises",
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote: "Top-notch furniture and excellent attention to detail!",
      name: "Sara Ibrahim",
      title: "Entrepreneur, Doha",
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#6B4226] transition-all duration-300 transform hover:scale-110"
      />
      <blockquote className="text-xl italic font-medium text-center text-gray-700 dark:text-gray-300">
        "{review.quote}"
      </blockquote>
      <div className="text-center">
        <p className="font-semibold text-[#6B4226] dark:text-[#8B5A2B]">{review.name}</p>
        <p className="text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-8 lg:py-12 bg-[#F5F5DC] dark:bg-gray-800">
      <div className="container  px-6 mx-6">
        <h2 className="text-4xl font-semibold text-[#6B4226] text-center mb-8">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Hear from our satisfied clients who have experienced the LuxeFurnish difference.
        </p>
        <div className="max-w-5xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={3500}
            infinite
            animationDuration={1000}
            disableButtonsControls
            disableDotsControls={false}
            responsive={{
              0: { items: 1 },
              640: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
