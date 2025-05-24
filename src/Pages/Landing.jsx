import Banner from "../Components/Banner"
import Popular from "../Components/Popular"
import Why from "../Components/Why"
import FeaturedTask from "../Components/FeaturedTask";
import { useLoaderData } from "react-router";
const Landing = () => {
   const Categories = useLoaderData();
    // console.log(Categories);
    return (
        <div>
            <Banner></Banner>
            <FeaturedTask></FeaturedTask>
            <Popular Categories={Categories}></Popular>
            <Why></Why>
        </div>
    );
};

export default Landing;