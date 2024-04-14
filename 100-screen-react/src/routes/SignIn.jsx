import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const navigate = useNavigate();

  async function handleSignIn(e){
  e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/dashboard")

      })
      .catch((error) => {
        console.log(error)

      })

  }
  
  return (
    <div className="screen">
      <div className="image">
        <h2>
          Create a new account, <Link to="/signup">Sign up </Link>{" "}
        </h2>
      </div>
      <div className="screenForm">
        <h1>Welcome Back</h1>
        <h2>
          Log in to your account so you can continue building and editing your
          onboarding flow.
        </h2>
        <form action="#">
          <div className="formInput">
            <label htmlFor="email-address">Email address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="formInput">
            <button className="sign"
              type="submit" onClick={(e)=>{
                handleSignIn(e)
              }}> Sign in
            </button>
          </div>
          <h3>Sign in with </h3>
          <div className="icon">          

          <button type="submit" className="icon">
            <FcGoogle size={24} />
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
