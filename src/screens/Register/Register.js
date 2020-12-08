import React, { useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useHistory } from "react-router-dom";
import firebase from "../../constants/Firebase/FirebaseConfig";
import "./Register.css";

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
        history.push("/");
      })
      .catch(function (error) {
        if (error.code) console.log(error.code);
      });
  };

  return (
    <div className="containerRegister">
      <div className="registerForm">
        <div className="container">
          <h1>Sign Up</h1>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="checkbox"></input>
          <span>Remember me</span>
          <a href="forgotPassword">Forgot password?</a>
          <button onClick={handleRegister}>Register</button>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <span className="copyright">&copy;Survey2020</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
