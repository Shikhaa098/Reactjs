import React from "react";
import { useLocation } from "react-router-dom";
import "./OTPPage.css";

const OTPPage = () => {
  const location = useLocation();
  const { usernameOrEmail } = location.state || {}; // Retrieve passed state

  return (
    <div className="otp-container">
      <h2>Welcome, {usernameOrEmail || "User"}</h2>
      <p>Please enter the OTP</p>
      <div className="otp-inputs">
        {Array(4).fill("").map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="otp-input"
          />
        ))}
      </div>
      <button className="otp-button">Proceed</button>
    </div>
  );
};

export default OTPPage;
