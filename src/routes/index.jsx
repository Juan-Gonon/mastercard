import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Detail from "../views/Detail";
  import Home from "../views/Home";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/detail',
        element: <Detail></Detail>
    }
  ])



const MyRoutes = ()=> <RouterProvider router={router} />


export default MyRoutes;