import React from 'react'; // Add this import

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Myjob from '../pages/Myjob';
import Postjobs from '../pages/Postjobs';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Salary from '../sidebar/Salary';
import Salaryestimate from '../pages/Salaryestimate';
import Updatejob from '../pages/Updatejob';
import Jobpage from '../pages/Jobpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/post-job",
        element: <Postjobs/>,
      },
      {
        path: "/my-job",
        element: <Myjob/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/Signup",
        element: <Signup/>,
      },
      {
        path: "/salaryest",
        element: <Salaryestimate/>,
      },
      {
        path: "/edit-job/:id",
        element: <Updatejob/>,
        loader: ({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)
      },
      {
        path: "/job/:id",
        element: <Jobpage/>,
      },


      
      



    ]
  }
]);

export default router;
