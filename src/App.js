import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ScheduleTable from "./pages/ScheduleTable";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/scheduletable" component={ScheduleTable} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
