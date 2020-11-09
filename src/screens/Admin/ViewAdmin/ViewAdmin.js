import React from "react";
import "antd/dist/antd.css";
import "./ViewAdmin.css";

import Profile from "../../../assets/profile.jpg";
import IconEdit from "../../../assets/icon-edit.svg";
import IconTrash from "../../../assets/icon-trash-black.svg";
import LeftDashboard from "../../../components/LeftDashboard/LeftDashboard";

function ViewAdmin() {
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
              <p className="right__desc">View admin</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Name">Hello Word</td>
                        <td data-label="Image" style={{ textAlign: "center" }}>
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "100%",
                              objectFit: "cover",
                            }}
                            src={Profile}
                          />
                        </td>
                        <td data-label="Email">helloguy@gmail.com</td>
                        <td data-label="Edit" className="right__iconTable">
                          <a href="#">
                            <img src={IconEdit} />
                          </a>
                        </td>
                        <td data-label="Delete" className="right__iconTable">
                          <a href="#">
                            <img src={IconTrash} />
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

export default ViewAdmin;
