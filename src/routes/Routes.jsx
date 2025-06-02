import AboutMePage from "../pages/about/AboutMePage";
import Blinds from "../Products/Blinds";
import BlindsBlackout from "../Products/BlindsBlackout";
import BlindsOffice from "../Products/BlindsOffice";
import BlindsRoller from "../Products/BlindsRoller";
import BlindsVenetian from "../Products/BlindsVenetian";
import BlindsVertical from "../Products/BlindsVertical";
import BlindsWindow from "../Products/BlindsWindow";
import BlogPage from "../pages/blogs/BlogPage";
import ContactPage from "../pages/contact/ContactPage";
import Curtains from "../Products/Curtains";
import CurtainsBedroom from "../Products/CurtainsBedroom";
import CurtainsBlackout from "../Products/CurtainsBlackout";
import CurtainsHotel from "../Products/CurtainsHotel";
import CurtainsLivingroom from "../Products/CurtainsLivingroom";
import CurtainsOffice from "../Products/CurtainsOffice";
import CurtainsRoller from "../Products/CurtainsRoller";
import CurtainsWave from "../Products/CurtainsWave";
import CurtainsWindows from "../Products/CurtainsWindows";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FaqPage from "../pages/FAQ/FaqPage";
import Furniture from "../Products/Furniture";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import ServicePage from "../pages/service/ServicePage";
import Terms from "../pages/terms/Terms";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Main />
      </div>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <ServicePage />,
        children:[
          {
          path:"/service/furniture",
          element:<Furniture/>,
        },
        ]
      },
      {
        path: "/curtains",
        element: <Curtains />,
      },
      {
        path: "/curtains/blackout",
        element: <CurtainsBlackout />,
      },
      {
        path: "/curtains/bedroom",
        element: <CurtainsBedroom />,
      },
      {
        path: "/curtains/windows",
        element: <CurtainsWindows />,
      },
      {
        path: "/curtains/hotel",
        element: <CurtainsHotel />,
      },
      {
        path: "/curtains/wave",
        element: <CurtainsWave />,
      },
      {
        path: "/curtains/livingroom",
        element: <CurtainsLivingroom />,
      },
      {
        path: "/curtains/roller",
        element: <CurtainsRoller />,
      },
      {
        path: "/curtains/office",
        element: <CurtainsOffice />,
      },
      {
        path: "/blinds",
        element: <Blinds />,
      },
     
      {
        path: "/blinds/blackout",
        element: <BlindsBlackout />,
      },
      {
        path: "/blinds/venetian",
        element: <BlindsVenetian />,
      },
      {
        path: "/blinds/roller",
        element: <BlindsRoller />,
      },
      {
        path: "/blinds/office",
        element: <BlindsOffice />,
      },
      {
        path: "/blinds/vertical",
        element: <BlindsVertical />,
      },
      {
        path: "/blinds/window",
        element: <BlindsWindow />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/about",
        element: <AboutMePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
