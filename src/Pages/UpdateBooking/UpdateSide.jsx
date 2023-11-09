/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateSide = ({room}) => {
  const axios = useAxios();
  const [newDate, setNewDate] = useState(new Date(room?.checkOut));
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate1 = new Intl.DateTimeFormat("en-US", options).format(
    newDate
  );

  const handleUpdate = async (event,id) => {
    event.preventDefault();
    try {
      const res = await axios.put(`/booking?id=${id}`, {
        newDate: formattedDate1,
      });
      Swal.fire("Updated", "Successfully Updated", "success");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10 h-full bg-[#333132] ">
      <h1 className="text-center text-white font-semibold text-xl">
        RESERVATION
      </h1>
      <hr className="border my-5" />
      <form onSubmit={(event)=>handleUpdate(event, room._id)}>
        <div className="space-y-5">
          <div>
            <p className="text-white mb-2 font-medium">CHECK-IN:</p>
            <p className="text-gray-400">{room?.checkIn}</p>
          </div>
          <div>
            <p className="text-white mb-2 font-medium">CHECK-OUT:</p>
            <DatePicker
              className="w-full outline-none border text-black text-center font-semibold text-lg"
              showIcon
              dateFormat="MMMM d, yyyy "
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              minDate={new Date(room?.checkOut)}
            />
          </div>
        </div>
        <div className="my-5 space-y-5">
          <p className="text-white">
            YOUR PRICE: <br />
            <span className="text-gray-400">{room?.roomPrice} $</span>
          </p>
        </div>
        <div>
          <button className={`s-btn w-full uppercase h-12`}>Update Date</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSide;
