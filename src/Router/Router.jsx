import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import House from "../Pages/House";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRout from "../Provider/PrivetRout";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '',
        element: <House></House>,
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/news-details/:id',
    element: (
      <PrivetRout>
        <NewsDetails></NewsDetails>
      </PrivetRout>
    ),
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: '/*',
    element: <h2> Error404 </h2>,
  },
]);

export default router;