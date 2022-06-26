import React, { useState, useContext } from "react";
import "./loginForm.css";
import { successContext } from "./App";

function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [usernameStatus, setUsernameStatus] = useState("");
  const [context] = useContext(successContext);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const id = e.target.id;
    setUser({ ...user, [name]: value });
    if (id === "password" && value.length < 6) {
      setError("(must be atleast 6 characters long)");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length >= 6 && user.username) {
      context(user);
      setUser({ username: "", password: "" });
    } else if (user.password.length < 6) {
      setError("(must be atleast 6 characters long)");
    } else if (!user.username) {
      setUsernameStatus("Invalid username");
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign-up Here</h3>

        <label htmlFor="username">
          Username <span className="username-status">{usernameStatus}</span>{" "}
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <label htmlFor="password">
          Password <span className="error-message">{error}</span>
        </label>
        <input
          type="password"
          placeholder="Password"
          check="pword"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button className="signup-btn">Sign Up</button>
      </form>
    </>
  );
}

export default LoginForm;
