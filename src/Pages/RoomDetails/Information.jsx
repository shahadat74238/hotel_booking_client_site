import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const Information = () => {
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
    <div className="ml-10">
      <div>
        <h1 className="text-xl font-semibold mb-5 uppercase">Information</h1>
        <p className="text-gray-400">{room?.data.information}</p>
      </div>
      <hr className="border my-10 " />
      <div>
        <h1 className="text-xl font-semibold mb-5 uppercase ">AMENITIES</h1>
        <div className="grid grid-cols-3 text-gray-400">
          <div className="space-y-2">
            <p>- Casino</p>
            <p>- Health Club</p>
            <p>- Pet Friendly</p>
            <p>- Safe Deposit Box</p>
          </div>
          <div className="space-y-2">
            <p>- Elevator</p>
            <p>- Minibar</p>
            <p>- Restaurant</p>
            <p>- Sauna</p>
          </div>
          <div className="space-y-2">
            <p>- Garage Space</p>
            <p>- Parking</p>
            <p>- Room Service</p>
            <p>- Wi-Fi</p>
          </div>
        </div>
      </div>
      <hr className="border my-10 " />
      <div>
        {room?.data.specialOffers.length > 0 ? (
          <div>
            <h1 className="text-xl font-semibold mb-5 uppercase">
              Special Offers
            </h1>
            <div className="grid grid-cols-1 gap-5">
              {room.data.specialOffers.map((offer, idx) => (
                <div key={idx}>
                  <p className="text-lg font-semibold">{offer.offerTitle}</p>
                  <hr className="border mb-3 w-10 border-f-color" />
                  <p className="font-medium text-gray-400">{offer.offerDescription}</p>
                  <p className="font-medium text-gray-400">Price: ${offer.offerPrice}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold mb-5 uppercase">
              Special Offers
            </h1>
            <p className="text-lg font-semibold text-gray-400">No offer Available !</p>
          </div>
        )}
        <hr className="border my-10 " />
      </div>
    </div>
  );
};

export default Information;
