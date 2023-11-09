/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Side = ({ room }) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const axios = useAxios();
  const { user } = useAuth();

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate1 = new Intl.DateTimeFormat("en-US", options).format(
    checkIn
  );
  const formattedDate2 = new Intl.DateTimeFormat("en-US", options).format(
    checkOut
  );

  const handleBooking = async (event) => {
    event.preventDefault();
    const roomId = room?._id;
    const roomPrice =
      room?.specialOffers.length > 0
        ? room?.specialOffers[0].offerPrice
        : room.price;

    const roomPhoto = room?.banner;
    const roomName = room?.roomTitle;
    const roomInformation = room?.information;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const email = event.target.email.value;

    const bookingData = {
      checkIn: formattedDate1,
      checkOut: formattedDate2,
      email,
      roomId,
      userName,
      userEmail,
      roomPrice,
      roomName,
      roomPhoto,
      roomInformation,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You want to booking this Room!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Booking.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post("/booking", bookingData);
          console.log("Response data:", response.data);
          Swal.fire("Successfully Booking");
          window.location.reload();
        } catch (error) {
          console.error("Error posting data:", error);
        }
      }
    });
  };

  return (
    <div className="p-5 bg-[#333132] ">
      <h1 className="text-center text-white font-semibold text-xl">
        RESERVATION
      </h1>
      <hr className="border my-5" />
      <form onSubmit={handleBooking}>
        <div className="space-y-5">
          <div>
            <p className="text-white mb-2 font-medium">EMAIL:</p>
            <input
              placeholder="Your Email"
              required
              defaultValue={user?.email || ""}
              className="outline-none border w-full p-5 h-12"
              type="email"
              name="email"
            />
          </div>
          <div>
            <p className="text-white mb-2 font-medium">CHECK-IN:</p>
            <DatePicker
              className="w-full outline-none text-black text-center font-semibold text-lg"
              showIcon
              dateFormat="MMMM d, yyyy "
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              minDate={new Date()}
            />
          </div>
          <div>
            <p className="text-white mb-2 font-medium">CHECK-OUT:</p>
            <DatePicker
              className="w-full outline-none text-black text-center font-semibold text-lg"
              showIcon
              dateFormat="MMMM d, yyyy "
              onChange={(date) => setCheckOut(date)}
              showTimeSelect
              timeIntervals={2}
              minDate={new Date().setDate(new Date().getDate() + 1)}
              selected={checkOut}
            />
          </div>
        </div>
        <div className="my-5 space-y-5">
          <p className="text-white">
            INITIAL PRICE: <br /> {room.price}$
          </p>
          <p className="text-white">
            YOUR PRICE: <br />
            {room?.specialOffers.length > 0
              ? room?.specialOffers[0].offerPrice
              : room.price}
            $
          </p>
        </div>
        <div>
          <button
            className={`s-btn w-full ${
              room.isBooked ? "pointer-events-none opacity-50" : ""
            }  h-12`}
          >
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default Side;
