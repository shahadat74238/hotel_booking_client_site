import { NavLink, Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import Slider from "./Slider";
import Side from "./Side";

const RoomDetails = () => {
  const axios = useAxios();
  const { id } = useParams();



  const getRoom = async () => {
    try {
      const res = await axios.get(`/rooms/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const { isLoading, data: room } = useQuery({
    queryKey: ["room"],
    queryFn: getRoom,
  });
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading data.</h1>
      </div>
    );
  }
  console.log(room.data);

  return (
    <div className="w-full ">
        <div className="h-24 flex items-end p-5 bg-slate-100">
            <div className="container mx-auto">
            <h1 className="text-2xl uppercase font-bold">{room.data.roomTitle}</h1>
            </div>
        </div>
      <div className="my-20 container mx-auto grid gap-10 lg:grid-cols-4 grid-cols-1 ">
        <div className="lg:col-span-3 ">
          <div>
            <Slider room={room.data} />
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {room?.data?.images.map((img, idx) => (
              <div key={idx}>
                <img className="h-full w-full object-cover" src={img} alt="loading img" />
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-4 mt-10">
            <div className="col-span-1">
              <NavLink to={`/rooms/${room?.data._id}`}>
                <button className="text-xl font-medium uppercase">
                  ROOM DETAILS
                </button>
              </NavLink>
              <hr className="border my-3" />
              <NavLink to="details/reviews">
                <button className="text-xl font-medium uppercase">
                  Reviews
                </button>
              </NavLink>
            </div>
            <div className="col-span-3">
              <Outlet />
            
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
            <Side room={room.data} />
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
