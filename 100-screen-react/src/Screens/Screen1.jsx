import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import { useState } from "react";




function Screen1() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="formContainer">
      <form id="form">
        <h2>Login in to your account</h2>

        <div className="formWrapper">
          <label htmlFor="email">Email</label>
          <div className="inputContainer"> 
            <input type="text" name="" id="email" autoComplete="off" />
            </div>
        </div>
        <div className="formWrapper">
          <label htmlFor="password">Password</label>
          <div className="inputContainer">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id="password"
            />
            <button type="button" onClick={handleTogglePassword}>
              {showPassword ? (
                <LiaEyeSlash size={15} />
              ) : (
                <LiaEyeSolid size={15} />
              )}
            </button>
          </div>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Screen1;
