import { useState } from 'react';
import Hook1 from './components/Hook1';
import Login from './components/Login';
import Promises from './components/Promises';
import LoginPage from './components/Axios';
import './index.css';
import ReactDOM from 'react-dom';
import { StudentProvider } from './components/StudentContext';
import StudentManager from './components/Allinone';
import ParentComponent from './components/CallBack';
function App() {
  return (
    <>
      {/* <Hook1/>
      <Login/>
      <Promises/>
      <LoginPage/> */}


      {/* <StudentProvider>
      <StudentManager />
    </StudentProvider> */}
    <ParentComponent/>
    </>
  )
}

export default App
