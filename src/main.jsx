import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx'
import './index.css'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import { Projects } from "./pages/Projects.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Assignments } from "./pages/Assignments.jsx";

const router = createBrowserRouter([
  {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/work-experience",
        element: <Experience />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/assignments",
        element: <Assignments />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);