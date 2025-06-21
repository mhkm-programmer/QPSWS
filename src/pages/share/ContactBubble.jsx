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

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Scroll visibility detection
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

  return (
    <>
      {/* 🟢 Contact & Social Bubble */}
      <div className="fixed bottom-32 right-5 flex flex-col items-center space-y-3 z-50">
        <a
          href="https://wa.me/97466280037"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-green-600 hover:bg-green-700 shadow-md transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={isMobile ? 22 : 28} />
        </a>

        <a
          href="tel:+97466280037"
          className="p-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 shadow-md transition"
          aria-label="Phone"
        >
          <FaPhoneAlt size={isMobile ? 22 : 28} />
        </a>

        <a
          href="mailto:info.curtainsfurniture@gmail.com"
          className="p-4 rounded-full text-white bg-red-500 hover:bg-red-600 shadow-md transition"
          aria-label="Email"
        >
          <FaEnvelope size={isMobile ? 22 : 28} />
        </a>

        <a
          href="https://www.instagram.com/saadbinghanimfurniture?igsh=MWFrZGp2b21jeXpldA=="
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-md transition"
          aria-label="Instagram"
        >
          <FaInstagram size={isMobile ? 22 : 28} />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61563249227531&mibextid=rS40aB7S9Ucbxw6v"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full text-white bg-blue-700 hover:bg-blue-800 shadow-md transition"
          aria-label="Facebook"
        >
          <FaFacebook size={isMobile ? 22 : 28} />
        </a>
      </div>

      {/* 🔵 Scroll to Top */}
      {showScrollTop && (
        <button
          className="fixed bottom-16 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* 🔴 Scroll to Bottom */}
      {showScrollBottom && (
        <button
          className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
        >
          <FaArrowDown size={24} />
        </button>
      )}
    </>
  );
};

export default ContactBubble;
