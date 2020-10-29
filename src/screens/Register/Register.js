import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="containerRegister">
      <div className="registerForm">
        <div className="container">
          <h1>Sign Up</h1>
          <input
            type="email"
            placeholder="Email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="checkbox"></input>
          <span>Remember me</span>
          <a href="#">Forgot password?</a>
          <button
            onClick={() => {
              if (user == "Thu" && password == "123") {
                history.push("/home");
              } else {
                alert("Wrong password or account!");
              }
            }}
          >
            Register
          </button>
          <span className="copyright">&copy;2020</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
