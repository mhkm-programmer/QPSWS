import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaList,
  FaTimes,
} from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANY_INFO = {
  name: "F L M SUPER TRADING AND CONTRACTING",
  arabic: "اف ال ام سوبر ترادينغ اند كونتراكتينغ",
  cr: "212381",
  rokcha: "289601",
  phone: "+97431602956",
  email: "mobarakhossain23456@gmail.com",
  location: "Zone 26, Street 850, Building 45, Flat 2, Apartment No. 5, Doha, Qatar",
  services: [
    "Aluminium Fabrication & Installation",
    "Glass & Mirror Works",
    "Gypsum Partition & Ceiling",
    "Printing",
    "Parking Shade",
    "UPVC Doors & Windows",
    "MS Welding & Steel Fabrication",
    "Furniture & Upholstery",
  ],
  facebook: "https://www.facebook.com/share/1Ez4QhtfFn/",
  instagram: "https://www.instagram.com/mobarakmunna/profilecard/?igsh=MXYwMXdhdDhqNnRjOQ==",
  whatsapp: "https://wa.me/97431602956",
};

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const vh = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollTop > 120);
      setShowScrollBottom(scrollTop + vh < fullHeight - 120);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const iconSize = isMobile ? 20 : 26;

  return (
    <>
      {/* Info + WhatsApp Container */}
      <div className="fixed bottom-5 right-4 flex flex-col items-center z-50 space-y-3 max-w-[90vw] sm:max-w-xs md:max-w-sm lg:max-w-md">
        {/* Info Toggle & Panel */}
        <div className="flex flex-col items-center w-full">
          <motion.button
            aria-label={infoOpen ? "Close company info" : "Open company info"}
            onClick={() => setInfoOpen((o) => !o)}
            className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-transform duration-150"
            whileTap={{ scale: 0.95 }}
          >
            {infoOpen ? <FaTimes size={18} /> : <FaList size={18} />}
            <span className="text-sm font-semibold select-none">{infoOpen ? "Hide Info" : "Info"}</span>
          </motion.button>

          <AnimatePresence>
            {infoOpen && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-5 text-xs sm:text-sm leading-relaxed border border-gray-300 dark:border-gray-700 mt-3"
                style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
              >
                <h3 className="font-extrabold uppercase text-emerald-900 dark:text-emerald-400 tracking-widest mb-2 text-center text-base sm:text-lg">
                  {COMPANY_INFO.name}
                </h3>
                <hr className="border-emerald-400 mb-3 opacity-40" />
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Arabic:</span> {COMPANY_INFO.arabic}
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">CR No.:</span> {COMPANY_INFO.cr}
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Rokcha No.:</span> {COMPANY_INFO.rokcha}
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="underline hover:text-emerald-600">
                    {COMPANY_INFO.phone}
                  </a>
                </p>
                <p className="mb-1 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="underline hover:text-emerald-600">
                    {COMPANY_INFO.email}
                  </a>
                </p>
                <p className="mb-3 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Location:</span> {COMPANY_INFO.location}
                </p>
                <div className="mb-3">
                  <span className="font-semibold block mb-1 text-gray-800 dark:text-gray-200">
                    Services:
                  </span>
                  <ul className="list-disc list-inside space-y-0.5 ml-3 text-gray-700 dark:text-gray-300">
                    {COMPANY_INFO.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 justify-center mt-4 text-sm sm:text-base">
                  <a
                    href={COMPANY_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                    aria-label="Facebook"
                  >
                    Facebook
                  </a>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 font-semibold"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp button - primary CTA */}
        <a
          href={COMPANY_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform duration-200 ease-in-out"
        >
          <FaWhatsapp size={iconSize} />
        </a>

        {/* Phone and Email buttons below WhatsApp */}
        <div className="flex space-x-3 mt-1">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            aria-label="Call"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition-transform duration-150"
          >
            <FaPhoneAlt size={iconSize - 4} />
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            aria-label="Email"
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-md transition-transform duration-150"
          >
            <FaEnvelope size={iconSize - 4} />
          </a>
        </div>
      </div>

      {/* Scroll Controls on bottom-left */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-20 left-4 bg-gray-800 text-white p-3 rounded-full shadow-md transition"
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-16 left-4 bg-gray-800 text-white p-3 rounded-full shadow-md transition"
          >
            <FaArrowDown size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBubble;
