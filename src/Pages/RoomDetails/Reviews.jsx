import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const Reviews = () => {
  const axios = useAxios();
  const { id } = useParams();
  const getRoom = async () => {
    try {
      const res = await axios.get(`/comments?roomId=${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const { isLoading, data: review } = useQuery({
    queryKey: ["review"],
    queryFn: getRoom,
  });
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading data.</h1>
      </div>
    );
  }
  console.log(review.data);

  return (
    <div className="ml-10">
      <h1 className="text-xl font-semibold uppercase ">Reviews: {review?.data.length}</h1>
      <hr className="border my-10 " />
      <div className="space-y-10">
        <h1 className="text-xl font-semibold uppercase ">Comments</h1>
        {review?.data.length > 0 ? (
          <div>
            {review?.data.map((r) => (
              <div key={r._id} className="flex gap-10">
                <div>
                  <div className=" md:h-20 md:w-20 h-10 w-10 overflow-hidden rounded-full">
                    <img
                      className="rounded-full h-full w-full object-cover"
                      src={r.userPhoto}
                      alt=""
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold ">{r.name}</h1>
                  <h3 className="text-gray-400">{r.formattedDate}</h3>
                  <p className="text-justify">{r.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-lg font-semibold text-gray-400">
              No Comment Available !
            </p>
          </div>
        )}
      </div>
      <hr className="border my-10 " />

      <div>
        <Comment />
      </div>
    </div>
  );
};

export default Reviews;
