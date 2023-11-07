import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState("")
    const {loginUser, loginWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const toastId = toast.loading('Loading to Login...');

        loginUser(email, password)
        .then((res) => {
            console.log(res.user);
            navigate(location.state ? location.state : '/')
            window.location.reload();
            toast.success('Successfully Logged!',{id: toastId});
        })
        .catch(() => {
            setError("Invalid username or password. Please try again!!");
        });
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then((res) => {
            console.log(res.user);
            navigate(location.state ? location.state : '/')
            toast.success('Successfully Logged!');
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

  return (
    <div className="bg-[url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')] bg-no-repeat bg-cover bg-center">
      <Helmet>
        <title className="uppercase">Five Star | Login </title>
      </Helmet>
      <div className="container mx-auto py-10">
        <div style={{ boxShadow: '2px 10px 10px 1px rgba(0, 0, 0, 0.4)' }} className=" lg:w-2/4 w-4/5 mx-auto ">
          <div className=" overflow-hidden  bg-[url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')] bg-no-repeat bg-cover bg-center h-80">
            <div className="h-full w-full bg-black/30 py-10 px-10 md:px-15 lg:px-20">
              <h1 className="text-4xl font-bold uppercase text-white mb-5">
                Welcome
                <br /> to the Five Star
              </h1>
              <p className="text-white  mb-14">
                Hotel Five Star is a luxurious and opulent oasis that epitomizes
                elegance and indulgence.
              </p>
              <p className="text-f-color underline">
                <Link to="/register">Create an Account</Link>
              </p>
            </div>
          </div>
          <div className="bg-white py-10 px-10 md:px-15 lg:px-20 ">
            <h1 className="text-center text-3xl text-f-color uppercase font-semibold">User Login</h1>
            <form onSubmit={handleLogin}>
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
                  className={`mt-4 outline-none placeholder:font-normal placeholder:text-base text-2xl font-bold border-b-2  border-[#C5C5C5] py-2 placeholder:text-[#C5C5C5] bg-transparent w-full`}
                />
              </div>
              <div className="mt-3">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="check"
                    id="check "
                    className="cursor-pointer h-5 w-5 mr-3"
                  />
                  <label htmlFor="check" className="">
                    Remember Me
                  </label>
                </div>
                <p className="text-f-color underline cursor-pointer">
                  Forgot Password
                </p>
              </div>
              <button className="w-full h-12 s-btn mt-8 mb-5">
                Login
              </button>
            </form>
            <div className="">
              <button
              onClick={handleGoogleLogin}
              className="w-full h-11 f-btn">
                <FcGoogle className="inline mr-5 text-lg" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
