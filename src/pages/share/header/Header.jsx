import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import HeroText from "../../reusable/HeroText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Strip with Company Name */}
      <div className="bg-[#002B45] text-white text-sm px-4 py-2 flex justify-between items-center">
        <div>
          <span className="font-bold">F L M SUPER TRADING AND CONTRACTING</span>
          <span className="ml-4">اف ال ام سوبر ترادينغ اند كونتراكتينغ</span>
        </div>
        <div className="text-xs">
          CR No: <span className="font-semibold">212381</span> | Rokcha No: <span className="font-semibold">289601</span>
        </div>
      </div>

      {/* Hero Text */}
      <HeroText subtitle="F L M SUPER TRADING AND CONTRACTING - Transforming Interiors with Excellence" />

      {/* Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-md shadow font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://8upload.com/image/6886d0ece1983/logo.jpeg" alt="FLM Logo" className="w-32 h-auto" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-8 text-gray-700">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#004E89] font-semibold" : "hover:text-[#004E89]"}>Home</NavLink></li>
              <li className="relative group">
                <NavLink to="/service" className="flex items-center hover:text-[#004E89]">
                  Our Services
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>
                <ul className="absolute left-0 mt-2 w-60 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {[
                    ["/services/aluminium", "Aluminium Works"],
                    ["/services/glass", "Glass Solutions"],
                    ["/services/gypsum_printing", "Gypsum & Printing"],
                    ["/services/parking", "Parking Shades"],
                    ["/services/upvc", "UPVC Doors & Windows"],
                    ["/services/ms_fabrication", "MS Fabrication"]
                  ].map(([path, label]) => (
                    <li key={path}>
                      <Link to={path} className="block px-4 py-2 text-sm hover:bg-[#E6F0F8] text-gray-700">{label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#004E89] font-semibold" : "hover:text-[#004E89]"}>About Us</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#004E89] font-semibold" : "hover:text-[#004E89]"}>Contact Us</NavLink></li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white px-4 pt-2 pb-4 shadow">
            <ul className="space-y-3">
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-[#004E89]">Home</NavLink></li>
              <li><NavLink to="/service" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-[#004E89]">Our Services</NavLink></li>
              <li className="ml-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li><Link to="/services/aluminium" onClick={() => setIsMenuOpen(false)}>Aluminium Works</Link></li>
                  <li><Link to="/services/glass" onClick={() => setIsMenuOpen(false)}>Glass Solutions</Link></li>
                  <li><Link to="/services/gypsum_printing" onClick={() => setIsMenuOpen(false)}>Gypsum & Printing</Link></li>
                  <li><Link to="/services/parking" onClick={() => setIsMenuOpen(false)}>Parking Shades</Link></li>
                  <li><Link to="/services/upvc" onClick={() => setIsMenuOpen(false)}>UPVC Doors & Windows</Link></li>
                  <li><Link to="/services/ms_fabrication" onClick={() => setIsMenuOpen(false)}>MS Fabrication</Link></li>
                </ul>
              </li>
              <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-[#004E89]">About Us</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-[#004E89]">Contact Us</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
