import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/auth/login", user)
      .then((res) => {
        alert("successfully logged in");
        localStorage.setItem("isloggedIn", true);
        localStorage.setItem("isAdmin", res.data.user.isAdmin);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
