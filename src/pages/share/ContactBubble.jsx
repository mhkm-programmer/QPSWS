import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaPinterest,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANY_INFO = {
  name: "Doha Plumbing Service",
  nameAr: "الدوحة لخدمات السباكة والكهرباء والصيانة",
  phone: "+97431394550",
  whatsapp: "https://wa.me/97431394550",
  email: "info.plumber360@gmail.com",
  facebook: "https://www.facebook.com/plumbingelectricdoha",
  instagram: "https://www.instagram.com/plumbing9335/#",
  youtube: "https://www.youtube.com/@MaintenanceServicePlumberDoha",
  pinterest: "https://www.pinterest.com/plumbingelectricdoha/",
};

const ICONS = [
  { icon: <FaFacebook />, link: COMPANY_INFO.facebook, label: "Facebook", color: "from-blue-500 to-blue-700" },
  { icon: <FaInstagram />, link: COMPANY_INFO.instagram, label: "Instagram", color: "from-pink-500 to-pink-700" },
  { icon: <FaYoutube />, link: COMPANY_INFO.youtube, label: "YouTube", color: "from-red-500 to-red-700" },
  { icon: <FaPinterest />, link: COMPANY_INFO.pinterest, label: "Pinterest", color: "from-red-400 to-red-600" },
  { icon: <FaWhatsapp />, link: COMPANY_INFO.whatsapp, label: "WhatsApp", color: "from-green-500 to-green-700" },
  { icon: <FaPhoneAlt />, link: `tel:${COMPANY_INFO.phone}`, label: "Call Us", color: "from-cyan-500 to-cyan-700" },
  { icon: <FaEnvelope />, link: `mailto:${COMPANY_INFO.email}`, label: "Email", color: "from-purple-500 to-purple-700" },
];

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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

  const iconSize = isMobile ? 22 : 26;

  return (
    <>
      {/* ====== DESKTOP VIEW ====== */}
      {!isMobile && (
        <motion.div
          className="fixed bottom-5 right-5 flex flex-col items-center space-y-3 z-50 font-sans"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
         

          {/* Contact Icons */}
          {ICONS.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group bg-gradient-to-br ${item.color} text-white p-3 rounded-full shadow-lg transition`}
            >
              {React.cloneElement(item.icon, { size: iconSize })}
              {/* Tooltip */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {item.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* ====== MOBILE VIEW ====== */}
      {isMobile && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
          {/* Expand/Close Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Contact Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaPlus size={24} />}
          </motion.button>

          {/* Expanding Contact Menu */}
          <AnimatePresence>
            {isOpen &&
              ICONS.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.06 }}
                  className={`bg-gradient-to-br ${item.color} text-white p-3 rounded-full shadow-lg`}
                >
                  {React.cloneElement(item.icon, { size: iconSize })}
                </motion.a>
              ))}
          </AnimatePresence>
        </div>
      )}

      {/* ====== SCROLL BUTTONS ====== */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-24 left-5 bg-gradient-to-br from-slate-700 to-slate-900 text-white p-3 rounded-full shadow-xl"
          >
            <FaArrowUp size={20} />
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
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-16 left-5 bg-gradient-to-br from-slate-700 to-slate-900 text-white p-3 rounded-full shadow-xl"
          >
            <FaArrowDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBubble;
