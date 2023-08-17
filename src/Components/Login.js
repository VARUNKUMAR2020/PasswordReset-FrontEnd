import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("https://passwordreset-gfgs.onrender.com/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "Logged in") {
          alert("Logged in Succefully");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/user";
        } else {
          alert("Please check the credentials");
        }
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-5 m-5">
          <h3 className="text-center ">Sign In - Login To Explore</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to="/password-reset">password?</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
