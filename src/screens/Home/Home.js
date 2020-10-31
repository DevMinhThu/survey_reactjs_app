import React from "react";
import { useHistory } from "react-router-dom";
import { Select } from "antd";
import "antd/dist/antd.css";
import "./Home.css";

import Profile from "../../assets/profile.jpg";
import iconDashboard from "../../assets/icon-dashboard.svg";
import arrowDown from "../../assets/arrow-down.svg";
import iconEdit from "../../assets/icon-edit.svg";
import iconBook from "../../assets/icon-book.svg";
import iconUser from "../../assets/icon-user.svg";
import iconLogout from "../../assets/icon-logout.svg";
import arrowRightBlack from "../../assets/arrow-right-black.svg";

const { Option } = Select;

function Home() {
  let history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          {/* left dashboard */}
          <div className="left">
            <div className="left__content">
              <div className="left__logo">SURVEY</div>
              <div className="left__profile">
                <div className="left__image">
                  <img src={Profile} alt="" />
                </div>
                <p className="left__name">Hello World</p>
              </div>

              {/* menu */}
              <ul className="left__menu">
                {/* dashboard */}
                <li className="left__menuItem">
                  <a href="index.html" className="left__title">
                    <img src={iconDashboard} alt="" />
                    Dashboard
                  </a>
                </li>
                {/* function */}
                <li
                  efaultValue="Thêm bài viết"
                  style={{ border: '0' }}
                  className="left__menuItem"
                >
                  <div className="left__title">
                    <img src={iconEdit} alt="" />
                    Function
                    <img className="left__iconDown" src={arrowDown} alt="" />
                  </div>
                  <div className="left__text">
                    <a className="left__link" href="insert_p_category.html">
                      Thêm bài viết
                    </a>
                    <a className="left__link" href="view_p_category.html">
                      Sửa bài viết
                    </a>
                    <a className="left__link" href="view_p_category.html">
                      Xóa bài viết
                    </a>
                  </div>
                </li>
                {/* category */}
                <li className="left__menuItem">
                  <div className="left__title">
                    <img src={iconBook} alt="" />
                    Category
                    <img className="left__iconDown" src={arrowDown} alt="" />
                  </div>
                  <div className="left__text">
                    <a className="left__link" href="insert_category.html">
                      Add Category
                    </a>
                    <a className="left__link" href="view_category.html">
                      See Category
                    </a>
                  </div>
                </li>
                {/* admin */}
                <li className="left__menuItem">
                  <div className="left__title">
                    <img src={iconUser} alt="" />
                    Admin
                    <img className="left__iconDown" src={arrowDown} alt="" />
                  </div>
                  <div className="left__text">
                    <a className="left__link" href="insert_admin.html">
                      Add Admin
                    </a>
                    <a className="left__link" href="view_admins.html">
                      See Admins
                    </a>
                  </div>
                </li>
                {/* log out */}
                <li className="left__menuItem">
                  <a href="" className="left__title" onClick={handleLogout}>
                    <img src={iconLogout} alt="" />
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* right dashboard */}
          <div className="right">
            <div className="right__content">
              <div className="right__title">Survey Dashboard</div>
              <p className="right__desc">DASHBOARD</p>
              <div className="right__cards">
                <a className="right__card" href="view_product.html">
                  <div className="right__cardTitle">Survey</div>
                  <div className="right__cardNumber">72</div>
                  <div className="right__cardDesc">
                    See detail <img src="assets/arrow-right.svg" alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_customers.html">
                  <div className="right__cardTitle">User</div>
                  <div className="right__cardNumber">12</div>
                  <div className="right__cardDesc">
                    See detail <img src="assets/arrow-right.svg" alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_p_category.html">
                  <div className="right__cardTitle">Category</div>
                  <div className="right__cardNumber">4</div>
                  <div className="right__cardDesc">
                    See detail <img src="assets/arrow-right.svg" alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_orders.html">
                  <div className="right__cardTitle">Function</div>
                  <div className="right__cardNumber">3</div>
                  <div className="right__cardDesc">
                    See detail
                    <img src="assets/arrow-right.svg" alt="" />
                  </div>
                </a>
              </div>
              <div className="right__table">
                <p className="right__tableTitle">List Of Statistics</p>
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th style={{ textAlign: "left" }}>Email</th>
                        <th>Number of participants</th>
                        <th>User ID</th>
                        <th>Number of survey</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          chibaosinger@gmail.com
                        </td>
                        <td data-label="Number of participants">666</td>
                        <td data-label="User ID">UID242365</td>
                        <td data-label="Number of survey">1</td>
                        <td data-label="Status">Progress</td>
                      </tr>
                      <tr>
                        <td data-label="STT">2</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          midu@gmail.com
                        </td>
                        <td data-label="Number of participants">100</td>
                        <td data-label="User ID">UID474562</td>
                        <td data-label="Number of survey">2</td>
                        <td data-label="Status">Processing</td>
                      </tr>
                      <tr>
                        <td data-label="STT">3</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          miku@gmail.com
                        </td>
                        <td data-label="Number of participants">87</td>
                        <td data-label="User ID">UID363123</td>
                        <td data-label="Number of survey">5</td>
                        <td data-label="Status">Done</td>
                      </tr>
                      <tr>
                        <td data-label="STT">4</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          dangthimydung@gmail.com
                        </td>
                        <td data-label="Number of participants">2436</td>
                        <td data-label="User ID">UID823725</td>
                        <td data-label="Number of survey">12</td>
                        <td data-label="Status">New</td>
                      </tr>
                      <tr>
                        <td data-label="STT">5</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          hellosurvey@gmail.com
                        </td>
                        <td data-label="Number of participants">46</td>
                        <td data-label="User ID">UID234634</td>
                        <td data-label="Number of survey">12</td>
                        <td data-label="Status">New</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="" className="right__tableMore">
                  <p>See all surveys</p>
                  <img src={arrowRightBlack} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
