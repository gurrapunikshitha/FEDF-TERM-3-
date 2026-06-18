import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/track">Track</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Navbar;