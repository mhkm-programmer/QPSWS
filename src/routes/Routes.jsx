// router.js

import { createBrowserRouter } from "react-router-dom";
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

// Curtains Pages
import Curtains from "../Products/Curtains";
import CurtainsBlackout from "../Products/CurtainsBlackout";
import CurtainsBedroom from "../Products/CurtainsBedroom";
import CurtainsWindows from "../Products/CurtainsWindows";
import CurtainsHotel from "../Products/CurtainsHotel";
import CurtainsWave from "../Products/CurtainsWave";
import CurtainsLivingroom from "../Products/CurtainsLivingroom";
import CurtainsRoller from "../Products/CurtainsRoller";
import CurtainsOffice from "../Products/CurtainsOffice";

// Blinds Pages
import Blinds from "../Products/Blinds";
import BlindsBlackout from "../Products/BlindsBlackout";
import BlindsVenetian from "../Products/BlindsVenetian";
import BlindsRoller from "../Products/BlindsRoller";
import BlindsOffice from "../Products/BlindsOffice";
import BlindsVertical from "../Products/BlindsVertical";
import BlindsWindow from "../Products/BlindsWindow";

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
      // Home
      { path: "/", element: <Home /> },

      // Services & Gallery
      { path: "/service", element: <ServicePage /> },
      { path: "/gallery", element: <Gallery /> },

      // Curtains Category
      { path: "/curtains", element: <Curtains /> },
      { path: "/curtains/blackout", element: <CurtainsBlackout /> },
      { path: "/curtains/bedroom", element: <CurtainsBedroom /> },
      { path: "/curtains/windows", element: <CurtainsWindows /> },
      { path: "/curtains/hotel", element: <CurtainsHotel /> },
      { path: "/curtains/wave", element: <CurtainsWave /> },
      { path: "/curtains/livingroom", element: <CurtainsLivingroom /> },
      { path: "/curtains/roller", element: <CurtainsRoller /> },
      { path: "/curtains/office", element: <CurtainsOffice /> },

      // Blinds Category
      { path: "/blinds", element: <Blinds /> },
      { path: "/blinds/blackout", element: <BlindsBlackout /> },
      { path: "/blinds/venetian", element: <BlindsVenetian /> },
      { path: "/blinds/roller", element: <BlindsRoller /> },
      { path: "/blinds/office", element: <BlindsOffice /> },
      { path: "/blinds/vertical", element: <BlindsVertical /> },
      { path: "/blinds/window", element: <BlindsWindow /> },

      // Pages
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/about", element: <AboutMePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/terms", element: <Terms /> },
    ],
  },

  // 404 Error
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
