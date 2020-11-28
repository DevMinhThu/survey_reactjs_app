import React from "react";
import LeftDashboard from "../../../components/LeftDashboard/LeftDashboard";
import "../../../constants/main.css";
import SurveyCreator from "../../../components/CreatorSurvey/SurveyCreator";

function AddQuestion() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          {/* left dashboard */}
          <LeftDashboard />

          {/* right */}
          <div className="right">
            <div className="right__content">
              <div className="right__title">SURVEY DASHBOARD</div>
            </div>
            <div>
              <SurveyCreator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
