import React, { useState } from "react";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import "../../constants/main.css";
import Question from "../../components/Question";
import MyData from "../../constants/Data/data.json";

function AddQuestion() {
  const [statusQue, setStatusQue] = useState(false);
  const [data, setData] = useState(MyData);

  const handleButton = () => {
    setStatusQue(!statusQue);
  };

  const showQuestion = () => {
    if (statusQue) {
      return <Question />;
    }
  };

  const renderTableData = () => {
    return data.map((props) => {
      const { id, question, type } = props;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{question}</td>
          <td>{type}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    const header = Object.keys(data[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
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
              <div className="right__title">SURVEY QUESTIONS</div>
              <p className="right__desc">Add Question</p>
              <div className="form__Questions">
                <div className="containerButton">
                  <input
                    className="styleButtonAdd"
                    onClick={handleButton}
                    value="+"
                    type="submit"
                  />
                </div>
                {/* <Question /> */}
                {showQuestion()}
                <div>
                  <input
                    type="submit"
                    value="Thêm câu hỏi"
                    className="handle_Submit"
                  />
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <table>
                  <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
