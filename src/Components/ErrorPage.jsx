
import { NavLink } from "react-router";
import Lottie from "lottie-react";
import ErrorAnimation from './Error.json';
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div>
           <Lottie animationData={ErrorAnimation}></Lottie>
          <div className="text-center"> <button className="bg-black text-secondary btn"><NavLink to="/"className={"flex items-center gap-2"}><FaArrowLeft /> <p>Go Back Home</p></NavLink></button></div>
        </div>
    );
};

export default ErrorPage;