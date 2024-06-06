import React, { useState } from "react";
import ReactDom from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import About from "./About.js";

import Chat from "./chat.js";

import Navbar from "./Navbar.js";
import Body from "./start.js";

import Appointment from "./Appointment.js";
import Footer from "./Footer.js";

import PatientRegister from "./auth/plogin.js";
import Apt from "./Apt.js";
import AdminLogin from "./Admin/Login.js";
import Dashboard from "./Admin/Dashboard.js";
import PatientLogin from "./auth/patientLogin.js";
import DoctorPage from "./Admin/DoctorPage.js";
import DoctorAddPage from "./Admin/AddDoctorPage.js";
import AddAdminPage from "./Admin/AddAdminPage.js";
import { Provider } from "react-redux";
import UserContext from "./Usecontext/patientContext.js";
import AdminContext from "./Usecontext/AdminContext.js";
import Logout from "./Admin/Logout.js";

const Applayout = () => {
  const [patienttAuth, setPatientAuth] = useState("initial");
  const [AdminAuth, setAdminAuth] = useState("initial");
  return (
    <>
      <UserContext.Provider
        value={{
          patienttAuth,
          setPatientAuth,
        }}
      >
        <AdminContext.Provider
          value={{
            AdminAuth,
            setAdminAuth,
          }}
        >
          <Navbar />
          <Outlet />
          <Chat />
          <Footer />
        </AdminContext.Provider>
      </UserContext.Provider>
    </>
  );
};

const App = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/pRegister",
        element: <PatientRegister />,
      },
      {
        path: "/pLogin",
        element: <PatientLogin />,
      },
      {
        path:"admin/logout",
        element:<Logout/>

      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/doctors",
        element: <DoctorPage />,
      },
      {
        path: "/add/doctor",
        element: <DoctorAddPage />,
      },
      {
        path: "/add/admin",
        element: <AddAdminPage />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/apt",
        element: <Apt />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/chat",
        element: <Chat />,
      },

      {
        path: "/appointment",
        element: <Appointment />,
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={App} />);
