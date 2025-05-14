import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);

  // ✅ GET request to fetch existing user data (example)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        console.log('GET Response:', response.data);
        setUserData(response.data);
      })
      .catch(error => {
        console.error('GET Error:', error);
      });
  }, []);

  // 🧠 Handle Login (POST Request)
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginPayload = { email, password };

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', loginPayload);
      console.log('POST Login Response:', response.data);
      alert('Login successful (simulated)');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  // 🔄 Handle Update (PUT Request)
  const handleUpdate = async () => {
    const updatePayload = { name: "Updated Name", email };

    try {
      const response = await axios.put('https://jsonplaceholder.typicode.com/users/1', updatePayload);
      console.log('PUT Update Response:', response.data);
      alert('User updated (simulated)');
    } catch (error) {
      console.error('Update Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleUpdate}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Simulate Update (PUT)
        </button>

        {userData && (
          <div className="mt-6 text-sm text-gray-600">
            <strong>Fetched User:</strong> {userData.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
