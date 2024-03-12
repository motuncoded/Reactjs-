import React from "react";

import image from "../assets/background.jpg";

function SignUp() {
  return (
    <div className="formWrapper ">
      <div className="imageContaner even-columns">
        <div>
                  <img src={image} alt="background-image" className="image" />
                  
        </div>
        <div className="formContainer">
          <h2>Sign Up</h2>

          <form></form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
