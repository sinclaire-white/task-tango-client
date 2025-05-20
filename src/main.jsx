import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
