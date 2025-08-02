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

  const highlightColor = "#C69425"; // Updated golden color

  const menuItems = [
    { label: "Home", to: "/" },
    {
      label: "Our Services",
      to: "/services",
      submenu: [
        { label: "Aluminium Fabrication & Installation", to: "/services/aluminium" },
        { label: "Glass & Mirror Works", to: "/services/glass" },
        { label: "Gypsum Partitions", to: "/services/gypsumCeilings" },
        { label: "Painting", to: "/services/printing" },
        { label: "Parking Shade ", to: "/services/parking" },
        { label: "UPVC Doors & Windows", to: "/services/upvc" },
        { label: "MS Welding & Steel Fabrication", to: "/services/ms_fabrication" },
        { label: "Furniture & Upholstery", to: "/furniture" },
      ],
    },
    
    // { label: "Gallery", to: "/gallery" },
    { label: "Contact Us", to: "/contact" },
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
        el.style.backgroundColor = "#fef3c7";
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
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0C1E3B] text-white shadow-xl font-sans">
      {/* Banner with Typing */}
      <div className="bg-[#C69425] py-1 text-center text-sm md:text-base font-semibold tracking-wide text-black">
        <Typed
          strings={[
            "F L M SUPER TRADING AND CONTRACTING – Qatar",
            "Aluminium, Glass, Gypsum, Furniture & More",
            "Custom Works | Site Visit | Free Installation",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>

      {/* Top Section: Logo & Search */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2">
        <NavLink to="/" aria-label="Homepage" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="https://8upload.com/image/688d560ce1483/FLM_STC_Logo__1_.png"
            alt="FLM Curtains Logo"
            className="h-10 bg-white rounded-md"
            loading="lazy"
          />
        </NavLink>

        <div className="flex-1 mx-4">
          <div className="relative max-w-md mx-auto w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search aluminium, furniture, gypsum..."
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#C69425]"
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
              className="absolute right-0 top-0 bottom-0 px-3 bg-[#C69425] text-black font-semibold rounded-r-md hover:bg-[#a77c1c]"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#C69425] px-3 text-2xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Desktop Nav */}
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
                isActive ? "text-[#C69425]" : "hover:text-[#C69425]"
              }
            >
              {item.label}
            </NavLink>

            {item.submenu && activeSubMenu === index && (
              <div
                className="absolute bg-[#11213D] top-full left-0 mt-2 w-64 rounded-md shadow-xl overflow-hidden"
                onMouseEnter={() => clearTimeout(dropdownTimeout.current)}
                onMouseLeave={() => setActiveSubMenu(null)}
              >
                {item.submenu.map((sub, subIdx) => (
                  <NavLink
                    key={subIdx}
                    to={sub.to}
                    className="block px-4 py-2 text-sm text-white hover:bg-[#C69425] hover:text-black transition duration-200"
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

    {/* Mobile Nav */}
{isMobileMenuOpen && (
  <nav className="md:hidden bg-[#11213D] text-white px-4 py-3 space-y-2">
    {menuItems.map((item, idx) =>
      item.submenu ? (
        <details key={idx} className="group" open={false}>
          <summary className="cursor-pointer py-1 flex justify-between items-center hover:text-[#C69425] select-none">
            {item.label}
            <span className="ml-2">▾</span>
          </summary>
          <ul className="pl-4 space-y-1 mt-1">
            {item.submenu.map((sub, subIdx) => (
              <li key={subIdx}>
                <NavLink
                  to={sub.to}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setSearchResults([]);
                  }}
                  className="block py-1 text-sm hover:text-[#C69425]"
                >
                  {sub.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <NavLink
          key={idx}
          to={item.to}
          onClick={() => {
            setIsMobileMenuOpen(false);
            setSearchResults([]);
          }}
          className="block py-2 text-sm hover:text-[#C69425]"
        >
          {item.label}
        </NavLink>
      )
    )}
  </nav>
)}


      {/* Search Results Display */}
      {searchResults.length > 0 && (
        <div className="bg-[#FFF8E1] text-black px-4 py-3">
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
                    setIsMobileMenuOpen(false); // Close menu on search result click
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
