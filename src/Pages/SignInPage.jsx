import { useContext, useState } from "react";
import { IoEye,IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignInPage = () => {
    const {setUser,SignInWithGoogle,setLoading,signInWithEmailPassword} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false)
    const handleSignIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailPassword(email,password)
        .then(res => {
            setUser(res.user)
        })
        .catch(error =>{
            alert(error.message)
        })
    }
    const handleSignInWithGoogle = () =>{
        SignInWithGoogle()
        .then(res => {
            setUser(res.user);
            setLoading(false);
            navigate("/")
        })
        .catch(err =>{
            alert(err.message)
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center mx-auto ">
             <div className="card w-full max-w-lg shrink-0 p-8 border">
              <h1 className="text-3xl text-center font-bold text-orange-500">Login Your Account</h1>
              <div className="divider"></div>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
           type="email"
            name="email"
             placeholder="email"
              className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword? "text":"password"} name="password" placeholder="password" className="input input-bordered" required />
          <button onClick={()=>setShowPassword(!showPassword)} className="absolute right-8 top-[53px]">
            {
              showPassword ? <IoEye></IoEye> : <IoEyeOff></IoEyeOff>
            }
            </button>
          <label className="label">
            <Link className="hover:underline">
            Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="px-5 py-2 bg-orange-700 text-white text-xl rounded-none font-bold">SIGN-IN</button>
          <div className="divider">OR</div>
          <button onClick={handleSignInWithGoogle} className="btn btn-outline mt-3 text-lg border-orange-400 text-orange-500"> Sign With <ion-icon name="logo-google"></ion-icon></button>
        </div>
      </form>
      <h2 className="text-center font-bold text-xl">Dont’t Have An Account ?<Link to={"/auth/signup"} className="underline text-orange-600"> SIGN UP</Link></h2>
    </div>
        </div>
    );
};

export default SignInPage;