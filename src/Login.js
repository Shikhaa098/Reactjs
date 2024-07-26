// Login.js
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div>
          <label>Username/Email</label>
          <input
            type="text"
            {...register("usernameOrEmail", {
              required: "Username or Email is required",
            })}
          />
          {errors.usernameOrEmail && <p>{errors.usernameOrEmail.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="checkbox-container">
          <input type="checkbox" {...register("rememberMe")} />
          <label>Remember Me</label>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
