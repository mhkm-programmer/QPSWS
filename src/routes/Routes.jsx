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

// Services Pages

import Services from "../flmServices/Services";

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
     
    ],
  },

  // Catch-all 404 Page
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
