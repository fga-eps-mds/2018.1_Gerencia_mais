import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import loggin from '../reducers/reducers'
import isLogged from '../actions/actions'
import { store } from './store'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().status === true
      ? <Component {...props} />
    : <Redirect to='/LoginPage' />
  )} />
)
export default PrivateRoute;
