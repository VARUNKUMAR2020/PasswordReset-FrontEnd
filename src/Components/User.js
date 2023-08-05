import React, { useState } from "react";

const User = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://passwordreset-gfgs.onrender.com/user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.data.email);
      });
  }

  function handleLogout() {
    window.localStorage.clear();
    window.location.href = "/signIn";
  }

  return (
    <div className="m-5 p-5">
      <button className="btn btn-success m-5" onClick={handleSubmit}>
        Get Data
      </button>
      <h4 className="text-center ">
        Welcome User <b className="h2 "> {email}</b>
      </h4>
      <button className="btn btn-danger m-5" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default User;
