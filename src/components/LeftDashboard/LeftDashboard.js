import React from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "../../constants/main.css";

import Profile from "../../assets/profile.jpg";
import firebase from "../../constants/Firebase/FirebaseConfig";

import {
  UserOutlined,
  DashboardOutlined,
  LogoutOutlined,
  FormOutlined,
  SwitcherOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

function LeftDashboard() {
  let history = useHistory();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("LogOut Success!");
        history.push("/");
      })
      .catch(function (error) {
        console.log("LogOut Fail!");
      });
  };

  // move add admin
  const moveAddAdmin = () => {
    history.push("/addAdmin");
  };

  // move home
  const moveHome = () => {
    history.push("/home");
  };

  // move view admin
  const moveViewAdmin = () => {
    history.push("/viewAdmin");
  };

  // move cre survey
  const moveCreSurvey = () => {
    history.push("/createSurvey");
  };

  // move survey list
  const moveSurveyList = () => {
    history.push("/surveyList");
  };

  return (
    <div className="left">
      <div className="left__content">
        <div className="left__logo">SURVEY</div>
        <div className="left__profile">
          <div className="left__image">
            <img src={Profile} alt="" />
          </div>
          <p className="left__name">Hello World</p>
        </div>

        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          style={{ border: 0 }}
        >
          <Menu.Item key="sub1" onClick={moveHome} icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={moveCreSurvey}
            icon={<BarChartOutlined />}
          >
            Create Survey
          </Menu.Item>

          <Menu.Item key="3" onClick={moveSurveyList} icon={<FormOutlined />}>
            Survey List
          </Menu.Item>

          <SubMenu key="sub2" icon={<SwitcherOutlined />} title="Category">
            <Menu.Item key="4">Text Question</Menu.Item>
            <Menu.Item key="5">Image Question</Menu.Item>
            <Menu.Item key="6">Selected Question</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Admin">
            <Menu.Item key="7" onClick={moveAddAdmin}>
              Add Admin
            </Menu.Item>
            <Menu.Item key="8" onClick={moveViewAdmin}>
              See Admin
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<LogoutOutlined />} onClick={handleLogout}>
            Log Out
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default LeftDashboard;
