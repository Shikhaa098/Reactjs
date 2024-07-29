// ThankYou.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css"; 

const ThankYou = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="thank-you-container">
      <h2>
        Thank You Please Check <br></br>Your Email for OTP
      </h2>
      <button className="proceed-button" onClick={handleProceed}>
        Proceed
      </button>
    </div>
  );
};

export default ThankYou;
