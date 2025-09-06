import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import UpcomingGames from "../Components/UpcomingGames";
import PupolarGames from "../Components/PupolarGames";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";



const HomeLayout = () => {
  const {toggle, setToggle} = useContext(AuthContext);
    return (
        <div className={toggle && "bg-[#0f172a]"}>
            <header className="sticky top-0 z-10 ">
              <Navbar></Navbar>
            </header>
            <main>
              <section className="">
              <Banner></Banner>
              </section>
              <section className="py-4">
                <UpcomingGames></UpcomingGames>
              </section>
              <section className="my-3 w-11/12 mx-auto">
               <Outlet></Outlet>
              </section>
              <section>
                <PupolarGames></PupolarGames>
              </section>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;