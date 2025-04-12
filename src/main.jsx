import '@smastrom/react-rating/style.css'
import "./index.css";
import 'tailwindcss/tailwind.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
  <RouterProvider router={router}></RouterProvider>

   
  </React.StrictMode>
);
