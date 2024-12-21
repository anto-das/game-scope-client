import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const UpdateReviewPage = () => {
    return (
        <div>
             <header className="sticky top-0 z-10">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto">
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateReviewPage;