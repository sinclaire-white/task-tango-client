import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import Home from './Pages/Home.jsx';
import AddTask from './Pages/AddTask.jsx';
import Landing from './Pages/Landing.jsx';
import BrowseTask from './Pages/BrowseTask.jsx';
import SignUp from './Pages/SignUp.jsx';
import Login from './Pages/Login.jsx';
import TaskDetails from './Pages/TaskDetails.jsx';
import MyPostedTask from './Pages/MyPostedTask.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Landing,
        loader : () => fetch("/Categories.JSON")
      },
      {
        path:"/add-task",
        Component: AddTask,
      },
      {
        path:"/browse-task",
        Component: BrowseTask
      },
      {
        path:"/signup",
        Component: SignUp
      },
      {
        path:"/login",
        Component: Login
      },
      {
        path:"/my-posted-task",
        Component: MyPostedTask
      },
      {
        path:"/task-details",
        Component: TaskDetails
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
