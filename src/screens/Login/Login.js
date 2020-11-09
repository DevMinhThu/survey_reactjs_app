import React, { useState, useEffect } from "react";
import "./Login.css";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { BsPeopleCircle } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import firebase from "../../constants/Firebase/FirebaseConfig";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle login
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
        alert("Login Successfully!");
      })
      .catch((err) => {
        if (err.code) console.log(err.code);
        alert("Check your account and password again!");
      });
  };

  // handle register
  const handleRegister = () => {
    history.push("/register");
  };

  return (
    <div className="container">
      <div className="login">
        <div className="container">
          <h1>Log in</h1>
          <input
            type="email"
            autoFocus
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoFocus
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="checkbox"></input>
          <span>Remember me</span>
          <a href="#">Forgot password?</a>
          <button onClick={handleLogin}>Sign In</button>
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
      {/* register */}
      <div className="register">
        <div className="container">
          <BsPeopleCircle size="10.5rem" />
          <h2>Hello world!</h2>
          <p>Welcome to the Survey Website</p>
          <button onClick={handleRegister}>
            Register <FaArrowAltCircleRight size="1rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
