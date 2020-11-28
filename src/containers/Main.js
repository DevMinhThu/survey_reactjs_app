import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import Home from "../screens/Home/Home";
import AddAdmin from "../screens/Admin/AddAdmin/AddAdmin";
import ViewAdmin from "../screens/Admin/ViewAdmin/ViewAdmin";
import CreateSurvey from "../screens/CreateSurvey/CreateSurvey";
import SurveyList from "../screens/SurveyList/SurveyList";
import AddQuestion from "../screens/Actions/AddQuestion/AddQuestion";
import EditQuestion from "../screens/Actions/EditQuestion/EditQuestion";
import DeleteQuestion from "../screens/Actions/DeleteQuestion/DeleteQuestion";
import ListTextQuestion from "../screens/Category/ListTextQuestion";
import ListImgQuestion from "../screens/Category/ListImgQuestion";
import ListSelectQuestion from "../screens/Category/ListSelectQuestion";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/addAdmin" component={AddAdmin} />
            <Route path="/viewAdmin" component={ViewAdmin} />
            <Route path="/createSurvey" component={CreateSurvey} />
            <Route path="/surveyList" component={SurveyList} />
            <Route path="/addQuestion" component={AddQuestion} />
            <Route path="/editQuestion" component={EditQuestion} />
            <Route path="/deleteQuestion" component={DeleteQuestion} />
            <Route path="/listTextQuestion" component={ListTextQuestion} />
            <Route path="/listImgQuestion" component={ListImgQuestion} />
            <Route path="/listSelectQuestion" component={ListSelectQuestion} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
