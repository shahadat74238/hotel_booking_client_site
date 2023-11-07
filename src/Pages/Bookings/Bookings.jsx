import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import BookingSide from "./BookingSide";
import { useEffect, useState } from "react";

const Bookings = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState();

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
      <div className="min-h-screen">
        <h1>Loading data.</h1>
      </div>
    );
  }

  const handleCancel = async(id) => {
    try {
        const res = await axios.delete(`/booking/${id}`);
        const remaining = bookingData?.filter(book => book._id !== id);
        setBookingData(remaining)
        return res;
      } catch (error) {
        console.log(error);
      }
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
            <div className="lg:col-span-3 grid grid-cols-2 gap-10">
              {bookingData?.map((b) => (
                <div key={b._id} className=" group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      className="h-60 w-full object-cover transition-transform transform scale-100 duration-500 group-hover:scale-105"
                      src={b.roomPhoto}
                      alt="Loading Image"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="space-y-1 text-center">
                        <h1 className="font-semibold text-lg text-white">
                          Staring from
                        </h1>
                        <h2 className="text-white text-2xl font-bold">
                          ${b.roomPrice}{" "}
                          <span className="text-lg">/ night</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 text-center px-7">
                    <h1 className="text-2xl font-bold">{b.roomName}</h1>
                    <hr className="w-28 border-black my-3 border mx-auto" />
                    <p className="">{b.roomInformation.slice(0, 80)}...</p>

                    <div className="grid grid-cols-2 gap-10 mt-5">
                      <button onClick={()=>handleCancel(b._id)} className="s-btn w-full h-10 uppercase">
                        Cancel
                      </button>
                      <button className="f-btn w-full h-10 uppercase">
                        Update Booking
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="lg:col-span-3">
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
