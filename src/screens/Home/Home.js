import React from "react";
import "antd/dist/antd.css";
import "./Home.css";

import arrowRight from "../../assets/arrow-right.svg";
import arrowRightBlack from "../../assets/arrow-right-black.svg";
import LeftDashboard from "../../components/LeftDashboard/LeftDashboard";

function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          {/* left dashboard */}
          <LeftDashboard />

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
                    See detail <img src={arrowRight} alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_customers.html">
                  <div className="right__cardTitle">User</div>
                  <div className="right__cardNumber">12</div>
                  <div className="right__cardDesc">
                    See detail <img src={arrowRight} alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_p_category.html">
                  <div className="right__cardTitle">Category</div>
                  <div className="right__cardNumber">3</div>
                  <div className="right__cardDesc">
                    See detail <img src={arrowRight} alt="" />
                  </div>
                </a>
                <a className="right__card" href="view_orders.html">
                  <div className="right__cardTitle">Function</div>
                  <div className="right__cardNumber">3</div>
                  <div className="right__cardDesc">
                    See detail
                    <img src={arrowRight} alt="" />
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
                        <td data-label="User ID">ID242365</td>
                        <td data-label="Number of survey">1</td>
                        <td data-label="Status">Progress</td>
                      </tr>
                      <tr>
                        <td data-label="STT">2</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          midu@gmail.com
                        </td>
                        <td data-label="Number of participants">100</td>
                        <td data-label="User ID">ID474562</td>
                        <td data-label="Number of survey">2</td>
                        <td data-label="Status">Processing</td>
                      </tr>
                      <tr>
                        <td data-label="STT">3</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          miku@gmail.com
                        </td>
                        <td data-label="Number of participants">87</td>
                        <td data-label="User ID">ID363123</td>
                        <td data-label="Number of survey">5</td>
                        <td data-label="Status">Done</td>
                      </tr>
                      <tr>
                        <td data-label="STT">4</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          dangthimydung@gmail.com
                        </td>
                        <td data-label="Number of participants">2436</td>
                        <td data-label="User ID">ID823725</td>
                        <td data-label="Number of survey">12</td>
                        <td data-label="Status">New</td>
                      </tr>
                      <tr>
                        <td data-label="STT">5</td>
                        <td data-label="Email" style={{ textAlign: "left" }}>
                          hellosurvey@gmail.com
                        </td>
                        <td data-label="Number of participants">46</td>
                        <td data-label="User ID">ID234634</td>
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
