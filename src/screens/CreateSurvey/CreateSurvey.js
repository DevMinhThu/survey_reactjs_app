import "antd/dist/antd.css";
import React from "react";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
// import firebase from "../../constants/Firebase/FirebaseConfig";
// import "../../constants/main.css";
import "./CreateStyles.css";
import CustomNameSurvey from "./EditorNameSurvey/CustomNameSurvey";
import CustomTitle from "./EditorTitle/CustomTitle";
import CustomContent from "./EditorContent/CustomContent";
import Question from "../../components/Question";

function CreateSurvey() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          {/* left dashboard */}
          <LeftDashboard />

          {/* right */}
          <div className="right">
            <div className="right__content">
              <div className="right__title">
                <div className="right__formWrapper">
                  <CustomNameSurvey />
                </div>
              </div>
              <CustomTitle />
              <div className="formWrapper__QuesAndAns">
                <CustomContent />
                <Question />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSurvey;
