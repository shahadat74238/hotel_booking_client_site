import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Rooms = () => {
  const axios = useAxios();
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [price, setPrice] = useState("");
  console.log(price);

  const handleSort = (value) => {
    setPrice(value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/rooms?price=${price}`);
        setRooms(res);
        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [price, axios]);
  
  if (!isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title className="uppercase"> Five Star | Rooms </title>
      </Helmet>
      <div className="container mx-auto px-5">
        <div className="my-20">
          <div>
            <h1 className="text-center text-4xl font-semibold">
              ROOMS & SUITS
            </h1>
            <hr className="w-52 my-3  border border-f-color mx-auto" />
            <p className="mx-auto text-center w-96">
              Rooms and suites refer to accommodations offered by hotels,
              resorts, or similar establishments. They provide varying levels of
              comfort and space to cater to the diverse needs of guests.
            </p>
            <div className="mt-5">
              <select
                onChange={(e) => handleSort(e.target.value)}
                className="select select-warning w-52"
                defaultValue="Sort BY"
              >
                <option disabled value="sortBy" >Sort By</option>
                <option value="a-z">A-Z</option>
                <option value="highToLow">High to Low Price</option>
                <option value="lowToHigh">Low to High Price</option>
              </select>
            </div>
          </div>
          <div className="mt-10 grid gap-20  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {rooms?.data.map((room) => (
              <div key={room._id} className=" group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    className="h-60 w-full object-cover transition-transform transform scale-100 duration-500 group-hover:scale-105"
                    src={room.banner}
                    alt="Loading Image"
                  />

                  <Link to={`/rooms/${room._id}`}>
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
                  </Link>
                </div>
                <div className="pt-5 text-center px-7">
                  <h1 className="text-2xl font-bold">{room.roomTitle}</h1>
                  <hr className="w-28 border-black my-3 border mx-auto" />
                  <p className="">{room.information.slice(0, 80)}...</p>
                  <Link to={`/rooms/${room._id}`}>
                    <button className="mt-5 hover:text-yellow-500 text-f-color underline font-semibold">
                      Check Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
