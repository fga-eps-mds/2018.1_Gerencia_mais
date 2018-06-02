import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom'
import { store } from './store'
import loggin from '../reducers/reducers'
import isLogged from '../actions/actions'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().status === true
      ? <Component {...props} />
    : <Redirect to='/LoginPage' />
  )} />
)
export default PrivateRoute;
