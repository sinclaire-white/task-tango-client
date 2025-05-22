import { NavLink } from "react-router";

const SignUp = () => {
     return (
        <div className="h-screen mt-40">
          <form>
            <fieldset className="p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box w-xs">
              <h2 className="mb-5 text-5xl font-semibold text-center">
                Sign Up
              </h2>
              <label className="font-bold label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="font-bold label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />
              <label className="font-bold label">Email</label>
              <input type="email" className="input" placeholder="Email" />
    
              <label className="font-bold label">Password</label>
              <input type="password" className="input" placeholder="Password" />
    
              <button className="mt-4 btn btn-neutral text-secondary">Sign Up</button>
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