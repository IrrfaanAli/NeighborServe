import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Dashboard from "../Component/Dashboard/Dashboard";
import UserDashboard from "../Component/UserDashboard/UserDashboard";
import AdminDashboard from "../Component/AdminDashboard/AdminDashboard";
import ProviderDashboard from "../Component/ProviderDashboard/ProviderDashboard";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [

           {
            path : 'userdashboard',
            element: <UserDashboard></UserDashboard>
           },
           {
             path : 'admindashboard',
             element : <AdminDashboard></AdminDashboard>
           },
          {
            path: 'providerdashboard',
            element : <ProviderDashboard></ProviderDashboard>
          }
        ]
    }
  ]);