import React from "react";
import "./login-style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Logo from "../../assets/image/logo-black.png";
const LoginForm = () => {
   return (
      <div className="container-login-form-style">
         <a href="#">
            <img style={{ height: "45px", weight: "45px" }} src={Logo} />
         </a>
         <div className="login-title-style">
            <p>Login To Your Account</p>
            <p>Login to feel benefit</p>
         </div>
         <form className="login-form-style">
            <input name="email" placeholder="email" type="email" required />
            <input name="password" placeholder="password" type="password" required />
            <div className="container-btn-style">
               <button>
                  Login
                  <MdKeyboardArrowRight className="icon-arrow-login" />
               </button>
               <p>OR</p>
               <img style={{ height: "45px", weight: "45px" }} src={require("../../assets/image/google.png")} />
               <img style={{ height: "45px", weight: "45px" }} src={require("../../assets/image/facebook.png")} />
            </div>
         </form>
         <p style={{ position: "relative", left: "35px" }}>
            Don't haved account please
            <span style={{ color: "#FE4D00", fontWeight: "bold", padding: "0px 6px" }}>Signup</span>
         </p>
      </div>
   );
};

const Login = () => {
   // const image = {
   //   backgroundImage: `url(${require("../image/group.png")})`,
   // };
   return (
      <div className="login-style">
         <div className="left-style"></div>
         <div>
            <LoginForm />
         </div>
      </div>
   );
};

export default Login;
