import React from "react";
import "antd/dist/antd.css";
import "../../constants/main.css";

import User3 from "../../assets/User3.png";
import IconEdit from "../../assets/icon-edit.svg";
import IconTrash from "../../assets/icon-trash-black.svg";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";

function SurveyList() {
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
              <p className="right__desc">Survey List</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Survey Name</th>
                        <th>User</th>
                        <th>ID User</th>
                        <th>Created</th>
                        <th>Key Word</th>
                        <th>Time</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Survey Name">Education</td>
                        <td data-label="User">
                          <img src={User3} alt="" />
                        </td>
                        <td data-label="ID User">ID242365</td>
                        <td data-label="Created">1</td>
                        <td data-label="Key Word">Educational innovation</td>
                        <td data-label="Time">2020-07-13 21:31:05</td>
                        <td data-label="Edit" className="right__iconTable">
                          <a href="">
                            <img src={IconEdit} alt="" />
                          </a>
                        </td>
                        <td data-label="Delete" className="right__iconTable">
                          <a href="">
                            <img src={IconTrash} alt="" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="STT">2</td>
                        <td data-label="Survey Name">Medical</td>
                        <td data-label="User">
                          <img src={User2} alt="" />
                        </td>
                        <td data-label="ID User">ID474562 </td>
                        <td data-label="Created">5</td>
                        <td data-label="Key Word">
                          Medicine, Disease, Covid-19
                        </td>
                        <td data-label="Time">2020-07-13 22:19:01</td>
                        <td data-label="Edit" className="right__iconTable">
                          <a href="">
                            <img src={IconEdit} alt="" />
                          </a>
                        </td>
                        <td data-label="Delete" className="right__iconTable">
                          <a href="">
                            <img src={IconTrash} alt="" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="STT">3</td>
                        <td data-label="Survey Name">Economics and Politics</td>
                        <td data-label="User">
                          <img src={User1} alt="" />
                        </td>
                        <td data-label="ID User">ID363123</td>
                        <td data-label="Created">2</td>
                        <td data-label="Key Word">Congress voting</td>
                        <td data-label="Time">2020-07-13 21:30:41</td>
                        <td data-label="Edit" className="right__iconTable">
                          <a href="">
                            <img src={IconEdit} alt="" />
                          </a>
                        </td>
                        <td data-label="Delete" className="right__iconTable">
                          <a href="">
                            <img src={IconTrash} alt="" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyList;
