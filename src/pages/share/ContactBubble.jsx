import {
  FaArrowDown,
  FaArrowUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Detect scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      setShowScrollTop(scrollTop > 100);
      setShowScrollBottom(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  const iconSize = isMobile ? 20 : 26;

  const buttons = [
    {
      href: "https://wa.me/97466280037",
      icon: <FaWhatsapp size={iconSize} />,
      bg: "bg-green-600",
      hover: "hover:bg-green-700",
      label: "WhatsApp",
    },
    {
      href: "tel:+97466280037",
      icon: <FaPhoneAlt size={iconSize} />,
      bg: "bg-blue-500",
      hover: "hover:bg-blue-600",
      label: "Phone",
    },
    {
      href: "mailto:info.curtainsfurniture@gmail.com",
      icon: <FaEnvelope size={iconSize} />,
      bg: "bg-red-500",
      hover: "hover:bg-red-600",
      label: "Email",
    },
    {
      href: "https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA==",
      icon: <FaInstagram size={iconSize} />,
      bg: "bg-pink-500",
      hover: "hover:bg-pink-600",
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v",
      icon: <FaFacebook size={iconSize} />,
      bg: "bg-blue-700",
      hover: "hover:bg-blue-800",
      label: "Facebook",
    },
  ];

  return (
    <>
      {/* 📞 Contact Icons */}
      <motion.div
        className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {buttons.map((btn, index) => (
          <motion.a
            key={index}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.bg} ${btn.hover} text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110`}
            aria-label={btn.label}
            whileHover={{ rotate: 5 }}
          >
            {btn.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* 🔼 Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-16 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 🔽 Scroll to Bottom */}
      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
            onClick={scrollToBottom}
            aria-label="Scroll to bottom"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowDown size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactBubble;
