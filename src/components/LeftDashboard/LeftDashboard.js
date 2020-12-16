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
  BarChartOutlined,
  MenuUnfoldOutlined,
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

  // move add question
  const moveAddQuestion = () => {
    history.push("/addQuestion");
  };

  // move survey list
  const moveSurveyList = () => {
    history.push("/surveyList");
  };

  // move category
  // const moveTextCategory = () => {
  //   history.push("/listTextQuestion");
  // };

  // const moveImgCategory = () => {
  //   history.push("/listImgQuestion");
  // };

  // const moveSelectCategory = () => {
  //   history.push("/listSelectQuestion");
  // };

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
          {/* Dashboard */}
          <Menu.Item key="sub1" onClick={moveHome} icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>

          {/* Create Survey */}
          <Menu.Item
            key="2"
            onClick={moveCreSurvey}
            icon={<BarChartOutlined />}
          >
            Create Survey
          </Menu.Item>

          {/* Function */}
          <Menu.Item
            key="3"
            icon={<MenuUnfoldOutlined />}
            onClick={moveAddQuestion}
          >
            Question
          </Menu.Item>

          {/* Survey List */}
          <Menu.Item key="4" onClick={moveSurveyList} icon={<FormOutlined />}>
            Survey List
          </Menu.Item>

          {/* Category */}
          {/* <SubMenu key="sub2" icon={<SwitcherOutlined />} title="Category">
            <Menu.Item key="5" onClick={moveTextCategory}>
              Text Question
            </Menu.Item>
            <Menu.Item key="6" onClick={moveImgCategory}>
              Image Question
            </Menu.Item>
            <Menu.Item key="7" onClick={moveSelectCategory}>
              Selected Question
            </Menu.Item>
          </SubMenu> */}

          {/* Admin */}
          <SubMenu key="sub3" icon={<UserOutlined />} title="Admin">
            <Menu.Item key="8" onClick={moveAddAdmin}>
              Add Admin
            </Menu.Item>
            <Menu.Item key="9" onClick={moveViewAdmin}>
              See Admin
            </Menu.Item>
          </SubMenu>

          {/* LogOut */}
          <Menu.Item key="10" icon={<LogoutOutlined />} onClick={handleLogout}>
            Log Out
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default LeftDashboard;
