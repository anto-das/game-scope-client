import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import '../utilites/navbar.css'

const Navbar = () => {
  const {user,handleSignOut,setToggle,toggle} = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const links = <>
    <ul className="menu menu-horizontal px-1 pt-4">
      <NavLink className="font-bold mr-2 text-gray-700 md:text-gray-200 lg:text-gray-200 hover:text-orange-500 mb-2 text-md"to={"/"}>Home</NavLink>
    <NavLink className="font-bold text-gray-700 md:text-gray-200 lg:text-gray-200 hover:text-orange-500 mr-2 mb-2 text-md"to={"/allreviews"}>All-Reviews</NavLink>
    <NavLink className="font-bold text-gray-700 md:text-gray-200 lg:text-gray-200 hover:text-orange-500 mr-2 mb-2 text-md"to={"/addreviews"}>Add-Reviews</NavLink>
    <NavLink className="font-bold text-gray-700 md:text-gray-200 lg:text-gray-200 hover:text-orange-500 mr-2 mb-2 text-md"to={"/myreviews"}>My-Reviews</NavLink>
    <NavLink className="font-bold text-gray-700 md:text-gray-200 lg:text-gray-200 hover:text-orange-500 mr-2 text-md"to={"/watch"}>Watch-List</NavLink>
    {
      user &&  <Link onClick={handleSignOut} className="font-bold text-red-500 hover:underline hover:text-orange-500 mr-2 text-md"to={"/"}>Sign-Out</Link>
    }
    </ul>
    </>
    return (
        <div>
             <div className="navbar bg-[#20232B] py-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-8 shadow">
        {
            links
        }
      </ul>
    </div>
    <a className="text-gra-700 text-xl font-bold text-gray-300">Game <span className="text-orange-500">Scope</span></a>
  
  </div>
  
  <div className="navbar-center hidden lg:flex">
    
     {
        links
     }
  </div>
  <div className="navbar-end">
    {
      user?.email? <div className="relative inline-block">
      <img
        src={user?.photoURL || "https://via.placeholder.com/150"}
        alt="User Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      />

      {isDropdownOpen && (
        <p
          className="absolute right-0 mt-2 p-4 font-bold w-48 bg-white shadow-md rounded-md border text-center border-gray-200"
        >
          {user.displayName}
        </p>
      )}
    </div>: <Link to={"/auth/signin"}  className="btn text-md font-bold flex justify-between items-center">
        Sign in now
      <FaCircleUser />
      </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;