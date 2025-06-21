import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// Lazy-loaded components
const HeaderAlFWZ = lazy(() => import("../pages/share/header/HeaderCurtainsFurniture"));
const Footer = lazy(() => import("../pages/share/footer/Footer"));
const ContactBubble = lazy(() => import("../pages/share/ContactBubble"));

const Main = () => {
  return (
    <div className="main-container relative min-h-screen flex flex-col">
      {/* Header */}
      <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading header...</div>}>
        <HeaderAlFWZ />
      </Suspense>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-6 text-gray-400">Loading footer...</div>}>
        <Footer />
      </Suspense>

      {/* Contact Bubble */}
      <Suspense fallback={null}>
        <ContactBubble />
      </Suspense>
    </div>
  );
};

export default Main;
