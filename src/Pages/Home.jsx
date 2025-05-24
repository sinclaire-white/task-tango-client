
import Navbar from '../Components/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../Components/Footer';

const Home = () => {

const users = useLoaderData();

    return (
        <div>
            <Navbar users={users}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Home;