import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import video from "../../video/Background - 6266.mp4";

export default function Login() {
  return (
    <div className="form">
      <video autoPlay loop muted className="video">
        <source className="vid" src={video} type={"video/mp4"} />
      </video>
      <input placeholder="example@example.com" type="text" />
      <input placeholder="password" type="text" />
      <div className="btns ">
        <button>
          <NavLink to={"/registr"}>SignUp</NavLink>
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}
