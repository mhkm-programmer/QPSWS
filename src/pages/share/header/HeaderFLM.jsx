import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const HeaderDohaPlumbing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Plumber", to: "/services" },
    { label: "Contact", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const matches = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
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
    <header className="w-full shadow-md font-sans sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#112240] text-gray-200 text-xs sm:text-sm px-4 py-2 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="tel:31394550" className="flex items-center gap-1 hover:text-[#00B4D8]">
            <FaPhoneAlt /> 31394550
          </a>
          <a
            href="https://wa.me/97431394550"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#00B4D8]"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:info.plumber360@gmail.com"
            className="flex items-center gap-1 hover:text-[#00B4D8]"
          >
            <FaEnvelope /> Email
          </a>
        </div>
        <div className="flex items-center gap-3 text-lg">
          <a href="https://www.facebook.com/plumbingelectricdoha" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8]"><FaFacebook /></a>
          <a href="https://www.instagram.com/plumbing9335/" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8]"><FaInstagram /></a>
          <a href="https://www.youtube.com/@MaintenanceServicePlumberDoha" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8]"><FaYoutube /></a>
          <a href="https://www.pinterest.com/plumbingelectricdoha/" target="_blank" rel="noreferrer" className="hover:text-[#00B4D8]"><FaPinterest /></a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#0A192F] text-white px-4 py-3 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-[#00B4D8]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Logo */}
        <NavLink to="/" className="text-center flex-grow md:flex-grow-0">
          <img
            src="https://8upload.com/image/68a21a1bd76fb/Doha_Plumber.png"
            alt="Doha Plumbing Logo"
            className="h-12 w-auto rounded-md bg-white p-1 mx-auto"
          />
        </NavLink>

        {/* Right: Mobile Search Toggle */}
        <button
          className="md:hidden text-2xl text-[#00B4D8]"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FaSearch />
        </button>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm uppercase font-medium">
            {menuItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-[#00B4D8] font-semibold" : "hover:text-[#00B4D8]"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search..."
              className="px-3 py-1 rounded-md text-black w-40 focus:w-60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#0A192F]"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden bg-[#112240] px-4 py-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#112240] text-white flex flex-col px-4 py-4 space-y-3">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-gray-700 hover:text-[#00B4D8]"
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
                    document.getElementById(res.elementId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
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

export default HeaderDohaPlumbing;
