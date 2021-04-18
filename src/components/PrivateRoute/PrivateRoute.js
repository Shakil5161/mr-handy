import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  console.log(loggedInUser)
  const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if(!token){
        return false;
      }
    }
    return (
      <Route
      {...rest}
      render={({ location }) =>
      (loggedInUser.email || isLoggedIn())? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;