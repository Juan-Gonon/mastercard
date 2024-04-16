import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import { Suspense } from "react";
  import Detail from "../views/Detail";
  import Home from "../views/Home";
  import Error404 from "../views/Error";
  import Profile from "../views/Profile";
  import ZusOne from "../views/zusOne";
  import ZusTwo from "../views/zusTwo";
  import LikedEvents from "../views/Profile/components/LikedEvents";
  import MyInfo from "../views/Profile/components/MyInfo";
  import ErrorBoundary from "../components/ErrorBoundary";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error404></Error404>
    },
    {
        path: '/detail/:eventId',
        element: (
            <Suspense fallback={<div>Cargando...</div>}>
                <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el detalle</div>}>
                    <Detail></Detail>
                </ErrorBoundary>
            </Suspense>
        )
    },{
        path: '/profile',
        element: <Profile></Profile>,
        children: [
            {
                path: 'my-info',
                element: <MyInfo></MyInfo>
            },{
                path: 'liked-events',
                element: <LikedEvents></LikedEvents>
            }
        ]
    },{
        path : '/zusOne',
        element: <ZusOne></ZusOne>,
    },{
        path : '/zusTwo',
        element: <ZusTwo></ZusTwo>
    }
  ])



const MyRoutes = ()=> <RouterProvider router={router} />


export default MyRoutes;