import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { BsPeopleCircle } from "react-icons/bs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import firebase from "../../constants/Firebase/FirebaseConfig";
import "./Login.css";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/home",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

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
          <a href="forgotPassword">Forgot password?</a>
          <button onClick={handleLogin}>Sign In</button>
          <p>Or Connect With</p>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <span className="copyright">&copy;Survey2020</span>
        </div>
      </div>
      {/* register */}
      <div className="register">
        <div className="container">
          <BsPeopleCircle size="10.5rem" />
          <h2>Hi! Survey</h2>
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
