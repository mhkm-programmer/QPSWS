import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const HeaderFLM = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dropdownTimeout = useRef(null);

  const menuItems = [
    { label: "Home", to: "/" },
    {
      label: "Services",
      to: "/services",
      submenu: [
        { label: "Aluminium Works", to: "/services/aluminium" },
        { label: "Glass Solutions", to: "/services/glass" },
        { label: "Gypsum & Printing", to: "/services/gypsum_printing" },
        { label: "Parking Shades", to: "/services/parking" },
        { label: "UPVC Doors & Windows", to: "/services/upvc" },
        { label: "MS Fabrication", to: "/services/ms_fabrication" },
        
      ],
    },
    {
      label: "Furniture",
      to: "/furniture",
      
    },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const matches = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    ).filter(el => el.textContent.toLowerCase().includes(query));

    if (matches.length) {
      matches.forEach((el, i) => {
        el.id = `search-result-${i}`;
        el.style.backgroundColor = "#fffa8b";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });
      setSearchResults(
        matches.map((el, i) => ({
          text: el.textContent,
          elementId: `search-result-${i}`,
        }))
      );
    } else {
      alert("No matches found.");
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1b1f24] text-white shadow-lg font-sans">
      {/* Top Banner */}
      <div className="bg-[#ff6a00] py-1 text-center text-sm md:text-base font-semibold">
        <Typed
          strings={[
            "Welcome to Curtains Furniture Qatar",
            "Premium Curtains & Upholstery Solutions",
            "Free Installation & Custom Designs",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Top Section */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        {/* Logo */}
        <NavLink to="/" aria-label="Homepage">
          <img
            src="https://8upload.com/image/6857c8c36af7b/Curtain_Logo.jpeg"
            alt="Curtains Furniture Logo"
            className="h-10 rounded -md"
            loading="lazy"
          />
        </NavLink>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative max-w-md mx-auto w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search curtains, blinds..."
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-10 top-0 bottom-0 flex items-center px-2 text-gray-500 hover:text-red-600"
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 px-3 bg-[#ff6a00] text-white rounded-r-md hover:bg-orange-600"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-orange-400 px-3 text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-6 py-2 text-sm font-medium">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setActiveSubMenu(index);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setActiveSubMenu(null), 150);
            }}
          >
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "hover:text-orange-300"
              }
            >
              {item.label}
            </NavLink>

            {/* Submenu */}
            {item.submenu && activeSubMenu === index && (
              <div
                className="absolute bg-[#2b2f34] top-full left-0 mt-2 w-56 rounded-md shadow-xl overflow-hidden"
                onMouseEnter={() => clearTimeout(dropdownTimeout.current)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                {item.submenu.map((sub, subIdx) => (
                  <NavLink
                    key={subIdx}
                    to={sub.to}
                    className="block px-4 py-2 text-sm text-white hover:bg-orange-500 transition duration-200"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#2b2f34] text-white px-4 py-3 space-y-2">
          {menuItems.map((item, idx) => (
            <details key={idx} className="group">
              <summary className="cursor-pointer py-1 flex justify-between items-center hover:text-orange-400">
                {item.label}
                {item.submenu && <span>▾</span>}
              </summary>
              {item.submenu && (
                <ul className="pl-4 space-y-1 mt-1">
                  {item.submenu.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={sub.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 text-sm hover:text-orange-300"
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </nav>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-orange-50 text-black px-4 py-3">
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

export default HeaderFLM;
