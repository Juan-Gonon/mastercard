import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <div className="home">Home</div>
    },
    {
        path: '/detail',
        element: <div className="detail">Detail</div>
    }
  ])


const MyRoutes = ()=> <RouterProvider router={router} />


export default MyRoutes;