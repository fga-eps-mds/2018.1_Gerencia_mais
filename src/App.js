import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ScheduleTable from "./pages/ScheduleTable";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DoctorForm from "./pages/DoctorForm";
import DoctorStatus from "./pages/DoctorStatus";
import LoginPage from "./pages/LoginPage";
import UpdateSchedule from "./pages/UpdateSchedule";





class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/DoctorForm" component={DoctorForm} />
      <Route exact path="/DoctorStatus" component={DoctorStatus} />
      <Route exact path="/LoginPage" component={LoginPage} />
      <Route exact path="/ScheduleTable" component={ScheduleTable} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/UpdateSchedule" component={UpdateSchedule} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
