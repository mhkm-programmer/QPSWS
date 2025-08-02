import { Link } from "react-router-dom";
import PageTitle from "../reusable/PageTitle";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-br from-white via-[#f0f3f6] to-[#e8ecef] min-h-screen flex items-center justify-center px-6 py-16"
    >
      <PageTitle title="F L M SUPER TRADING AND CONTRACTING | Page Not Found" />

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row-reverse items-center justify-between max-w-6xl w-full gap-12 bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/r03Pv6N/6342464-min.jpg"
            alt="F L M SUPER TRADING AND CONTRACTING - Page Not Found"
            className="w-full h-auto drop-shadow-lg rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="text-center md:text-left space-y-5">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700">
              404 — Page Not Found
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl">
              The page you’re looking for isn’t available. It might have been moved, renamed, or removed.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full font-semibold hover:bg-emerald-800 transition"
              >
                Go Back Home <FaArrowRight />
              </Link>
            </div>

            {/* Company Snapshot */}
            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                F L M SUPER TRADING AND CONTRACTING
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Arabic: اف ال ام سوبر ترادينغ اند كونتراكتينغ
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                CR No.: 212381 &nbsp;|&nbsp; Rokcha No.: 289601
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> <span>31602956</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />{" "}
                  <span>
                    Zone 26, Street 850, Building 45, Flat 2, Apartment No. 5
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope /> <span>mobarakhossain23456@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/share/1Ez4QhtfFn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center gap-1 hover:text-emerald-600"
                  >
                    <FaFacebook /> Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/mobarakmunna/profilecard/?igsh=MXYwMXdhdDhqNnRjOQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center gap-1 hover:text-emerald-600"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold">Services:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Aluminium Fabrication & Installation</li>
                  <li>Glass & Mirror Works</li>
                  <li>Gypsum Partition & Ceiling</li>
                  <li>Printing</li>
                  <li>Parking Shade</li>
                  <li>UPVC Doors & Windows</li>
                  <li>MS Welding & Steel Fabrication</li>
                  <li>Furniture & Upholstery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default ErrorPage;
