import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("login"); // login | signup | thankyou
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    setUsers([...users, form]); // save user
    setForm({ firstName: "", lastName: "", email: "", password: "" });
    setPage("login");
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      setPage("thankyou");
    } else {
      alert("User not found! Please sign up.");
    }
  };

  return (
    <div className="main">
      {page === "login" && (
        <div className="form-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>

          <p className="switch-link">
            Not have an account?{" "}
            <button
              className="link-btn"
              onClick={() => setPage("signup")}
            >
              Sign Up Here
            </button>
          </p>
        </div>
      )}

      {page === "signup" && (
        <div className="form-box">
          <h2>Sign Up</h2>
          <p>It's free and only takes a minute</p>
          <form onSubmit={handleSignup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>

          <p className="terms">
            By clicking the Sign Up button, you agree to our{" "}
            <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>

          <p className="switch-link">
            Already have an account?{" "}
            <button
              className="link-btn"
              onClick={() => setPage("login")}
            >
              Login here
            </button>
          </p>
        </div>
      )}

      {page === "thankyou" && (
        <div className="form-box">
          <h1>Thank you</h1>
        </div>
      )}
    </div>
  );
}
