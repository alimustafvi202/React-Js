import React, { useEffect, useState } from "react";
import axios from "axios";

function Promises() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(""); // For user input

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    axios.post("http://localhost:5000/users", { name })
      .then(() => {
        setName("");     // Clear input
        fetchUsers();    // Refresh list
      })
      .catch(error => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <>
      <h1>User List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Promises;
