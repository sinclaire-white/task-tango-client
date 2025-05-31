import { NavLink, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null); // State to store user info

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );

    try {
      const result = await createUser(email, password);
      const userProfile = {
        name,
        photo,
        email,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userProfile),
      });

      if (!response.ok) {
        throw new Error("Failed to save user to database");
      }

      const data = await response.json();
      if (data.insertedId) {
        setUserInfo(userProfile); // Set user data in state
        Swal.fire({
          icon: "success",
          title: "Your account is created.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate("/"));
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Sign-Up Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="h-screen mt-40">
      {userInfo ? (
        <div className="text-center">
          <img
            src={userInfo.photo}
            alt={userInfo.name}
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h2 className="mt-4 text-2xl font-semibold">{userInfo.name}</h2>
        </div>
      ) : (
        <form onSubmit={handleSignUp}>
          <fieldset className="p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box w-xs">
            <h2 className="mb-5 text-5xl font-semibold text-center">Sign Up</h2>
            <label className="font-bold label">Name</label>
            <input type="text" className="input" placeholder="Name" name="name" />
            <label className="font-bold label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
            />
            <label className="font-bold label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="font-bold label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <button className="mt-4 btn btn-neutral text-secondary">
              Sign Up
            </button>
            <p>
              Already registered?
              <NavLink to={"/login"} className={"underline ml-1"}>
                Login Now
              </NavLink>
            </p>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default SignUp;
