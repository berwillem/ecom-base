import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

export default function NavBar() {
  const [isLoggedOut, setIsLoggedOut] = useState(
    !localStorage.getItem("isloggedIn")
  );

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedOut(true);
  };

  const isloggedIn = localStorage.getItem("isloggedIn");

  return (
    <div className="nav">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      {isloggedIn ? (
        <div style={{ display: "flex", gap: "10px" }}>
          <FaUser size={20} />
          <MdLogout size={20} onClick={handleLogout} />
        </div>
      ) : (
        <Link to={"/login"}>
          <button>Login/Register</button>
        </Link>
      )}
    </div>
  );
}
