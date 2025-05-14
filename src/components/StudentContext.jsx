import React, { createContext, useState, useContext } from 'react';

// Create the Context
const StudentContext = createContext();

// Create a Provider component
export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState('');

  return (
    <StudentContext.Provider value={{ student, setStudent, message, setMessage }}>
      {children}
    </StudentContext.Provider>
  );
};

// Custom Hook to use the context
export const useStudentContext = () => useContext(StudentContext);
