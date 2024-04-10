import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Detail from "../views/Detail";
  import Home from "../views/Home";
  import Error404 from "../views/Error";
  import Profile from "../views/Profile";


  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error404></Error404>
    },
    {
        path: '/detail/:eventId',
        element: <Detail></Detail>
    },{
        path: '/profile',
        element: <Profile></Profile>,
        children: [
            {
                path: 'my-info',
                element: <div>My info</div>
            },{
                path: 'liked-events',
                element: <div>Liked Events</div>
            }
        ]
    }
  ])



const MyRoutes = ()=> <RouterProvider router={router} />


export default MyRoutes;