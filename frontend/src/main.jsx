import React from "react";

import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "@routes";
import { JWTProvider as AuthProvider } from "@contexts/JWTContext";

import "./output.css";

const routes = (
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(routes);
