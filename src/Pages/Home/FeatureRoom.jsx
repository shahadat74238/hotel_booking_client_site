import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const FeatureRoom = () => {
  const axios = useAxios();
  const [rooms, setRooms] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(rooms);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/features/rooms`);
        setRooms(res.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [axios]);

  if (!isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 my-20">
      <div className="mb-10">
        <h1 className="text-center text-4xl uppercase font-semibold">Feature Rooms</h1>
        <hr className="w-32 my-3  border border-f-color mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {rooms?.map((room) => (
          <div key={room._id} className=" group cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                className="h-60 w-full object-cover transition-transform transform scale-100 duration-500 group-hover:scale-105"
                src={room.banner}
                alt="Loading Image"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                <div className="space-y-1 text-center">
                  <h1 className="font-semibold text-lg text-white">
                    Staring from
                  </h1>
                  <h2 className="text-white text-2xl font-bold">
                    ${room.price} <span className="text-lg">/ night</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="pt-5 text-center px-7">
              <h1 className="text-2xl font-bold">{room.roomTitle}</h1>
              <hr className="w-28 border-black my-3 border mx-auto" />
              <p className="">{room.information.slice(0, 80)}...</p>

              <button className="mt-5 hover:text-yellow-500 text-f-color underline font-semibold">
                Check Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureRoom;
