import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/Login";
import Navbar from "./Components/Navbar";
import Signup from "./pages/auth/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },  {
    path: "/create",
    element: <Signup/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
    <Navbar/>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
