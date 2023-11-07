/* eslint-disable react/prop-types */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Side = ({ room }) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const handleBooking = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(checkIn, checkOut, email, room.price);
  };

  return (
    <div className="p-5 bg-[#333132] ">
      <h1 className="text-center text-white font-semibold text-xl">RESERVATION</h1>
      <hr  className="border my-5" />
      <form onSubmit={handleBooking}>
        <div className="space-y-5">
          <div>
            <p className="text-white mb-2 font-medium">EMAIL:</p>
            <input
              placeholder="Your Email"
              required
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
            />
          </div>
          <div>
            <p className="text-white mb-2 font-medium">CHECK-OUT:</p>
            <DatePicker
              className="w-full outline-none text-black text-center font-semibold text-lg"
              showIcon
              dateFormat="MMMM d, yyyy "
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
            />
          </div>
        </div>
        <div className="my-5 space-y-5">
        <p className="text-white">INITIAL PRICE: <br /> {room.price}$</p>
        <p className="text-white">YOUR PRICE: <br />{room.price}$</p>
        </div>
        <div>
          <button className="s-btn w-full h-12">BOOK NOW</button>
        </div>
      </form>
    </div>
  );
};

export default Side;
