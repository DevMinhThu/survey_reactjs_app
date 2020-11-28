import React from "react";
import "antd/dist/antd.css";
import "../../../constants/main.css";

import LeftDashboard from "../../../components/LeftDashboard/LeftDashboard";

function EditQuestion() {
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
              <p className="right__desc">Edit Question</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuestion;
