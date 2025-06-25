import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Main from "../../../../Bistro-Boss-Projects/bistro-boss-client/src/Layout/Main";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
    
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>,
        }
     
      ],
  }

]);
