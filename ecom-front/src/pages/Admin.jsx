import { useEffect, useState } from "react";
import axios from "axios";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";
export default function Admin() {
  const admin = localStorage.getItem("isAdmin");
  const isLoggedIn = localStorage.getItem("isloggedIn");
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const [count, setCount] = useState(0);
  const [newsletter, setNewsletter] = useState([]);

  const getUsers = () => {
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
  };
  const getCount = () => {
    axios
      .get("http://localhost:5000/api/v1/users/count")
      .then((res) => setCount(res.data.count))
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/api/v1/users/${id}`)
      .then((res) => {
        getUsers();
        getCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getallnewsletter = () => {
    axios
      .get("http://localhost:5000/api/v1/newsletter")
      .then((res) => {
        setNewsletter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getallnewslettercsv = () => {
    // Generate CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Email\n"; // Add header row

    // Loop through the newsletter emails and add each to the CSV
    newsletter.forEach((newsletter) => {
      csvContent += `${newsletter.email}\n`; // Add each email as a new row
    });

    // Create a link to trigger the download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_emails.csv"); // Filename of the CSV file
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up and remove the link after downloading
    document.body.removeChild(link);
  };

  useEffect(() => {
    getUsers();
    getCount();
    getallnewsletter();
  }, []);

  return (
    <>
      {admin === "true" && isLoggedIn === "true" ? (
        <>
          <h1
            style={{ textAlign: "center", color: "red" }}
            className="text-3xl m-10"
          >
            Total number of users : {count}
          </h1>
          {users.map((user) => {
            return (
              <div key={user._id}>
                <div>{user.username}</div>
                <DeleteBtn deletefnct={() => deleteUser(user._id)}></DeleteBtn>
              </div>
            );
          })}
          <h1>news letter</h1>
          <button onClick={getallnewslettercsv}>exports csv</button>
          {newsletter.map((newsletter) => {
            return (
              <div key={newsletter._id}>
                <div>{newsletter.email}</div>
              </div>
            );
          })}
          {}
        </>
      ) : (
        <div>not admin</div>
      )}
    </>
  );
}
