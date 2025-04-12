import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";

import { Transition } from "react-transition-group";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import useTruncatedText from "../reusable/useTruncatedText";

const MyServices = () => { 

const [Services, setServices] = useState([
  {
    id: 1,
    title: "Premium Cabinets: 2-Door, Multi-Door & Custom Kitchen Solutions",
    description:
      "Al-FWZ Trading and Contracting offers premium-quality cabinets, including 2-door cabinets, multiple-door cabinets, and custom kitchen cabinets. Our designs prioritize functionality, durability, and aesthetics, ensuring a perfect fit for your space.",
    image: [
      "https://8upload.com/image/67a8c9926174a/Cabinet.jpg",
   
    ],
    galleryImage: [
      "https://8upload.com/image/67a81cba8e881/Cabinet_8.jpg",
      "https://8upload.com/image/67a81cbadbd14/Cabinet_6.jpg",
      "https://8upload.com/image/67a81cbb04458/Cabinet_5.jpg",
      "https://8upload.com/image/67a81cbb26dbd/Cabinet_3.jpg",
      "https://8upload.com/image/67a81cbb4e3bf/Cabinet_2.jpg",
      "https://8upload.com/image/67a81cbb73cdd/Cabinet_1.jpg"
    ],
    keyFeatures: [
      "Custom-built to fit your space",
      "High-quality materials and finishes",
      "Optimized storage solutions",
      "Durable and long-lasting construction",
      "Modern and traditional design options"
    ],
    technologies: [
      "Premium Wood (Oak, Mahogany, MDF, Plywood)",
      "High-Quality Laminates & Veneers",
      "Soft-Close Hinges & Handles",
      "Water & Scratch-Resistant Coatings",
      "CNC Precision Cutting & Finishing"
    ],
    githubLink: "https://github.com/your-username/cabinets-project",
    liveDemoLink: "https://www.example.com/al-fwz-cabinets",
    faceBook: "https://www.facebook.com/alfwz.cabinets",
    instaGram: "https://www.instagram.com/alfwz.cabinets"
  },
  {
    id: 2,
    title: "Luxury Beds: Single, Baby, King, Queen & Custom Sizes",
    description: 
      "Our premium collection of beds includes single beds, baby beds, king and queen-sized beds, as well as fully customizable options tailored to your comfort and style preferences.",
    image: "https://8upload.com/image/67a8ca9ec7e1b/Bed.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8207ecfe0e/Beds_2.jpg",
      "https://8upload.com/image/67a8207ea8494/Beds_3.jpg",
      "https://8upload.com/image/67a8207e83061/Beds_4.jpg",
      "https://8upload.com/image/67a8207e5e1d1/Beds_5.jpg",
      "https://8upload.com/image/67a8207e39eab/Beds_6.jpg",
      "https://8upload.com/image/67a8207e125cf/Beds_7.jpg"
    ],
    keyFeatures: [
      "Premium quality materials",
      "Custom size options",
      "Ergonomic and stylish designs",
      "Durability and comfort"
    ],
    technologies: [
      "High-quality wood and metal frames",
      "Premium upholstery and cushioning",
      "Modern and classic bed designs",
      "Customization available"
    ],
    githubLink: "https://github.com/your-username/luxury-beds",
    liveDemoLink: "https://www.example.com/luxury-beds"
  },
  
  {
    id: 3,
    title: "Premium Curtains Collection: Vertical, Blinds, Rollers & Custom Designs",
    "description": 
      "Explore our exquisite range of curtains, including vertical, blind, roller, and fully customizable designs, crafted to enhance your interiors with elegance and functionality.",
    image: "https://8upload.com/image/67a8ccc8b4b82/Curtains.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8cf5dc8936/Curtain1.jpg",
      "https://8upload.com/image/67a8cf5d9f8b9/Curtain2.jpg",
      "https://8upload.com/image/67a8cf5d53786/Curtain4.jpg",
      "https://8upload.com/image/67a8cf5d7b5ea/Curtain3.jpg",
      "https://8upload.com/image/67a8cf5d31a18/Curtain5.jpg",
      "https://8upload.com/image/67a8cf5d0a402/Curtain6.jpg"
    ],
    keyFeatures: [
      "High-quality fabric options",
      "Custom sizing & designs",
      "Light-filtering & blackout options",
      "Durable & easy to maintain"
    ],
    technologies: [
      "Premium textiles & fabrics",
      "Automated & manual curtain systems",
      "Eco-friendly & UV-protective materials",
      "Smart home integration available"
    ],
    githubLink: "https://github.com/your-username/curtains-collection",
    liveDemoLink: "https://www.example.com/curtains-collection"
  },
  
  {
    id: 4,
    title: "Premium Carpets & Mats Collection: Green Carpets, Custom Rugs & More",
    "description": "Discover our wide selection of high-quality carpets and mats, including green carpets, custom rugs, and stylish mats designed to enhance comfort and aesthetics in any space.",
    image: "https://8upload.com/image/67a8d4e4d1d27/carpet__1_-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8d4e4adcef/Carpet2-min.jpg",
      "https://8upload.com/image/67a8d4e483989/Carpet1-min.jpg",
      "https://8upload.com/image/67a8d4e4371f3/Carpet3-min.jpg",
      "https://8upload.com/image/67a8d4e45c8ec/Carpet4-min.jpg",
      "https://8upload.com/image/67a8d4e410078/Carpet6-min.jpg",
      "https://8upload.com/image/67a8d4e3da251/Carpet5-min.jpg"
    ],
    keyFeatures: [
      "Premium-quality materials",
      "Custom sizes & designs available",
      "Eco-friendly & sustainable options",
      "Easy to clean & maintain",
      "Soft texture & durable build"
    ],
    technologies: [
      "High-density fabric weaving",
      "Anti-slip backing technology",
      "Water-resistant & stain-proof materials",
      "UV-protected outdoor carpet options"
    ],
    githubLink: "https://github.com/your-username/carpets-mats",
    liveDemoLink: "https://www.example.com/carpets-mats"
  },
  
  {
    id: 5,
    title: "Sofa, Sofa Making, Sofa Upholstery, Leather Sofa",
    description: "Explore our expert services in sofa making, custom upholstery, and premium leather sofas. We provide high-quality craftsmanship for comfort and style in every design.",
    image: "https://8upload.com/image/67a8d90f3f56b/Sofa-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8d91018f70/Sofa6-min.jpg",
      "https://8upload.com/image/67a8d90fec868/Sofa5-min.jpg",
      "https://8upload.com/image/67a8d90faa7cd/Sofa3-min.jpg",
        "https://8upload.com/image/67a8d90f663ea/Sofa1-min.jpg",
      "https://8upload.com/image/67a8d90fcabd7/Sofa4-min.jpg",
      "https://8upload.com/image/67a8d90f8762a/Sofa2-min.jpg"
    
    ],
    keyFeatures: [
      "Custom sofa designs tailored to your style",
      "High-quality leather and fabric upholstery",
      "Expert craftsmanship and attention to detail",
      "Comfort and durability guaranteed",
      "Sofa repair and restoration services available"
    ],
    technologies: [
      "Advanced upholstery techniques",
      "Custom-built frames for durability",
      "Eco-friendly materials",
      "Top-grade leather selection"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
  
  {
    id: 6,
    title: "TV Stand, Wallsheet, Wall Decoration",
    description: "Explore our exquisite collection of TV stands, wallsheets, and wall decoration designs. Perfect for enhancing the aesthetic appeal of your living spaces with style and functionality.",
    image: "https://8upload.com/image/67a8de6b1709c/Wallsheet-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8de6b5a8aa/Wallsheet2-min.jpg",
      "https://8upload.com/image/67a8de6b7c7d7/Wallsheet3-min.jpg",
      "https://8upload.com/image/67a8de6b3b0c5/Wallsheet1-min.jpg",
      "https://8upload.com/image/67a8de6b9bf3c/Wallsheet4-min.jpg",
      "https://8upload.com/image/67a8de6bbb488/Wallsheet5-min.jpg",
      "https://8upload.com/image/67a8de6bed98b/Wallsheet6-min.jpg"
    ],
    keyFeatures: [
      "Custom TV stands tailored to your space",
      "Elegant and durable wallsheet designs",
      "Unique wall decoration pieces for every room",
      "Wide variety of materials and finishes",
      "Easy installation and maintenance"
    ],
    technologies: [
      "Modern design techniques",
      "Eco-friendly materials",
      "Customizable finishes",
      "Sustainable production methods"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
  {
    id: 7,
    title: "Arabic Mojlish Making and Upholstery",
    description: "Explore our expert services in Arabic Mojlish making and upholstery. We specialize in crafting traditional and contemporary Mojlish designs, offering comfort and luxury for every space.",
    image: "https://8upload.com/image/67a8e57bcecce/Mojlish-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8e57c21581/Mojlish3-min.jpg",
      "https://8upload.com/image/67a8e57c404d8/Mojlish4-min.jpg",
      "https://8upload.com/image/67a8e57ba7e95/Mojlish1-min.jpg",
      "https://8upload.com/image/67a8e57c00cfa/Mijlish2-min.jpg",
      "https://8upload.com/image/67a8e57c645c7/Mojlish5-min.jpg",
      "https://8upload.com/image/67a8e57c871f3/Mojlish6-min.jpg"
    ],
    keyFeatures: [
      "Custom Arabic Mojlish designs",
      "Premium upholstery materials",
      "Traditional and modern styles",
      "Comfort and durability guaranteed",
      "Expert craftsmanship in every piece"
    ],
    technologies: [
      "Advanced upholstery techniques",
      "Custom-built frames for Mojlish",
      "Premium fabrics and leather selections",
      "Eco-friendly materials"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
  {
    id: 8,
    title: "Professional Wallpaper Installation & Removal Services",
    description: "Transform your interiors with our expert wallpaper installation and removal services. We offer a diverse range of premium wallpapers and seamless fitting for a flawless finish.",
    image: "https://8upload.com/image/67a8ebfbd5861/Wallpaper-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8ebfc49abc/Wallpaper3-min.jpg",
      "https://8upload.com/image/67a8ebfc69e07/Wallpaper4-min.jpg",
      "https://8upload.com/image/67a8ebfc081ac/Wallpaper1-min.jpg",
      "https://8upload.com/image/67a8ebfc26e20/Wallpaper2-min.jpg",
      "https://8upload.com/image/67a8ebfc9038e/Wallpaper5-min.jpg",
      "https://8upload.com/image/67a8ebfcb1e32/Wallpaper6-min.jpg"
    ],
    keyFeatures: [
      "Professional wallpaper installation with precision",
      "Seamless removal without surface damage",
      "Extensive collection of designs and textures",
      "Durable, high-quality, and eco-friendly materials",
      "Mess-free and efficient service for homes and offices"
    ],
    technologies: [
      "Advanced adhesive and fitting techniques",
      "Eco-friendly, washable, and long-lasting wallpapers",
      "Precision tools for perfect alignment",
      "Custom wallpaper printing and design solutions"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
  {
    id: 9,
    title: "Aluminum Services: Parking Shades, Cabinets, Ceilings, Windows, Doors & More",
    description: "We specialize in high-quality aluminum fabrication and installation services, offering customized solutions for parking shades, cabinets, ceilings, windows, doors, and more to enhance durability and aesthetics.",
    image: "https://8upload.com/image/67a8f13f8a660/Door-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8f13fcfa4c/Door2-min.jpg",
      "https://8upload.com/image/67a8f1401ce64/Door4-min.jpg",
      "https://8upload.com/image/67a8f13fafdaf/Door1-min.jpg",
      "https://8upload.com/image/67a8f13ff2656/Door3-min.jpg",
           "https://8upload.com/image/67a8f1403d767/Door5-min.jpg",
      "https://8upload.com/image/67a8f14060a54/Door6-min.jpg"
    ],
    keyFeatures: [
      "Custom aluminum fabrication and installation",
      "Durable, weather-resistant materials",
      "Modern and stylish designs for residential & commercial spaces",
      "High-quality finishing for long-lasting performance",
      "Precision engineering for seamless fitting"
    ],
    technologies: [
      "Advanced aluminum processing techniques",
      "Powder coating for enhanced durability",
      "Eco-friendly and corrosion-resistant materials",
      "Precision laser cutting and fabrication"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
  {
    id: 10,
    title: "Wooden Flooring Solutions: Barkia, Parquet, PVC Tiles & Mats",
    description: "Enhance your space with premium wooden flooring solutions, including parquet, PVC tiles, and mats. Our durable and stylish flooring options are designed for homes, offices, and commercial spaces.",
    image: "https://8upload.com/image/67a8f6cd8dc6c/SPC-min.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8f6cdb3e08/SPC3__1_-min.jpg",
      "https://8upload.com/image/67a8f6cdd3705/SPC4__1_-min.jpg",
      "https://8upload.com/image/67a8f6ce03bfd/SPC5__1_-min.jpg",
      "https://8upload.com/image/67a8f6ce2483c/SPC6__1_-min.jpg",
      "https://8upload.com/image/67a8f6ce477b6/SPC2__1_-min.jpg",
      "https://8upload.com/image/67a8f6cd68452/SPC1__1_-min.jpg"
    ],
    keyFeatures: [
      "High-quality wooden and PVC flooring solutions",
      "Custom sizes and designs available",
      "Water-resistant and easy to maintain",
      "Durable and long-lasting materials",
      "Professional installation services"
    ],
    technologies: [
      "Precision-cut parquet wood panels",
      "Waterproof and scratch-resistant PVC materials",
      "Eco-friendly and sustainable flooring options",
      "Advanced adhesive and installation techniques"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
   
  {
    id: 11,
    title: "Office & Home Furniture Solutions",
    description: "Discover a premium range of office and home furniture, including desks, chairs, sofas, cabinets, and custom-made designs to enhance comfort and style.",
    "image": "https://8upload.com/image/67a8fad25be50/Office__1_-min__1_.jpg",
    galleryImage: [
      "https://8upload.com/image/67a8f9fd0fe9a/Office_1-min.jpg",
      "https://8upload.com/image/67a8f9fd32d9c/Office2-min.jpg",
      "https://8upload.com/image/67a8f9fd5d090/Office3-min.jpg",
      "https://8upload.com/image/67a8f9fd810f2/Office4-min.jpg",
      "https://8upload.com/image/67a8f9fd9fe5f/Office_5-min.jpg",
      "https://8upload.com/image/67a8f9fdc2716/Office_6-min.jpg"
    ],
    keyFeatures: [
      "High-quality office and home furniture",
      "Modern and ergonomic designs",
      "Customizable sizes and materials",
      "Durable and long-lasting build",
      "Professional installation available"
    ],
    technologies: [
      "Precision wood and metal crafting",
      "Eco-friendly and durable materials",
      "Advanced upholstery and finishing techniques",
      "Ergonomic and space-saving designs"
    ],
    githubLink: "https://github.com/your-username/project-b",
    liveDemoLink: "https://www.example.com/project-b"
  },
  
 
    // Add more Services here...
  ]);   
   
  const [activeTheme] = useThemeSwitcher();
  const [selectedProject, setSelectedProject] = useState(null); // Stores the currently selected project 
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0); // Saves the previous scroll position
  const [showAllServices, setShowAllServices] = useState(false); // Toggles between limited and full service list

  // Reference for the services section (used for scrolling back)
  const servicesRef = useRef(null);

  // Reference for the details section (used for scrolling to details)
  const detailsRef = useRef(null);

 

  /**
 * Handles clicking on a project to display its details.
 * Scrolls smoothly to the project details section.
 */
const handleProjectClick = (project) => {
  // Save the current scroll position
  setPreviousScrollPosition(window.scrollY);

  // Set the selected project for detailed view
  setSelectedProject(project);

  // Scroll to the details section manually
  requestAnimationFrame(() => { // Ensure layout has settled before scrolling
    if (detailsRef.current) {
      const rect = detailsRef.current.getBoundingClientRect(); // Get the element's position
      const scrollPosition = rect.top + window.scrollY; // Calculate exact position

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Smooth scrolling for a better user experience
      });
    }
  });
};


const [expandedCards, setExpandedCards] = useState({});

const toggleReadMore = (id) => {
  setExpandedCards((prevState) => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};

const shortTextLength = 100; // Adjust the character limit


  /**
   * Handles closing the project details view.
   * Scrolls back to the previous position in the services section.
   */
  const handleCloseProject = () => {
    setSelectedProject(null);

    // Scroll back to the previously saved scroll position
    window.scrollTo({
      top: previousScrollPosition,
      behavior: "smooth", // Smooth scrolling for better UX
    });
  };

  /**
   * Toggles displaying all services.
   */
  const handleShowAllServices = () => {
    setShowAllServices(true);
  };

  /**
   * CSS transition styles for animating the project details.
   */
  const articleTransitionStyles = {
    entering: "opacity-0 transform scale-75",
    entered: "opacity-100 transform scale-100",
    exiting: "opacity-0 transform scale-75",
    exited: "opacity-0 transform scale-0",
  };

  // Display limited or all services based on the `showAllServices` state
  const displayedServices = showAllServices ? Services : Services.slice(0, 15);

  return (
    <div className="  px-6 py-8 lg:py-10 bg-[#F5F5DC] dark:bg-gray-800 dark:text-gray-100">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-4">Our <span className="text-[#6B4226]">Services</span></h1>
      <h2 className="text-center text-lg font-semibold mb-12">
        Delivering High-Quality Solutions to Meet Your Needs
      </h2>

      {/* Reference for scrolling back */}
      <div ref={servicesRef}></div>

      {/* Display Project Details or Services */}
      {selectedProject ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
      ref={detailsRef} // Attach ref for scrolling to details section
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className=" w-full object-cover"
        />
      </div>

      {/* Project Title & Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {selectedProject.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
      </div>

      {/* Key Features Section */}
      {selectedProject.keyFeatures?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies Section */}
      {selectedProject.technologies?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Work Gallery Section */}
      {selectedProject.galleryImage?.length > 0 && (
        <div className="mt-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Work Gallery of {selectedProject.title}
          </h1>
        

          <div className="flex flex-wrap -m-1">
  {/* First Column */}
  <div className="flex flex-wrap w-full md:w-1/2">
    {selectedProject.galleryImage.slice(0, 3).map((gallery, index) => (
      <div
        key={index}
        className={`p-1 w-full ${index === 2 ? "md:w-full" : "md:w-1/2"}`}
      >
        <img
          alt="gallery"
          className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
          src={gallery}
        />
      </div>
    ))}
  </div>

  {/* Second Column */}
  <div className="flex flex-wrap w-full md:w-1/2">
    {selectedProject.galleryImage.slice(3, 6).map((gallery, index) => (
      <div
        key={index}
        className={`p-1 w-full ${index === 0 ? "md:w-full" : "md:w-1/2"}`}
      >
        <img
          alt="gallery"
          className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
          src={gallery}
        />
      </div>
    ))}
  </div>
</div>
        </div>
      )}

      {/* Back to Services Button */}
      {/* <div className="flex justify-center pt-6">
        <button
          className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:drop-shadow-lg  transition"
          onClick={handleCloseProject}
        >
          <FaArrowLeft className="mr-2" size={16} /> Back to Services
        </button>
      </div> */}
      <div className="flex justify-center pt-6 gap-4 flex-wrap">
  {/* Back to Services Button */}
  <div>
    <button
      className={`btn-hero bg-[#6B4226] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300 ${
        activeTheme === "dark" ? "dark-mode-text" : ""
      } text-base sm:text-lg md:text-xl`}
      onClick={handleCloseProject}
    >
      <FaArrowLeft className="mr-2 text-lg sm:text-xl" /> Back to Services
    </button>
  </div>

  {/* Book an Appointment Button (WhatsApp) */}
  <div>
    <a
      href="https://wa.me/+97455760872" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300 text-base sm:text-lg md:text-xl"
    >
      Book an Appointment <FaWhatsapp className="ml-2 text-lg sm:text-xl" />
    </a>
  </div>
</div>



      
    </div>
          )}
        </Transition>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {displayedServices.map((project) => (
        <Transition key={project.id} in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${state} flex flex-col`}
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />

              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-2 px-4">{project.title}</h2>

              {/* Project Description with Read More */}
              <p className="text-gray-500 mb-4 px-4">
                {expandedCards[project.id]
                  ? project.description
                  : `${project.description.slice(0, shortTextLength)}...`}
                {project.description.length > shortTextLength && (
                  <button
                    onClick={() => toggleReadMore(project.id)}
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {expandedCards[project.id] ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>

              {/* Buttons Section */}
              <div className="p-4 flex flex-wrap justify-center mt-auto gap-4">
                {/* Details More Button */}
                <button
                  className="w-full btn-hero bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  Details More <FaArrowRight className="ml-2 text-xl sm:text-2xl" />
                </button>

                {/* Book an Appointment Button (WhatsApp) */}
                <a
                  href="https://wa.me/+97455760872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300"
                >
                  Book an Appointment <FaWhatsapp className="ml-2 text-xl sm:text-2xl" />
                </a>
              </div>
            </div>
          )}
        </Transition>
      ))}
    </div>
      )}
    </div>
  );
};

export default MyServices;


