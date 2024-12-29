import "./index.css"; // Ensure the path matches your CSS file's location
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { LocalizationProvider } from "./providers/LocalizationContext.tsx";
import Layout from "./ui/Layout.tsx";
import { GraphsProvider } from "./providers/GraphsProvider.tsx";
import { DarkModeProvider } from "./providers/DarkModeProvider.tsx";
const RouterLayout = () => {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
      ],
    },
  ],
  { basename: "/" }
);

createRoot(document.getElementById("root")!).render(
  <DarkModeProvider>
   <LocalizationProvider>  <GraphsProvider>
     
        <RouterProvider router={router} />{" "}
      
    </GraphsProvider></LocalizationProvider>
  </DarkModeProvider>
);
