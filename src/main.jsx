import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import PrivateRoute from './Providers/PrivateRoute.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
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
    loader: () => fetch("https://task-tango-server.vercel.app/users"),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Landing,
        loader : () => fetch("/Categories.JSON"),
      },
      {
        path:"/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
        loader: () => fetch("https://task-tango-server.vercel.app/users")
      },
      {
        path:"/browse-task",
                element: (
          <PrivateRoute>
            <BrowseTask></BrowseTask>
          </PrivateRoute>
        ),

        loader: () => fetch("https://task-tango-server.vercel.app/tasks")
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
        element: (
          <PrivateRoute>
            <MyPostedTask></MyPostedTask>
          </PrivateRoute>
        ),
        loader: () => fetch("https://task-tango-server.vercel.app/tasks")
      },
      {
        path:"/task-details/:taskId",
         element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://task-tango-server.vercel.app/tasks/${params.taskId}`)
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </StrictMode>
)
