import { useParams } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import UpdateSide from "./UpdateSide";

const UpdateBooking = () => {
    const axios = useAxios();
  const { id } = useParams();

    const getRoom = async () => {
        try {
          const res = await axios.get(`/booking/${id}`);
          return res;
        } catch (error) {
          console.log(error);
        }
      };
      const { isLoading, data: updateRoom } = useQuery({
        queryKey: ["updateRoom"],
        queryFn: getRoom,
      });
      if (isLoading) {
        return (
          <div className="min-h-screen">
            <h1>Loading data.</h1>
          </div>
        );
      }
      console.log(updateRoom?.data);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="container my-20 mx-auto px-5 grid gap-10 grid-cols-1 lg:grid-cols-2">
                <div className=" h-full ">
                  <h1 className="text-2xl font-semibold mb-5 uppercase text-f-color underline">{updateRoom?.data.roomName}</h1>
                    <img src={updateRoom?.data.roomPhoto} alt="" />
                </div>
                <div className="h-full">
                    <UpdateSide room={updateRoom?.data} />
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;