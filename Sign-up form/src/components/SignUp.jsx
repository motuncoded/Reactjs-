import React from "react";
import { FaArrowRight } from "react-icons/fa6";

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

            <div>
              <button>
                Join Us{" "}
                <FaArrowRight size={12} style={{ paddingLeft: ".25rem" }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
