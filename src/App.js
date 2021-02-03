import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/start/Login";
import SignUp from "./components/start/SignUp";
import Home from './components/Home';
import "./App.scss";
import "./scss/main.scss";

// import { Link as LinkScroll } from "react-scroll";


function App() {
  return (
    <Router>
      <div>
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
              {/* <LinkScroll to="purpose"
                spy={true}
                smooth={true}
                duration={500}
              >
                O co chodzi?</LinkScroll> */}
              <a href="/#purpose" className="navbar-list__link link-nav2">O co chodzi?</a>
            </li>
            <li className="navbar-list__item nav3">
              {/* <LinkScroll to="onas"
                className="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                O nas</LinkScroll> */}
              <a href="/#onas" className="navbar-list__link">O nas</a>
            </li>
            <li className="navbar-list__item nav4">
              {/* <LinkScroll to="ngos"
                spy={true}
                smooth={true}
                duration={500}
              >
                Fundacja i organizacje</LinkScroll> */}
              <a href="/#ngos" className="navbar-list__link">Fundacja i organizacje</a>
            </li>
            <li className="navbar-list__item nav5">
              {/* <LinkScroll to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Kontakt</LinkScroll> */}
              <a href="/#contact" className="navbar-list__link">Kontakt</a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
