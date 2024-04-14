import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
   const navigate = useNavigate();

  async function handleSignUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/dashboard");

      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="screen">
      <div className="image">
        <h2>
          Already have an account, <Link to="/signin">Sign in</Link>
        </h2>
      </div>
      <div className="screenForm">
        <h1>Create account</h1>
        <h2>
          Sign up to your account so you can continue building and editing your
          onboarding flow.
        </h2>
        <form>
          <div className="formInput">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="formInput">
            <label htmlFor="email-address">Email address</label>
            <input
              type="email"
              name=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="formInput">
            <button
              type="submit"
              className="sign"
              onClick={() => {
                handleSignUp();
              }}
            >
              Sign up
            </button>
          </div>
          <h3>Sign up with </h3>
          <div className="icon">
            <button type="submit">
              <FcGoogle size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
