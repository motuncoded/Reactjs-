import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="grid">
      <Link to="/signin" className="link">Sign in</Link>
      <Link to="/signup" className="link">Sign up</Link>
    </div>
  );
}

export default Home