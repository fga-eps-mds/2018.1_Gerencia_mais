import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ScheduleTable from "./pages/ScheduleTable";
import NotFound from "./pages/NotFound";
import DoctorForm from "./pages/DoctorForm";
import DoctorStatus from "./pages/DoctorStatus";
import ScheduleTable from "./pages/ScheduleTable";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/form" component={DoctorForm}/>
      <Route exact path="/status" component={DoctorStatus}/>
      <Route exact path="/calendar" component={ScheduleTable}/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
