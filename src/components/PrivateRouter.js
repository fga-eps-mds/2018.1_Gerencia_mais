import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import { store } from './store'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().status !== "false"
      ? <Component {...props} />
    : <Redirect to='/LoginPage' />
  )} />
)
export default PrivateRoute;
