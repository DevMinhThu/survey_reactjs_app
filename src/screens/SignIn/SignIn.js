import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import firebase from "../../constants/Firebase/FirebaseConfig";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/home",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
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
        alert("Login Successfully!");
        console.log("ssss");
        history.push("/home");
        setEmail("");
        setPassword("");
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
    <div>
      <div className="login-box">
        <div className="lb-header">
          <a href="/" id="login-box-link">
            LOGIN
          </a>
          <a href="/register" id="signup-box-link" onClick={handleRegister}>
            SIGN UP
          </a>
        </div>

        {/* input */}
        <form className="email-login">
          <div className="u-form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="u-form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="u-form-group">
            <button onClick={handleLogin}>Log in</button>
          </div>
          <div className="u-form-group">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
