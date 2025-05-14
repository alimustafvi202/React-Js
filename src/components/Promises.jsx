import React, { useEffect, useState } from "react";
import axios from 'axios';

function Promises() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/customers')  // Changed to HTTP
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error(error); // Fixed variable name
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
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
