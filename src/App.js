import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import './App.css';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from "./pages/Login";
import ProvideAuth, { useAuth } from "./Context/ProvideAuth";

export function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  let auth = useAuth();
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PublicRoute exact path="/">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

