import { Link } from 'react-router-dom';
import PageTitle from '../reusable/PageTitle';
import React from 'react';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageTitle title="Curtains Furniture | Page Not Found" />
      <motion.div
        className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
          {/* Image */}
          <div className="flex-1 max-w-lg">
            <img
              src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
              alt="Curtains Furniture Not Found"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="mt-12 flex-1 max-w-lg space-y-4 md:mt-0">
            <h3 className="text-[#6B4226] font-semibold text-xl">404 - Page Not Found</h3>
            <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
              Oops! This page doesn’t exist.
            </p>
            <p className="text-gray-600 text-base">
              We couldn’t find the page you were looking for. It may have been moved or deleted.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#6B4226] hover:text-[#8B5A2B] font-medium transition duration-150"
            >
              Go Back Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
