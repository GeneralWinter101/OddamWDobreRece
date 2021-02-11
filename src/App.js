import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/start/Login";
import SignUp from "./components/start/SignUp";
import Logout from "./components/start/Logout";
import Home from './components/Home';
import "./App.scss";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <div className="navbar-container">
        <div className="profile-setup">
          <Link to="/login" className="profile__login">Zaloguj się</Link>
          <Link to="/signup" className="profile__signup">Załóż konto</Link>
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-list__item nav1">
              <Link to="/" className="navbar-list__link">Start</Link>
            </li>
            <li className="navbar-list__item nav2">

              <a href="/#purpose" className="navbar-list__link link-nav2">O co chodzi?</a>
            </li>
            <li className="navbar-list__item nav3">

              <a href="/#onas" className="navbar-list__link">O nas</a>
            </li>
            <li className="navbar-list__item nav4">

              <a href="/#ngos" className="navbar-list__link">Fundacja i organizacje</a>
            </li>
            <li className="navbar-list__item nav5">

              <a href="/#contact" className="navbar-list__link">Kontakt</a>
            </li>
          </ul>
        </nav>

      </div>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
