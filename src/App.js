import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ScheduleTable from "./pages/ScheduleTable";
import NewScheduleTable from "./pages/NewScheduleTable";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DoctorForm from "./pages/DoctorForm";
import DoctorStatus from "./pages/DoctorStatus";
import UpdateSchedule from "./pages/UpdateSchedule";
import RegistrationAdmin from "./pages/RegistrationAdmin";
import PrivateRoute from "./components/PrivateRouter";
import { LoginPage } from "./pages/LoginPage";

import {store, persistor} from './components/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';



class App extends Component {
  render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute exact path="/DoctorForm" component={DoctorForm} />
          <PrivateRoute exact path="/DoctorStatus" component={DoctorStatus} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <PrivateRoute exact path="/ScheduleTable" component={ScheduleTable} />
          <Route exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/UpdateSchedule" component={UpdateSchedule} />
          <Route exact path="/RegistrationAdmin" component={RegistrationAdmin} />
          <PrivateRoute exact path="/NewScheduleTable" component={NewScheduleTable} />
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
  }
}

export default App;
