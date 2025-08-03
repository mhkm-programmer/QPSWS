import { NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            F L M SUPER TRADING AND CONTRACTING
          </h2>
          <p className="mb-1 text-gray-400">
            الاسم بالعربية: اف ال ام سوبر ترادينغ اند كونتراكتينغ
          </p>
          <p className="mb-1 text-gray-400">CR No: 212381</p>
          <p className="mb-1 text-gray-400">Rokcha No: 289601</p>
          <p className="mb-1 text-gray-400">
            Location: Zone 26, Street 850, Building 45, Flat 2, Apartment No 5,
            Doha, Qatar
          </p>
          <p className="mb-1 text-gray-400">
            Email:{" "}
            <a
              href="mailto:mobarakhossain23456@gmail.com"
              className="hover:text-yellow-400 underline"
            >
              mobarakhossain23456@gmail.com
            </a>
          </p>
          <p className="text-gray-400">Phone: +974 3160 2956</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-yellow-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-yellow-400 transition">
                Our Services
              </NavLink>
            </li>
            
            
            <li>
              <NavLink to="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/services/aluminium" className="hover:text-yellow-400 transition">
                Aluminium Fabrication & Installation
              </NavLink>
            </li>
             <li>
              <NavLink to="/services/upvc" className="hover:text-yellow-400 transition">
                UPVC Doors & Windows
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/glass" className="hover:text-yellow-400 transition">
                Glass & Mirror Works
              </NavLink>
            </li>
            <li>
              <NavLink to="/furniture" className="hover:text-yellow-400 transition">
                Furniture & Upholstery
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/gypsumCeilings" className="hover:text-yellow-400 transition">
                Gypsum Partition & Ceiling
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/printing" className="hover:text-yellow-400 transition">
                Printing
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/parking" className="hover:text-yellow-400 transition">
                Parking Shade
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/services/ms_fabrication" className="hover:text-yellow-400 transition">
                MS Welding & Steel Fabrication
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-5 pb-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>+974 3160 2956</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>mobarakhossain23456@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>
            Zone 26, Street 850, Building 45, Flat 2, Apartment No 5, Doha,
            Qatar
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1Ez4QhtfFn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/mobarakmunna/profilecard/?igsh=MXYwMXdhdDhqNnRjOQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} F L M SUPER TRADING AND CONTRACTING. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
