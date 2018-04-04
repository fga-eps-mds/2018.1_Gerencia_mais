import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ScheduleTable from "./pages/ScheduleTable";
import DoctorForm from "./pages/DoctorForm";
import DoctorStatus from "./pages/DoctorStatus";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/scheduletable" component={ScheduleTable} />
      <Route path='/form' component={DoctorForm}/>
      <Route path='/status' component={DoctorStatus}/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
