import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setError(
        "Password should be at least 6 character !!!"
      );
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%])(?!.*\s).{6,16}$/.test(
        password
      )
    ) {
      setError(
        "Password should be at least one uppercase letter, one lowercase letter and one number!!!"
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photo)
        .then((res) => {
            console.log(res.user);
            window.location.reload(); 
        })
        .catch((err) => {
            console.log(err.message);
        });
        navigate('/')
        window.location.reload();
        toast.success("Successfully Account Created!",{
          duration: 4000,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="bg-[url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')] bg-no-repeat bg-cover bg-center">
      <Helmet>
        <title className="uppercase">Five Star | Register</title>
      </Helmet>
      <div className="container mx-auto lg:py-10 ">
        <div className="grid grid-cols-1  lg:grid-cols-2 min-h-screen">
          <div className=" overflow-hidden  bg-[url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')] bg-no-repeat bg-cover bg-center">
            <div className="h-full w-full bg-black/30 py-10 px-10 md:px-20 lg:px-20">
              <h1 className="text-4xl font-bold uppercase text-white mb-5">
                Welcome
                <br /> to the Five Star
              </h1>
              <p className="text-white mb-20">
                Hotel Five Star is a luxurious and opulent oasis that epitomizes
                elegance and indulgence. This premium establishment offers a
                world-class experience, featuring lavish accommodations,
                exquisite dining, and impeccable service. From meticulously
                designed suites to a plethora of amenities, guests are treated
                to the finest in comfort and sophistication.
              </p>
              <p className="text-white text-lg">
                Already Have an Account <br /> Please{" "}
                <Link to="/login" className="text-f-color underline">
                  Login.
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white p-10 md:px-20 lg:px-20 ">
            <h1 className="text-center text-3xl text-f-color uppercase font-semibold">
              User Register
            </h1>
            <form onSubmit={handleRegister}>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Full Name"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Username or Email"
                  className="mt-6 outline-none border-b-2 border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5]  bg-transparent  w-full"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Password"
                  className={` mt-4 outline-none placeholder:font-normal placeholder:text-base text-2xl font-bold border-b-2  border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5] bg-transparent w-full`}
                />
              </div>
              <div className="mt-5">
                <p className="font-semibold text-red-700">{error}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Trams and Condition
                  </label>
                </div>
              </div>
              <button className="w-full h-12 s-btn mt-10">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
