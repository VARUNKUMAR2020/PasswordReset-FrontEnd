import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    fetch("https://passwordreset-gfgs.onrender.com/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.status);
      });
  }

  return (
    <form className="m-3 p-3" onSubmit={handleSubmit}>
      <div className="m-5 p-5">
        <h3 className="text-center">Forgot Password</h3>
        <div className="m-3 p-3">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control pt-2 mt-2" 
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="m-4 p-2">
          <button type="submit" className="btn btn-primary">
            Send Reset Link
          </button>
        </div>
        <p className="m-3 ps-3">
          <Link to="/signIn" className="m-3" >SingIn</Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPassword;
