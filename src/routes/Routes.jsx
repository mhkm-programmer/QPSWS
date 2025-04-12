import AboutMePage from "../pages/about/AboutMePage";
import BlogPage from "../pages/blogs/BlogPage";
import ContactPage from "../pages/contact/ContactPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FaqPage from "../pages/FAQ/FaqPage";
import Furniture from "../Products/Furniture";
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
        path: "/portfolio",
        element: <PortfolioPage />,
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
