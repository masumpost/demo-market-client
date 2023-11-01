import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./src/home/Home";
import Login from "./src/component/Login";
import Register from "./src/component/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);


  export default router;