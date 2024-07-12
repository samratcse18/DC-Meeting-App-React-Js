import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Login from '../Features/UserManagement/Login.jsx';
import Signup from '../Features/UserManagement/Signup.jsx';
import Home from '../Features/Home/Home.jsx';
import CreateEvent from '../Features/EventManagement/CreateEvent.jsx';
import PreEvent from '../Features/EventManagement/PreEvent.jsx';
import UpdateEvent from '../Features/EventManagement/UpdateEvent.jsx';
import ForgotPassword from '../Features/ForgotPasswordManagement/ForgotPassword.jsx';
import Otp from '../Features/ForgotPasswordManagement/Otp.jsx';
import ChangeForgotPassword from '../Features/ForgotPasswordManagement/ChangeForgotPassword.jsx';
import ProtectedRoute from '../Services/ProtectedRoute.jsx';
import ViewEvent from '../Features/EventManagement/ViewEvent.jsx';
import PrivacyPolicy from '../Services/PrivacyPolicy.jsx';
import TermsOfService from '../Services/TermsOfService.jsx';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: '/home',
    // element: <Home></Home>,
    element: <ProtectedRoute element={Home} />,
  },
  {
    path: "/create-event",
    element: <ProtectedRoute element={CreateEvent} />,
  },
  {
    path: "/pre-event",
    element: <ProtectedRoute element={PreEvent} />,
  },
  {
    path: "/update-event/:id",
    element: <ProtectedRoute element={UpdateEvent} />,
  },
  {
    path: "/view-event/:id",
    element: <ProtectedRoute element={ViewEvent} />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/otp",
    element: <Otp></Otp>,
  },
  {
    path: "/change-forgot-password",
    element: <ChangeForgotPassword></ChangeForgotPassword>,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy></PrivacyPolicy>,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService></TermsOfService>,
  },
]);


export default Routes;





