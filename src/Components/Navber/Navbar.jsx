import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../../../public/logo.png";
import useAxios from "../../Hooks/useAxios";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const axios = useAxios();

  const handleLogout = async() => {

    try{
      await logOut() 
      await axios.post("/logout")
    }
    catch (err){
      console.log(err.message);
    }
    logOut()
      .then(() => {
        toast.success("Successfully logged out !", {
          duration: 4000,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-f-color font-semibold text-lg uppercase" : " font-semibold text-lg uppercase"
          }
        >
          <FaHome className="text-2xl" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive }) =>
            isActive ? "text-f-color font-semibold text-lg uppercase" : " font-semibold text-lg uppercase"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            isActive ? "text-f-color font-semibold text-lg uppercase" : " font-semibold text-lg uppercase"
          }
        >
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-f-color font-semibold text-lg uppercase" : " font-semibold text-lg uppercase"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 w-full shadow-lg ">
      <div className="navbar container mx-auto px-5 bg-base-100">
        <div className="navbar-start z-10 ">
          <div className="dropdown">
            <button  tabIndex={0} className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {/* Tablet view */}
            <ul
              tabIndex={0}
              className="  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-32"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="flex gap-2 items-center">
            <img className="md:h-10 h-5" src={logo} alt="Loading Logo" />
            <p style={{letterSpacing: "5px"}} className="md:text-2xl font-semibold uppercase">Five Star</p>
          </Link>
        </div>
        {/* Desktop view */}
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end z-10">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar online">
                <div className="h-10 rounded-full">
                  <img
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-52"
              >
                <p className="text-xl mb-2 font-semibold ">
                  {user?.displayName ? user?.displayName : "UserName"}
                </p>
                <button onClick={handleLogout} className="s-btn w-full h-10">
                  LogOut
                </button>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="s-btn w-24 h-11">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
