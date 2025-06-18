// Enhanced & Responsive Header for Curtains Furniture with Updated Color Palette
import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const HeaderCurtainsFurniture = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dropdownTimeout = useRef(null);

  const leftMenuItems = [
    { label: "Home", to: "/" },
    {
      label: "Curtains",
      to: "/curtains",
      submenu: [
        { label: "Blackout Curtains", to: "/curtains/blackout" },
        { label: "Bedroom Curtains", to: "/curtains/bedroom" },
        { label: "Windows Curtains", to: "/curtains/windows" },
        { label: "Hotel Curtains", to: "/curtains/hotel" },
        { label: "Wave Style Curtains", to: "/curtains/wave" },
        { label: "Living Room Curtains", to: "/curtains/livingroom" },
        { label: "Office Curtains", to: "/curtains/office" },
        { label: "Roller Curtains", to: "/curtains/roller" },
      ],
    },
    {
      label: "Blinds",
      to: "/blinds",
      submenu: [
        { label: "Blackout Blinds", to: "/blinds/blackout" },
        { label: "Venetian Blinds", to: "/blinds/venetian" },
        { label: "Roller Blinds", to: "/blinds/roller" },
        { label: "Office Blinds", to: "/blinds/office" },
        { label: "Vertical Blinds", to: "/blinds/vertical" },
        { label: "Window Blinds", to: "/blinds/window" },
      ],
    },
    { label: "Gallery", to: "/gallery" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) =>
      el.textContent.toLowerCase().includes(query)
    );

    if (matches.length) {
      matches.forEach((match, index) => {
        match.id = `search-result-${index}`;
        match.style.backgroundColor = "#fffa8b";
        setTimeout(() => (match.style.backgroundColor = ""), 2000);
      });
      setSearchResults(
        matches.map((match, i) => ({
          text: match.textContent,
          elementId: `search-result-${i}`,
        }))
      );
    } else {
      alert("No matches found.");
      setSearchResults([]);
    }
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1b1f24] text-white shadow-lg font-sans">
      {/* Announcement Banner */}
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

      {/* Top Bar */}
      <div className="flex flex-wrap justify-between items-center px-4 py-2">
        <NavLink to="/">
          <img
            src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
            alt="Curtains Furniture Logo"
            className="h-10"
          />
        </NavLink>

        <div className="flex-1 mx-4">
          <div className="relative max-w-md w-full mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search curtains, blinds..."
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-10 top-0 bottom-0 flex items-center px-2 text-gray-500 hover:text-red-600"
              >
                <FaTimes />
              </button>
            )}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 px-3 bg-[#ff6a00] rounded-r-md hover:bg-orange-600"
            >
              🔍
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-orange-400 px-3"
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-6 py-2 text-sm font-medium">
        {leftMenuItems.map((item, idx) => (
          <div
            key={idx}
            className="relative group"
            onMouseEnter={() => {
              clearTimeout(dropdownTimeout.current);
              setActiveSubMenu(idx);
            }}
            onMouseLeave={() => {
              dropdownTimeout.current = setTimeout(() => setActiveSubMenu(null), 200);
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
            {item.submenu && activeSubMenu === idx && (
              <div
                className="absolute bg-[#2b2f34] top-full left-0 mt-2 w-52 rounded-md shadow-xl overflow-hidden"
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
        <div className="md:hidden bg-[#2b2f34] text-white px-4 py-3">
          <ul className="space-y-2">
            {leftMenuItems.map((item, idx) => (
              <li key={idx}>
                <details className="group">
                  <summary className="cursor-pointer py-1 hover:text-orange-400 list-none flex justify-between items-center">
                    {item.label}
                    {item.submenu && <span className="text-sm">▾</span>}
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
              </li>
            ))}
          </ul>
        </div>
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

export default HeaderCurtainsFurniture;
