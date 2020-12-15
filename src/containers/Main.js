import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../screens/Home/Home";
import AddAdmin from "../screens/Admin/AddAdmin/AddAdmin";
import ViewAdmin from "../screens/Admin/ViewAdmin/ViewAdmin";
import CreateSurvey from "../screens/CreateSurvey/CreateSurvey";
import SurveyList from "../screens/SurveyList/SurveyList";
import AddQuestion from "../screens/AddQuestion/AddQuestion";
import ListTextQuestion from "../screens/Category/ListTextQuestion";
import ListImgQuestion from "../screens/Category/ListImgQuestion";
import ListSelectQuestion from "../screens/Category/ListSelectQuestion";
import SignIn from "../screens/SignIn/SignIn";
import SignUp from "../screens/SignUp/SignUp";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/home" component={Home} />
            <Route path="/addAdmin" component={AddAdmin} />
            <Route path="/viewAdmin" component={ViewAdmin} />
            <Route path="/createSurvey" component={CreateSurvey} />
            <Route path="/surveyList" component={SurveyList} />
            <Route path="/addQuestion" component={AddQuestion} />
            <Route path="/listTextQuestion" component={ListTextQuestion} />
            <Route path="/listImgQuestion" component={ListImgQuestion} />
            <Route path="/listSelectQuestion" component={ListSelectQuestion} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
