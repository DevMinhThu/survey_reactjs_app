import "antd/dist/antd.css";
import React, { useState } from "react";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";
import firebase from "../../constants/Firebase/FirebaseConfig";
import "../../constants/main.css";


function CreateSurvey() {
  const [nameSurvey, setNameSurvey] = useState("");

  var database = firebase.database();

  const addData = () => {
    database.ref("Survey").set({
      SurveyName: nameSurvey,
    });
    setNameSurvey("");
  };

  const handleChange = (event) => {
    setNameSurvey({ nameSurvey: event.target.nameSurvey });
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
              <div className="right__title">SURVEY DASHBOARD</div>
              <p className="right__desc">New Survey</p>
              <div className="right__formWrapper">
                <form action="" enctype="multipart/form-data">
                  <div className="right__inputWrapper">
                    <label for="title">Survey Name</label>
                    <input
                      type="text"
                      placeholder="Survey Name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="title">Custom URL</label>
                    <input type="text" placeholder="URL Survey" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="category">Category</label>
                    <select name="">
                      <option disabled selected>
                        Text Question
                      </option>
                      <option value="">Image Question</option>
                      <option value="">Selected Question</option>
                    </select>
                  </div>
                  <div className="right__inputWrapper">
                    <label for="image">Image</label>
                    <input type="file" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="title">Key Word</label>
                    <input type="text" placeholder="Key Word" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="desc">Describe</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Describe ......"
                    ></textarea>
                  </div>
                  <button className="btn" type="submit" onClick={addData}>
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateSurvey;
