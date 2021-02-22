import React, { useState } from "react";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import "../../constants/main.css";
import Question from "../../components/Question";
import MyData from "../../constants/Data/data.json";
import IconTrash from "../../assets/icon-trash-black.svg";
import { Button } from "antd";

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

  const handleDelete = (index) => {
    let itemsCopy = [...data];
    itemsCopy.splice(index, 1);
    setData(itemsCopy);
  };

  const renderTableData = () => {
    return data.map((props) => {
      const { index, question, type } = props;
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{question}</td>
          <td>{type}</td>
          <td
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{ borderRadius: 50 }}
              key={index}
              onClick={() => handleDelete(index)}
            >
              <img
                src={IconTrash}
                alt=""
                style={{
                  width: 26,
                  height: 26,
                  padding: 4,
                }}
              />
            </button>
          </td>
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
                  {/* <input
                    type="submit"
                    value="Thêm câu hỏi"
                    className="handle_Submit"
                  /> */}
                  <Button
                    style={{
                      color: "#fff",
                      background: "#6b71b7",
                      transition: "all 0.3s ease",
                      borderRadius: "10px",
                    }}
                  >
                    Thêm câu hỏi
                  </Button>
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
