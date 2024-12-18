import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UpcomingGames from "../Components/UpcomingGames";


const HomeLayout = () => {
    return (
        <div>
            <header className="sticky top-0 z-10">
              <Navbar></Navbar>
            </header>
            <main>
              <section className="">
              <Banner></Banner>
              </section>
              <section>

              </section>
              <section className="py-4">
               <Outlet></Outlet>
              </section>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;