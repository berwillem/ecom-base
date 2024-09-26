import { useEffect, useState } from "react";
import axios from "axios";
export default function Admin() {
  const admin = localStorage.getItem("isAdmin");
  const isLoggedIn = localStorage.getItem("isloggedIn");
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {admin === "true" && isLoggedIn === "true" ? (
        <>
          <div>admin</div>
          {users.map((user) => {
            return <div key={user._id}>{user.username}</div>;
          })}
        </>
      ) : (
        <div>not admin</div>
      )}
    </>
  );
}
