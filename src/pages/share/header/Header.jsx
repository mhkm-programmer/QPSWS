import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import HeroText from "../../reusable/HeroText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
    <div>
       {/* HeroText component */}
       <HeroText
          // title="{Hello}, I'm"
          subtitle=
            "Md Humayun Kabir Miazee Md Humayun Kabir Miazee "
        />
    </div>
     
      {/* <div className=" px-4 py-0  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-4">
          <div className="flex items-center">
            <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h6 className="mb-1 font-semibold leading-5">Category</h6>
              <p className="text-sm text-gray-900 m-0">
                Sed ut perspiciatis 
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h6 className="mb-1 font-semibold leading-5">Weather</h6>
              <p className="text-sm text-gray-900 m-0">
                Webtwo ipsum orkut reddit
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h6 className="mb-1 font-semibold leading-5">Health</h6>
              <p className="text-sm text-gray-900 m-0">
                Lookout flogging bilge rat 
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <div>
              <h6 className="mb-1 font-semibold leading-5">Health</h6>
              <p className="text-sm text-gray-900 m-0">
                Lookout flogging bilge rat 
              </p>
            </div>
          </div>
        </div>
      </div> */}
      
      
      <div>
      <nav className="font-semibold px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sticky top-0 z-10 bg-white opacity-75">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="MHKM"
          title="MHKM"
          className="inline-flex items-center"
        >
          <img
            src="https://i.ibb.co/RS1DnRV/logo-dark.png"
            className="w-36"
            alt=""
          />
        </Link>

        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>

          
        

          
      {/* Service with Sub-Menu */}
      <li className="relative group">
            {/* Hover trigger for Service */}
            <NavLink
              to="/service"
              className="flex items-center hover:text-blue-600"
            >
              Our Service
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NavLink>

            {/* Sub-Menu */}
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
              <li>
                <Link
                  to="/service/sofa"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Sofa Sales & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/curtain"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Curtains Making & Upholstery
                </Link>
              </li>
              
              <li>
                <Link
                  to="/service/majlis"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Majlis Making & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/carpet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Carpet Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/wallpaper"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Wallpaper Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/bed"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Bed Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Cabinet Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  TV Cabinet Making & Installation (Wall Sheet)
                </Link>
              </li>
              <li>
                <Link
                  to="/service/blind"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Blind Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/barkia"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Barkia Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/chair"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Chair Sale & Upholstery 

                </Link>
              </li>
             
            </ul>
          </li>

          
      {/* Furniture Shop with Sub-Menu */}
      <li className="relative group">
            {/* Hover trigger for Service */}
            <NavLink
              to="/service"
              className="flex items-center hover:text-blue-600"
            >
              Furniture Shop
              <svg
                className="ml-1 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NavLink>

            {/* Sub-Menu */}
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
              <li>
                <Link
                  to="/service/sofa"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Sofa Sales & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/curtain"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Curtains Making & Upholstery
                </Link>
              </li>
              
              <li>
                <Link
                  to="/service/majlis"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Majlis Making & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/carpet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Carpet Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/wallpaper"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Wallpaper Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/bed"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Bed Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Cabinet Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  TV Cabinet Making & Installation (Wall Sheet)
                </Link>
              </li>
              <li>
                <Link
                  to="/service/blind"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Blind Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/barkia"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Barkia Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/chair"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Chair Sale & Upholstery 

                </Link>
              </li>
             
            </ul>
          </li>



              
          
          {/* <li>
            <NavLink
              to="/portfolio"
              aria-label="Portfolio"
              title="Portfolio"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Portfolio
            </NavLink>
          </li> */}

          <li>
            <NavLink
              to="/about"
              aria-label="about"
              title="about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About US
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/blog"
              aria-label="blog"
              title="blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/faq"
              aria-label="faq"
              title="faq"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              FAQ
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/contact"
              aria-label="contact"
              title="contact"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Contact US
            </NavLink>
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>

          
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="p-5 bg-white font-semibold border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="MHKM"
                      title="MHKM"
                      className="inline-flex items-center"
                    >
                      <img
                        src="https://i.ibb.co/RS1DnRV/logo-dark.png"
                        className="w-36"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 font-semibold">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>

                    
                    {/* <li>
                      <Link
                        to="/service"
                        aria-label="service"
                        title="service"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Service
                      </Link>
                    </li> */}
                      
                      {/* Service with Sub-Menu */}
                      <li className="relative group">
  {/* Hover or click trigger for Service */}
  <NavLink
    to="/service"
    className="flex items-center hover:text-blue-600"
  >
    Service
    <svg
      className="ml-1 w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </NavLink>

   {/* Sub-Menu */}
   <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300">
              <li>
                <Link
                  to="/service/sofa"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Sofa Sales & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/curtain"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Curtains Making & Upholstery
                </Link>
              </li>
              
              <li>
                <Link
                  to="/service/majlis"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Majlis Making & Upholstery
                </Link>
              </li>
              <li>
                <Link
                  to="/service/carpet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Carpet Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/wallpaper"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  Wallpaper Sale & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/bed"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Bed Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Cabinet Making & Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/cabinet"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  TV Cabinet Making & Installation (Wall Sheet)
                </Link>
              </li>
              <li>
                <Link
                  to="/service/blind"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Blind Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/barkia"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Barkia Sale & Installation 

                </Link>
              </li>
              <li>
                <Link
                  to="/service/chair"
                  className="block px-4 py-2 hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                   Chair Sale & Upholstery 

                </Link>
              </li>
             
            </ul>
</li>



                    
                    {/* <li>
                      <Link
                        to="/portfolio"
                        aria-label="Portfolio"
                        title="Portfolio"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Portfolio
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        to="/about"
                        aria-label="about"
                        title="about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About US
                      </Link>
                    </li>
{/* 
                    <li>
                      <Link
                        to="/blog"
                        aria-label="blog"
                        title="blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        aria-label="faq"
                        title="faq"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        FAQ
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        to="/contact"
                        aria-label="contact"
                        title="contact"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                       Contact US
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        {/* Hire me modal */}
        {/* <div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div> */}
      </div>
    </nav>
      </div>
    </div>
  


  );
};

export default Header;

// import { Link, NavLink } from "react-router-dom";

// import React from "react";

// const Header = () => {
//   return (
//     <nav className="font-semibold px-4 py-7 bg-white sticky top-0 z-10 shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <Link to="/" className="inline-flex items-center">
//           <img
//             src="https://i.ibb.co/RS1DnRV/logo-dark.png"
//             alt="Logo"
//             className="w-36"
//           />
//         </Link>

//         {/* Main Navigation */}
//         <ul className="hidden lg:flex space-x-8">
//           <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
//           <li><NavLink to="/portfolio" className="hover:text-blue-600">Portfolio</NavLink></li>
//           <li><NavLink to="/about" className="hover:text-blue-600">About Me</NavLink></li>
//           <li><NavLink to="/blog" className="hover:text-blue-600">Blog</NavLink></li>
//           <li><NavLink to="/faq" className="hover:text-blue-600">FAQ</NavLink></li>
//           <li><NavLink to="/contact" className="hover:text-blue-600">Hire Me</NavLink></li>

//           {/* Service with Sub-Menu */}
//           <li className="relative group">
//             <NavLink
//               to="/service"
//               className="flex items-center hover:text-blue-600"
//             >
//               Service
//               <svg
//                 className="ml-1 w-4 h-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </NavLink>
//             {/* Sub-Menu */}
//             <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-300">
//               <li>
//                 <Link
//                   to="/service/web-design"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Web Design
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/service/seo"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   SEO
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/service/marketing"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   Marketing
//                 </Link>
//               </li>
//             </ul>
//           </li>
//         </ul>

//         {/* Mobile Menu */}
//         <div className="lg:hidden">
//           <button className="p-2 rounded focus:outline-none hover:bg-gray-100">
//             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M3 5h14M3 10h14m-7 5h7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
