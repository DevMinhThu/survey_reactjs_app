import React from "react";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import "../../constants/main.css";
import Question from "../../components/Question";

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
              <div className="right__title">SURVEY QUESTIONS</div>
              <p className="right__desc">Add Question</p>
              <div className="form__Questions">
                <Question />
                <div>
                  <input
                    type="submit"
                    value="Thêm câu hỏi"
                    className="handle_Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
