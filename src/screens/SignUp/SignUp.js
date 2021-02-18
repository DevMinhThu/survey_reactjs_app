import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";
import firebase from "../../constants/Firebase/FirebaseConfig";
import "./style.css";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/home",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function Register() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert("Register Success " + email);
        console.log("register success");
        history.push("/");
      })
      .catch(function (error) {
        if (error.code) console.log(error.code);
      });
  };

  const moveLogin = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="login-box">
        <div className="lb-header">
          <a href="/" onClick={moveLogin} className="active">
            LOGIN
          </a>
          <a href="/register" id="signup-box-link">
            SIGN UP
          </a>
        </div>

        {/* input */}
        <form className="email-signup">
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
            <button onClick={handleRegister}>Sign Up</button>
          </div>
          <div className="u-form-group">
            <a href="#" className="forgot-password">
              Already have an account?
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

export default Register;
