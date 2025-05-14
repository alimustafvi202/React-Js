import React, { useState } from 'react';
import axios from 'axios';

const StudentManager = () => {
  const [studentId, setStudentId] = useState('');
  const [student, setStudent] = useState({ name: '', age: '', grade: '' });
  const [message, setMessage] = useState('');

  // 🔎 GET student by ID
  const handleFetch = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const found = response.data.find(s => s.id === parseInt(studentId));
      if (found) {
        setStudent({ name: found.name, age: '20', grade: 'A' }); // Simulated extra fields
        setMessage(`Student ${found.name} found`);
      } else {
        setMessage('Student not found');
      }
    } catch (err) {
      console.error(err);
      setMessage('Error fetching student');
    }
  };

  // 🆕 POST new student
  const handleAddStudent = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', student);
      console.log('POST Response:', response.data);
      setMessage('New student added (simulated)');
    } catch (err) {
      console.error(err);
      setMessage('Error adding student');
    }
  };

  // ✏️ PUT update student
  const handleUpdateStudent = async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${studentId}`, student);
      console.log('PUT Response:', response.data);
      setMessage('Student updated (simulated)');
    } catch (err) {
      console.error(err);
      setMessage('Error updating student');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Student Manager</h2>

      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <button
        onClick={handleFetch}
        className="w-full bg-gray-600 text-white py-2 rounded mb-4 hover:bg-gray-700"
      >
        Fetch Student
      </button>

      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <input
        type="number"
        placeholder="Age"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <input
        type="text"
        placeholder="Grade"
        value={student.grade}
        onChange={(e) => setStudent({ ...student, grade: e.target.value })}
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <div className="flex space-x-2">
        <button
          onClick={handleAddStudent}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Student
        </button>
        <button
          onClick={handleUpdateStudent}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Student
        </button>
      </div>

      {message && <div className="mt-4 text-center text-sm text-gray-700">{message}</div>}
    </div>
  );
};

export default StudentManager;
