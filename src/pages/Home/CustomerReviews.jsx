import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center text-[#FFD700] mt-2">
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
      image: "https://8upload.com/image/67a01a1ccc5a5/Ahmed_Al-Ansari.jpg",
      quote:
        "LuxeFurnish exceeded my expectations with their custom curtains and luxury furniture service.",
      name: "Ahmed Al-Ansari",
      title: "Business Owner, Doha",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote:
        "Their creative design transformed our interiors into a stylish and warm living space.",
      name: "Noor Fatima",
      title: "HR Manager, Qatar Tech Solutions",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote:
        "Excellent craftsmanship and attention to detail. Highly recommended for premium furnishings.",
      name: "Mohammed Khalifa",
      title: "CEO, Khalifa Enterprises",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote:
        "From consultation to installation, their service was flawless and elegant.",
      name: "Sara Ibrahim",
      title: "Entrepreneur, Doha",
      rating: 4,
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-4 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#B88A44] shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        “{review.quote}”
      </blockquote>
      <StarRating rating={review.rating} />
      <div className="text-center">
        <p className="font-semibold text-[#B88A44] dark:text-[#D1A75C] text-lg">{review.name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-16 bg-[#FAF7EF] dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#1E2A3A] dark:text-white mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10">
          See how our premium curtains, furniture, and design services are making homes more beautiful across Qatar.
        </p>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4000}
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
