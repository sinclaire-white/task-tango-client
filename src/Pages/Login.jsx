import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="h-screen mt-40">
      <form>
        <fieldset className="p-4 mx-auto border fieldset bg-secondary border-base-300 rounded-box w-xs">
          <h2 className="mb-5 text-5xl font-semibold text-center">
            Login Here
          </h2>
          <label className="font-bold label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="font-bold label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="mt-4 btn btn-neutral text-secondary">Login</button>
          <p>
            Haven't registered yet?{" "}
            <NavLink to={"/signup"} className={"underline"}>
              Sign Up Now
            </NavLink>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
