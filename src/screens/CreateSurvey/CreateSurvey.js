import "antd/dist/antd.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Answers from "../../components/Answers";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import Question from "../../components/Question";
// import firebase from "../../constants/Firebase/FirebaseConfig";
import "./CreateStyles.css";
import CustomContent from "./EditorContent/CustomContent";
import EditorNameSurvey from "./EditorNameSurvey";
import EditorTitle from "./EditorTitle";

function CreateSurvey() {
  let history = useHistory();
  const [edit, setEdit] = useState(false);

  const moveQuestion = () => {
    history.push("/addQuestion");
  };

  const renderFormQues = () => {
    return <Question />;
  };

  const renderCreateSurvey = () => {
    return <CreateSurvey />;
  };

  const showFormQues = () => {
    if (edit === false) {
      return renderCreateSurvey();
    } else {
      return renderFormQues();
    }
  };

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
                  {/* editor name survey */}
                  <EditorNameSurvey />
                </div>
              </div>
              {/* editor title */}
              <EditorTitle />
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
                  onClick={moveQuestion}
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
