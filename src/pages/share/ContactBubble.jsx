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

const ContactBubble = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(true);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle scroll visibility
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

  // Scroll functions
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

  return (
    <>
      {/* 🟢 Contact Bubble - No Longer Draggable */}
      <div className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/+97455760872"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-green-500 hover:bg-green-600 shadow-md transition"
        >
          <FaWhatsapp size={isMobile ? 22 : 28} />
        </a>

        {/* Phone */}
        <a
          href="tel:+97455760872"
          className="p-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-md transition"
        >
          <FaPhoneAlt size={isMobile ? 22 : 28} />
        </a>

        {/* Email */}
        <a
          href="mailto:qatarwintrading@gmail.com"
          className="p-4 rounded-full text-white bg-red-500 hover:bg-red-600 shadow-md transition"
        >
          <FaEnvelope size={isMobile ? 22 : 28} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/rokibwin?igsh=anU3ejd4dHFneDhi"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-md transition"
        >
          <FaInstagram size={isMobile ? 22 : 28} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61573137238181&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-blue-700 hover:bg-blue-800 shadow-md transition"
        >
          <FaFacebook size={isMobile ? 22 : 28} />
        </a>
      </div>

      {/* 🔵 Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="fixed bottom-16 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* 🔴 Scroll to Bottom Button */}
      {showScrollBottom && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToBottom}
        >
          <FaArrowDown size={24} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;