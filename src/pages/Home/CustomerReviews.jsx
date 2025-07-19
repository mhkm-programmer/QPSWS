import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center text-emerald-500 mt-2">
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
        "The aluminium fabrication was precise and durable. F L M truly delivered on time and to spec.",
      name: "Ahmed Al-Ansari",
      title: "Site Supervisor, Doha Build Co.",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1ca7613/Noor_Fatima.jpg",
      quote:
        "Top-quality mirror installation. Our spa now has a sleek and modern look. Highly recommended!",
      name: "Noor Fatima",
      title: "Spa Owner, Lusail",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/67a01a1c849be/Mohammed_Khalifa.jpg",
      quote:
        "Gypsum partitioning was handled efficiently. Clean finishes, excellent project coordination.",
      name: "Mohammed Khalifa",
      title: "Architect, Al Wakrah",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1c6130d/Sara_Ibrahim.jpg",
      quote:
        "We needed urgent printing support for an event—F L M was fast, creative, and reliable!",
      name: "Sara Ibrahim",
      title: "Marketing Executive, QEvents",
      rating: 4,
    },
    {
      image: "https://8upload.com/image/67a01a1c57f2d/Hassan_Shah.jpg",
      quote:
        "The parking shades installed at our factory are sturdy and well-finished. Great value.",
      name: "Hassan Shah",
      title: "Operations Manager, Doha Industrial Group",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/67a01a1c3cf90/Fatima_Al-Kuwari.jpg",
      quote:
        "The UPVC windows were sealed perfectly and look great. Energy savings noticeable already!",
      name: "Fatima Al-Kuwari",
      title: "Homeowner, Al Rayyan",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1c25f5b/Tariq_Abdul.jpg",
      quote:
        "F L M's steel fabrication team met our structural specs exactly. Reliable and professional.",
      name: "Tariq Abdul",
      title: "Engineer, Falcon Steel",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/67a01a1c0c90d/Layla_Hassan.jpg",
      quote:
        "Our custom sofa was upholstered beautifully. F L M added real luxury to our space.",
      name: "Layla Hassan",
      title: "Interior Designer, The Luxe Studio",
      rating: 4.5,
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
        className="w-24 h-24 rounded-full object-cover border-4 border-emerald-600 shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        “{review.quote}”
      </blockquote>
      <StarRating rating={review.rating} />
      <div className="text-center">
        <p className="font-semibold text-emerald-700 dark:text-emerald-400 text-lg">
          {review.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-emerald-800 dark:text-white mb-4">
          Customer Testimonials
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-10">
          Real feedback from clients who’ve experienced excellence with F L M SUPER TRADING AND CONTRACTING across diverse services.
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
