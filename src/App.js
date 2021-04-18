import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookForm from './components/Home/BookForm/BookForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/Dashboard/AddService/AddService';
import Review from './components/Dashboard/Review/Review';
import ManageService from './components/Dashboard/ManageService/ManageService';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          {/* <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route> */}
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/booking/:bookingId">
            <BookForm></BookForm>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
