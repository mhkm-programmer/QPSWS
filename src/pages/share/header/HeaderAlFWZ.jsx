import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState } from "react";

const HeaderAlFWZ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Menu items for the left and right menus
  const leftMenuItems = [
    { label: "SHOP", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "OUR SERVICES", to: "/service" },
    { label: "CONTACT US", to: "/contact" },
  ];

  const rightMenuItems = [
    { label: "LOGIN", to: "/login" },
    { label: "SIGN UP", to: "/signup" },
  ];

  // Handle search functionality
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) => {
      const textContent = el.textContent.toLowerCase();
      const isNumeric = !isNaN(textContent.trim());
      const queryLower = query.trim().toLowerCase();

      if (isNumeric) {
        return parseFloat(textContent.trim()) === parseFloat(queryLower);
      } else {
        return textContent.includes(queryLower);
      }
    });

    if (matches.length > 0) {
      matches.forEach((match, index) => {
        match.id = `search-result-${index}`;
      });

      setSearchResults(
        matches.map((match, index) => ({
          text: match.textContent,
          elementId: `search-result-${index}`,
        }))
      );

      const firstResultId = `search-result-0`;
      setTimeout(() => {
        document.getElementById(firstResultId)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);

      matches.forEach((el) => {
        el.style.backgroundColor = "yellow";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 2000);
      });

      // Clear search query after showing results
      setSearchQuery("");
    } else {
      setSearchResults([]);
      alert("No matches found.");
    }
  };

  // Handle Enter key press for search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Close search results
  const closeSearchResults = () => {
    setSearchResults([]);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#1a1a1a]">
      {/* Top Banner with Typed Text */}
      <div className="bg-[#333333] py-2">
        <h1 className="text-sm md:text-lg text-center font-medium text-[#ffcc00]">
          <Typed
            strings={[
              "Welcome to AL-FWZ Furniture Trading",
              "All Kind of Furniture and Upholstery Services",
              "Shop Now or Book an Appointment",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h1>
      </div>

      {/* Header Section */}
      <div className="sticky top-0 z-50 bg-[#1a1a1a] text-white shadow-md">
        <div className="container flex justify-between items-center px-4 py-3 mx-auto">
          {/* Left Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Centered Search Bar */}
          <div className="flex-grow flex justify-center mx-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search furniture, services, and more..."
                className="w-full px-4 py-2 bg-white text-sm text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
              />
              <button
                onClick={handleSearch}
                className="absolute inset-y-0 right-0 flex items-center px-3 bg-[#ffcc00] rounded-r-md"
              >
                <img
                  src="https://8upload.com/image/6797eb0d03c90/glass.png"
                  alt="Search"
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

        

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className=" flex items-center justify-center w-10 h-10 rounded-md bg-[#ffcc00]"
          >
            <img
              src={
                isMobileMenuOpen
                  ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
                  : "https://8upload.com/image/6797ef8eb0c46/line.png"
              }
              alt="Menu Toggle"
              className="h-5 w-5"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="bg-[#1a1a1a] text-white ">
            <ul className="space-y-2 px-4 py-2">
              {leftMenuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 hover:bg-[#333333] rounded-md text-[#ffcc00]"
                        : "block px-4 py-2 hover:bg-[#333333] rounded-md"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            
            </ul>
          </nav>
        )}

        {/* Search Results Section */}
        {searchResults.length > 0 && (
          <div className="bg-gray-100 text-black p-4">
            <h2 className="font-bold text-lg mb-2">Search Results:</h2>
            <ul>
              {searchResults.map((result, index) => (
                <li key={index} className="mb-1">
                  <a
                    href={`#${result.elementId}`}
                    className="text-blue-500 underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(result.elementId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    {result.text}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={closeSearchResults}
              className="mt-4 text-red-500 underline"
            >
              Close Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlFWZ;