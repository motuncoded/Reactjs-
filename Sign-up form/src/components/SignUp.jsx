import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoThin } from "react-icons/pi";

import image from "../assets/background.jpg";

function SignUp() {
  return (
    <div className="formWrapper ">
      <div className="even-columns">
        <div className="imageContainer">
          <img src={image} alt="background-image" className="image" />
        </div>
        <div className="formContainer">
          <h2>Sign Up</h2>
          <form>
            <div>
              <label htmlFor="firstname">
                <input type="text" name="" id="" placeholder="Firstname" />
              </label>
              <label htmlFor="lastname">
                <input type="text" name="" id="" placeholder="Lastname" />
              </label>
              <label htmlFor="email">
                <input type="email" name="" id="" placeholder="Email" />
              </label>
              <label htmlFor="password">
                <input type="password" name="" id="" placeholder="Password" />
              </label>
              <div className="checkbox" id="checkbox">
                <input type="checkbox" name="" id="" />
                <label htmlFor="terms">Accept Terms and Conditions</label>
              </div>
            </div>
            <div style={{ margin: "-1rem 0rem" }}>
              <button style={{ backgroundColor: "#000", color: "#fff" }}>
                Join Us{" "}
                <BsArrowRightShort size={22} style={{ marginLeft: ".25rem" }} />
              </button>
            </div>
            <div id="divide"></div>
            <div style={{ marginTop: "-2rem" }}>
              <button
                style={{
                  marginBottom: ".15rem",
                  backgroundColor: "transparent",
                }}
              >
                <FcGoogle size={22} style={{ paddingRight: ".3rem" }} /> Sign up
                with Google
              </button>
              <button
                style={{
                  marginTop: ".15rem",
                  backgroundColor: "#000",
                  color: "#fff",
                }}
              >
                <PiAppleLogoThin size={22} style={{ paddingRight: ".3rem" }} />
                Sign up with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
