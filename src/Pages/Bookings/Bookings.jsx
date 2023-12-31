import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import BookingSide from "./BookingSide";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Bookings = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const getRooms = async () => {
    try {
      const res = await axios.get(`/booking?email=${user?.email}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { isLoading, data: booking } = useQuery({
    queryKey: ["booking"],
    queryFn: getRooms,
  });

  useEffect(() => {
    if (booking?.data) {
      setBookingData(booking.data);
    }
  }, [booking]);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`/booking/${id}`);
          const remaining = bookingData?.filter((book) => book._id !== id);
          setBookingData(remaining);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          return res;
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Five Star | Bookings</title>
      </Helmet>
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-semibold text-center uppercase mt-10">
          Your Bookings
        </h1>
        <div className=" grid gap-10 my-20 lg:grid-cols-4">
          {bookingData?.length > 0 ? (
            <div className="lg:col-span-3 grid  gap-10">
              {bookingData?.map((b) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  key={b._id}
                  className="grid grid-cols-1 items-center shadow-md md:grid-cols-2 "
                >
                  <div className="h-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover transition-transform transform scale-100 duration-500 group-hover:scale-105"
                      src={b.roomPhoto}
                      alt="Loading Image"
                    />
                  </div>
                  <div className="pt-5  px-7">
                    <h1 className="text-2xl text-center font-bold">
                      {b.roomName}
                    </h1>
                    <hr className="w-28 border-black my-3 border mx-auto" />
                    <div>
                      <p className="text-lg font-medium">
                        Price:{" "}
                        <span className="text-gray-400">
                          {b.roomPrice}$ /night
                        </span>
                      </p>
                      <p className="text-lg font-medium">
                        Check In Date:{" "}
                        <span className="text-gray-400">{b.checkIn}</span>
                      </p>
                      <p className="text-lg font-medium">
                        Check Out Date:{" "}
                        <span className="text-gray-400">{b.checkOut}</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 mt-5">
                      <button
                        onClick={() => handleCancel(b._id)}
                        className="s-btn w-full h-10 uppercase"
                      >
                        Cancel
                      </button>
                      <Link to={`/booking/${b._id}`}>
                      <button className="f-btn w-full h-10 uppercase">
                        Update Date
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="lg:col-span-3"
            >
              <p className="text-5xl font-semibold text-center text-gray-400">
                No Booking Room Available !
              </p>
            </div>
          )}
          <div className="lg:col-span-1">
            <BookingSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
