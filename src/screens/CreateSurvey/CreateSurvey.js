import "antd/dist/antd.css";
import React from "react";
import Answers from "../../components/Answers";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import Question from "../../components/Question";
// import firebase from "../../constants/Firebase/FirebaseConfig";
import "./CreateStyles.css";
import CustomContent from "./EditorContent/CustomContent";
import CustomNameSurvey from "./EditorNameSurvey/CustomNameSurvey";
import CustomTitle from "./EditorTitle/CustomTitle";

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
                {/* survey example */}
                <CustomContent />
                <Answers />
                <Answers />
                {/* edit  */}
                <Question />
              </div>

              {/* button addQue */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <input
                  type="submit"
                  value="Thêm câu hỏi cho khảo sát"
                  className="button_Add"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSurvey;
