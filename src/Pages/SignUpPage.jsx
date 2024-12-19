import { useState } from "react";
import { IoEye,IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [showPassword,setShowPassword] = useState(false)
      return (
          <div className="min-h-screen flex justify-center items-center mx-auto">
               <div className="card w-full max-w-lg shrink-0 p-8 border border-orange-500">
                <h1 className="text-3xl text-center font-bold text-orange-500">Sign-Up Your Account</h1>
                <div className="divider"></div>
        <form className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
            {
             <label className="label text-xs text-red-500">
          </label>
          }
          </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Enter Your Photo" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text":"password"} name="password" placeholder="password" className="input input-bordered" required />
            <button onClick={()=>setShowPassword(!showPassword)} className="absolute right-8 top-[53px]">
              {
                showPassword ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>
              }
              </button>
          </div>
          <div className="form-control mt-6">
            <button className="px-5 py-2 bg-orange-700 text-white text-xl rounded-none font-bold">Sign Up</button>
          </div>
        </form>
            <div className="divider">OR</div>
            <button className="btn btn-outline border-orange-700 mb-4 text-lg rounded-none text-orange-500">Sign-Up With <ion-icon name="logo-google"></ion-icon></button>
        <h2 className="text-center font-bold text-xl">Already Have An Account ?<Link to={"/auth/signin"} className="underline text-orange-600">SIGN IN</Link></h2>
      </div>
          </div>
      );
  };

export default SignUpPage;