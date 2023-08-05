import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("https://passwordreset-gfgs.onrender.com/register", {
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
        alert(data.status);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-5 p-5 ">
        <h3 className="h3 text-center">Sign Up - Create Your Account</h3>
        <div className="m-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="m-3">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="m-3">
          Already registered <br />
          <Link to="/signIn">sign in?</Link>
        </p>
      </div>
    </form>
  );
};

export default RegistrationPage;
