import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Detail from "../views/Detail";
  import Home from "../views/Home";
  import Error404 from "../views/Error";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error404></Error404>
    },
    {
        path: '/detail/:eventId',
        element: <Detail></Detail>
    }
  ])



const MyRoutes = ()=> <RouterProvider router={router} />


export default MyRoutes;