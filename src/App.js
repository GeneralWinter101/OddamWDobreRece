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
import HomeHeader from "./components/start/HomeHeader";
import "./App.scss";
import "./scss/main.scss";
import HomeHeroImage from './assets/HomeHeroImage.jpg';



function App() {
  return (
    <Router>
      <div className="homepage-container">
        <img src={HomeHeroImage} alt="Fajne rzeczy do oddania" className="homepage-img" />
        <div className="homepage-rightside">
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
          <HomeHeader />

        </div>

      </div>
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
    </Router>
  );
}


export default App;
