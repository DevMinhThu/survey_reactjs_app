import React, { useState } from "react";
import "./Login.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { BsPeopleCircle } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login">
        <div className="container">
          <h1>Log in</h1>
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
            Log In
          </button>
          <hr />
          <p>Or Connect With</p>
          <hr />
          <ul>
            <li>
              <FaFacebookF color="black" size="2rem" />
            </li>
            <li>
              <FaTwitter color="black" size="2rem" />
            </li>
            <li>
              <FaGithub color="black" size="2rem" />
            </li>
          </ul>
          <span className="copyright">&copy;2020</span>
        </div>
      </div>
      <div className="register">
        <div className="container">
          <BsPeopleCircle size="10.5rem" />
          <h2>Hello world!</h2>
          <p>Welcome to the Survey Website</p>
          <button
            onClick={() => {
              history.push("/register");
            }}
          >
            Register <FaArrowAltCircleRight size="1rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
