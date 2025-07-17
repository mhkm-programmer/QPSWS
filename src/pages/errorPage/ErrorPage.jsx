import { Link } from 'react-router-dom';
import PageTitle from '../reusable/PageTitle';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-br from-white via-[#f8f4f1] to-[#f2eae5] min-h-screen flex items-center justify-center px-6 py-16"
    >
      <PageTitle title="Curtains Furniture | Page Not Found" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row-reverse items-center justify-center max-w-6xl w-full gap-12"
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
            alt="Curtains Furniture Not Found"
            className="w-full h-auto drop-shadow-lg rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-5">
          <h1 className="text-[#7b4c2f] text-4xl font-extrabold sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Oops! The page you’re looking for doesn’t exist. It may have been removed or renamed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 text-white bg-[#7b4c2f] hover:bg-[#5f3a22] rounded-full shadow-md transition-all duration-300 text-base font-semibold"
          >
            Go Back Home <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
