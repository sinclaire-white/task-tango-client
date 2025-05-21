import { Link } from "react-router";
import { NavLink } from "react-router";

const Navbar = () => {

  const links = [
    <NavLink to={"/"} className={"hover:text-secondary hover:bg-black px-2 py-1 rounded-lg hover:text-black"}>Home</NavLink>,
    <NavLink to={"/add-task"} className={"hover:bg-black px-2 py-1 rounded-lg  hover:text-secondary"}>Add Task</NavLink>,
    <NavLink to={"/browse-task"} className={"hover:bg-black px-2 py-1 rounded-lg hover:text-secondary"}>Browse Task</NavLink>,
    <NavLink to={"/my-posted-task"} className={"hover:bg-black px-2 py-1 rounded-lg hover:text-secondary"}>My Posted Task</NavLink>,
  ]


    return (
        <div className="shadow-sm navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
        
        {links}
        
      </ul>
    </div>
    <div><img src="https://i.ibb.co/qFPLCppp/Task-Tango-Logo.png" alt="logo" className='w-20 h-20'/></div>
    <h2 className="text-2xl font-bold text-primary">Task Tango</h2>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 space-x-2 text-lg font-medium menu menu-horizontal">
      {links}
    </ul>
  </div>
  <div className="space-x-2 navbar-end">
    <Link to={"/signup"} className="p-5 text-white btn bg-primary hover:bg-black hover:text-secondary rounded-2xl">Sign Up</Link>
    
    <Link to={"/login"} className="p-5 text-white btn bg-primary hover:bg-black hover:text-secondary rounded-2xl">Login</Link>
  </div>
</div>
    );
};

export default Navbar;