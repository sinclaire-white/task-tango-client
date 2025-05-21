import Banner from "../Components/Banner"
import Popular from "../Components/Popular"
import { useLoaderData } from "react-router";
const Landing = () => {
   const Categories = useLoaderData();
    // console.log(Categories);
    return (
        <div>
            <Banner></Banner>
            <Popular Categories={Categories}></Popular>
        </div>
    );
};

export default Landing;