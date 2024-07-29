import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    window.location.href = "/thank-you";
  };

  const validatePasswordMatch = (value) => {
    return value === watch("password") || "Passwords do not match";
  };

  const validateDOB = (value) => {
    const today = new Date();
    const birthDate = new Date(value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age > 18;
    }
    return age >= 18;
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Full Name"
            />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="date"
              {...register("dob", {
                required: "Date of Birth is required",
                validate: validateDOB,
              })}
              placeholder="Date of Birth"
            />
            {errors.dob && <p>{errors.dob.message}</p>}
          </div>
          <div>
            <input
              {...register("location", { required: "Location is required" })}
              placeholder="Location"
            />
            {errors.location && <p>{errors.location.message}</p>}
          </div>
          <div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: validatePasswordMatch,
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
