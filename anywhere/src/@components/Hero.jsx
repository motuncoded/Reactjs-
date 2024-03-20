import React from 'react';
import { MdOutlinePersonPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";





function Hero() {
 
  const handleFocus=()=>{

  }
  return (
    <div className="heroContainer">
      <h1>Start for free</h1>
      <h2>
        Create an account<span className="dot">.</span>
      </h2>
      <h3>
        Already a member?{" "}
        <a href="#" className="dot">
          Login
        </a>
      </h3>
      <form>
        <div className="firstInput">
          <div className="nameContainer" onFocus={handleFocus}>
            <div>
              <label htmlFor="firstname">First name</label>
              <input type="text" name="" id="" />
            </div>
            <MdOutlinePersonPin size={20} color="#edece57d" />
          </div>
          <div className="nameContainer">
            <div>
              <label htmlFor="lastname">Last name</label>
              <input type="text" name="" id="" />
            </div>{" "}
            <MdOutlinePersonPin size={20} color="#edece57d" />
          </div>
        </div>
        <div className="secondInput">
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="" id="" />
          </div>
          <HiOutlineMail size={20} color="#edece57d" />
        </div>
        <div className="secondInput">
          <div>
            <label htmlFor="email">Password</label>
            <input type="text" name="" id="" />
          </div>
          <FaRegEyeSlash size={20} color="#edece57d" />
        </div>
        <div className="btnContainer">
          <button>Change method</button>
                    <button>Create account</button>

        </div>
      </form>
    </div>
  );
}

export default Hero
