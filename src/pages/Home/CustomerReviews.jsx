import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center text-blue-500 mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/6886c936b5a8b/Customer1.png",
      quote:
        "Our villa had a sudden pipe burst — Doha Plumbing responded within an hour and fixed it professionally. Highly reliable!",
      name: "Mohammed Al-Khalifa",
      title: "Homeowner, Al Wakrah",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/6886c9372bc20/Customer2.png",
      quote:
        "Excellent bathroom fitting service. The team was punctual, polite, and left the place spotless after work.",
      name: "Aisha Rahman",
      title: "Apartment Owner, Lusail",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/6886c93780b21/Customer3.png",
      quote:
        "We had drainage issues at our restaurant. Doha Plumbing handled it quickly without disrupting our business.",
      name: "Omar Hassan",
      title: "Restaurant Manager, West Bay",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/6886c937cee01/Customer4.png",
      quote:
        "Professional installation of water heaters. Very satisfied with the work quality and fair pricing.",
      name: "Fatima Al-Thani",
      title: "Landlord, Al Rayyan",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/6886c93835b09/Customer5.png",
      quote:
        "They installed new kitchen pipelines in our office pantry. Clean, efficient, and on schedule.",
      name: "Khalid Mahmoud",
      title: "Office Manager, Doha",
      rating: 4,
    },
    {
      image: "https://8upload.com/image/6886c9388b9d9/Customer6.png",
      quote:
        "I trust Doha Plumbing for all maintenance. Affordable, transparent, and their WhatsApp booking is so convenient.",
      name: "Sara Ibrahim",
      title: "Resident, Najma",
      rating: 5,
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-4 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03] dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        “{review.quote}”
      </blockquote>
      <StarRating rating={review.rating} />
      <div className="text-center">
        <p className="font-semibold text-blue-700 dark:text-blue-400 text-lg">
          {review.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {review.title}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Trusted plumbing solutions for Doha residents and businesses. Here’s
          what our happy clients say about{" "}
          <span className="font-semibold text-cyan-600">
            Doha Plumbing Service
          </span>
          .
        </p>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4500}
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
