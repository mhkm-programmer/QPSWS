import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// Lazy-loaded layout components
const Header = lazy(() => import("../pages/share/header/HeaderFLM"));
const Footer = lazy(() => import("../pages/share/footer/Footer"));
const ContactBubble = lazy(() => import("../pages/share/ContactBubble"));

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <Suspense fallback={<div className="text-center py-6 text-gray-400">Loading...</div>}>
        <Header />
      </Suspense>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-6 text-gray-400">Loading...</div>}>
        <Footer />
      </Suspense>

      {/* Floating Contact Shortcut */}
      <Suspense fallback={null}>
        <ContactBubble />
      </Suspense>
    </div>
  );
};

export default Main;
