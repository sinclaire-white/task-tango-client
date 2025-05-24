import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../Providers/AuthContext";
import { auth } from "../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { use } from "react";
import Swal from "sweetalert2";

const Navbar = ({users}) => {
  const { user } = use(AuthContext);

   const getUserPhoto = () => {
    if (user?.photoURL) return user.photoURL;
    const currentUser = users.find(u => u.email === user?.email);
    return currentUser?.photo || 
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  };

  const getUserName = () => {
    if (user?.displayName) return user.displayName;
    const currentUser = users.find(u => u.email === user?.email);
    return currentUser?.name || "User";
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

  const links = [
    <NavLink
      key="home"
      to={"/"}
      className={
        "hover:text-secondary hover:bg-black px-2 py-1 rounded-lg"
      }
    >
      Home
    </NavLink>,
    <NavLink
      key="add-task"
      to={"/add-task"}
      className={"hover:bg-black px-2 py-1 rounded-lg  hover:text-secondary"}
    >
      Add Task
    </NavLink>,
    <NavLink
      key="browse-task"
      to={"/browse-task"}
      className={"hover:bg-black px-2 py-1 rounded-lg hover:text-secondary"}
    >
      Browse Task
    </NavLink>,
    <NavLink
      key="my-posted-task"
      to={"/my-posted-task"}
      className={"hover:bg-black px-2 py-1 rounded-lg hover:text-secondary"}
    >
      My Posted Task
    </NavLink>,
  ];

  return (
    <div className="shadow-sm navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {links}
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co/qFPLCppp/Task-Tango-Logo.png"
            alt="logo"
            className="w-20 h-20"
          />
        </div>
        <h2 className="text-2xl font-bold text-primary">Task Tango</h2>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 space-x-2 text-lg font-medium menu menu-horizontal">
          {links}
        </ul>
      </div>
      <div className="space-x-2 navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={getUserPhoto()}
                    alt={getUserName()}
                    title={getUserName()}
                  />
                </div>
              </div>
              <span className="hidden font-semibold md:inline">
                {getUserName()}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary hover:bg-black hover:text-secondary"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/signup"
              className="btn btn-primary hover:bg-black hover:text-secondary"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="btn btn-primary hover:bg-black hover:text-secondary"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
