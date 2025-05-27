import { NavLink, useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, signInWithGoogle } = use(AuthContext);
const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const email = formData.get('email');
    // const password = formData.get('password');
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        // Signed up
        // const user = result.user;
        // console.log(user)

        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:3000//users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigate("/");// Redirect to home after Swal closes
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
 const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userProfile = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        };

        fetch("http://localhost:3000//users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Account Created",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              navigate("/");
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Signup Failed",
          text: error.message,
        });
      });
  };

  
  return (
    <div className="h-screen mt-40">
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

          <button className="mt-4 btn btn-neutral text-secondary" >
            Sign Up
          </button>
          <button className="btn bg-white text-black border-[#e5e5e5]" onClick={handleGoogleSignUp}>
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Sign Up with Google
          </button>
          <p>
            Already registered?
            <NavLink to={"/login"} className={"underline ml-1"}>
              Login Now
            </NavLink>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
