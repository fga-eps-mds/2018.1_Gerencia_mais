import React from 'react'
import {
  BrowserRouter as Route,
  Redirect,
} from 'react-router-dom'
import { store } from './store'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().status === true
      ? <Component {...props} />
    : <Redirect to='/LoginPage' />
  )} />
)
export default PrivateRoute;
