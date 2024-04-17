import {Link } from "react-router-dom"
function Home() {
  return (
    <div className="grid">
      <h1>List of react simple projects</h1>
      <div className="grid-col">
        <Link to="/screen1" className="link">
          Screen 1
        </Link>
        <Link to="/screen2" className="link">
          Screen 2
        </Link>
      </div>
    </div>
  );
}

export default Home