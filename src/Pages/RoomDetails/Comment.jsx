import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState } from "react";

const Comment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axios = useAxios();
  const [rating, setRating] = useState("");
  const handleRatingChange =(newRating) => {
    setRating(newRating);
  };
  const dateTime = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateTime
  );

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
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <h1>Loading data.</h1>
      </div>
    );
  }

  const isBooked = booking?.data.find((book) => book.userEmail === user?.email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const userPhoto = user.photoURL;
    const roomId = id;
    const data = { name, rating, email, comment, formattedDate, userPhoto, roomId };

    try {
      const response = await axios.post("/comments", data);
      console.log("Response data:", response.data);
      window.location.reload();
      toast.success("Comment posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      {isBooked ? (
        <div className="">
          <h1 className="text-xl uppercase mb-5 font-bold">Post a Comment</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              required
              placeholder="Your Comment"
              className="outline-none border p-5 w-full"
              name="comment"
              cols="50"
              rows="5"
            ></textarea>
            <div className="grid grid-cols-2 gap-10 my-5">
              <input
                required
                placeholder="Your Name"
                defaultValue={user?.displayName || ""}
                className="outline-none border w-full p-5 h-12"
                type="text"
                name="name"
                id=""
              />
              <input
                required
                defaultValue={user?.email || ""}
                placeholder="Your Email"
                className="outline-none border w-full p-5 h-12"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="my-2">
          <Rating
               emptySymbol={<AiOutlineStar className="text-2xl" />}
               fullSymbol={<AiFillStar className="text-2xl" />}
               fractions={2}
               initialRating={rating}
               onChange={handleRatingChange}
            />
          </div>
            <input
              className="s-btn w-full h-12 uppercase"
              type="submit"
              value="Submit"
            />
          </form>
          
        </div>
      ) : (
        <div className="">
          <h1 className="text-xl uppercase mb-5 font-bold">Post a Comment</h1>
          <form onSubmit={handleSubmit}>
            <textarea
              required
              disabled
              placeholder="Your Comment"
              className="outline-none border p-5 w-full"
              name="comment"
              cols="50"
              rows="5"
            ></textarea>
            <div className="grid grid-cols-2 gap-10 my-5">
              <input
                required
                disabled
                placeholder="Your Name"
                className="outline-none border w-full p-5 h-12"
                type="text"
                name="name"
                id=""
              />
              <input
                required
                disabled
                placeholder="Your Email"
                className="outline-none border w-full p-5 h-12"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="my-2 pointer-events-none opacity-50">
            <Rating
               emptySymbol={<AiOutlineStar className="text-2xl" />}
               fullSymbol={<AiFillStar className="text-2xl" />}
               fractions={2}
               initialRating={rating}
               onChange={handleRatingChange}
            />
          </div>
            <input
              className="s-btn w-full h-12 pointer-events-none opacity-50 uppercase"
              disabled
              type="submit"
              value="Submit"
            />
          </form>
          
        </div>
      )}
    </div>
  );
};

export default Comment;
