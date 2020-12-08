import React, { useEffect } from "react";
import firebase from "../src/constants/Firebase/FirebaseConfig";
import "./App.css";
import Main from "./containers/Main";

function App() {
  // Handle firebase auth change
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("User is not Logged in");
          return;
        }
        console.log("Logged in user: ", user.displayName);

        // Show token user logged
        const token = await user.getIdToken();
        console.log("Logged in token: ", token);
      });

    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
