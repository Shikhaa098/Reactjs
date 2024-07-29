import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import ThankYou from './ThankYou';
import Login from './Login';
import OTPPage from "./OTPPage";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTPPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
