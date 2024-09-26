import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <Link to={"/login"}>

        <button>Login/Register</button>
      </Link>
    </div>
  );
}
