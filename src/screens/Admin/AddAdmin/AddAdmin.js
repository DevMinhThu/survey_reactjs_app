import React from "react";
import "antd/dist/antd.css";
import "./AddAdmin.css";

import LeftDashboard from "../../../components/LeftDashboard/LeftDashboard";

function AddAdmin() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          {/* left dashboard */}
          <LeftDashboard />

          {/* right */}
          <div className="right_admin">
            <div className="right__content">
              <div className="right__title">SURVEY DASHBOARD</div>
              <p className="right__desc">Add admin</p>
              <div className="right__formWrapper">
                <form action="" method="post">
                  <div className="right__inputWrapper">
                    <label for="name">Name Admin</label>
                    <input type="text" placeholder="Tên admin" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="password">Password</label>
                    <input type="text" placeholder="Password" />
                  </div>
                  <div className="right__inputWrapper">
                    <label for="image">Image</label>
                    <input type="file" />
                  </div>
                  <button className="btn" type="submit">
                    Submit
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

export default AddAdmin;
