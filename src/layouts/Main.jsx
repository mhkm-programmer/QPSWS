import ContactBubble from "../pages/share/ContactBubble";
import Footer from "../pages/share/footer/Footer";
import HeaderAlFWZ from "../pages/share/header/HeaderCurtainsFurniture";
import { Outlet } from "react-router-dom";

const Main = () => {


  return (
    <div className="main-container relative">
      <HeaderAlFWZ />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
      <ContactBubble />

      
    </div>
  );
};

export default Main;
