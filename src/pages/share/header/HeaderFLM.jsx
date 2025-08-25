import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const HeaderQPSWS = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Parking Shades", to: "/parking-shades" },
    { label: "Welding Solutions", to: "/welding-solutions" },
    { label: "Contact", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const matches = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input, span")
    ).filter((el) => el.textContent.toLowerCase().includes(query));

    if (matches.length) {
      matches.forEach((el, i) => {
        el.id = `search-result-${i}`;
        el.style.backgroundColor = "#E0F7FA";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });
      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent,
          elementId: `search-result-${i}`,
        }))
      );
    } else {
      alert("No matching content found.");
      setSearchResults([]);
    }

    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#0B1A2C] text-gray-200 text-xs sm:text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-center sm:text-left">
            <a
              href="tel:+97474402654"
              className="flex items-center gap-1 hover:text-[#FFD700] transition"
            >
              <FaPhoneAlt className="text-[#FFD700]" />
              +974 7440 2654
            </a>
            <a
              href="https://wa.me/97474402654"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#25D366] transition"
            >
              <FaWhatsapp className="text-green-500" /> WhatsApp
            </a>
            <a
              href="mailto:parkingwelding.qa@gmail.com"
              className="flex items-center gap-1 hover:text-[#FFD700] transition"
            >
              <FaEnvelope className="text-red-400" /> Email
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end items-center gap-4 text-lg">
            <a
              href="https://www.facebook.com/people/Welding-Solutions-and-car-parking-shade/61561350087585/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877F2] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mahamod4506"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#112240] text-white px-4 py-3 flex items-center justify-between relative">
        {/* Left: Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-[#FFD700] absolute left-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Logo */}
        <NavLink to="/" className="mx-auto flex items-center gap-3 text-center">
          <img
            src="https://8upload.com/image/68a21a1bd76fb/Doha_Plumber.png"
            alt="Qatar Shade & Weld Logo"
            className="h-12 w-auto rounded-lg bg-white p-1"
          />
        </NavLink>

        {/* Desktop Nav + Search */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm uppercase font-medium">
            {menuItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFD700] font-semibold"
                    : "hover:text-[#FFD700] transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search..."
              className="px-3 py-1 rounded-md text-black w-36 lg:w-48 focus:w-56 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#112240]"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Mobile Search Button */}
        <button
          className="md:hidden text-2xl text-[#FFD700] absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FaSearch />
        </button>
      </div>

      {/* Mobile Search Box */}
      {isSearchOpen && (
        <div className="md:hidden bg-[#0B1A2C] px-4 py-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#0B1A2C] text-white flex flex-col px-4 py-4 space-y-3">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-gray-700 hover:text-[#FFD700] transition"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-[#E0F7FA] text-black px-4 py-3">
          <h2 className="font-semibold text-md">Search Results:</h2>
          <ul className="list-disc pl-6">
            {searchResults.map((res, i) => (
              <li key={i}>
                <a
                  href={`#${res.elementId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(res.elementId)
                      ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    setSearchResults([]);
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(false);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  {res.text}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSearchResults([])}
            className="mt-2 text-red-500 underline text-sm"
          >
            Close Results
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderQPSWS;
