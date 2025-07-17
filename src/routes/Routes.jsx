// router.js

import { createBrowserRouter } from "react-router-dom";

// Layout
import Main from "../layouts/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";

// Core Pages
import Home from "../pages/Home/Home";
import ServicePage from "../pages/service/ServicePage";
import AboutMePage from "../pages/about/AboutMePage";
import ContactPage from "../pages/contact/ContactPage";
import FaqPage from "../pages/FAQ/FaqPage";
import Terms from "../pages/terms/Terms";
import BlogPage from "../pages/blogs/BlogPage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import Gallery from "../pages/Gallery";

// FLM Services Pages
import Aluminium from "../flmServices/Aluminium";
import Glass from "../flmServices/Glass";
import Furniture from "../flmServices/Furniture";
import MS from "../flmServices/MS";
import UPVC from "../flmServices/UPVC";
import Parking from "../flmServices/Parking";
import Services from "../flmServices/Services";
import Gypsum from "../flmServices/Gypsum";
import Printing from "../flmServices/Printing";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Main Pages
      { path: "/", element: <Home /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/about", element: <AboutMePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/terms", element: <Terms /> },

      // FLM Services Categories
      { path: "/services", element: <Services /> },
      { path: "/services/aluminium", element: <Aluminium /> },
      { path: "/services/glass", element: <Glass /> },
      { path: "/services/gypsumCeilings", element: <Gypsum /> },
         { path: "/services/printing", element: <Printing /> },
      { path: "/services/parking", element: <Parking /> },
      { path: "/services/upvc", element: <UPVC /> },
      { path: "/services/ms_fabrication", element: <MS /> },

      // Furniture (Blinds or Other)
      { path: "/furniture", element: <Furniture /> },
    ],
  },

  // Catch-all 404 Page
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
