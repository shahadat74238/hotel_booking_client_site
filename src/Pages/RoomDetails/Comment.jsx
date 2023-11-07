import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import toast from "react-hot-toast";

const Comment = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axios = useAxios();

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
  console.log(formattedDate);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const comment = form.comment.value;
    const userPhoto = user.photoURL;
    const roomId = id;
    const data = { name, email, comment, formattedDate, userPhoto, roomId };

    try {
      const response = await axios.post("/comments", data);
      console.log("Response data:", response.data);
      toast.success("Comment posted successfully")
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
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
        <input
          className="s-btn w-full h-12 uppercase"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Comment;
