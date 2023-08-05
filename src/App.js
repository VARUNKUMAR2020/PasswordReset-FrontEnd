import React from "react";
import RegistrationPage from "./Components/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import User from "./Components/User";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RegistrationPage} />
        <Route path="/signIn" Component={Login} />
        <Route path="/user" Component={User} />
        <Route path="/password-reset" Component={ForgotPassword}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
