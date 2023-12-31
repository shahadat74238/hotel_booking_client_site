import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Rooms from "../Pages/Rooms/Rooms";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRouter from "./PrivetRouter";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Information from "../Pages/RoomDetails/Information";
import Reviews from "../Pages/RoomDetails/Reviews";
import AllGallery from "../Pages/AllGallery/AllGallery";
import ErrorPage from "../Pages/Error/ErrorPage";
import UpdateBooking from "../Pages/UpdateBooking/UpdateBooking";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:id",
        element: (
          <PrivetRouter>
            <RoomDetails />
          </PrivetRouter>
        ),
        children: [
          {
            index: true,
            element: <Information />,
          },
          {
            path: "details/reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "/bookings",
        element: (
          <PrivetRouter>
            <Bookings />
          </PrivetRouter>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivetRouter>
            <UpdateBooking />
          </PrivetRouter>
        ),
      },
      {
        path: "/gallery",
        element: <AllGallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
