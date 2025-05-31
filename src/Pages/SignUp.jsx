import { NavLink, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, photo, email, password } = Object.fromEntries(
      formData.entries()
    );

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters, contain a number, a lowercase, an uppercase letter, and a special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const result = await createUser(email, password);
      const userProfile = {
        name,
        photo,
        email,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      const response = await fetch("https://task-tango-server.vercel.app/users", {
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
        setUserInfo(userProfile);
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

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithGoogle();
      const { displayName, email, photoURL } = result.user;
      const userProfile = {
        name: displayName,
        photo: photoURL,
        email,
        creationTime: result.user?.metadata?.creationTime,
        lastSignInTime: result.user?.metadata?.lastSignInTime,
      };

      const response = await fetch("https://task-tango-server.vercel.app/users", {
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
        setUserInfo(userProfile);
        Swal.fire({
          icon: "success",
          title: "Signed in with Google.",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate("/"));
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Google Sign-In Failed",
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
            <input type="text" className="input" placeholder="Name" name="name" required />
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
              required
            />
            <label className="font-bold label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
            <button className="mt-4 btn btn-neutral text-secondary hover:bg-base-100">
              Sign Up
            </button>
            
            <button
              type="button"
              className="mt-2 bg-black btn text-secondary btn-neutral hover:bg-base-100"
              onClick={handleGoogleSignUp}
            >
              Sign Up with Google
            </button>
            <p className="mt-2 ml-2">
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
